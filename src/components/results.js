import React from 'react';
import PropTypes from 'prop-types';

class Results extends React.Component {

    render() {
        if ((this.props.decResult || (this.props.decResult===0 && this.props.exp.length >0)) && !this.props.isInvalidInput) {
          return (
            <div className="Exp">
             <h2> Result </h2>
            <table className="Table">
            <tbody>
                <tr><td>Decimal:</td><td>{this.props.decResult}</td></tr>
                <tr><td>Binary:</td><td>{this.props.binResult}</td></tr>
                <tr><td>Hex:</td><td>{this.props.hexResult}</td></tr>
                </tbody>
              </table>
            </div>
          );
        }  else if(this.props.isInvalidInput){
              return (
                <div> ??? Invalid Input </div>
              );
            }
        return null;
      }
}

Results.propTypes = {
  exp: PropTypes.string.isRequired,
  decResult: PropTypes.number.isRequired,
  binResult: PropTypes.string.isRequired,
  hexResult: PropTypes.string.isRequired,
  isInvalidInput: PropTypes.bool.isRequired
}

export default Results;
