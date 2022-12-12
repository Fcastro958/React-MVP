import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Gi3DGlasses } from "react-icons/all";
import { useContext } from "react";
import { appContext } from "../App";

function NavbarOne() {
  const { setDisplayScoreBoard, setDisplayQuiz, setDisplayCreateScoreBoard, setDisplayEditScoreBoard } =
    useContext(appContext);

  const handleClick = () => {
    setDisplayScoreBoard(true);
    setDisplayQuiz(false);
    setDisplayCreateScoreBoard(false);
    setDisplayEditScoreBoard(false)
  };

  const handleClickTwo = () => {
    setDisplayQuiz(true);
    setDisplayScoreBoard(false);
    setDisplayCreateScoreBoard(false);
    setDisplayEditScoreBoard(false)
  };

  const handleClickThree = () => {
    setDisplayCreateScoreBoard(true);
    setDisplayScoreBoard(false);
    setDisplayQuiz(false);
    setDisplayEditScoreBoard(false)
  };

  const handleClickFour = () => {
    setDisplayEditScoreBoard(true)
    setDisplayCreateScoreBoard(false);
    setDisplayScoreBoard(false);
    setDisplayQuiz(false);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Gi3DGlasses fill="white" stroke="white" />
        <Navbar.Brand href="#home">QUIZ-IT-UP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleClick}>Scoreboard</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={handleClickThree}>
                Add Credentials
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Delete Credentials
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleClickFour}>
                Update Credentias
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>How Many Questions?</Nav.Link>
            <Nav.Link onClick={handleClickTwo}>GET ALL QUESTIONS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarOne;
