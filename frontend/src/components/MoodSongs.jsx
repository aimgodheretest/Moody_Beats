import "./MoodSongs.css";

const MoodSongs = ({ Songs }) => {
  return (
    <div className="mood-songs">
      <h2>Recommended Songs</h2>
      {Songs.map((song, index) => (
        <div className="song" key={index}>
          <div className="title">
            <h3>{`Title:${song.title}`}</h3>
            <p>{`Artist:${song.artist}`}</p>
            <p>{`Mood:${song.mood}`}</p>
          </div>
          <div className="play-pause-btn">
            <audio src={song.audio} controls></audio>
            {/* <i style={{display:"none"}} className="ri-pause-line"></i>
            <i className="ri-play-circle-fill"></i> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodSongs;
