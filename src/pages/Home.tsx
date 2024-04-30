import { Navbar } from '../components/Navbar/Navbar';
import { Header } from '../components/Header/Header';
import { HeaderCard } from '../components/HeaderCard/HeaderCard';
import { Content } from '../components/Content/Content';
import { Footer } from '../components/Footer/Footer';

import './Home.scss';

export function Home() {
  return (
    <>
      <div className="wbox-main-container container-fluid">
        <Navbar />
        <Header>
					<HeaderCard
						headerUserImageUrl='https://i.pravatar.cc/150'
						headerUserImageAlt='Nome usuário'
						headerFollowUser='Follow'
						headerMessageUser='Message'
						headerUserNickname='@mollybloom'
						headerUserName='Molly Bloom'
						headerFollowersCount={23234}
						headerFollowingCount={88488}
						headerUserDescription='Sem saber que era impossível, foi lá e fez!'
						headerUserLocation='Curitiba/PR'
						headerUserOccupation='Escritora'
					/>
				</Header>
        <Content />
				<Footer />
      </div>
    </>
  );
}
