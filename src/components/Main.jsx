import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import SongsSection from "./SongsSection";

function Main() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (!mount) {
      setMount(true);
      return;
    }
  }, []);

  return (
    <>
      <Row>
        <Col xs={9} lg={11} id="mainLinks" className=" d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
      <Row>
        <SongsSection title="Rock Classics" search="queen" />
        <SongsSection title="Pop Classics" search="katyperry" />
        <SongsSection title="HipHop Classics" search="eminem" />
      </Row>
    </>
  );
}
export default Main;
