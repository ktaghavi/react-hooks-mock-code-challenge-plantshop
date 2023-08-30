import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plantData, setPlantData] = useState([]);

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

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plantData} addNewPlant={addNewPlant}/>
    </div>
  );
}

export default App;
