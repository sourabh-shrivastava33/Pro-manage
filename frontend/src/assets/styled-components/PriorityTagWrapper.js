import styled from "styled-components";
export const PriorityTagWrapper = styled.p`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-transform: uppercase;
  font-size: 0.7rem;
  color: #858585;
  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.$priority === "high"
        ? "rgb(255, 36, 115)"
        : props.$priority === "moderate"
        ? "rgb(24, 176, 255)"
        : "rgb(99, 192, 91)"};
  }
`;
