function Progress({ index, numQuestions, maxPossiblePoints, points, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        {points}/{maxPossiblePoints} points
      </p>
    </header>
  );
}

export default Progress;
