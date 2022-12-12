import { useContext } from "react";
import { appContext } from "../App";
import Cards from "./Cards";
import CardsQ from "./CardsQ";
import FormData from "./PostData";

function Body() {
  const { DiplayScoreBoard, DiplayQuiz, DiplayCreateScoreBoard  } = useContext(appContext);



  if (DiplayScoreBoard === true) {
    return <Cards />;
  } 
  if  (DiplayQuiz === true) {
    return <CardsQ />;
  } 
   if  (DiplayCreateScoreBoard === true) {
    return <FormData />;
  }
  // else {
  //   return <div></div>;
  // }

}

export default Body;
