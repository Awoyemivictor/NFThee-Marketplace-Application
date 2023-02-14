import instance from "../axios";

export const authLogin = async (email, token) => {
    return await instance().get(`/api/login/email?email_address=${email}`, {}, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer' + token
        }
    }).then(response =>{
        localStorage.setItem("userLoggedIn",JSON.stringify(response.data.data))
        console.info(response)})
}
