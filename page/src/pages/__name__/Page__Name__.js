require('./Page<%- Name %>.styl');

const reactMixin = require('react-mixin');

const i18n = require('i18n');

const Actions = require('./actions');
const Store = require('./store');

class <%- Name %> extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="<%= name %>">
                page <%= name %>
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }
}

reactMixin.onClass(<%- Name %>, Reflux.connect(Store));

module.exports = <%- Name %>;
