// Your Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    // ... other config properties
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = app.auth();
  
  const signupForm = document.getElementById('signupForm');
  const signinForm = document.getElementById('signinForm');
  const signoutButton = document.getElementById('signoutButton');
  
  // Sign up with email/password
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('User signed up successfully:', userCredential.user);
      })
      .catch((error) => {
        console.error('Sign-up error:', error);
      });
  });
  
  // Sign in with email/password
  signinForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('User signed in successfully:', userCredential.user);
      })
      .catch((error) => {
        console.error('Sign-in error:', error);
      });
  });
  
  // Sign out
  signoutButton.addEventListener('click', () => {
    auth.signOut()
      .then(() => {
        console.log('User signed out');
      })
      .catch((error) => {
        console.error('Sign-out error:', error);
      });
  });
  