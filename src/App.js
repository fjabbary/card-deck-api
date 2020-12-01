import './App.css';
import React, { Component } from 'react';
import './App.css'
import axios from 'axios'
import Card from './components/Card';

class App extends Component {

  state = {
    data: '',
    allCards: [],
    remaining: 52
  }

  async componentDidMount() {
    const response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/')
    this.setState({
      data: response.data
    })
  }

  showCard = async () => {
    const { deck_id } = this.state.data;
    const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/`)
    this.setState({
      allCards: [...this.state.allCards, ...res.data.cards],
      remaining: this.state.remaining - 1
    })
  }

  render() {

    const cardsJSX = this.state.allCards.map((card, index) => <Card key={index} card={card} data={this.state.data} />)

    return (
      <div className="app">
        <div className="container">
          <h1>REACT API Exercise</h1>
          {!this.state.remaining ? <p>No more card</p> : null}
          <button onClick={this.showCard} disabled={!this.state.remaining}>Get Card</button>

          {cardsJSX}
        </div>
      </div>
    );
  }
}

export default App;


