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
      <div className="row mt-3 search-bar">
        <form onSubmit={this.onFormSubmit} className="card p-3 w-100">
          <div className="form-group">
            <label>Video Search</label>
            <input
              type="text"
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
