import React from "react";
import PropTypes from "prop-types";
// import { totalPages } from "../Movies/MoviesList";

export default class Pagination extends React.Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired
    // total_pages: PropTypes.number.isRequired,
  };

  render() {
    const { page, onChangePage, total_pages } = this.props;
    console.log("very important", total_pages);
    return (
      <div>
        <div>
          Page {page} out of {total_pages}
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              onChangePage(page - 1);
            }}
            disabled={page === 1}
          >
            Назад
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onChangePage.bind(null, page + 1)}
          >
            Вперед
          </button>
        </div>
      </div>
    );
  }
}
