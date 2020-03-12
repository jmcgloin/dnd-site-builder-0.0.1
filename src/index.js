import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { Link } from 'react-router-dom';


import './index.scss';
import App from './App';
import rootReducer from './reducers/combinedReducers';

// const store = createStore(rootReducer);

ReactDOM.render(
	// <Provider store={ store } >
	<div className="main-content">
		<header className=" flex flex-row flex-around">
			header
		</header>
		<App className="flex flex-row" />
		<footer className="flex flex-row flex-around">
			tootsies
			<a href="/admin" >Admin</a>
		</footer>
	</div>,
	// </Provider>,
	document.getElementById('root')
);
