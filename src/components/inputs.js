import React from 'react';
import PropTypes from 'prop-types';

class InputForm extends React.Component {

    render() {
      return (
        <form className="InputForm">
          <label>Input: </label>
            <input className="inputBox" type="text" value={this.props.children} onChange={this.props.handleInputChange} />
        </form>
      );
    }
}

InputForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
}

export default InputForm;
