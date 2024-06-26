import styled from "styled-components";

export const FeedbackModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;

  @media (min-width: 481px) and (max-width: 767px) {
    width: 350px;
  }

	@media (min-width: 320px) and (max-width: 480px) {
    width: 350px;
  }

`;
