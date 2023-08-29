# Netflix GPT

- Create React App
- Configured Tailwind
- Routing
- Header
- Login / Signup Page
- Form Validation
- useRef Hook
- Firebase setup
- Deployment of app to prod
- Sign-up to Firebase
- Log in user API
- created Redux store with userSlice
- Login State change flow using onAuthStateChanged API
- Header in `/browse`
- Header has profile icon with signout
- Navigation to `/browse` -> `useNavigate`
- profile picture (hardcoded for now)
- conditional rendering if logged in
- `useSelector`, `useDispatch`
- update profile while creation to add displayName and photoURL -> update redux-store
- bug fixes: removed redundant navigation, restricted routes for logged in users and guests
- unsubscribed to the onAuthStateChanged callback
- TODO: add hardcoded values (e.g. src) to the contants file

# Features

- Login or Signup
  - Signin or Signup Form
  - redirect to Browse Page
- Browse Page (after authentication)
  - Header
  - Main Movie Hero Section
    - Running Trailer in the background
    - Title and Description
    - Play button and Add to watch list button
  - Netflix GPT
    - Search bar
    - Movie suggestions (from the list of movies)

# Ref

To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool).

Run the following npm command to install the CLI or update to the latest CLI version.
`npm install -g firebase-tools`
