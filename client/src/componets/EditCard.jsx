import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';

function ScoreBoardEdit(props) {
  return (
    <Card style={{ width: "18rem" }}>

      
      <ListGroup variant="flush">
        <ListGroup.Item> Name:{props.cardData.name}</ListGroup.Item>
        <ListGroup.Item>Age:{props.cardData.age}</ListGroup.Item>
        <ListGroup.Item>Score:{props.cardData.score}</ListGroup.Item>
        <Button id={props.cardData.id} variant="dark">Edit User</Button>
      </ListGroup>
    </Card>
  );
}

export default ScoreBoardEdit;
