import React from 'react';
import { connect } from 'react-redux';
import { addAssignment } from '../actions';

class InputsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textValue: '' };
  }

  render() {
    const { add } = this.props;
    const { textValue } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={event => this.setState({ textValue: event.target.value })}
        />
        <button onClick={() => add(textValue)}>
          Adicionar tarefa
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: e => dispatch(addAssignment(e))});

export default connect(null, mapDispatchToProps)(InputsList);