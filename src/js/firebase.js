import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyABijR5fYnmZJS5jchR4exjeHxKGkIO41g',
	authDomain: 'noteballs-83212.firebaseapp.com',
	projectId: 'noteballs-83212',
	storageBucket: 'noteballs-83212.appspot.com',
	messagingSenderId: '737331137154',
	appId: '1:737331137154:web:67367e9e86778402b2029b'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {
	db
}
