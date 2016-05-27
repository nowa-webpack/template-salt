require('./PageDemo.styl');

const reactMixin = require('react-mixin');

const i18n = require('i18n');

const Actions = require('./actions');
const Store = require('./store');

const { Group, Avatar, Toast } = TingleUI;

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            content: {},
            error: false
        };
    }

    componentDidMount() {
        this.handleClick('67955');
    }

    handleClick(workNo) {
        Toast.show({
            type: 'loading',
            content: 'Loading'
        });
        Actions.fetch({
            workNo: workNo
        }, function(data) {
            Toast.hide();
        });
    }

    render() {
        let t = this;
        return (
            <div className="page-demo">
                <Group>
                    <Group.Head>{i18n('page1.demo')}</Group.Head>
                    <Group.List lineIndent={15} itemIndent={15}>
                    {
                        t.state.content.list ?
                        t.state.content.list.map(function(item) {
                            return (
                                <div className="t-LH44 t-FBH t-FBAC" onClick={t.handleClick.bind(t, item.workNo)}>
                                    <Avatar size="32"/>
                                    <div className="t-FB1 t-PL10">
                                        {item.name}{item.nickName ? '(' + item.nickName + ')' : ''}
                                    </div>
                                </div>
                            )
                        }) : (
                            <div className="t-PL10 t-LH44 t-FBH t-FBAC t-FBJC">
                                {t.state.error ? 'Error' : 'No data'}
                            </div>
                        )
                    }
                    </Group.List>
                </Group>
            </div>
        );
    }
}

reactMixin.onClass(Page, Reflux.connect(Store));

module.exports = Page;
