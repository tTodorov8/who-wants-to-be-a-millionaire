function StartButton(props) {
  return (
    <div
      className={
        props.questions.length === 0 ? "start-button disable" : "start-button"
      }
      onClick={props.onStart}
    >
      <h2>Start Game</h2>
    </div>
  );
}

export default StartButton;
