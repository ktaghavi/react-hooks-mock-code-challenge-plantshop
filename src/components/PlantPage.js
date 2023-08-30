import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, addNewPlant, handleSearch}) {

  return (
    <main>
      <div>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search handleSearch={handleSearch}/>
      {plants.map((plant) => <PlantList key={plant.id} plant={plant}/>)}
      </div>
    </main>
  );
}

export default PlantPage;
