import React from "react";
import "./App.css";
import Getsimpsons from "./components/Getsimpsons";
import axios from "axios";

const sampleSimpsons = {
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNickRiviera.png?1497567511084",
  character: "Dr. Nick",
  quote:
    "Ah, be creative. Instead of making sandwhiches with bread, use Pop-Tarts. Instead of chewing gum, chew bacon."
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: sampleSimpsons
    };
    this.getSimpson = this.getSimpson.bind(this);
  }
  getSimpson() {
    axios
      .get("https://quests.wilders.dev/simpsons-quotes/quotes")
      .then(response => response.data)
      .then(data => {
        this.setState({
          simpson: data[0]
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Getsimpsons simpson={this.state.simpson} />
        <button type="button" onClick={this.getSimpson}>
          New !!
        </button>
      </div>
    );
  }
}

export default App;
