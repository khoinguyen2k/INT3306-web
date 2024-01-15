class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputTextChanged = this.handleInputTextChanged.bind(this);
    }

    handleInputTextChanged(e) {
        this.props.onSearch(e.target.value);
    }

    render() {
        return <input type="text" placeholder="Input text to search" onChange={this.handleInputTextChanged}/>;
    }
}