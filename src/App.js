import Header from './header/header';
import './App.css';
import Home from './home/home';
import Details from './details/details';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import fetchCoinsListData from './apis/gecko.api'

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        {/* <Home></Home> */}
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/details' element={<Details/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
