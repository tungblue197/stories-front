import React from 'react';
import { Container, Grid, Card, CardContent, Typography, TextField, Button, Box } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from './action';
import { Formik, Form } from 'formik';
import AlertBox from '../../components/Alerts/AlertBox';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import useStyles from './styles';

const Login = () => {
    const classes = useStyles();
    const { error, errorMsg, login } = useSelector(state => state.login);
    const validateSchema = Yup.object().shape({
        username: Yup.string().required('Tài khoản rỗng!').max(30, 'Tài khoản quá 30 ký tự!').min(6, 'Tài khoản dưới 6 ký tự!'),
        password: Yup.string().required('Không mật khẩu!').max(30, 'Mật khẩu quá 30 ký tự!').min(6, 'Mật khẩu dưới 6 ký tự!')
    })
    const dispatch = useDispatch();
    if (login) return <Redirect to="/app/dashboard" />
    return (
        <Container className={classes.loginWrapper}>
            <Grid className={classes.loginContainer} container justify="center" alignItems="center">
                <Grid item md={4} xs sm={7}>
                    <Formik
                        initialValues={{
                            username: '',
                            password: ''
                        }}
                        onSubmit={(user) => {
                            dispatch(loginRequest(user));
                        }}
                        validateSchema={validateSchema}
                    >
                        {
                            ({ values, handleChange, handleBlur, handleSubmit,errors }) => (
                                <Form >
                                    <Card>
                                        <CardContent className={classes.loginBox}>
                                            <Box className={classes.titleBox}>
                                                <AccountCircleIcon className={classes.loginIcon} />
                                                <Typography className={classes.loginTitle} variant="body1">
                                                    Đăng Nhập
                                                </Typography>
                                            </Box>
                                            <Box className={classes.inputBox}>
                                                <TextField  placeholdervalue={values.username} name="username" onChange={handleChange} onBlur={handleBlur} className={classes.loginInput} label="Tài khoản" />
                                            </Box>
                                            <Box className={classes.inputBox}>
                                                <TextField error={errors.username} value={values.password} name="password" onChange={handleChange} onBlur={handleBlur} className={classes.loginInput} type="Password" label=" Mật khẩu" />
                                            </Box>
                                            <Box>
                                                <Button
                                                    onClick={handleSubmit}
                                                    className={classes.loginButton} color="primary" variant="contained">Đăng nhập</Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Form>
                            )
                        }
                    </Formik>

                </Grid>
            </Grid>
            <AlertBox title={errorMsg} open={error} duration={1000} type="error" />
        </Container>
    )
}

export default Login;