require('./PageHome.styl');

const reactMixin = require('react-mixin');

const { Toast, Button } = SaltUI;

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

    handlePush() {
        salt.router.push({
            id: 'popwin',
            url: './popwin.html',
            anim: 2,
            needPost: true,
            param: {
                foo: 1,
                bar: 2
            }
        }).then().catch((e) => {
            if (e.errorCode === 1001) {
                location.href = './popwin.html';
            }
        });
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
                    <Button type="secondary" onClick={t.handlePush.bind(t)}>Pop new window</Button>
                </div>
                <div className="t-PL10 t-PR10 t-PT10">
                    <Button type="secondary" onClick={t.handleLink}>Demo</Button>
                </div>
            </div>
        );
    }
}

module.exports = PageHome;
