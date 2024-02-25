import toast from "react-hot-toast";
import styled from "styled-components";
const ConfirmationWindowWrapper = styled.div`
  min-width: 300px;
  p {
    font-size: 0.9rem;
    text-align: center;
    font-weight: 600;
  }
  .cta-btns {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.2rem;
  }
  .confirm,
  .cancel {
    display: block;
    padding: 0.9rem 0;
    border-radius: 15px;
    border: transparent;
    background-color: inherit;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    cursor: pointer;
  }
  .confirm {
    color: rgb(255, 255, 255);
    background-color: rgb(23, 162, 184);
    span {
      text-transform: capitalize;
    }
  }
  .cancel {
    border: 1.3px solid rgb(207, 54, 54);
    color: rgb(207, 54, 54);
  }
`;
const ConfirmationWindow = ({ confirmTo, onCloseModal, onConfirm }) => {
  return (
    <ConfirmationWindowWrapper>
      <p>Are you sure you want to, {confirmTo}</p>
      <div className="cta-btns">
        <button
          className="confirm"
          onClick={async () => {
            try {
              await onConfirm?.();
            } catch (error) {
              toast.error(error.data.message);
            }
            onCloseModal();
          }}
        >
          Yes, <span>{confirmTo}</span>
        </button>
        <button className="cancel" onClick={onCloseModal}>
          Cancel
        </button>
      </div>
    </ConfirmationWindowWrapper>
  );
};

export default ConfirmationWindow;
