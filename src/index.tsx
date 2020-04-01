import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'pages/Home';
import { StylesProvider, ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from 'meta/theme';
import { Router, Switch, Route } from 'react-router';
import { history } from 'meta/constants';
import 'index.scss'

ReactDOM.render(
	<React.StrictMode>
		<StylesProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router history={history}>
					<Switch>
					<Route exact path="/" component={Home} />
					</Switch>
				</Router>
			</ThemeProvider>
		</StylesProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
