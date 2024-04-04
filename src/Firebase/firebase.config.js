// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuiJ66ZMzYSTc8CAEtjvP4CdQeHBw7bvQ",
  authDomain: "news-portal-react-fireba-6ed56.firebaseapp.com",
  projectId: "news-portal-react-fireba-6ed56",
  storageBucket: "news-portal-react-fireba-6ed56.appspot.com",
  messagingSenderId: "684964661696",
  appId: "1:684964661696:web:04b2baf2ea6d4b41c86025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;