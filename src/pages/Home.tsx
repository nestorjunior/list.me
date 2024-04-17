import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Footer } from '../components/Footer/Footer';
import { CardHeader } from '../components/CardHeader/CardHeader';
import { CardProducts } from '../components/CardProducts/CardProducts';
import { Navbar } from '../components/Navbar/Navbar';

import './Home.scss';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';

export function Home() {
  return (
    <>
      <div className="container-wb container-fluid pt-0">
        <Navbar />
        <Header />
        <Main />
				<Footer />
      </div>
    </>
  );
}
