import { Component, render, h } from '/web_modules/preact.js';
class App extends Component {
    addTodo() {
        const { todo = [] } = this.state;
        this.setState({ todo: todo.concat(`Item ${todo.length}`) });
    }
    render({ page = '' }, { todo = [] }) {
        return (h("div", { class: "app" },
            h(Header, { name: `ToDo's (${page})` }),
            h("ul", null, todo.map((todo, i) => h("li", { key: i }, todo))),
            h("button", { onClick: () => this.addTodo() }, "Add Todo"),
            h(Footer, null, "footer content here")));
    }
}
const Header = ({ name = "" }) => h("h1", null,
    name,
    " List");
const Footer = (props) => h("footer", Object.assign({}, props));
render(h(App, { page: "All" }), document.querySelector('#app'));
