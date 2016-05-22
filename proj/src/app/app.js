require('./app.styl');

if (__LOCAL__ && window.chrome && window.chrome.webstore) { // This is a Chrome only hack
    // see https://github.com/livereload/livereload-extensions/issues/26
    setInterval(function() {
        document.body.focus();
    }, 200);
}

// bind fastclick
window.FastClick && FastClick.attach(document.body);

var Router = ReactRouter;
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var PageHome = require('../pages/home');
var PageDemo = require('../pages/demo');

class App extends React.Component {
    render() {
        return (<div>
            <RouteHandler/>
        </div>)
    }
}

var routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute handler={PageHome}/>
        <Route name="demo" handler={PageDemo}/>
    </Route>
);

Router.run(routes, function (Handler, state) {
    React.render(<Handler/>, document.getElementById('App'));
});
