import { useState, useEffect } from 'react'
import instance from "../../axios"
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'

function MagicLink() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const history = useHistory();
  const [inputField, setInputField] = useState({ email: '' })
  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  const [loading, setLoading] = useState(false)
  const submitButton = (e) => {

    e.preventDefault();

    if (inputField.email === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Value Cannot Be Empty !',
      })
    }
    else {
      setLoading(true)
      instance.get('/api/customers/sendMagicLink/' + inputField.email + '')
        .then(response => {
          console.log(response);
          if (response) {
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Check Your email',
              showConfirmButton: false,
              timer: 1500
            })
            localStorage.setItem('LoginInfo', JSON.stringify(response.data));
            console.log("setettettetetteet",response.data)

            const token = response.data.accessToken.split(" ")[1];
            console.log(token)
            history.push('/walletlogin')
          }
          setLoading(false)
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
          Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: error.response.data.error,
            showConfirmButton: false,
            timer: 1500
          })
        })
      setInputField((prevState) => ({
        ...prevState,
        firstName: inputField.firstName,
        password: "",

      }));
    }
  }

  return (
    <>
      {loading &&
        <div className="spinner">
          <span>Loading...</span>
          <div className="half-spinner"></div>
        </div>
      }
      <main>
        <section className="login-reg-bg" style={{ height: '100vh' }}>
          <div className="container-fluid">
            <div className="col-lg-5 col-md-5 mx-auto">
              <div className="verify-email-section">
                <div className="verify-email-wrapper text-center">
                  <div className="content-wrapper">
                    <div className="right-section">
                      <div className="form-container">
                        <div className="form-head-content text-center">
                          <h2>MagicLink</h2>
                        </div>

                        <div className="form-body-content">
                          <div className="form text-center"  >
                            <div className="mb-3  ">
                              <input type="text" className="form-control" onChange={inputsHandler} name="email" value={inputField.email} placeholder="Email" />
                            </div>
                          </div>
                          <div className="mb-3 mt-5">
                            <button onClick={submitButton} className="btn btn-violet text-uppercase w-50">Send</button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default MagicLink;