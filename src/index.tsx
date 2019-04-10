import { Component, render, h } from '/web_modules/preact.js';

class App extends Component<{ page: string }, { todo: any[] }> {
  addTodo() {
    const { todo = [] } = this.state;
    this.setState({ todo: todo.concat(`Item ${todo.length}`) });
  }

  render({ page = '' }, { todo = [] }) {
    return (
      <div class="app">
        <Header name={`ToDo's (${page})`} />
        <ul>
          {todo.map((todo, i) => <li key={i}>{todo}</li>)}
        </ul>
        <button class="btn" onClick={() => this.addTodo()}>Add Todo</button>
        <Footer>footer content here</Footer>
      </div>
    );
  }
}

const Header = ({ name = "" }) => <h1>{name} List</h1>

const Footer = (props) => <footer {...props} />

render(<App page="All" />, document.querySelector('#app'));