import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import MessageContextProvider from "./context/MessageContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <MessageContextProvider>
    <App />
  </MessageContextProvider>
  // </StrictMode>,
);
