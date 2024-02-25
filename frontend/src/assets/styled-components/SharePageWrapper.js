import styled from "styled-components";

export const SharePageWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  .header {
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 4rem;
  }
  .title {
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0.8rem 0 2rem 0;
  }
  .task-container {
    width: 40%;
    margin: 0 auto;
    border: 1px solid rgb(237, 245, 254);
    border-radius: 15px;
    padding: 3rem 2rem;
  }
  .checklist-container {
    max-height: 500px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 12px;
      margin-left: 1rem;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background-color: rgb(156, 183, 197);
    }
  }
  .checklist-detail {
    font-weight: 600;
    font-size: 1rem;
  }

  .due-date-container {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    .text {
      font-weight: 700;
    }
  }
  @media (max-width: 640px) {
    .task-container {
      width: 90%;
      margin: 0 auto;
      padding: 3rem 0.5rem;
      max-height: 82%;
    }
    .task-boxes {
      max-width: 420px;
    }
    .checklist-container {
      max-height: 400px;
    }
  }
`;
