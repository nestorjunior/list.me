import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { UserCard } from '../components/UserCard';
import { ProductContent } from '../components/ProductContent';
import { Footer } from '../components/Footer';

import './Home.scss';

export function Home() {
  return (
    <>
      <div className="wbox-main-container container-fluid">
        <Navbar />
        <Header height=''>
					<UserCard
						UserCardImageUrl='https://i.pravatar.cc/150'
						UserCardImageAlt='Nome usuário'
						UserCardFollow='Follow'
						UserCardMessage='Message'
						UserCardNickname='@mollybloom'
						UserCardName='Molly Bloom'
						UserCardFollowersCount={23234}
						UserCardFollowingCount={88488}
						UserCardDescription='Sem saber que era impossível, foi lá e fez!'
						UserCardLocation='Curitiba/PR'
						UserCardOccupation='Escritora'
					/>
				</Header>
        <ProductContent />
				<Footer />
      </div>
    </>
  );
}
