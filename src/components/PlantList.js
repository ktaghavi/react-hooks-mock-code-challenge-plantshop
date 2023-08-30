import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plant}) {
  return (
    <ul className="cards">
      <PlantCard plant={plant}/>
    </ul>
  );
}

export default PlantList;
