require('./PageHome.styl');

const reactMixin = require('react-mixin');

const { Toast, Button } = TingleUI;

class PageHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleClick(options) {
        Toast.show(options);
    }

    handleLink() {
        location.hash = 'demo';
    }

    render() {
        let t = this;
        return (
            <div className="page-home">
                <div className="t-PL10 t-PR10 t-PT10">
                    <Button type="primary" onClick={t.handleClick.bind(t, {
                        type: 'success',
                        content: 'You clicked'
                    })}>Click me</Button>
                </div>
                <div className="t-PL10 t-PR10 t-PT10">
                    <Button type="secondary" onClick={t.handleLink}>Demo</Button>
                </div>
            </div>
        );
    }
}

module.exports = PageHome;
