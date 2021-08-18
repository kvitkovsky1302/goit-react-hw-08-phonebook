import React, { Component } from 'react';
import Statistics from './components/Statistics';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCount = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };
  countTotalFeedback(good, neutral, bad) {
    const total = good + neutral + bad;
    return total;
  }
  countPositiveFeedbackPercentage(good, neutral, bad) {
    const positivePercentage =
      (good / this.countTotalFeedback(good, neutral, bad)) * 100;

    return Math.round(positivePercentage);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback;
    const positivePercentage = this.countPositiveFeedbackPercentage.bind(this);

    return (
      <>
        <h1>Please leave Feedback</h1>
        <button name="good" type="button" onClick={this.handleCount}>
          Good
        </button>
        <button name="neutral" type="button" onClick={this.handleCount}>
          Neutral
        </button>
        <button name="bad" type="button" onClick={this.handleCount}>
          Bad
        </button>
        <h2>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </>
    );
  }
}

export default App;
