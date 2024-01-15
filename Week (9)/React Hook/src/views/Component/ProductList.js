import React from "react";
import Product from "./Product.js";

function ProductList(props) {
    return (
        <div>
            {props.products.map(p => {
                const txt = props.searchText.toLowerCase();
                const n = p.name.toLowerCase();
                const desc = p.description.toLowerCase();
                const display = txt === '' || n.indexOf(txt) > -1 || desc.indexOf(txt) > -1;

                return (
                    <Product
                        key={p.name}
                        name={p.name}
                        description={p.description}
                        isBookmarked={p.isBookmarked}
                        display={display}
                    />
                );
            })}
        </div>
    );
}

export default ProductList;