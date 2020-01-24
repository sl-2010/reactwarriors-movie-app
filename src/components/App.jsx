import React from "react";
import Filters from "./Filters/Filters";
import MoviesList from "./Movies/MoviesList";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filters: {
        sort_by: "popularity.desc",
        primary_release_year: "",
        with_genres: {
          28: false,
          12: false,
          16: false,
          35: false,
          80: false,
          99: false,
          18: false,
          10751: false,
          14: false,
          36: false,
          27: false,
          10402: false,
          9648: false,
          10749: false,
          878: false,
          10770: false,
          53: false,
          10752: false,
          37: false
        }
      },
      page: 1
      // total_pages: ""
    };
  }

  onChangeFilters = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        [name]: value
      }
    }));
  };

  onChangeCheckBox = event => {
    event.persist();
    const name = event.target.filters.with_genres.id;
    const checked = event.target.filters.with_genres.checked;
    this.setState(prevState => ({
      // ...prevState,
      with_genres: {
        ...prevState.filters.with_genres,
        [name]: checked
      }
    }));
    console.log("genres name state in App", this.state.filters.with_genres);
  };

  onResetFilters = event => {
    this.setState({
      sort_by: "popularity.desc",
      primary_release_year: "",
      with_genres: {
        28: false,
        12: false,
        16: false,
        35: false,
        80: false,
        99: false,
        18: false,
        10751: false,
        14: false,
        36: false,
        27: false,
        10402: false,
        9648: false,
        10749: false,
        878: false,
        10770: false,
        53: false,
        10752: false,
        37: false
      },
      page: 1
    });
  };

  onChangePage = page => {
    // console.log("page", page);
    this.setState({
      page
    });
  };

  render() {
    const { filters, page } = this.state;
    // const { total_pages } = this.props;
    console.log("with_genres", this.state.filters.with_genres);

    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-4">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-body">
                <h3>Фильтры:</h3>
                <Filters
                  filters={filters}
                  page={page}
                  onChangeFilters={this.onChangeFilters}
                  onChangePage={this.onChangePage}
                  onChangeCheckBox={this.onChangeCheckBox}
                  total_pages={total_pages}
                />
              </div>
            </div>
          </div>
          <div className="col-8">
            <MoviesList
              filters={filters}
              page={page}
              onChangePage={this.onChangePage}
            />
          </div>
        </div>
      </div>
    );
  }
}
