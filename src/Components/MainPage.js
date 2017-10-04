let MenuItem = React.createClass({
    propTypes: {
        key: React.PropTypes.number,
        name: React.PropTypes.string.isRequired,
        date: React.PropTypes.string.isRequired,
        description: React.PropTypes.string
    },
//Creating the node for the item
    render: function() {
        return (
            React.createElement("li", {className:"list-item"},
                React.createElement("a", {className: "menu-item-link", href: "#/item/" + this.props.id},
                    React.createElement("h2", {className: "name"}, this.props.name),
                    React.createElement("div", {className: "date"}, this.props.date),
                    React.createElement("div", {}, this.props.description)
                )
            )
        )
    }
});

let MenuItems = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },
//Looping through the array while usuing the MenuItem function defined above
    render: function() {
        return (
            React.createElement("ul", {}, this.props.items.map(i => React.createElement(MenuItem, i)))
        )
    }
});
//Injecting the newly created array of MenuItems
let MainPage = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },

    render: function() {
        return (
            React.createElement(MenuItems, {items: this.props.items})
        )
    }
}); 
