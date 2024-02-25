import React from "react";
import styled from "styled-components";
const AnalysticsPageWrapper = styled.div`
  width: 100vw;
  .head,
  .content {
    margin: 0 auto;
    width: 96%;
    display: flex;
  }
  .content {
    gap: 2rem;
  }
  .head {
    font-size: 2.1rem;
    font-weight: 500;
    margin: 2rem auto;
  }
`;
import { useGetAnalyticsQuery } from "../slices/taskApiSlice";
import Loader from "../components/Loader";

import AnalyticsContainer from "../components/AnalyticsContainer";
console.log(useGetAnalyticsQuery);
const AnalyticsPage = () => {
  const { data, isLoading } = useGetAnalyticsQuery();

  if (isLoading)
    return (
      <AnalysticsPageWrapper>
        <Loader />
      </AnalysticsPageWrapper>
    );
  return (
    <AnalysticsPageWrapper>
      <div className="head">Analytics</div>
      <div className="content">
        <AnalyticsContainer>
          <AnalyticsContainer.AnalyticsItem value={data["Backlog"]}>
            Backlog Tasks
          </AnalyticsContainer.AnalyticsItem>
          <AnalyticsContainer.AnalyticsItem value={data["To do"]}>
            To-do Tasks
          </AnalyticsContainer.AnalyticsItem>
          <AnalyticsContainer.AnalyticsItem value={data["In Progress"]}>
            In-Progress Tasks
          </AnalyticsContainer.AnalyticsItem>
          <AnalyticsContainer.AnalyticsItem value={data["Done"]}>
            Completed Tasks
          </AnalyticsContainer.AnalyticsItem>
        </AnalyticsContainer>
        <AnalyticsContainer>
          <AnalyticsContainer.AnalyticsItem value={data["low"]}>
            Low Priority
          </AnalyticsContainer.AnalyticsItem>
          <AnalyticsContainer.AnalyticsItem value={data["high"]}>
            High Priority
          </AnalyticsContainer.AnalyticsItem>
          <AnalyticsContainer.AnalyticsItem value={data["moderate"]}>
            Moderate Priority
          </AnalyticsContainer.AnalyticsItem>
          <AnalyticsContainer.AnalyticsItem value={data["due date"]}>
            Due Date Tasks
          </AnalyticsContainer.AnalyticsItem>
        </AnalyticsContainer>
      </div>
    </AnalysticsPageWrapper>
  );
};

export default AnalyticsPage;
