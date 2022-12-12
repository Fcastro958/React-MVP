import React from "react";
import { useContext } from "react";
import { appContext } from "../App";
import ScoreBoard from "./Card";


const Cards = () => {
  const { scoreBoardData, setScoreBoardData } = useContext(appContext);

  return (
    <div>
      {scoreBoardData.map((cardData, i) => {
        {
          console.log(cardData);
        }
        return <ScoreBoard key={i} cardData={cardData} />;
      })}
    </div>
  );
};

export default Cards;
