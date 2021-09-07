import React from 'react';
import BoilingVerdict from './changeState.jsx';
class MyReact extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: '' };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }
  BoilingVerdict(props) {
    if (props >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }
  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input value={temperature} onChange={this.handleChange} />
        {/* <BoilingVerdict celsius={parseFloat(temperature)} /> */}
        {this.BoilingVerdict(temperature)}
      </fieldset>
    );
  }
}
export default MyReact;
