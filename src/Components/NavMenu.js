
let NavMenu = React.createClass({
     //The href will be used for routing to the prpoer pages with the use of a case statement in the setState funciton at the end 
    render: function() {
        return (
            React.createElement("ul", {className: "nav-menu"},
                React.createElement("li", {},
                    React.createElement("a", {href: "#"}, "History")
                ),

                React.createElement("li", {},
                    React.createElement("a", {href: "#newitem"}, "Add New Item")
                )
            )
        )
    }
}); 
