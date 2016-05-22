require('./PageDemo.styl');

var reactMixin = require('react-mixin');

let i18n = require('i18n');

let Actions = require('./actions');
let Store = require('./store');

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        let me = this;
        Actions.fetch({}, function(data) {
            console.log(data);
        });
    }

    render() {
        let me = this;
        return (
            <div className="page-demo">
                demo{i18n('page1.demo')}
            </div>
        );
    }
}

reactMixin.onClass(Page, Reflux.connect(Store));

module.exports = Page;
