import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-ynppwct4qgfkq8wu.us.auth0.com"
     clientId="oSkX76eWaSFRx2geTH8KgzKB9yNQ9L6a"
     authorizationParams={{
      redirect_uri: "https://real-estate-project-woad-sigma.vercel.app/"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
