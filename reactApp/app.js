var React = require('react');
var ReactDOM = require('react-dom');

var dummyData = [
  "Wash the dishes",
  "Take out the trash",
  "Lorem ipsum delorum",
  "Finish some really difficult and challenging task that requires a lot of characters in a string.",
  "idk",
  "learn react",
  "make a todo list manager"
];

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li> {this.props.description} </li>
    )
  }
}
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul> {dummyData.map((d, i) => <Todo key={i} description={d} />)}</ul>
    )
  }
}
ReactDOM.render(<TodoList />, document.getElementById('root'));
