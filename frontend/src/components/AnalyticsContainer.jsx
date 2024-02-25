import React from "react";
import styled from "styled-components";
const Container = styled.ul`
  background-color: rgb(249, 252, 255);
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  gap: 1.5rem;
  width: 24rem;
  padding: 2rem;
`;
const Item = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;

  .indentaion-and-text {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .text {
    font-weight: 500;
  }
  .value {
    font-size: 1rem;
    font-weight: 600;
  }
  .indentation {
    display: inline-block;
    min-width: 8px;
    min-height: 8px;
    border-radius: 50%;
    background-color: rgb(144, 196, 204);
  }
`;
const AnalyticsContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

const AnalyticsItem = ({ children, value }) => {
  return (
    <Item>
      <p className="indentaion-and-text">
        <span className="indentation"></span>
        <span className="text">{children}</span>
      </p>
      <span className="value">{value}</span>
    </Item>
  );
};
AnalyticsContainer.AnalyticsItem = AnalyticsItem;
export default AnalyticsContainer;
