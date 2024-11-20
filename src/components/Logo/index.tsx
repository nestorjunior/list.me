import { Link } from "react-router-dom";
import { DescriptionContainer, LogoContainer, TitleContainer } from "./styles";

export function Logo() {
  return (
    <LogoContainer>
      <Link to="/">
        <TitleContainer>List.me</TitleContainer>
      </Link>
      <DescriptionContainer className="ml-2">
        Share, connect
      </DescriptionContainer>
    </LogoContainer>
  );
}
