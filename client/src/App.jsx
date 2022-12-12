import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./componets/header";
import NavbarOne from "./componets/navbar";
import Body from "./componets/Body";

function App() {
  const [scoreBoardData, setScoreBoardData] = useState([{}]);
  const [DiplayScoreBoard, setDisplayScoreBoard] = useState(false);
  const [QuizData, setQuizData] = useState([{}]);
  const [DiplayQuiz, setDisplayQuiz] = useState(false);

  const [DisplayCreateScoreBoard, setDisplayCreateScoreBoard]= useState(false)
  
  const [EditScoreBoard, setEditScoreBoard]= useState([{}]);
  const [DisplayEditScoreBoard, setDisplayEditScoreBoard]= useState(false)
  

  const contextData = {
    scoreBoardData,
    setScoreBoardData,
    DiplayScoreBoard,
    setDisplayScoreBoard,
    QuizData,
    setQuizData,
    DiplayQuiz,
    setDisplayQuiz,
    DisplayCreateScoreBoard, 
    setDisplayCreateScoreBoard,
    EditScoreBoard,
    setEditScoreBoard,
    DisplayEditScoreBoard,
    setDisplayEditScoreBoard
  };

  useEffect(() => {
    fetch("http://localhost:3000/scoreboard")
      .then((response) => response.json())
      .then((data) => {
        setScoreBoardData(data);
        setEditScoreBoard(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/quiz")
      .then((response) => response.json())
      .then((data) => {
        setQuizData(data);
        console.log(data);
      });
  }, []);

  

 

  return (
    <appContext.Provider value={{ ...contextData }}>
      <div>
        <Header />
        <NavbarOne />
        <Body />
      </div>
    </appContext.Provider>
  );
}
export const appContext = React.createContext();
export default App;
