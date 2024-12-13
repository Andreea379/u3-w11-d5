import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AddSongAction } from "../redux/action";

function SongsSection(props) {
  const [songs, setSongs] = useState([]);
  const [mount, setMount] = useState(false);

  const dispatch = useDispatch();

  const fetchSongs = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          props.search
      );
      if (response.ok) {
        let { data } = await response.json();
        console.log(data);
        if (location === "/") {
          setSongs(data.slice(0, 4));
        } else {
          setSongs(data.slice(0, 24));
        }
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    if (!mount) {
      setMount(true);
      return;
    }
    fetchSongs();
  }, [props.search]);

  return (
    <Row>
      <Col xs={12} lg={10}>
        <h2>{props.title}</h2>
        <Row xs={1} sm={2} lg={4} xl={4} className="py-3 imgLinks">
          {songs.map((song) => {
            return (
              <Col
                key={song.id}
                className="text-center"
                onClick={() => dispatch(AddSongAction(song))}
              >
                <img
                  src={song.album.cover_medium}
                  alt="track"
                  className="img-fluid"
                />
                <p className="mb-0">Track: {song.title}</p>
                <p>Artist: {song.artist.name}</p>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
}
export default SongsSection;
