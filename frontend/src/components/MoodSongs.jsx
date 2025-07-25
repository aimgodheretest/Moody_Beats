import React, { useState } from "react";
import "./MoodSongs.css";

const MoodSongs = () => {
  const [Songs, setSongs] = useState([
    {
      title: "Happy Song",
      artist: "Artist 1",
      url: "https://example.com/happy-song.mp3",
    },
    {
      title: "Sad Song",
      artist: "Artist 2",
      url: "https://example.com/sad-song.mp3",
    },
    {
      title: "Angry Song",
      artist: "Artist 3",
      url: "https://example.com/angry-song.mp3",
    },
    {
      title: "Relaxing Song",
      artist: "Artist 4",
      url: "https://example.com/relaxing-song.mp3",
    },
  ]);
  return (
    <div className="mood-songs">
      <h2>Recommended Songs</h2>
      {Songs.map((song, index) => (
        <div className="song" key={index}>
          <div className="title">
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>
          <div className="play-pause-btn">
            <i className="ri-pause-line"></i>
            <i className="ri-play-circle-fill"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodSongs;
