import styled from 'styled-components';

import { MainContainer } from './components/MainContainer';

export const StyledApp = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;500;600;800&display=swap');
  background-color: hsl(217, 19%, 24%);
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Manrope', sans-serif;
`;

function App() {
  return (
    <StyledApp>
      <MainContainer />
    </StyledApp>
  );
}

export default App;
