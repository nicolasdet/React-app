import React from 'react';
import TextField from '@material-ui/core/TextField'
import { connect } from 'react-redux';
import validator from 'validator';
import {updateEmail} from '../../actions/custom.actions';

class LoginForm extends React.Component {

  constructor() {
    super();

      this.state = {
        valid: false,

      };
  }

  handleEmailChange = (e) => {
    const valide = validator.isEmail(e.target.value);

      if(valide === true){
        this.setState({ valid: true });
      }else {
        this.setState({ valid: false });
      }

    this.props.updateEmail(e.target.value);
  }

  render() {
      return (
        <form  noValidate autoComplete="off">
          <TextField
            error={!this.state.valid}
            id="standard-name"
            label="Email"
            value={this.props.data.email}
            onChange={this.handleEmailChange}
            margin="normal"
          />    
        </form>    
      );
  }
}

function mapStateToProps(state) {
  return {
    data: {
      email:  state.customData.email,
    }
  };
}

export default connect(mapStateToProps, { updateEmail })(LoginForm);