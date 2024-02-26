import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <Outlet />
      <Toaster
        toastOptions={{
          className: "",
          style: {
            width: "auto",
            border: "1px solid #17a2b8",
            padding: "16px",
            color: "rgb(0,0,0)",
            backgroundColor: "rgb(249, 252, 255)",
            fontSize: "1rem",
          },
          error: {
            style: {
              color: "rgb(207, 54, 54)",
              border: "1px solid rgb(207, 54, 54)",
            },
          },
          success: {
            style: {
              color: "rgb(99, 192, 91)",
              border: "1px solid rgb(99, 192, 91)",
            },
          },
        }}
      />
    </>
  );
};

export default App;
