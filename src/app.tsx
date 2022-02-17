import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import Notifications from './components/notifications';
import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/scrollToTop';

import Home from './containers/home';
import Program from './containers/program';
import Tickets from './containers/tickets';
import Partners from './containers/partners';
import Covid19 from './containers/covid-19';
import Access from './containers/access';
import Contact from './containers/contact';
import Legal from './containers/legal';
import Privacy from './containers/privacy';
import Commitments from './containers/commitments';

import './index.scss';

function App() {
  return (
    <div id="app">
      <Router>
        <ScrollToTop>
          <Notifications />

          <Header />

          <div id="page">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/artists" element={<Program />} />

              <Route path="/shop" element={<Tickets />} />
              <Route path="/partenaires" element={<Partners />} />
              <Route path="/covid19" element={<Covid19 />} />
              <Route path="/about" element={<Commitments />} />

              <Route path="/acces" element={<Access />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/mentions-legales" element={<Legal />} />
              <Route path="/confidentialite" element={<Privacy />} />
              {/*
               * This is a temporary fix: "Recognize that the navigation will happen in a useEffect"
               * From a note of the docs: https://reactrouter.com/docs/en/v6/upgrading/v5#use-usenavigate-instead-of-usehistory
               * For this reason, all other routes may use the existing pageNotFound container in the future.
               */}
              <Route path="/*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>

          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;