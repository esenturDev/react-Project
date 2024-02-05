import React from "react";
import styled from "styled-components";

export const Input = ({ type, value, setData, placeholder }) => {
	return (
		<Inputs
			type={type}
			value={value}
			onChange={(e) => {
				setData(e.target.value);
			}}
			placeholder={placeholder}
		/>
	);
};

const Inputs = styled.input`
	display: flex;
	align-items: center;
	width: 285px;
	height: 40px;
	border-radius: 14px;
	font-size: 17px;
	font-weight: 400;
	padding-left: 12px;
	background-color: #fff;
	box-shadow: -1px 0px 2px 3px #5c5959;
	color: black;
	&:hover {
		border: 2px solid green;
	}
`;
