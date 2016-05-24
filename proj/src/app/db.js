// See https://github.com/Jias/natty-fetch for more details.
const DBContext = new NattyDB.Context({
    mockUrlPrefix: 'http://dip.alibaba-inc.com/api/v2/services/schema/mock/',
    urlPrefix: '',
    mock: true,
    // jsonp: true,
    withCredentials: false,
    traditional: true,
    data: {
        _tb_token_: ''
    },
    timeout: 5000,
    fit: function(response) {
        return {
            success: response.success,
            content: response.content,
            error: {
                errorMsg: response.errorMsg,
                errorCode: response.errorCode,
                errorLevel: response.errorLevel
            }
        }
    }
});

DBContext.create('SomeModuleAPI', {
    getSomeInfo: {
        mockUrl: '27463',
        url: '/query/getSomeInfo.json'
    }
});

module.exports = DBContext;
