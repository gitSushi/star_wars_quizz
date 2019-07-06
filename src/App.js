import React, { Component } from 'react';

import './App.css';
import './styles.css';

import QandA from './components/QandA'

class App extends Component {
  state = {
    question: QandA[0].question,
    answers: QandA[0].answer,
    idx: 1
  };
  nextQuestion = () => {
    let { idx } = this.state;
    this.setState({
      idx: idx + 1,
      question: QandA[idx].question,
      answers: QandA[idx].answer
    });
  };
  render() {
    let { question, answers } = this.state;
    return (
      <div style={{ backgroundColor: "#000" }}>
        <header className="App">
          <img alt="star wars" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" />
          <h1>the quizz</h1>
        </header>
        <main className="container pt-5">
          <h2 className="text-center text-danger p-3">{question}</h2>
          <ul className="row mt-5">
            {
              answers.map((answer) => {
                return (
                  <li className="answers col-md" key={answer}>
                    <button type="button" className="btn btn-primary" onClick={this.nextQuestion}>{answer}</button>
                  </li>
                );
              })
            }
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
