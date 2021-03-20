import logo from './logo.svg';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import styled, { css } from 'styled-components';

const MyButton = styled.div`
  color: green;
  text-decoration: underline;

  ${props => props.red && css`
    color: red;  
  `}

  ${props => props.blue && css`
    color: blue;  
  `}
`

const PurpleButton = styled(MyButton)`
  color: purple;

`

function App() {
  return (
    <div className="App">
      <MyButton> <WelcomeMessage/> </MyButton>
      <MyButton red> <WelcomeMessage/> </MyButton>
      <PurpleButton> <WelcomeMessage/> </PurpleButton>
    </div>
  );
}

export default App;
