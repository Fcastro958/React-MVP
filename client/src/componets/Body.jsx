import { useContext } from "react";
import { appContext } from "../App";
import Cards from "./Cards";
import CardsQ from "./CardsQ";
import FormData from "./PostData";
import ECards from "./EditCards";

function Body() {
  const {
    DiplayScoreBoard,
    DiplayQuiz,
    DisplayCreateScoreBoard,
    DisplayEditScoreBoard,
  } = useContext(appContext);

  if (DiplayScoreBoard === true) {
    return <Cards />;
  }
  if (DiplayQuiz === true) {
    return <CardsQ />;
  }
  if (DisplayCreateScoreBoard === true) {
    return <FormData />;
  }
  if (DisplayEditScoreBoard === true) {
    return <ECards />;
  } else {
    return <div></div>;
  }
}

export default Body;
