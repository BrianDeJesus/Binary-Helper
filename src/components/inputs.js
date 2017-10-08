import React from 'react';
import PropTypes from 'prop-types';

class InputForm extends React.Component {

    render() {
      return (
        <form className="InputForm">
          <input className="inputBox" type="text" placeholder="E.g. 1001 + 0001" value={this.props.children} onChange={this.props.handleInputChange} />
        </form>
      );
    }
}

InputForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
}

export default InputForm;
