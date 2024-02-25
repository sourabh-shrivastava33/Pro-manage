import styled from "styled-components";
export const DateTagWrapper = styled.span`
  font-family: "Inter";
  padding: ${(props) => (props.$share ? "0.5rem 1.3rem" : "0.3rem 0.8rem")};
  border-radius: 10px;
  font-size: ${(props) => (props.$share ? "1rem" : "0.7rem")};
  background-color: rgb(207, 54, 54);
  font-weight: 600;
  color: white;
  &.exceeded {
    background-color: rgb(207, 54, 54);
  }
  &.not-exceeded {
    background-color: rgb(226, 226, 226);
    color: #000;
  }
  &.done {
    background-color: rgb(99, 192, 91);
  }
`;
