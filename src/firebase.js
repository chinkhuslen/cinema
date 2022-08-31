
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs,where,query, updateDoc,doc } from "firebase/firestore";
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvgO3zjGmUonvUpExUy4L8ZXzjJcYK7ZI",
  authDomain: "cinema-ch.firebaseapp.com",
  projectId: "cinema-ch",
  storageBucket: "cinema-ch.appspot.com",
  messagingSenderId: "625690063199",
  appId: "1:625690063199:web:ea3fd84865f79aab6706ea",
  measurementId: "G-281X4WFEFG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);


// ------------------OTP avah heseg------------------------
const generateRecaptcha = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    'recaptcha-container',
    {
      size: 'invisible',
      callback: (response) => {},
    },
    auth
  );
};

export const sendOTP = async (enteredPhone) =>{
  let phoneNumber = '+976' + enteredPhone; 
  generateRecaptcha();
  const appVerifier = window.recaptchaVerifier;
  
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        console.log(confirmationResult)
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        // ...
      });

}
// ------------------OTP shalgah heseg------------------------

export const checkOTP = async (enteredCode) =>{
  let confirmationResult = window.confirmationResult;
  confirmationResult.confirm(enteredCode).then((result)=>{
    alert("success")
    return true;
  })
  .catch((error)=> {
    console.log(error);
    alert("fail")
    return false;
  })
}
// ----------------------------zahialga nemeh----------------------------------------------------
export const addDataToFire = async (userData, ticketTime, ticketName, ticketNumber, ticketSeat) =>{
    try {
        const docRef = await addDoc(collection(db, 'users'),{
          ...userData,
          order:{
            name:ticketName,
            ...ticketTime,
            ...ticketNumber,
            seat:{
              ...ticketSeat
            }
          }
        });
        console.log("doc id: " + docRef.id)
    } catch (error) {
        console.log(error)
    }
} 