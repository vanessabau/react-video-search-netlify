import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment video-search__bar">
        <form
          className="ui form"
          onSubmit={this.onFormSubmit}
        >
          <div className="field">
            <label>YouTube Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Enter search term here"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
