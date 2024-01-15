import React from "react";
import ProductList from "./ProductList.js";
import SearchBar from "./SearchBar.js";

function SearchableProductList(props) {
    const [searchText, setSearchText] = React.useState('');

    const doSearch = txt => {
        setSearchText(txt);
    };

    return (
        <div>
            <SearchBar onSearch={doSearch} />
            <ProductList products={props.products} searchText={searchText} />
        </div>
    );
}

export default SearchableProductList;