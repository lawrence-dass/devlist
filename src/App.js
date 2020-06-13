import React from 'react';
import styled from 'styled-wind';

import Card from './components/card/card.component';

import devlist from './testdata';

const AppContainer = styled.div`
  .mb-24;
`;

const PageTitle = styled.h2`
  .m-12;
  .text-gray-400;
  .text-6xl;
`;

function App() {
  return (
    <AppContainer>
      <PageTitle> ~ Developer List ~ </PageTitle>
      {
        devlist.map((element) => {
          return <Card key={element.login.uuid} profileInfo={element} />
        })
      }
    </AppContainer>
  );
}

export default App;
