import React from "react";
import styled from "styled-components";
import codesandboxIcon from "../assets/icons/codesandbox.svg";
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: ${(props) => (props.$sharepage ? "" : "center")};
  margin-bottom: ${(props) => (props.$sharepage ? "" : "2rem")};
  .company-name {
    font-weight: 700;
    font-size: 1.2rem;
  }
`;
const Logo = ({ sharepage }) => {
  return (
    <LogoWrapper $sharepage={sharepage}>
      <img src={codesandboxIcon} alt="logo" />
      <p className="company-name">Pro Manager</p>
    </LogoWrapper>
  );
};

export default Logo;
