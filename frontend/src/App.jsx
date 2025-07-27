import FacialExpression from "./components/FacialExpression";
import "./App.css";
import MoodSongs from "./components/MoodSongs";
import { useState } from "react";

function App() {
  const [Songs, setSongs] = useState([
    // {
    //   title: "Happy Song",
    //   artist: "Artist 1",
    //   url: "https://example.com/happy-song.mp3",
    // },
    // {
    //   title: "Sad Song",
    //   artist: "Artist 2",
    //   url: "https://example.com/sad-song.mp3",
    // },
    // {
    //   title: "Neutral Song",
    //   artist: "Artist 3",
    //   url: "https://example.com/angry-song.mp3",
    // },
    // {
    //   title: "Surprised Song",
    //   artist: "Artist 4",
    //   url: "https://example.com/relaxing-song.mp3",
    // },
  ]);
  return (
    <>
      <FacialExpression setSongs={setSongs} />
      <MoodSongs Songs={Songs} />
    </>
  );
}

export default App;
