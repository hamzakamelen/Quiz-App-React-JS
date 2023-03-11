// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcQqvPWv3bxTU1Zzz9_bO0AebLL79xwjE",
  authDomain: "quiz-app-with-routers.firebaseapp.com",
  projectId: "quiz-app-with-routers",
  storageBucket: "quiz-app-with-routers.appspot.com",
  messagingSenderId: "69534268766",
  appId: "1:69534268766:web:16917a2da7c8f50bb7a3cf",
  measurementId: "G-VLTN1J182R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//  Ye humne kra hai isko agaye use krny k lye
export default app;