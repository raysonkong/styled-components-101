import './App.css';
import WelcomeMessage from './WelcomeMessage';
import MyButton from './MyButton';
import PurpleButton from './PurpleButton';




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
