import * as React from 'react';

// ブラウザ表示領域が小さくなった場合に出現させるハンバーガーアイコン
// クリックで class プロパティに active をトグルで追加削除されるよう JS で制御
// active の場合は left 値を変えてメニューを出現させる
const MenuLink = () => (
  // Menu toggle
  <a href="#menu" id="menuLink" className="menu-link">
    <span/>
  </a>
);

export default MenuLink;
