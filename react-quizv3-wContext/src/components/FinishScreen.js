import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
  const { maxPossiblePoints, points, highscore, dispatch } = useQuiz();
  const percetage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percetage === 100) emoji = "🥇"; // ctrl + cmd + space for emoji
  if (percetage >= 80 && percetage < 100) emoji = "🎉";
  if (percetage >= 50 && percetage < 80) emoji = "😊";
  if (percetage >= 0 && percetage < 50) emoji = "🤨";
  if (percetage === 0) emoji = "🤦🏻‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You have scored {points} out of {maxPossiblePoints}{" "}
        ({Math.ceil(percetage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
