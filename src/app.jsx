import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Notifications from './components/notifications';
import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/scrollToTop';

import Home from './containers/home';
import Program from './containers/program';
import Tickets from './containers/tickets';
import Partners from './containers/partners';
import Covid19 from './containers/covid-19';
import access from './containers/access';
import Contact from './containers/contact';
import Legal from './containers/legal';
import Privacy from './containers/privacy';
import Commitments from './containers/commitments';

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
						<Route path="/programme" exact component={Program} />
						<Route path="/billetterie" exact component={Tickets} />
						<Route path="/partenaires" exact component={Partners} />
						<Route path="/engagements" exact component={Commitments} />
						<Route path="/covid-19" exact component={Covid19} />
						<Route path="/acces" exact component={access} />
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
