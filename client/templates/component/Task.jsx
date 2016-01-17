Task = React.createClass({
	proTypes: {
		task: React.PropTypes.object.isRequired
	},

	render() {
		return (
			<li>{this.props.task.text}</li>
		);
	}
});