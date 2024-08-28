import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './component/reusables/Header';
import Pages from './component/Pages'

function App() {
  return (
    <div>
<Router>
  <Header/>
  <Pages/>
</Router>
    </div>
  );
}

export default App;
