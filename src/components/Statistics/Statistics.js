// import styles from './Statistics.module.css';

function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <>
      <p key="id-1">Good: {good}</p>
      <p key="id-2">Neutral: {neutral}</p>
      <p key="id-3">Bad: {bad}</p>
      <p key="id-4">Total: {total(good, neutral, bad)}</p>
      <p key="id-5">
        Positive feedback: {good ? positivePercentage(good, neutral, bad) : 0}%
      </p>
    </>
  );
}

export default Statistics;
