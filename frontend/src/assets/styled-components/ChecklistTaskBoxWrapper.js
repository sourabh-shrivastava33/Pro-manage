import styled from "styled-components";
export const ChecklistTaskBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgb(226, 226, 226);
  border-radius: 15px;
  margin: 1rem 0;
  margin-right: 1rem;
  padding: 0.7rem 0.8rem;
  gap: 1rem;
  .checkbox {
    min-width: 15px;
    min-height: 15px;
  }
  .task-input {
    width: 100%;
    height: 20px;
    border: none;
    font-size: 1.2rem;
    &:active {
      outline: none;
    }
    &:focus {
      outline: none;
    }
  }
  .task {
    color: #000;
    font-weight: 500;
  }
  .delete {
    font-size: 1.3rem;
    color: rgb(207, 54, 54);
  }
`;
