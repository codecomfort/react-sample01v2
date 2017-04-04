import * as React from 'react';
import {StatelessComponent} from 'react';
import CustomBadge from './CustomBadge'
import RaisedButton from 'material-ui/RaisedButton';

interface IMainProps {
  photos: Array<{
    id: number;
    src: string;
    alt: string;
  }>;
  value?: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Main: StatelessComponent<IMainProps> = (props) => (
  <div id="main">
    <div className="header">
      <h1>Page Title</h1>
      <h2>A subtitle for your page goes here</h2>
      <ul>参考
        <li>
          <a href="https://github.com/petehunt/react-one-hour-email" target="_blank">
            react-one-hour-emai</a>(現在はメンテされいない)
        </li>
        <li>
          <a href="https://purecss.io/layouts/side-menu/" target="_blank">Responsive Side Menu – Layout Examples –
            Pure</a>
        </li>
        <li>小さくするとハンバーガーメニューが出現するレスポンシブデザイン</li>
        <li>上記に、Material-UI ボタンを追加</li>
        <li>[2016.9．10] Recux サンプル実装を追加</li>
        <li>[2017.4.4] TypeScript 化</li>
      </ul>
    </div>

    <CustomBadge badgeContent={ props.value }/>
    <RaisedButton label="INCREMENT" onClick={ props.onIncrement }/>
    <RaisedButton label="DECREMENT" onClick={ props.onDecrement }/>

    <div className="content">
      <h2 className="content-subhead">How to use this layout</h2>
      <p>
        To use this layout, you can just copy paste the HTML, along with the CSS in <a
        href="/css/layouts/side-menu.css" alt="Side Menu CSS">side-menu.css</a>, and the JavaScript in <a
        href="/js/ui.js">ui.js</a>. The JS file uses vanilla JavaScript to simply toggle an <code>active</code> class
        that makes the menu responsive.
      </p>

      <h2 className="content-subhead">Now Let''s Speak Some Latin</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
      </p>

      <div className="pure-g">
        { props.photos.map((photo) =>
          <div className="pure-u-1-4" key={ photo.id }>
            <img className="pure-img-responsive" src={ photo.src } alt={ photo.alt }/>
          </div>)
        }
      </div>

      <h2 className="content-subhead">Try Resizing your Browser</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
      </p>
    </div>
  </div>
);

export default Main;
