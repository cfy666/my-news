function tplReplace(template, templateObject){
  return template().replace(/{{(.*?)}}/gim, (node, key) => templateObject[key.trim()]);
}

export {
  tplReplace
}