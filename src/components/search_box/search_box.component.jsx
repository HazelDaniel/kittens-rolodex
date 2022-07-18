import React from "react";
import "./search_box.styles.css";
export const SearchBox = props => {
	return <input className="search-box" type="search" placeholder={props.placeholder} onChange={props.handler} />;
}