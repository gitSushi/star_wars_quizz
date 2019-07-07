import React, { Component } from 'react';

import './App.css';
import './styles.css';

import QandA from './components/QandA'

class App extends Component {
  state = {
    question: QandA[0].question,
    choices: QandA[0].choice,
    answer: QandA[0].answer,
    idx: 1,
    score: 0
  };
  nextQuestion = (e) => {
    let { idx, score, answer } = this.state;
    this.setState({
      idx: idx + 1,
      question: QandA[idx].question,
      choices: QandA[idx].choice,
      answer: QandA[idx].answer      
    });
    console.log("answer is " + answer + " / e.currentTarget is " + e.currentTarget.dataset.id);
    if(idx === 3){
      alert("quizz ended");
      //location.reload();
    }
    if(Number(e.currentTarget.dataset.id) === answer){
      this.setState({
        score: score + 1
      });
      console.log("score is " + score);
    }
  };
  render() {
    let { question, choices } = this.state;
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
              choices.map((choice, index) => {
                return (
                  <li className="choices col-md" key={choice}>
                    <button type="button" className="btn btn-primary" onClick={this.nextQuestion} data-id={index}>{choice}</button>
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
