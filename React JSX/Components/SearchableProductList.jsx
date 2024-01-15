class SearchableProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchText: ""};
        this.doSearch = this.doSearch.bind(this);
    }

    doSearch(txt) {
        this.setState({searchText: txt});
    }

    render() {
        return <div>
            <SearchBar onSearch={this.doSearch}/>
            <ProductList products={this.props.products} searchText={this.state.searchText}/>
        </div>;
    }
}