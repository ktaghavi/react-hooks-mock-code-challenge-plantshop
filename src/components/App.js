import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plantData, setPlantData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then((data) => setPlantData(data));
  }, []);

  function addNewPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })

    fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then((data) => setPlantData(data));
    }

    function handleSearch(search) {
      setSearch(search);
    }

    const filteredPlants = plantData.filter((plant) => {
      return plant.name.toLowerCase().includes(search.toLowerCase());
    });

  return (
    <div className="app">
      <Header />
      <PlantPage plants={filteredPlants} addNewPlant={addNewPlant} handleSearch={handleSearch}/>
    </div>
  );
}

export default App;
