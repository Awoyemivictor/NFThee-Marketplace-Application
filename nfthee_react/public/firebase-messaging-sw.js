/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js')


// firebase. initializeApp ({
// messagingSenderId: "671783248874"
// })

const firebaseConfig = {
  apiKey: "AIzaSyDWwa4ARoAcy1tqHD-sVQcGDvY9VaLhRCg",
  authDomain: "fir-notification-bbaa1.firebaseapp.com",
  projectId: "fir-notification-bbaa1",
  storageBucket: "fir-notification-bbaa1.appspot.com",
  messagingSenderId: "624615738681",
  appId: "1:624615738681:web:809e9145ff8a4d167a2ce8",
  measurementId: "G-ENH30CJQB1"
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