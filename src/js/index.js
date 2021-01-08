import './imports.js';

import Header from '../components/Header';
import NavBar from '../components/NavBar';

import { NEWS_TYPE } from '../data'
import service from '../services';

;((doc) => {
  const oApp = doc.querySelector('#app');

  const init = async () => {
    render();
    await setNewsList();
    bindEvent();
  }

  const config = {
    type: 'top',
    count: 10,
    pageNum: 0,
    isLoading: false
  }

  const newsData = {};

  function bindEvent () {
    NavBar.bindEvent(setType);
  }

  function render () {
    const hederTpl = Header.tpl({
      url: '/',
      title: '新闻头条',
      showLeftIcon: false,
      showRightIcon: true
    })

    const navBarTpl = NavBar.tpl(NEWS_TYPE);

    oApp.innerHTML += hederTpl + navBarTpl;
  }

  async function setNewsList(){
    const { type, count } = config;

    if(newsData[type]){
      return;
    }

    newsData[type] = await service.getNewsList(type, count);
    console.log(newsData);

  }

  function setType (type) {
    config.type = type;
  }


  init();
})(document)