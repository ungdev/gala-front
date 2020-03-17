import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Notifications from './components/notifications';
import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/scrollToTop';

import Home from './containers/home';
import Programme from './containers/programme';
import Tickets from './containers/tickets';
import Partners from './containers/partners';
import Gallery from './containers/gallery';
import access from './containers/access';
import Contact from './containers/contact';
import Legal from './containers/legal';
import Privacy from './containers/privacy';

import './index.css';

const App = () => (
	<div id="app">
		<Router>
			<ScrollToTop>
				<Notifications />

				<Header />

				<div id="page">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/program" exact component={Programme} />
						<Route path="/billetterie" exact component={Tickets} />
						<Route path="/partenaires" exact component={Partners} />
						<Route path="/galerie" exact component={Gallery} />
						<Route path="/access" exact component={access} />
						<Route path="/contact" exact component={Contact} />
						<Route path="/mentions-legales" exact component={Legal} />
						<Route path="/confidentialite" exact component={Privacy} />
						<Redirect from="*" to="/" />
					</Switch>
				</div>

				<Footer />
			</ScrollToTop>
		</Router>
	</div>
);

export default App;
