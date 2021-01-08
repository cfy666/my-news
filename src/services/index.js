import HTTP from '../libs/http.js';
import { setPageData } from '../libs/utils.js';

class Services extends HTTP {
  getNewsList (type, count) {
    return new Promise((resolve, reject) => {
      this.ajax({
        url: 'Juhe/getNewsList',
        type: 'POST',
        dataType: 'JSON',
        data: {
          field: type
        },
        success(data){
          const pageData = setPageData(data.result.data, count);
          resolve(pageData);
        },
        error(err){
          reject(err);
        }
      })
    })
  }
}

export default new Services();