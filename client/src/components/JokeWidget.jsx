const JokeWidget = ({ joke }) => {
  return (
   <div className="widget joke-widget" style={{ gridArea: "joke" }}>
      <h3>Daily Joke</h3>
      <p>{joke}</p>
    </div>
  );
};

export default JokeWidget;