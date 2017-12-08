import nattyFetch from 'natty-fetch';
import { Toast } from 'saltui';

import { urlPrefix, isDev } from './variables';

// See https://github.com/Jias/natty-fetch for more details.
const context = nattyFetch.context({
  mockUrlPrefix: urlPrefix,
  urlPrefix,
  mock: isDev,
  // jsonp: true,
  withCredentials: false,
  traditional: true,
  data: {
    _tb_token_: '',
  },
  timeout: 5000,
  didFetch: () => Toast.hide(),
  // 请按照需要开启
  fit(response) {
    return {
      success: response.success,
      content: response.content,
      error: {
        errorMsg: response.errorMsg,
        errorCode: response.errorCode,
        errorLevel: response.errorLevel,
      },
    };
  },
});

context.create('SomeModuleAPI', {
  getSomeInfo: {
    mockUrl: 'query/getSomeInfo.json',
    url: 'query/getSomeInfo.json',
    willFetch() {
      Toast.show({
        type: 'loading',
        content: 'Loading',
      });
    },
  },
});

export default context.api;
