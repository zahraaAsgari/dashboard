

import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey:"AIzaSyAmkiK5TBS6RlXFsWe_Vk6j86sQ23nxN5c",
  authDomain: "admin-dashbord-react.firebaseapp.com",
  projectId: "admin-dashbord-react",
  storageBucket: "admin-dashbord-react.appspot.com",
  messagingSenderId: "1067791134708",
  appId: "1:1067791134708:web:4c0d71d5e83076f08313a1"
};

const app=initializeApp(firebaseConfig);

export const auth=getAuth(app);









