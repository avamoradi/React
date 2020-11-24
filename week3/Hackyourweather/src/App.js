import styled from 'styled-components';
import Main from './Main';

const Container = styled.div`
  margin : 0 auto;
  width: 60%;
  text-align: center;
  color:#544667;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
}
`;


function App() {
  return (
    <Container>
    <h1>Weather</h1>
    <Main/>
   </Container>
  );
}

export default App;
