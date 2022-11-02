// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBY0K4xN2W1ujJ56oIAXFLzaWSu1OWyHDY",
  authDomain: "my-test-project-f8300.firebaseapp.com",
  projectId: "my-test-project-f8300",
  storageBucket: "my-test-project-f8300.appspot.com",
  messagingSenderId: "875063971108",
  appId: "1:875063971108:web:553b64b977c81123d4b7b1",
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    // icon: "/logo192.png",
  };

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
