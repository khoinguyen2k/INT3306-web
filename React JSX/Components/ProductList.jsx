class ProductList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let listItems = [];
        this.props.products.forEach((p) => {
                let txt = this.props.searchText.toLowerCase();
                let n = p.name.toLowerCase();
                let desc = p.description.toLowerCase();
                listItems.push(<Product name={p.name} description={p.description} isBookmarked={p.isBookmarked}
                                        display={(txt === "" || n.indexOf(txt) > -1 || desc.indexOf(txt) > -1)}/>
                );

            }
        );
        return (<div>{listItems}</div>);
    }
}