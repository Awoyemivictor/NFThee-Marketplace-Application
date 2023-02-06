import instance from "../axios";

export const authLogin = async (email, token) => {
    return await instance().get(`/api/login/email?email_address=${email}`, {}, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer' + token
        }
    }).then(response => console.info(response))
}
