import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { DialogContent } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useLoginContext } from '../contexts/LoginContext';

function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const loginCtx = useLoginContext()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return !loginCtx.isAuth ? (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Create Account</DialogTitle>
        <DialogContent className='formCol'>
            <Formik
                initialValues={{ name: '', email: '', password: '', submit: null }}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                        .min(2, 'Name must be at least 2 characters.')
                        .max(50, 'Name is too long. (must be less than 50 characters)')
                        .required('Name is required.'),
                    email: Yup.string()
                        .email('Must be a valid email.')
                        .max(50)
                        .required('Email is required'),
                    password: Yup.string()
                        .min(8, 'Password is too short (must be at least 8 characters)')
                        .max(50, 'Password is too long (must be at most 50 characters)')
                        .required('Password is required'),
                })}
                onSubmit={ (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        setName(name);
                        setEmail(email);
                        setPassword(password);
                        loginCtx.setName(values.name);
                        loginCtx.setEmail(values.email);
                        loginCtx.setPassword(values.password);
                        loginCtx.login()
                    } catch (err) {
                        console.log(err);
                    }
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) =>(
                <form onSubmit={handleSubmit}>
                    <TextField 
                    className='formTxtF' 
                    required 
                    id="out-req-name" 
                    type='text' 
                    label="Name" 
                    variant="outlined"
                    name='name'
                    tabIndex={0}
                    autoFocus
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                    />
                    <TextField 
                    className='formTxtF' 
                    required 
                    id="outlined-req-email" 
                    type='email' 
                    label="Email" 
                    variant="outlined"
                    name='email'
                    tabIndex={0}
                    autoFocus
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                    />
                    <TextField 
                    className='formTxtF' 
                    required 
                    id="outlined-req-pass" 
                    type='password' 
                    label="Password" 
                    variant="outlined"
                    name='password'
                    tabIndex={0}
                    autoFocus
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                    />
                    <Button 
                    onClick={handleSubmit} 
                    type='submit' 
                    className='formTxtF' 
                    variant="contained" 
                    size="large" 
                    color="primary">Create Account</Button>
                </form>
                )}
            </Formik>
        </DialogContent>
    </Dialog>
  ) : (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Account Creation Successful!</DialogTitle>
    </Dialog>
  )
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <>
        <MenuItem onClick={handleClickOpen}>Login
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Open simple dialog
        </Button> */}
        </MenuItem>
        <SimpleDialog open={open} onClose={handleClose} />
    </>
  );
}

//export default Login