import React from "react";
import scss from "./Seleckts.module.scss";

export const Seleckts = ({ random, setRandom, random2 }) => {
	return (
		<>
			{random2.map((el) => (
				<div className={scss.container} key={el.id}>
					<h2>{el.title}</h2>
					<img src={el.img} alt="logo" />
					<h1>{el.name}</h1>
				</div>
			))}
		</>
	);
};
