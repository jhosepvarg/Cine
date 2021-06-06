import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./views/Home";
import Cartelera from "./views/Cartelera";
import Teatros from "./views/Teatros";
import Confiteria from "./views/Confiteria";
import Promociones from "./views/Promociones";
import Membresia from "./views/Membresia";
import FooterCustom from "./components/FooterCustom";
import Header from "./components/Header";







function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cartelera" exact component={Cartelera} />

          <Route path="/teatros" exact component={Teatros} />
          <Route path="/confiteria" exact component={Confiteria} />
          <Route path="/promociones" exact component={Promociones} />
          <Route path="/membresia" exact component={Membresia} />
          <Redirect from="*" to="/" />
        </Switch>
        <FooterCustom />
      </Router>
    </>
  );
}

export default App;
