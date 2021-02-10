import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	//YOUR GOOGLE FIRESTORE CONFIG CREDENTIALS
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };
export default db;
