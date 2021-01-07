import './imports.js';

import service from '../services/index.js';
import Header from '../components/Header';

async function getNewsList(){
  const data = await service.getNewsList('top', 10);
  return data;
}

;((doc) => {
  const oApp = doc.querySelector('#app');

  const init = () => {
    render();
  }

  function render () {
    const hederTpl = Header.tpl({
      url: '/',
      title: '新闻头条',
      showLeftIcon: false,
      showRightIcon: true
    })

    oApp.innerHTML += hederTpl;
  }

  init();
})(document)