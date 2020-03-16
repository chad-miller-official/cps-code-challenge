import React, { useEffect, useState } from "react";
import { listQuotes } from "../Services/FetchService";
import ListDisplay from "./ListDisplay";
import "./List.css";
let List = () => {
	let [loaded, setLoaded] = useState(false);
	let [list, setList] = useState([]);
	let handleMouseOver = e => e.currentTarget.classList.add("active");
	let handleMouseOut = e => e.currentTarget.classList.remove("active");
	useEffect(() => {
		listQuotes().then(quotes => {
			setList(quotes.slice(0, 10));
			setLoaded(true);
		});
	}, []);
	return (
		<div className="List">
			{loaded && <ListDisplay list={list} handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} />}
		</div>
	);
};
export default List;
