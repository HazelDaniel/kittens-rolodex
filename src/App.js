import { React, Component } from "react";
import "./App.css";
import { CardList } from "./components/cards_list/card_list.component";
import { SearchBox } from "./components/search_box/search_box.component";
class App extends Component {
	constructor() {
		super();
		this.state = {
			kittens: [],
			searchValue: "",
    };
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((users) => {
				this.setState({ kittens: users });
			});
	}
  handleInputChange =(e)=> {
		this.setState({ searchValue: e.target.value });
	};
	render() {
		console.log("just one tiny modification");
		const { kittens, searchValue } = this.state;
		const filteredKittens = kittens.filter((kitten) => {
			return kitten.name.toLowerCase().includes(searchValue.toLowerCase());
		});
		return (
      <div className="App">
        <h1>Kittens Rolodex</h1>
        <SearchBox placeholder="search favorite kitten" handler={this.handleInputChange}></SearchBox>
				<CardList kittens={filteredKittens}></CardList>
			</div>
		);
	}
}

export default App;
