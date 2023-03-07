/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js')


// firebase. initializeApp ({
// messagingSenderId: "671783248874"
// })

const firebaseConfig = {
    apiKey: "AIzaSyBzKDMtvepRRTu409OOxHMYDf3buUpCXiE",
    authDomain: "push-notification-c4c75.firebaseapp.com",
    projectId: "push-notification-c4c75",
    storageBucket: "push-notification-c4c75.appspot.com",
    messagingSenderId: "671783248874",
    appId: "1:671783248874:web:60ae174244d7123f430893",
    measurementId: "G-QWYZ09J8Z6"
  };

// const initMessaging = firebase.messaging();

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload.data,payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/notification.png",
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});



// const app = initializeApp(firebaseConfig);
// const messaging = firebase.messaging()