import React from "react";
import "./product.scss";

function Product(props) {
    const [isBookmarked, setIsBookmarked] = React.useState(props.isBookmarked);

    const handleClick = () => {
        setIsBookmarked(prevState => !prevState);
    };

    return (
        <div className={props.display ? (isBookmarked ? 'box yellow' : 'box') : 'nodisplay'}>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button onClick={handleClick}>
                {isBookmarked ? 'Remove bookmark' : 'Set bookmark'}
            </button>
        </div>
    );
}

export default Product;