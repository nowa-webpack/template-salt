require('./PageHome.styl');

var reactMixin = require('react-mixin');

let i18n = require('i18n');

class PageHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        return (
            <div className="page-home">
                home
            </div>
        );
    }
}

module.exports = PageHome;
