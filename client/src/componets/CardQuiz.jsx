import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import card from "./CardsQ.css"

function Question(props) {
    return (
        <>
      <Card id='card' style={{ width: "25rem", height: "400px" }}>
  
        <ListGroup variant="flush">
          <ListGroup.Item> Question:{props.cardData.question}</ListGroup.Item>
          <ListGroup.Item>{props.cardData.correct_answer[0]}</ListGroup.Item>
          <ListGroup.Item>{props.cardData.incorrect_answer[0]}</ListGroup.Item>
          <ListGroup.Item>{props.cardData.incorrect_answer[1]}</ListGroup.Item>
          <ListGroup.Item>{props.cardData.incorrect_answer[2]}</ListGroup.Item>
        </ListGroup>
      </Card>
        </>

    );
  }
  
  export default Question;