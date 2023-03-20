// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken,onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWwa4ARoAcy1tqHD-sVQcGDvY9VaLhRCg",
  authDomain: "fir-notification-bbaa1.firebaseapp.com",
  projectId: "fir-notification-bbaa1",
  storageBucket: "fir-notification-bbaa1.appspot.com",
  messagingSenderId: "624615738681",
  appId: "1:624615738681:web:809e9145ff8a4d167a2ce8",
  measurementId: "G-ENH30CJQB1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

console.log("message",app,"sdvsdv",messaging)

const vaid_key ="BDoxIMQU1OQJhZvdWLkbvEXIgyLX0SAKSD_c2C0K0g6KGe-eZNZqQCUQfwRKg7arwdlixLa6iGOTI6t482c95zQ"

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

// export const onMessageListeners = () =>
//   new Promise((resolve) => {
//     messaging.onMessage((payload) => {
//       resolve(payload);
//     });
//   });