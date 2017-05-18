import { Component } from 'react';
import './<%- Name %>.less';

export default class <%- Name %> extends Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {

  }
  static propTypes = {

  }
  render() {
    return (
      <div className="mod-<%= name %>">
        component <%= name %>
      </div>
    );
  }
}
