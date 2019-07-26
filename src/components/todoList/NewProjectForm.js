import React, { Component } from 'react';
import { addProject } from './actions';
import { connect } from 'react-redux';

class NewProjectForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: ''
    };
    this.projectNameInput = React.createRef();
  }

  componentDidMount() {
    this.projectNameInput.current.focus();
  }

	onChange = event => {
    this.setState({name: event.target.value})
  }

	onSubmit = event => {
		event.preventDefault();
    this.props.addProject(this.state.name);
		this.setState({name: ''});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} id="new-project-form">
				<input ref={this.projectNameInput} autoFocus={true} value={this.state.name} onChange={this.onChange}/>
        <button>add project</button>
      </form>
    );
  }
}

export default connect(null, { addProject })(NewProjectForm);

