import { Link } from "react-router-dom";
import { TitleContainer } from "./styles";

export function LogoSecondary() {
  return (
    <>
      <Link to="/">
        <TitleContainer>List-me</TitleContainer>
      </Link>
    </>
  );
}
