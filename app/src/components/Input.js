import React from 'react'
import {
  TextField,
} from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles'


const CustomTextField = withStyles({
  root: {
    '& .MuiFormLabel-root': {
      '@media (min-width:600px)': {
        fontSize: '1.25rem',
        opacity: 0.85,
      },
      color: '#fefefe',
    },
    '& .MuiInput-input': {
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
      color: '#fefefe',
      transition: 'background 0.3s ease',
    },
    '& label.Mui-focused': {
      color: '#fefefe',
    },
    '&:hover .MuiInput-input': {
      background: 'rgba(255, 255, 255, 0.1)',
    },
    '&:hover .MuiInput-underline:before': {
      borderBottomColor: '#fefefe',
      borderBottom: '3px solid',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#fefefe',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fefefe',
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(0px, -10px)',
    },
  },
})(TextField)


class Input extends React.Component {

  componentDidMount() {
    const { passInputRef } = this.props
    if ( typeof(passInputRef) === 'function' ) {
      passInputRef(this.input.getElementsByTagName('input')[0])
    }
  }

  handleOnChange(event) {
    this.props.onChange(event.target.value)
  }

  render() {
    const { autoFocus, query, disabled } = this.props
    return (
      <CustomTextField
        ref={this.input}
        id={'q'}
        name={'q'}
        label={'Search'}
        value={query}
        disabled={disabled}
        autoFocus={autoFocus}
        autoComplete="off"
        onChange={this.handleOnChange.bind(this)}
        fullWidth
      />
    )
  }
}


export default Input