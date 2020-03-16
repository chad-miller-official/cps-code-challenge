import React from "react";
let ListDisplay = ({list, handleMouseOver, handleMouseOut }) => (
	<ul className="list-group">
		{list.map(x => (
			<li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="list-group-item">{x.quote}</li>
		))}
	</ul>
)
export default ListDisplay;