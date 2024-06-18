import type { ReactNode } from "react";
import { AddNewItem } from "../AddNewItem";
import { Logo } from "../Logo";
import { HeaderContainer, HeaderSection, HeaderWrapper } from "./styles";

interface HeaderProps {
	children: ReactNode;
}

export function Header({ children }: HeaderProps) {
	return (
		<>
			<HeaderWrapper>
				<div className="row">
					<div className="col-sm-12 px-0">
						<HeaderContainer style={{ height: "450px" }}>
							<HeaderSection className="col-sm-12 col-md-12">
								<div
									style={{ display: "flex", justifyContent: "space-between" }}
								>
									<Logo />
									<AddNewItem />
								</div>
								{children}
							</HeaderSection>
						</HeaderContainer>
					</div>
				</div>
			</HeaderWrapper>
		</>
	);
}
