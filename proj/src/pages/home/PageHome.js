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

    render() {
        let t = this;
        return (
            <div className="page-home">
                <div className="t-PL16 t-PR16 t-PT20">
                    <Button type="primary" onClick={t.handleClick.bind(t, {
                        type: 'success',
                        content: 'You clicked'
                    })}>Click me</Button>
                </div>
            </div>
        );
    }
}

module.exports = PageHome;
