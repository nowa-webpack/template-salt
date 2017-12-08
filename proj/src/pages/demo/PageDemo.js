import { Component } from 'refast';
import { Group } from 'saltui';

import List from 'components/list';
import Info from 'components/info';
import logic from './logic';
import './PageDemo.less';

export default class Page extends Component {

  constructor(props) {
    super(props, logic);
  }

  componentDidMount() {
    this.handleClick('1234');
  }

  handleClick(workNo) {
    this.dispatch('fetch', { workNo });
  }

  render() {
    const t = this;
    const { list = [], error } = t.state;
    const Tag = list && list.length ? List : Info;

    return (
      <div className="page-demo">
        <Group>
          <Group.Head>DEMO</Group.Head>
          <Group.List lineIndent={15} itemIndent={15}>
            <Tag
              list={list}
              error={error}
              onClick={t.handleClick.bind(t)}
            />
          </Group.List>
        </Group>
      </div>
    );
  }
}
