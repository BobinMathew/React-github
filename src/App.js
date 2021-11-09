import './App.css';

import LeftPanel from './Components/LeftPanel';
import NavBar from './Components/NavBar';
import RightPanel from './Components/RightPanel';

import { ContextProvider } from './Context/Context';



function App() {


  return (
    <>
    <ContextProvider>
      <NavBar />
      <div className="App">
        
        <LeftPanel/>
        <RightPanel/>
      </div>
    </ContextProvider>
    </>
  );
}

export default App;
