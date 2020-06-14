import React from 'react';

import Devicon from './assets/dev-icon.png';
import List from './components/list/list.component';

import { AppContainer, LogoContainer, PageTitle } from './App.styles';

function App() {
  return (
    <AppContainer>
      <LogoContainer>
        <img src={Devicon} width="50px" alt="DevIcon" />
      </LogoContainer>
      <PageTitle> ~ Developer List ~ </PageTitle>
      <List />
    </AppContainer>
  );
}

export default App;
