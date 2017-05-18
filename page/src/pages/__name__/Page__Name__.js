import { withRouter } from 'react-router'; <% if (i18n) { %>
import i18n from 'i18n';<% } %><% if (logic) { %>
import { Component } from 'no-flux';
import logic from './logic';
import './Page<%- Name %>.less';

class Page<%- Name %> extends Component {

  constructor(props) {
    super(props, logic);
  }

  render() {
    return (
      <div className="page-<%= name %>">
        page <%= name %>
      </div>
    );
  }
}
<% } else { %>
import { Component } from 'react';
import './Page<%- Name %>.less';

class Page<%- Name %> extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page-<%= name %>">
        page <%= name %>
      </div>
    );
  }
}
<% } %>
export default withRouter(Page<%- Name %>);