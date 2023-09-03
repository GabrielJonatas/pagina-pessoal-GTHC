import Navbar from './nav/Navbar';
import Home from './routes/Home';
import Footer from './Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ExpAc from './routes/Exp-ac';
import Atv from './routes/AtividadesAcademicasGTHC';
import ExHv from './routes/Ex-hv';
import ExpPr from './routes/Exp-pr';
import Proj from './routes/Prj';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
       <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/exp-ac">
              <ExpAc />
            </Route>
            <Route path="/exp-pr">
              <ExpPr />
            </Route>
            <Route path="/ex-hv">
              <ExHv />
            </Route>
            <Route path="/prj">
              <Proj />
            </Route>
            <Route path="/ativ">
              <Atv />
            </Route>
          </Switch>
       </div>
        <Footer/>
      </div>     
    </Router>
  );
}

export default App;
