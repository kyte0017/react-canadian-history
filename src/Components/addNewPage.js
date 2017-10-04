//This js if creating the submit form component
let AddNewForm = React.createClass({
	//Creating the new object to be pushed into the Menu array
	propTypes: {
		menuItem: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired,
		onSubmit: React.PropTypes.func.isRequired
	},
	//The function which assigns the name input to property to the new menu item
	onNameChange: function(e) {
		this.props.onChange(Object.assign({}, this.props.menuItem, {name: e.target.value}));
	},
	//The function which assigns the date input to property to the new menu item
	onDateChange: function(e) {
		this.props.onChange(Object.assign({}, this.props.menuItem, {date: e.target.value}));
	},
    //The function which assigns the description input to property to the new menu item
	onDescriptionChange: function(e) {
		this.props.onChange(Object.assign({}, this.props.menuItem, {description: e.target.value}));
	},
	//The submission wraps up the new item
	onSubmit: function(e) {
		this.props.onSubmit(this.props.menuItem);
	},
	//The html form that is rendered
	render: function() {
		return (
			React.createElement('form', {},
				//The rendered name input
				React.createElement('input', {
					type: 'text',
					placeholder: 'Name',
					value: this.props.menuItem.name,
					onChange: this.onNameChange
				}),
				//The rendered date input 
				React.createElement('input', {
					type: 'text',
					placeholder: 'Date: Month Day, Full Year',
					value: this.props.menuItem.date,
					onChange: this.onDateChange
				}),
				//The rendered description input
				React.createElement('textarea', {
					placeholder: 'Description',
					value: this.props.menuItem.description,
					onChange: this.onDescriptionChange
				}),
				React.createElement('button', {type: 'button', onClick: this.onSubmit}, 'Submit')
			)
		);
	}
});

//The New Page while will display the form. 
let AddNewPage = React.createClass({
	propTypes: {
		menuItem: React.PropTypes.object.isRequired,
		onNewMenuItemChange: React.PropTypes.func.isRequired,
		onSubmitNewItem: React.PropTypes.func.isRequired
	},
	render: function() {
		return (
			React.createElement('div', {},
				React.createElement(AddNewForm, {menuItem: this.props.menuItem, onChange: this.props.onNewMenuItemChange, onSubmit: this.props.onSubmitNewItem})
			)
		);
	}
}); 
