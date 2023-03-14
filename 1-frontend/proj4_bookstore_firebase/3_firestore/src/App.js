import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  updateDoc
} from "firebase/firestore";
import { app } from "./firebase";
import "./App.css";

const firestore = getFirestore(app);

function App() {
  const writeData = async () => {
    const result = await addDoc(collection(firestore, "cities"), {
      name: "Banglore",
      pincode: 1234,
      lat: 123,
      long: 456,
    });

    console.log("Result", result);
  };

  const makeSubCollection = async () => {
    await addDoc(collection(firestore, "cities/Maemnzvt3gYyYE0A7CTh/places"), {
      name: "Lal Bagh",
      desc: "botanical garden",
      date: Date.now(),
    });
  };

  const getDocument = async () => {
    const ref = doc(firestore, "cities", "Maemnzvt3gYyYE0A7CTh");
    const snap = await getDoc(ref);

    console.log(snap.data());
  };

  const getDocumentsByQuery = async () => {
    const collectionRef = collection(firestore, 'users');
    const q = query(collectionRef, where("isMale", "==", true));
    const snapshot = await getDocs(q)
    snapshot.forEach(data => console.log(data.data()))
  };

  const update = async() => {
    const docRef = doc(firestore, 'cities', 'Maemnzvt3gYyYE0A7CTh')
    await updateDoc(docRef, {
      name:"Bilaspur"
    })
  }

  return (
    <div className="App">
      <h1>Firebase Firestore</h1>
      <button onClick={writeData}>Put Data</button>
      <button onClick={makeSubCollection}>Put Subcoll</button>
      <button onClick={getDocument}>Get document</button>
      <button onClick={getDocumentsByQuery}>Get All documents</button>
      <button onClick={update}>Update document</button>
    </div>
  );
}

export default App;
