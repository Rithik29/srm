
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth ,getMultiFactorResolver, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGIFV8zZyZxmpJ52sLpEY3KCLOlBoswEs",
  authDomain: "hacknsut-3f5a0.firebaseapp.com",
  projectId: "hacknsut-3f5a0",
  storageBucket: "hacknsut-3f5a0.appspot.com",
  messagingSenderId: "849591276845",
  appId: "1:849591276845:web:5ce77cc24b77ebd4f3efa4",
  measurementId: "G-7P5RPTS3GM"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
const provider=new GoogleAuthProvider()