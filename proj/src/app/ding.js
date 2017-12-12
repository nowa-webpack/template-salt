// 接入参考
// https://open-doc.dingtalk.com/docs/doc.htm

const getDingtalkConfig = async () => {
  // 此方法返回钉钉 JSAPI 所需要的配置。默认读取 window._config对象 可自行修改
  return {
    agentId: window._config.agentId, // 必填，微应用ID
    corpId: window._config.corpId, //必填，企业ID
    timeStamp: window._config.timeStamp, // 必填，生成签名的时间戳
    nonceStr: window._config.nonceStr, // 必填，生成签名的随机串
    signature: window._config.signature, // 必填，签名
    type: 0, //选填。0表示微应用的jsapi,1表示服务窗的jsapi。不填默认为0。该参数从dingtalk.js的0.8.3版本开始支持
    jsApiList: apiList,
  };
};

const apiList = [
  // 需要使用的jsapi列表，注意：不要带dd
  'runtime.info',
  'biz.contact.choose',
  'device.notification.confirm',
  'device.notification.alert',
  'device.notification.prompt',
  'biz.ding.post',
  'biz.util.openLink',
];

const dd = window.dd;
if (!dd) {
  console.error(`window.dd为${dd}，请确认钉钉 API 是否加载/加载顺序正确`)
}

export const DDReady = new Promise((resolve, reject) => {
  getDingtalkConfig().then(data => {
    dd.config(data);
    dd.ready(function() {
      resolve(dd);
    });
    dd.error(function(err) {
      alert('dd error: ' + JSON.stringify(err));
      reject(err);
    });
  });
});
