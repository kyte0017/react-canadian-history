
let Header = React.createClass({
    //There are no propTypes required because we arent assigning values from another resource. We are hardcoding them.
    propTypes: {
    },
    render: function() {
        return(
            React.createElement("div", {className: "header"},
                React.createElement("p", {}, "Canadian History"),
                React.createElement("p", {className: "logo"},
                    React.createElement("img", {src: "images/canadian-flag.png", width: "400px"})
                )
            )
        )
    }
}); 
