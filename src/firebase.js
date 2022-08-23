
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs,where,query, updateDoc,doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvgO3zjGmUonvUpExUy4L8ZXzjJcYK7ZI",
  authDomain: "cinema-ch.firebaseapp.com",
  projectId: "cinema-ch",
  storageBucket: "cinema-ch.appspot.com",
  messagingSenderId: "625690063199",
  appId: "1:625690063199:web:ea3fd84865f79aab6706ea",
  measurementId: "G-281X4WFEFG"
};

const cinemaData = async () =>{
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  try {
    const querySnapshot = await getDocs(query(collection(db, "currentMovies"))); 
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
    } catch (error) {
      console.error(error)
    }
}
const addDataToFire = async (userData, ticketTime, ticketName, ticketNumber, ticketSeat) =>{
    const docId = "Pacp6oBobadKwX5jIACr"
    try {
        const docRef = await doc(db, 'users', docId);

        updateDoc(docRef, {
         user   
        })
    } catch (error) {
        console.log(error)
    }
} 
export default addDataToFire