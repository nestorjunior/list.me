import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Footer } from '../components/Footer/Footer';
import { CardHeader } from '../components/CardHeader/CardHeader';
import { CardProducts } from '../components/CardProducts/CardProducts';
import { Navbar } from '../components/Navbar/Navbar';

import './Home.scss';
import { Header } from '../components/Header/Header';

export function Home() {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [marginTop, setMarginTop] = useState('calc(45vh - 550px)');

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      setMarginTop(`calc(45vh - ${Math.min(550, windowHeight / 2)}px)`);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleShowMore = () => {
    setShowAllProducts(true);
  };

  const products = [
    <CardProducts />,
    <CardProducts />,
    <CardProducts />,
    <CardProducts />,
    <CardProducts />,
    <CardProducts />,
    <CardProducts />,
  ];

  return (
    <>
      <div className="container-wb container-fluid p-0">
        <Navbar />
        <Header />
        <main className="mb-3 justify-content-center d-flex">
          <section className='section-list-products-wb' style={{ marginTop: marginTop }}>
            {products
              .slice(0, showAllProducts ? products.length : 4)
              .map((product, index) => (
                <div key={index}>{product}</div>
              ))}
            {!showAllProducts && (
              <span className="text-center mb-3 button-show-more-wb">
								<FontAwesomeIcon icon={faChevronDown} onClick={handleShowMore} className='jumping-icon' />
              </span>
            )}
          </section>
        </main>
				<Footer />
      </div>
    </>
  );
}
