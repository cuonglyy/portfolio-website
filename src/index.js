import '@fontsource/ibarra-real-nova/400.css'
import '@fontsource/ibarra-real-nova/700.css'
import '@fontsource/public-sans/400.css'

import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./styles/theme.js";
import "./styles/style.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
