import { useState } from 'react';

export const useToggle = (initialVal = false) => {
  // call useState, "reserve piece of state"
  const [toggle, setState] = useState(initialVal);
  const setToggle = () => {
    setState(!toggle);
  };
  // return piece of state and a function to toggle it
  return [toggle, setToggle];
};
