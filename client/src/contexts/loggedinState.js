import {create} from 'zustand';

const loggedinState = create((set) => ({
    isLoggedIn: false,
    setisLoggedIn: (value) =>
      set((state) => ( {showNavbar: value} )),
   
  }));
  
  export default loggedinState;