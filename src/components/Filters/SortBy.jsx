import React from "react";
import PropTypes from "prop-types";
import { genres } from "./Genres";

const years = new Array(70).fill(0).map((_, i) => 2020 - i);

export default class SortBy extends React.Component {
  static propTypes = {
    sort_by: PropTypes.string.isRequired,
    onChangeFilters: PropTypes.func.isRequired
  };

  static defaultProps = {
    options: [
      {
        label: "Популярные по убыванию",
        value: "popularity.desc"
      },
      {
        label: "Популярные по возростанию",
        value: "popularity.asc"
      },
      {
        label: "Рейтинг по убыванию",
        value: "vote_average.desc"
      },
      {
        label: "Рейтинг по возростанию",
        value: "vote_average.asc"
      }
    ],

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
  };

  render() {
    const {
      sort_by,
      primary_release_year,
      onChangeFilters,
      options,
      with_genres,
      onChangeCheckBox
    } = this.props;

    console.log("props in sort by", this.props.with_genres);
    return (
      <div className="form-group">
        <label htmlFor="sort_by">Сортировать по:</label>
        <select
          className="form-control"
          id="sort_by"
          name="sort_by"
          value={sort_by}
          onChange={onChangeFilters}
        >
          {options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
        <select
          className="form-control"
          id="primary_release_year"
          name="primary_release_year"
          value={primary_release_year}
          onChange={onChangeFilters}
        >
          <option key={0} value="">
            Год выхода фильма
          </option>
          {years.map(year => {
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
        <label>Жанр:</label>
        <div
          className="form-check"
          id="with_genres"
          name="with_genres"
          value="false"
          key={genres.id}
          checked={with_genres}
          onChange={onChangeCheckBox}
        >
          {genres.map(genre => {
            return (
              <div key={genre.id}>
                <label className="form-check-label">
                  <input type="checkbox" value={genre.id} />
                  {genre.name}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
