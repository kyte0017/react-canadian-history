//When we click on the item, we are taken to a more focuessed view of the current item
let ItemPage = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        date: React.PropTypes.string.isRequired,
        description: React.PropTypes.string
    },
//Rendering the current item
    render: function() {
        return (
            React.createElement("div", {},
                React.createElement("h2", {}, this.props.name),
                React.createElement("p", {}, this.props.description),
                React.createElement("p", {}, "Date: " + this.props.date),
             
            )
        )
    }
}); 
