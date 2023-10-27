function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to WildlifeEco Quiz</h2>
      <h4>
        {" "}
        <div className="startscreenh4">
          {" "}
          Test yourself with
          <form>
            <select
              id="numQuestions"
              className="numQuestions"
              value={numQuestions}
              onChange={(e) =>
                dispatch({
                  type: "changeNumQuestions",
                  payload: Number(e.target.value),
                })
              }
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={50}>50</option>
              <option value={120}>120</option>
            </select>
          </form>
          {/* {numQuestions} */}
          questions from the Wildlife Ecology assignments
        </div>
      </h4>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
