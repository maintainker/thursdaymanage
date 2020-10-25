import { useState } from "react";
import AppRouter from './Router';
// import {authService} from '../fbase';
function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  
  
  return (
    <AppRouter isLoggedIn={isLoggedIn}>
      
    </AppRouter>
  );
}

export default App;