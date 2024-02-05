import React from "react";
import { useReducer } from "react";
const countTre = {
	count: 0,
};

function countterHandler(state, aktionst) {
	switch (aktionst.type) {
		case "plus":
			return {
				...state,
				count: state.count + 1,
			};
		case "dek":
			return {
				...state,
				count: state.count - 1,
			};
		default:
			return state;
	}
}
export const Count = () => {
	const [state, difplath] = useReducer(countterHandler, countTre);
	return (
		<div>
			<button onClick={() =>difplath({ type: "plus" })}>+</button>
			<p>{state.count}</p>
			<button onClick={() =>difplath({ type: "dek" })}>-</button>
		</div>
	);
};
