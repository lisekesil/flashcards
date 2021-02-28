import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyCQTlVD1iuJMKU5zUQjpIu8oB7J86SlN5Q',
    authDomain: 'flashcards-3afb5.firebaseapp.com',
    projectId: 'flashcards-3afb5',
    storageBucket: 'flashcards-3afb5.appspot.com',
    messagingSenderId: '550626058461',
    appId: '1:550626058461:web:1e7b748f277bd83cc13b34',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
