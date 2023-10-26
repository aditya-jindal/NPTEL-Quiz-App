function ResultScreen({ score, totalPoints, highScore, dispatch }) {
  return (
    <div>
      <div className="result">
        You scored {score} out of {totalPoints} (
        {Math.round((score / totalPoints) * 100)}%)
      </div>
      <div className="highscore">
        HighScore: {highScore}
      </div>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="btn btn-ui"
      >
        Reset
      </button>
    </div>
  );
}

export default ResultScreen;
