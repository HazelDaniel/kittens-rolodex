import "./card_list.styles.css";
import { Card } from "./card/card.component";
export const CardList = props => {
	return (
		<div className="card-list">
			{!props.kittens.length > 0 ? <h1>No cards found!</h1> : props.kittens.map((kitten) => <Card key={kitten.id} kitten={kitten}></Card>)}
		</div>
	);
}