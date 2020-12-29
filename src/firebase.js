import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyD3Ny2VsnMPG1RqATsC8SSnN1yVxisdqvE",
  authDomain: "linkedin-newsfeed.firebaseapp.com",
  projectId: "linkedin-newsfeed",
  storageBucket: "linkedin-newsfeed.appspot.com",
  messagingSenderId: "880761109926",
  appId: "1:880761109926:web:fe1459111ee7e1c2fe6367",
  measurementId: "G-QNPL4CTC4B"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
