import { isEmpty } from "lodash";
import React from "react";
// import { connect } from "react-redux";
// import { api } from "../store";

export function SearchBar({ books, className }) {
  // isEmpty(books) && api.book.read();
  return (
    <div className={"pa5 pb5 flex justify-center tc" + className}>
      <input
        type="text"
        className="f2 fw5 shadow-5 pv3 ph5 br-pill mr2 b-dark-green bw0 "
      ></input>
      <button className="fw6 shadow-5  white ph4 br-pill  f3 ttc bg-blue b-dark-green bw0 ">
        search
      </button>
    </div>
  );
}

// export const SearchBar 
// = connect(
//   (state, props) => ({ books: state.book, ...props }),
//   {}
// )(searchBar);
