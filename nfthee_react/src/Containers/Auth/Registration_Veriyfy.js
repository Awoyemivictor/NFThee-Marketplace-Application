import { useState, useEffect } from 'react';
import instance from '../../axios';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Magic } from 'magic-sdk';
import { useAppDispatch } from '../../hooks/useRedux';
import { setUser } from '../../redux/userSlice';
import { setMeta } from '../../redux/metaSlice';
import axios from 'axios';

function Registration_Veriyfy() {
  // Constants
  let magic = new Magic('pk_live_A57B8D59D07E9901');
  const location = useLocation();
  const history = useHistory();
  const dispatch = useAppDispatch();

  // States
  const [loading, setLoading] = useState(false);
  const [registerData, setRegisterData] = useState(location.state);
  const [userMeta, setUserMeta] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleVerify = async (e) => {
    e.preventDefault();

    if (registerData.email_address) {
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Check Your email',
        showConfirmButton: false,
        timer: 1500,
      });
      await instance
        .post('/api/signup', registerData)
        .then((response) => {
          localStorage.setItem(
            'userLoggedIn',
            JSON.stringify(response.data.data)
          );
        });
    } else {
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'please provide valid email',
        showConfirmButton: false,
        timer: 1500,
      });
    }

    const didToken = await magic.auth.loginWithMagicLink({
      email: registerData.email_address,
      redirectURI: new URL('/walletlogin', window.location.origin).href,
    });
    const res = await instance
      .post('/api/signup', registerData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + didToken,
        },
      })
      .catch((err) => {
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: 'User exists',
          showConfirmButton: false,
          timer: 1500,
        });
      });

    if (res.status === 200) {
      const userMetaData = await magic.user.getMetadata();
      // await dispatch(setMe(userMetaData))
      await setUserMeta(userMetaData);
      await dispatch(setMeta(userMetaData));
      console.info(userMetaData);
    }

    dispatch(setUser(registerData));
    history.push('/walletlogin');
  };

  return (
    <>
      {loading && (
        <div className='spinner'>
          <span>Loading...</span>
          <div className='half-spinner'></div>
        </div>
      )}
      <main>
        <section className='login-reg-bg' style={{ height: '100vh' }}>
          <div className='container-fluid'>
            <div className='col-lg-7 col-md-7 mx-auto'>
              <div className='verify-email-section'>
                <div className='verify-email-wrapper text-center'>
                  <div className='image-wrapper mb-4'>
                    <img src='assets/images/mail-img.png' alt='' />
                  </div>
                  <div className='content-wrapper'>
                    <h2>Verify Your Email Address</h2>
                    <p>
                      You've entered <a href>{registerData.email_address}</a> as
                      the email address for your account. please verify this
                      email address by clicking button below.
                    </p>
                    <div className='col-lg-7 col-md-7 m-auto'>
                      <Link to='/login'>
                        <button
                          onClick={handleVerify}
                          className='btn btn-violet w-100'
                        >
                          Verify Your Mail
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Registration_Veriyfy;
