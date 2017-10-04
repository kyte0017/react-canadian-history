let FooterItem = React.createClass({
	//Since we are accessing an array for these values, we need to create propTypes.
	propTypes: {
		text: React.PropTypes.string,
		link: React.PropTypes.string
	},
	render: function() {
		//the function which creates the nodes
		return (
			React.createElement('p', {className: 'footer'},
				this.props.text,
				React.createElement('a', {href: this.props.link}, this.props.link)
			)
		);
	}
});
//We are looping through of array of array items, applying the footer item function
let Footer = React.createClass({
	propTypes: {
		items: React.PropTypes.array
	},
	render: function() {
		return (
			React.createElement('div', {}, this.props.items.map(i => React.createElement(FooterItem, i)))
		);
	}
}); 
