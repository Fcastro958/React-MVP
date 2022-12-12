import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ScoreBoard(props) {
  return (
    <Card style={{ width: "18rem" }}>

      
      <ListGroup variant="flush">
        <ListGroup.Item> Name:{props.cardData.name}</ListGroup.Item>
        <ListGroup.Item>Age:{props.cardData.age}</ListGroup.Item>
        <ListGroup.Item>Score:{props.cardData.score}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ScoreBoard;
