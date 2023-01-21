import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeHolder, className } = this.props;
    return (
      <input
        className={className}
        type="search"
        placeholder={placeHolder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
