import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Navbar } from "../../components/Navbar";
import { UserCard } from "../../components/UserCard";

import { MainContainer } from "./styles";

export function HomePage() {
	return (
		<>
			<MainContainer>
				<Navbar />
				<Header>
					<UserCard
						UserCardImageUrl="https://i.pravatar.cc/150"
						UserCardImageAlt="Nome usuário"
						UserCardFollow="Follow"
						UserCardMessage="Message"
						UserCardNickname="@mollybloom"
						UserCardName="Molly Bloom"
						UserCardFollowersCount={23234}
						UserCardFollowingCount={88488}
						UserCardDescription="Sem saber que era impossível, foi lá e fez!"
						UserCardLocation="Curitiba/PR"
						UserCardOccupation="Escritora"
					/>
				</Header>
				<Main />
				<Footer />
			</MainContainer>
		</>
	);
}
