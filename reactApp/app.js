var React = require('react');
var ReactDOM = require('react-dom');

/**
Props:
  description
  isComplete
**/
class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.description?
      <li><button type="button">X</button> {this.props.description} </li>
      : <li><button type="button">X</button> <strike>{this.props.description}</strike> </li>
    )
  }
}
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  addElement(description) {
    this.setState((prevState, props) => {
      return {
        list: prevState.list.concat(
          <Todo key={prevState.list.length} description={description} isComplete={false} />
        )
      }
    });
  }
  render() {
    return (
      <div>
        <InputLine listPtr={this} />
        <ul>{this.state.list}</ul>
      </div>
    )
  }
}


class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextValueChange = this.handleTextValueChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("adding "+this.state.textValue);
    this.props.listPtr.addElement(this.state.textValue);
  }
  handleTextValueChange(event) {
    this.setState({ textValue: event.target.value });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.textValue} onChange={this.handleTextValueChange} />
          <button type="submit" value="Add todo" />
        </form>
      </div>
    )
  }
}
ReactDOM.render(<TodoList />, document.getElementById('root'));
