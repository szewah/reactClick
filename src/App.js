import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'
import Jumbotron from './components/Jumbotron/Jumbotron'
import Wrapper from './components/Wrapper/Wrapper'
import Footer from './components/Footer/Footer'
import portraits from './images.json'
import Cards from './components/Cards/Cards'

class App extends Component {

  state = {
    images: portraits,
    score: 0,
    topScore: 0,
    message: "Click an image to begin"
  }

  gameFinished = () => {

    this.state.images.forEach(card => {
      card.count = 0;
    });

    //From Somat Thakali's code
    this.setState({
      topScore: this.state.score > this.state.topScore
      ? this.state.score
      : this.state.topScore, 
      score: 0,
      message: "Sorry, game over!"
    });
  }

  cardCount = id => {

    console.log("This is the id " + id);

    var images = this.state.images;

    images.find((image, index) => {
      if (image.id === id) {
        if (images[index].count === 0) {
          images[index].count = images[index].count + 1;
          this.setState({
            score : this.state.score + 1,
            message: "Keep going!"
          });
          images.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameFinished();
        }
      }
    });

  };


  render () {
    return (
      <div className="App">
        <Navbar score={this.state.score} topScore={this.state.topScore} message={this.state.message}/>
        <Jumbotron />
        <Wrapper>
        {this.state.images.map(cards => (
          <Cards key={cards.id} id={cards.id} image={cards.image} cardCount={this.cardCount}/>
        ))}
        </Wrapper> 
        
        <Footer />
      </div>
    )
  };
};

export default App;


