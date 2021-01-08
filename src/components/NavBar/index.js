import itemTpl from './tpl/item.tpl';
import wrapperTpl from './tpl/index.tpl';
import './index.scss';

import { tplReplace, scrollToTop } from '../../libs/utils.js';

export default {
  name: 'NavBar',
  _curIdx: 0,
  tpl(data) {
    let itemList = '';

    data.map(({ type, title}, index) => {
      itemList += tplReplace(itemTpl, {
        //把第一项项加上'current'类
        isCurrent: !index ? 'current' : '',
        title,
        type
      })
    });

    return tplReplace(wrapperTpl, {
      itemList,
      wrapperW: .6 * data.length
    });
  },
  bindEvent (setType) {
    const oNavBar = document.querySelector('.nav');
    const oNavItems = document.querySelectorAll('.item');

    oNavBar.addEventListener('click', this._setNav.bind(this, oNavItems, setType), false);
  },
  _setNav (items, setType) {
    //event在函数的最后一位
    const tar = arguments[2].target;
    const className = tar.className.trim();

    if(className === 'item'){
      const type = tar.dataset.type;
      setType(type);
      scrollToTop();
      items[this._curIdx].className = 'item';
      this._curIdx = [].indexOf.call(items, tar);
      items[this._curIdx].className += ' current';
    }
  }
}