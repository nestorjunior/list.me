import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import { CardHeader } from '../components/CardHeader/CardHeader';
// import { CardProducts } from '../components/CardProducts/CardProducts';

import { Navbar } from '../components/Navbar/Navbar';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { Footer } from '../components/Footer/Footer';

import './Home.scss';

export function Home() {
  return (
    <>
      <div className="wbox-main-container container-fluid">
        <Navbar />
        <Header />
        <Main />
				<Footer />
      </div>
    </>
  );
}
