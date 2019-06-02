import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'
import Jumbotron from './components/Jumbotron/Jumbotron'
import Wrapper from './components/Wrapper/Wrapper'
import Footer from './components/Footer/Footer'
import imagesY from './images.json'
import Cards from './components/Cards/Cards'

class App extends Component {

  state = {
    images: imagesY,
    score: 0,
    topScore: 0,
    message: "Click an image to being"
  }

  gameFinished = () => {

    this.state.images.forEach(card => {
      card.count = 0;
      console.log(card.count);
    });

    if (this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score}, () => {
        console.log(this.state.score);
      });
    }

    alert(`Game over: \nScore: ${this.state.score}`)
    this.setState({score: 0});
    return true;
  };

  cardCount = id => {
    this.state.images.find((image, index) => {
      if (image.id === id) {
        if (imagesY[index].count === 0) {
          imagesY[index].count = imagesY[index].count + 1;
          this.setState({score : this.state.score + 1}, () => {
            console.log(this.state.score);
          });
          this.state.images.sort(() => Math.random() - 0.5)
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


