import tpl from './index.tpl';
import './index.scss';

import { tplReplace } from '../../libs/utils.js';

export default {
  tpl(text){
    return tplReplace(tpl, {
      text
    })
  }
}