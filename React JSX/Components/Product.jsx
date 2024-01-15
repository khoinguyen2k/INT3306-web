class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isBookmarked: this.props.isBookmarked}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({isBookmarked: !prevState.isBookmarked}));
    }

    render() {
        return (<div className={this.props.display ? (this.state.isBookmarked ? 'box yellow' : 'box') : "nodisplay"}>
            <h1>{this.props.name}</h1> <p>{this.props.description}</p>
            <button onClick={this.handleClick}> {this.state.isBookmarked ? 'Remove bookmark' : 'Set bookmark'} </button>
        </div>);
    }
}