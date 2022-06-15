import React, { useState } from "react";
import Router from "./routes/Router";
import { GlobalStyle, StyledBodyPage } from "./Styled";

const App = () => {
  const token = localStorage.getItem("token");
  const [ rightButtonText, setRightButtonText ] = useState( token ? "Logout" : "Entrar");
  const [ button, setButton ] = useState(false);

  return (
    <StyledBodyPage>
      <GlobalStyle/>
      <Router button={button} setButton={setButton} rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
    </StyledBodyPage>
  );
}

export default App;
