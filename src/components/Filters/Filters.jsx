import React from "react";
import SortBy from "./SortBy";
import Pagination from "./Pagination";

export default class Filters extends React.Component {
  render() {
    const {
      page,
      filters: { sort_by, primary_release_year, with_genres },
      onChangeFilters,
      onChangePage,
      onChangeCheckBox,
      onResetFilters
      // total_pages
    } = this.props;

    return (
      <form className="mb-3">
        <SortBy
          sort_by={sort_by}
          primary_release_year={primary_release_year}
          with_genres={with_genres}
          onChangeFilters={onChangeFilters}
          onChangeCheckBox={onChangeCheckBox}
        />
        <div>
          <button
            type="button"
            className="btn btn-default"
            onClick={onResetFilters}
          >
            Сбросить все фильтры
          </button>
        </div>
        <Pagination
          page={page}
          onChangePage={onChangePage}
          // total_pages={total_pages}
        />
      </form>
    );
  }
}
