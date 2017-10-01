import React from 'react';
import PropTypes from 'prop-types';

class Expression extends React.Component {

    render() {
        if (this.props.expression) {
          return (
            <div className="Exp">
              {this.props.expression}
            </div>
          );
        }
        return null;
      }
}

Expression.propTypes = {
  expression: PropTypes.string.isRequired,
}

export default Expression;
