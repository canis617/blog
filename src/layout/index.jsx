import React, { useState } from 'react';

import { Top } from '../components/top';
import { Header } from '../components/header';
import { ThemeSwitch } from '../components/theme-switch';
import { SnowSwitch } from '../components/snow-switch';
import { Footer } from '../components/footer';
import { rhythm } from '../utils/typography';
import { ChristmasTheme } from './Christmas';
import * as Dom from '../utils/dom';
import { THEME } from '../constants';

import './index.scss';

function getTheme(checked) {
	return checked ? THEME.DARK : THEME.LIGHT;
}

function toggleTheme(theme) {
	switch (theme) {
		case THEME.LIGHT: {
			Dom.addClassToBody(THEME.LIGHT);
			Dom.removeClassToBody(THEME.DARK);
			break;
		}
		case THEME.DARK: {
			Dom.addClassToBody(THEME.DARK);
			Dom.removeClassToBody(THEME.LIGHT);
			break;
		}
	}
}

export const Layout = ({ location, title, children }) => {
	const rootPath = `${__PATH_PREFIX__}/`;
	const [checked, setChecked] = useState(true);
	const [checkedSnow, setCheckedSnow] = useState(false);

	const handleChange = checked => {
		const theme = getTheme(checked);

		setChecked(checked);
		toggleTheme(theme);
	};
	const handleChangeSnow = checked => {
		setCheckedSnow(checked);
	};
	return (
		<>
			<ChristmasTheme checked={checkedSnow}>
				<Top title={title} location={location} rootPath={rootPath} />
				<div
					style={{
						padding: `${rhythm(1.5)} ${rhythm(2)}`,
					}}
				>
					<div style={{ display: 'flex ', justifyContent: 'flex-end' }}>
						<SnowSwitch checked={checkedSnow} handleChange={handleChangeSnow} />
						<ThemeSwitch checked={checked} handleChange={handleChange} />
					</div>
					<Header title={title} location={location} rootPath={rootPath} />
					{children}
					<Footer />
				</div>
			</ChristmasTheme>
		</>
	);
};
