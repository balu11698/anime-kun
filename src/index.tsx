import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import { store } from "./Data/store";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const GlobalStyles = createGlobalStyle`
body{
  font-family:'Poppins', 'Times New Roman', Times, serif;
  background: #121c20;
  color: white;
  -webkit-tap-highlight-color: transparent;
}`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
