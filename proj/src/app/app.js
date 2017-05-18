import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { setup, LogicRender } from 'no-flux';
import { Component } from 'react';
import { render } from 'react-dom';
import FastClick from 'fastclick';
import { assign } from 'lodash';
import { isDev } from 'variables';

import PageHome from 'pages/home';
import PageDemo from 'pages/demo';
import DB from 'db';
import './app.less';

const { Toast, Dialog } = window.SaltUI;
const customHistory = hashHistory;

if (isDev && window.chrome && window.chrome.webstore) { // This is a Chrome only hack
  // see https://github.com/livereload/livereload-extensions/issues/26
  setInterval(() => {
    document.body.focus();
  }, 200);
}

// bind fastclick
FastClick && FastClick.attach(document.body);

// 这里使用setup来配置noflux
setup('fn', {
  toast: Toast,
  dialog: Dialog,
  DB,
  history: customHistory,
});

const Loading = () => <div className="kuma-loading" />;
const Empty = () => <div>暂无数据</div>;

// 修改 LogicRender 增加默认配置
// 用来自定义Loading和Empty的样式
assign(LogicRender.defaultProps, { Empty, Loading });

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

render(
  <Router history={customHistory}>
    <Route name="app" path="/" component={App}>
      <IndexRoute component={PageHome} />
      <Route path="home" component={PageHome} />
      <Route path="demo" component={PageDemo} />
    </Route>
  </Router>,
  document.getElementById('App'),
);
