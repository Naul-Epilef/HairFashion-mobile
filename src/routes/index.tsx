import {Router, Scene} from 'react-native-router-flux';
import Home from './home';

const Routes = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="inicio" title="Inicio" component={Home} initial={true} />
      </Scene>
    </Router>
  );
};

export default Routes;
