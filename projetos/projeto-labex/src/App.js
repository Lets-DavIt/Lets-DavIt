import React from "react";
import { Router } from "./routes/Router";
import { GlobalStyle, MainDiv } from "./Styled";

function App() {
  return (
    <MainDiv>
      <GlobalStyle/>
      <Router/>
    </MainDiv>
  );
}

export default App;
