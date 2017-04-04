import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import {StatelessComponent} from 'react';
const injectTapEventPlugin = require('react-tap-event-plugin');
import './App.css';
import Main from './components/Main';
import Menu from './components/Menu';
import MenuLink from './components/MenuLink';
import './css/side-menu.css';

injectTapEventPlugin();

const logo = require('./logo.svg');

interface IAppProps {
  value?: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const SAMPLE_DATA = [
  {id: 0, src: 'http://farm3.staticflickr.com/2875/9069037713_1752f5daeb.jpg', alt: 'Peyto Lake'},
  {id: 1, src: 'http://farm3.staticflickr.com/2813/9069585985_80da8db54f.jpg', alt: 'Train'},
  {id: 2, src: 'http://farm6.staticflickr.com/5456/9121446012_c1640e42d0.jpg', alt: 'T-Shirt Store'},
  {id: 3, src: 'http://farm8.staticflickr.com/7357/9086701425_fda3024927.jpg', alt: 'Mountain'},
];

const App: StatelessComponent<IAppProps> = (props) => <MuiThemeProvider>
  <div id="layout">
    <MenuLink />
    <Menu />
    <Main photos={ SAMPLE_DATA }
          onIncrement={ props.onIncrement }
          onDecrement={ props.onDecrement }
          value={ props.value }
    />
  </div>
</MuiThemeProvider>;

export default App;
