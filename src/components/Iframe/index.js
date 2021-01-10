import tpl from './index.tpl';
import './index.scss';

import { tplReplace } from '../../libs/utils'

export default {
  tpl(url){
    return tplReplace(tpl, {
      url
    }) 
  }
}