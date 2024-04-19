import { Navbar } from '../components/Navbar/Navbar';
import { Header } from '../components/Header/Header';
import { Content } from '../components/Content/Content';
import { Footer } from '../components/Footer/Footer';

import './Home.scss';

export function Home() {
  return (
    <>
      <div className="wbox-main-container container-fluid">
        <Navbar />
        <Header />
        <Content />
				<Footer />
      </div>
    </>
  );
}
