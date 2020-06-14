import React from 'react';

import Devicon from './assets/dev-icon.png';
import List from './components/list/list.component';

import { AppContainer, LogoContainer, PageTitle, ImageTag } from './App.styles';

function App() {
  return (
    <AppContainer>
      <LogoContainer>
        <ImageTag src={Devicon} alt="DevIcon" />
      </LogoContainer>
      <PageTitle> ~ Devlist ~ </PageTitle>
      <List />
    </AppContainer>
  );
}

export default App;
