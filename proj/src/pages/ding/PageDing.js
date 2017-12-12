import { Component } from 'refast';
import { DDReady } from '../../app/ding';

import logic from './logic';
import './PageDing.less';

export default class Page extends Component {
  constructor(props) {
    super(props, logic);
  }

  componentDidMount() {
    DDReady.then((dd) => {
      dd.device.notification.alert({
        message: 'dd.device.notification.alert',
        title: 'This is title',
        buttonName: 'button',
        onSuccess: function(data) {
          alert('win: ' + JSON.stringify(data));
        },
        onFail: function(err) {
          alert('fail: ' + JSON.stringify(err));
        },
      });
    });
  }

  render() {
    return (
      <div className="page-demo">
        <h1>hello dingTalk!</h1>
      </div>
    );
  }
}
