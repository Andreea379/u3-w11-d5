import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import { Col, Container, Row } from "react-bootstrap";
import PlayerBar from "./components/PlayerBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xs={2} className="d-none d-lg-block">
            <SideBar />
          </Col>
          <Col xs={12} lg={9} id="mainPage" className="offset-lg-3">
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/search/:search" element={<Search />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <Container fluid className="fixed-bottom bg-container pt-1">
        <PlayerBar />
      </Container>
    </BrowserRouter>
  );
}

export default App;
