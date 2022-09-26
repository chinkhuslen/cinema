
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


// ------------------Send OTP------------------------
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
// ------------------Confirm OTP------------------------

export const checkOTP = async (enteredCode) =>{
  let confirmationResult = window.confirmationResult;
  let status = false;
  await confirmationResult.confirm(enteredCode).then((result)=>{
    // alert("success");
    status = true;
  })
  .catch((error)=> {
    console.log(error);
    // alert("fail")
  })
  return status;
}
// ----------------------------add order to Firebase----------------------------------------------------
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
//------------------------get User order from firebae-----------------------
export const getUserOrders = async (phoneNumber) =>{
  try {
      const userRef = collection(db,'users');
      const q = query (userRef, where("phone","==", phoneNumber));
      const querySnapshot = await getDocs(q);
      const userOrderData = [];
      querySnapshot.forEach((doc) => {
        userOrderData.push(doc.data());
      });
      return userOrderData;
  } catch (error) {
      console.log(error)
  }
} 