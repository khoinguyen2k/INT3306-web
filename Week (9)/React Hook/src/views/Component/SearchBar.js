import React from "react";

function SearchBar(props) {
    const handleInputTextChanged = e => {
        props.onSearch(e.target.value);
    };

    return <input type="text" placeholder="Input text to search" onChange={handleInputTextChanged} />;
}

export default SearchBar;