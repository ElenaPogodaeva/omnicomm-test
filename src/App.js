import React from 'react';
import $ from 'jquery';
import createReactClass from 'create-react-class';
import ApiMixinFactory from './mixins/apiMixin';
import tableMixin from './mixins/tableMixin';
import Pagination from './Pagination';

const apiMixin = new ApiMixinFactory().getApiMixin($.ajax);
const App = createReactClass({
  mixins: [tableMixin, apiMixin],

  render() {
    const self = this;
    const { universities, itemsPerPage, activePage, value } = this.state;
    const start = itemsPerPage * (activePage - 1);
    const end = start + itemsPerPage;
    const currentUniversities = universities.slice(start, end);
    const table = self.renderTable(currentUniversities);

    return (
      <div>
        <label htmlFor="search">Поиск</label>
        <br />
        <input id="search" onChange={this.handleSearchChange} type="text" value={value} />
        <div>{table}</div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={universities.length}
          activePage={activePage}
          onPageChange={(pageNumber) => self.handleClick(pageNumber)}
        />
      </div>
    );
  },
});

export { App };
