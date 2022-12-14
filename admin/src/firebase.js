import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDIu8rKOfRyOnUMB6BHXt8iQsQSdOQGXBc",
    authDomain: "netflix-9c596.firebaseapp.com",
    projectId: "netflix-9c596",
    storageBucket: "netflix-9c596.appspot.com",
    messagingSenderId: "691388205033",
    appId: "1:691388205033:web:7984465afe7a28aae36d78",
    measurementId: "G-BL88HVKW5B"
};

initializeApp(firebaseConfig);

const storage = getStorage();

export default storage;