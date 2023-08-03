import { UserContextProvider } from "../context/userContext";
import "../styles/globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <ThemeProvider enableSystem={false}>
        <ToastContainer />
        <Component {...pageProps} />
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default MyApp;
