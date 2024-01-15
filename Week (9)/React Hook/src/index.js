import React from 'react';
import ReactDOM from "react-dom";
import SearchableProductList from './views/Component/SearchableProductList.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SearchableProductList
    products={[{name: "Dell Laptops", description: "Laptops from Dell", isBookmarked: false}, {
        name: "Dell PCs",
        description: "PCs from Dell",
        isBookmarked: true
    }, {name: "HP Laptops", description: "Laptops from HP", isBookmarked: false}]}/>);
