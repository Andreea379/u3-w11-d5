import { Col, Row } from "react-bootstrap";
import SongsSection from "./SongsSection";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Search() {
  const params = useParams().search;
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
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <a href="#a">TRENDING</a>
          <a href="#b">PODCAST</a>
          <a href="#c">MOODS AND GENRES</a>
          <a href="#d">NEW RELEASES</a>
          <a href="#e">DISCOVER</a>
        </Col>
      </Row>
      <Row>
        <SongsSection title={`Results for "${params}"`} search={params} />
        <div></div>
      </Row>
    </>
  );
}

export default Search;
