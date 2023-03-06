// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken,onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzKDMtvepRRTu409OOxHMYDf3buUpCXiE",
  authDomain: "push-notification-c4c75.firebaseapp.com",
  projectId: "push-notification-c4c75",
  storageBucket: "push-notification-c4c75.appspot.com",
  messagingSenderId: "671783248874",
  appId: "1:671783248874:web:60ae174244d7123f430893",
  measurementId: "G-QWYZ09J8Z6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

console.log("message",app,"sdvsdv",messaging)

const vaid_key ="BNQIbgPpj9bogowsSHWXDYrGMvlmyLNyiZCbgqCmN9gNLeC2IfNEaoWreLpfP3h9qszEXv0fIlBPHBw1HpVMqyY"

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: vaid_key })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        return currentToken;
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};


export const onMessageListener = () =>{
    onMessage(messaging, (payload) => {
      var notificationTitle = payload.data.title;
        console.log(444,payload);
        const notificationOptions = {
          body: payload.data.body,
          icon: "/notification.png",
          // data: {
          //     click_action: payload.data.click_action,
          // }
        };
        new Notification(notificationTitle,notificationOptions);
    });
};
