import React, { useState, useEffect, Fragment } from 'react';
import man from '../assets/images/user/1.jpg';
import { Container, Row, Col, Form, FormGroup, Card, Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import AuthService from '../services/auth.service';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import instance from '../axios';
import swal from 'sweetalert2';

toast.configure();
const defaultValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup.string().required('Username is Required'),
  password: yup.string().required('Password is Required'),
});

const Signin = (props) => {
  const background = require('../assets/images/auth-layer.png');
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    defaultValues,
    validationSchema: schema,
  });

  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState(localStorage.getItem('profileURL' || man));
  const [name, setName] = useState(localStorage.getItem('Name'));

  const [isuser, setisuser] = useState(localStorage.getItem('isUser'));

  useEffect(() => {
    localStorage.setItem('profileURL', value);
    localStorage.setItem('Name', name);
    localStorage.setItem('isUser', isuser);
  }, [value, name, isuser]);

  useEffect(() => {
    const user = localStorage.getItem('isUser');
    if (user && user != 'null') {
      history.push('/dashboard/default');
    }
  }, []);

  // const loginAuth = async (data) => {
  //   setLoading(true);
  //   try {
  //     await AuthService.login(data).then((res) => {
  //       console.log(data)
  //       if (res.data && res.authToken) {
  //         localStorage.setItem("token", res.authToken);
  //         localStorage.setItem("isUser", true);
  //         setValue(man);
  //         setName(res.data.firstName + " " + res.data.lastName);
  //         setisuser("true");
  //         setTimeout(() => {
  //           window.location.reload();
  //         }, 200);
  //       }
  //       setLoading(false);
  //     });
  //   } catch (error) {
  //     setTimeout(() => {
  //       toast.error(
  //         "Oppss.. The password is invalid or the user does not have a password."
  //       );
  //       setLoading(false);
  //     }, 200);
  //   }
  // };
  const loginAuth = async (data) => {
    // const accessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpcCI6IjE4Mi42OC4yMDIuMTQ0IiwiYnJvd3NlciI6ImNocm9tZSIsInBhZ2VOYW1lIjoicGFydG5lciIsImlhdCI6MTY1ODM4ODA0M30.yxwRhxPObnbStDKLVNhDDP5NObqFpmI_PxGNh0dHRqA";

    // const authAxios=axios.create({
    //   headers:{
    //     Authorization:`Bearer ${accessToken}`
    //   }
    // })

    setLoading(true);
    try {
      await instance.post('/api/user/login', data).then((res) => {
        localStorage.setItem(
          'adminLoggedin',
          JSON.stringify(res.data.data))
        console.log('<><><><><<>:>:LKK', res.data);
        console.log(res.data.message);
        if (res.data && res.data.success === true) {
          localStorage.setItem('isUser', true);
          localStorage.setItem('token', res.data.data.token);
          toast.success('Successfully Login');

          setValue(man);
          console.log(res.message);
          toast.success(res.message);
          setisuser('true');
          setTimeout(() => {
            window.location.reload();
          }, 500);
        } else {
          toast(res.message);
          toast.error('Oppss.. Invalid Login credentials.');
        }
        setLoading(false);
      });
    } catch (error) {
      setTimeout(() => {
        toast.error(
          'Oppss.. The password is invalid or the user does not have a password.'
        );
        setLoading(false);
      }, 200);
    }
  };

  return (
    <Fragment>
      <ToastContainer />
      <div className='page-wrapper'>
        <Container fluid={true}>
          <div className='authentication-main'>
            <Row>
              <Col md='4' className='p-0'>
                <div
                  className='auth-innerleft'
                  style={{ backgroundImage: 'url(' + background + ')' }}
                >
                  <div className='text-center'>
                    <img
                      src={require('../assets/images/login-logo.png')}
                      className='logo-login'
                      alt=''
                    />
                    <hr />
                  </div>
                </div>
              </Col>
              <Col md='8' className='p-0'>
                <div className='auth-innerright'>
                  <div className='authentication-box'>
                    <h4>LOGIN</h4>
                    <h6>
                      Enter your Username and Password For Login or Signup
                    </h6>
                    <Card className='mt-4 p-4 mb-0'>
                      <Form
                        className='theme-form'
                        onSubmit={handleSubmit(loginAuth)}
                      >
                        <FormGroup>
                          <label className='col-form-label pt-0'>
                            Your Name
                          </label>
                          <input
                            type='text'
                            className='form-control form-control-lg'
                            name='email'
                            autoFocus
                            ref={register}
                          />
                        </FormGroup>
                        <FormGroup>
                          <label className='col-form-label'>Password</label>
                          <input
                            type='password'
                            className='form-control form-control-lg'
                            name='password'
                            ref={register}
                          />
                        </FormGroup>

                        <div className='d-flex'>
                          <div className='checkbox p-0'>
                            <input id='checkbox1' type='checkbox' />
                            <label htmlFor='checkbox1'>Remember me</label>
                          </div>
                          <label className='ml-4 mt-2'>
                            <a href=''> Reset Password </a>{' '}
                          </label>
                        </div>

                        <FormGroup className='form-row mt-3'>
                          <Col md='3'>
                            {loading ? (
                              <Button
                                color='primary btn-block'
                                disabled={loading}
                              >
                                LOADING...
                              </Button>
                            ) : (
                              <Button color='primary btn-block' type='submit'>
                                LOGIN
                              </Button>
                            )}
                          </Col>
                        </FormGroup>
                      </Form>
                    </Card>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default Signin;
