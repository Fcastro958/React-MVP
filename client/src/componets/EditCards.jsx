import React from "react";
import { useContext } from "react";
import { appContext } from "../App";
import ScoreBoardEdit from "./EditCard";

const ECards = () => {
  const { EditScoreBoard, setEditScoreBoard } = useContext(appContext);

  return (
    <div>
      {EditScoreBoard.map((cardData, i) => {
        {
          console.log(cardData);
        }
        return <ScoreBoardEdit key={i} cardData={cardData} />;
      })}
    </div>
  );
};

export default ECards;
