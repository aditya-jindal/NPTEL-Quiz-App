function NextButton({userAnswer,dispatch,index,numQuestions}) {
  return (
    userAnswer && (
      <button className="btn btn-ui" onClick={() => dispatch({ type: "next" })}>
        {index === numQuestions - 1 ? "Finish" : "Next"}
      </button>
    )
  );
}

export default NextButton;
