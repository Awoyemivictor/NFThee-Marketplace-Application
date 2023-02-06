import {useEffect } from 'react'

function Login_Verify() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <>
         <main>
        <section className="login-reg-bg" style={{height: '100vh'}}>
          <div className="container-fluid">
            <div className="col-lg-7 col-md-7 mx-auto">
              <div className="verify-email-section">
                <div className="verify-email-wrapper text-center">
                  <div className="image-wrapper mb-4">
                    <img src="assets/images/mail-img.png" alt="" />
                  </div>
                  <div className="content-wrapper">
                    <h2>Check Your Mail</h2>
                    <p>A Verification link has been sent to your email address. <br /> <a href>Johndoe@Gmail.Com</a></p>
                    <div className="col-lg-7 col-md-7 m-auto mb-4">
                      <button className="btn btn-violet w-100">Verify Your Mail</button>
                    </div>
                    <span className="resend-text"><a href>Resend Mail</a></span>
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

export default Login_Verify;
