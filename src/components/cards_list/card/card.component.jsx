import React from "react";
import "./card.styles.css";
// const robotUrl = "https://robohash.org/1?set=set2";

export const Card = props => {
	// console.log(props.kitten)
	return (
		<div className="card-container">
			<img src={`https://robohash.org/${props.kitten.id}?set=set4&size=180x180`} alt="kitten" />
			<h2>{props.kitten.name}</h2>
			<p>{props.kitten.email}</p>
		</div>
	);
}