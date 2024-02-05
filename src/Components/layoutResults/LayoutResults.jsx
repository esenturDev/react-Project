import React from "react";
import { Button } from "../ul/button/Button";
import { useState } from "react";
import { Modal } from "../modal/Modal";
import { Input } from "../ul/input/Input";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import scss from "./LayoutResults.module.scss";
import { Card } from "../card/Card";
import { Seleckts } from "../seleckts/Seleckts";
import { Header } from "../header/Header";
import { Random } from "../random/Random";
// import { Count } from "../count/Count";
const bekResult = [
	{
		id: 1,
		title: "JavaScript",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
		name: "В чем разница между null и undefined?",
	},
	{
		id: 2,
		title: "JavaScript",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
		name: "Как в JS вызвать функцию?",
	},
	{
		id: 3,
		title: "React JSX",
		img: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
		name: "Что такое React и в чем его основные преимущества?",
	},
	{
		id: 4,
		title: "React JSX",
		img: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
		name: "Что такое JSX и каков его синтаксис?",
	},
	{
		id: 5,
		title: "html",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
		name: "Что такое HTML?",
	},
	{
		id: 6,
		title: "html",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
		name: "Все ли HTML-теги состоят из пар?",
	},
	{
		id: 7,
		title: "Scss",
		img: "https://sass-lang.com/assets/img/styleguide/seal-color.png",
		name: "Что такое SCSS?",
	},
	{
		id: 8,
		title: "Scss",
		img: "https://sass-lang.com/assets/img/styleguide/seal-color.png",
		name: "Что такое SCSS-фреймворки?",
	},
];

export const LayoutResults = () => {
	const [state, setState] = useState(false);
	const modalYess = () => setState(true);
	const modalNoo = () => setState(false);
	const [modal2, setModal2] = useState(false);
	const modalYess2 = () => setModal2(true);
	const modalNoo2 = () => setModal2(false);
	const [fetchz, setFetchz] = useState([]);
	const [valueInput, setInputValue] = useState("");
	const [random, setRandom] = useState(bekResult);
	const [random2, setRandom2] = useState([]);
	const [select, setSelect] = useState("Все вапросы!");
	const url = 'https://api.elchocrud.pro/api/v1/65138b6cd58711fbf337cb6b5daa635c/todo';
	const randomBek = () => {
		if (select !== "Все вапросы!") {
			const filtredResults = random.filter((item) => item.title === select);
			setRandom2([...filtredResults]);
		} else {
			setRandom2(random);
		}
	};
	useEffect(() => {
		randomBek();
	}, [select]);
	async function postUsers() {
		const data = {
			value1: valueInput,
		};
		setFetchz([data, fetchz]);
		setInputValue("");
		try {
			await fetch(url, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(data),
			});
			getUsers();
		} catch (e) {
			console.error(e);
		}
	}
	const getUsers = async () => {
		try {
			const res = await fetch(url);
			const dataResult = await res.json();
			setFetchz(dataResult);
		} catch (e) {
			console.error(e);
		}
	};
	useEffect(() => {
		getUsers();
	}, []);

	return (
		<>
			{state &&
				createPortal(
					<Modal isOpen={modalNoo}>
						<div className={scss.modalContainer}>
							<label>
								ЧТО ТАКОЕ КОМПОНЕНТЫ REACT? ПОЧЕМУ КОМПОНЕНТЫ ТАК ВАЖНЫ ДЛЯ
								REACT?
							</label>
							<Input
								type="text"
								value={valueInput}
								setData={setInputValue}
								placeholder="Ответы !"
							/>
							<div className={scss.div}>
								<Button onClick={() => postUsers()}>Add</Button>
							</div>
						</div>
					</Modal>,
					document.getElementById("modal")
				)}
			{modal2 &&
				createPortal(
					<Modal isOpen={modalNoo2}>
						<div>
							<p>В ЧЕМ ОСНОВНОЕ РАЗЛИЧИЕ МЕЖДУ PROPS И СОСТОЯНИЕМ?</p>
							<p>
								КОГДА БЫ ВЫ ИСПОЛЬЗОВАЛИ КОМПОНЕНТ КЛАССА ВМЕСТО
								ФУНКЦИОНАЛЬНОГО?
							</p>
							<p>ЧТО ТАКОЕ JSX?</p>
						</div>
					</Modal>,
					document.getElementById("modal")
				)}
			<div className={scss.layout}>
				<Header />
				<div className={scss.buttons}>
					<div>
						<Random />
					</div>
					<div>
						<Button onClick={modalYess}>Modal!</Button>
					</div>
					<div className={scss.button1}>
						<Button onClick={modalYess2}>Вапросы ?</Button>
					</div>
				</div>
				<div className={scss.renderCards}>
					<Card fetchz={fetchz} setFetchz={setFetchz} onFunk={getUsers} />
				</div>

				<div className={scss.secelts}>
					<select
						value={select}
						onChange={(e) => {
							setSelect(e.target.value);
						}}>
						<option value="Все вапросы!">Все вапросы!</option>
						<option value="JavaScript">JavaScript</option>
						<option value="React JSX">React JSX</option>
						<option value="html">html</option>
						<option value="Scss">Scss</option>
					</select>
				</div>
				{/* <Count /> */}
				<div className={scss.intiContents}>
					<Seleckts random={random} setRandom={setRandom} random2={random2} />
				</div>
			</div>
		</>
	);
};
