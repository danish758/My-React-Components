import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBY0K4xN2W1ujJ56oIAXFLzaWSu1OWyHDY",
  authDomain: "my-test-project-f8300.firebaseapp.com",
  projectId: "my-test-project-f8300",
  storageBucket: "my-test-project-f8300.appspot.com",
  messagingSenderId: "875063971108",
  appId: "1:875063971108:web:553b64b977c81123d4b7b1",
};
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const messaging = getMessaging(firebase);

const publicKey =
  "BJNYRgFb1K9JWAP9aCG0tkdBTtPEDK6UqJnZjxI74_RoX25FGTVbjQuDYbOsu0WllebENa144sOYSxD_2Mgmv2s";

export const getTokenFunc = async (setTokenFound) => {
  let currentToken =
    "BJNYRgFb1K9JWAP9aCG0tkdBTtPEDK6UqJnZjxI74_RoX25FGTVbjQuDYbOsu0WllebENa144sOYSxD_2Mgmv2s";
  try {
    currentToken = await getToken(messaging, { vapidKey: publicKey });
    // if (currentToken) {
    //   setTokenFound(true);
    // } else {
    //   setTokenFound(false);
    // }
  } catch (error) {
    console.log("An error occurred while retrieving token.", error);
  }
  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
