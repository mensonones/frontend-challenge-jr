import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Buscar from '~/components/BuscarFilme/index';

const Routes = createAppContainer(createBottomTabNavigator({
  Home: {
    screen: Main,
  },
  Buscar: {
    screen: Buscar,
  },

}));

export default Routes;
