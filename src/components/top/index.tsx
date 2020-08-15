import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { SNOW, THEME } from '../../constants';
import { useThemeDispatch, useThemeState } from '../../context/ThemeContext';
import { GitHubIcon } from '../social-share/github-icon';
import './index.scss';
import { SnowSwitch } from '../snow-switch';

const StyledButton = styled.button`
	outline: 0;
	background: #fff;
	margin: 10px 0;
	float: right;
	padding: 0;
	appearance: none;
	align-items: center;
	border-radius: 5px;
	border: 0;
	cursor: pointer;
	display: inline-flex;
	height: 40px;
	justify-content: center;
	opacity: 0.75;
	overflow: hidden;
	position: relative;
	transform: scale(0.75);
	transition: opacity 0.3s ease;
	vertical-align: middle;
	width: 40px;
	&:hover {
		background: black;
	}
	@media (max-width: 800px) {
		&:hover {
			background: #fff;
		}
	}
	div:nth-child(1) {
		border: ${({ theme }) =>
			theme === THEME.LIGHT ? 'none' : '2px solid #78757a'};
		background: #78757a;
		border-radius: 50%;
		height: 24px;
		overflow: ${({ theme }) => (theme === THEME.LIGHT ? 'visible' : 'hidden')};
		position: relative;
		transform: ${({ theme }) =>
			theme === THEME.LIGHT ? 'scale(0.55)' : 'scale(1)'};
		width: 24px;
		transition: all 0.45s ease 0s;
		&::before {
			border-radius: 50%;
			border: ${({ theme }) =>
				theme === THEME.LIGHT ? 'none' : '2px solid #78757a'};
			content: '';
			height: 24px;
			opacity: ${({ theme }) => (theme === THEME.LIGHT ? 0 : 1)};
			position: absolute;
			right: -9px;
			top: -9px;
			transform: ${({ theme }) =>
				theme === THEME.LIGHT ? 'translate(14px, -14px)' : 'translate(0, 0)'};
			transition: transform 0.45s ease 0s;
			width: 24px;
		}
		&::after {
			border-radius: 50%;
			box-shadow: 0 -23px 0 #78757a, 0 23px 0 #78757a, 23px 0 0 #78757a,
				-23px 0 0 #78757a, 15px 15px 0 #78757a, -15px 15px 0 #78757a,
				15px -15px 0 #78757a, -15px -15px 0 #78757a;
			content: '';
			height: 8px;
			left: 50%;
			margin: -4px 0px 0px -4px;
			position: absolute;
			top: 50%;
			width: 8px;
			transform: ${({ theme }) =>
				theme === THEME.LIGHT ? 'scale(1)' : 'scale(0)'};
			transition: all 0.35s ease 0s;
		}
	}
	div:nth-child(2) {
		background: ${({ theme }) => (theme === THEME.LIGHT ? 'none' : 'inherit')};
		border-radius: 50%;
		border: 0;
		height: 24px;
		opacity: ${({ theme }) => (theme === THEME.LIGHT ? 0 : 1)};
		position: absolute;
		right: 0;
		top: 0;
		transform: ${({ theme }) =>
			theme === THEME.LIGHT ? 'translate(14px, -14px)' : 'translate(0, 0)'};
		transition: opacity 0.25s ease 0s, transform 0.45s ease 0s;
		width: 24px;
	}
`;

export const Top = ({ theme, title, location, rootPath }) => {
	const state = useThemeState();
	const dispatch = useThemeDispatch();
	const setTheme = () =>
		dispatch({
			type: 'SET_THEME',
			theme: state.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT,
		});
	const setSnow = () =>
		dispatch({
			type: 'SET_SNOW',
			snow: state.snow === SNOW.ON ? SNOW.OFF : SNOW.ON,
		});

	return (
		<div className="top">
			<Link to={`/`} className="link" style={{ fontSize: 20 }}>
				{`Yuni-Q`}
			</Link>
			<GitHubIcon />
			<StyledButton theme={theme} onClick={setTheme}>
				<div></div>
				<div></div>
			</StyledButton>
			<SnowSwitch checked={state.snow} handleChange={setSnow} />
		</div>
	);
};
