function tplReplace(template, templateObject){
  return template().replace(/{{(.*?)}}/gim, (node, key) => templateObject[key.trim()]);
}

function scrollToTop(){
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
}

function setPageData(data, count){
  const len = data.length;

  let pageData = [];
  let index = 0;

  while(index < len){
    pageData.push(data.slice(index, index+= count));
  }

  return pageData;
}

export {
  tplReplace,
  scrollToTop,
  setPageData
}