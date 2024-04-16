import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Footer } from '../components/Footer/Footer';
import CardHeader from '../components/CardHeader/CardHeader';
import CardProducts from '../components/CardProducts/CardProducts';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import { CiCircleChevDown } from 'react-icons/ci';
import './Home.scss';

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
      <Container fluid className="container-wb p-0">
        <NavigationBar />
        <header>
          <Container
            className="container-wb__title p-0"
            style={{ width: '900px' }}
          >
            <h1 className="text-left title-wb">
              wishbox® | <span>dream, share, connect</span>
            </h1>
          </Container>
          <CardHeader />
        </header>
        <main className="mb-3 justify-content-center d-flex">
          <section className='section-list-products-wb' style={{ marginTop: marginTop }}>
            {products
              .slice(0, showAllProducts ? products.length : 4)
              .map((product, index) => (
                <div key={index}>{product}</div>
              ))}
            {!showAllProducts && (
              <span className="text-center mb-3">
                <CiCircleChevDown
                  size={50}
                  onClick={handleShowMore}
                  className="button-show-more-wb"
                />
              </span>
            )}
          </section>
        </main>
      </Container>
      <Footer />
    </>
  );
}
