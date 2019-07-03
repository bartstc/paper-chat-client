import { useState } from 'react';

export const useForm = (callback, initState) => {
  // call useState, "reserve piece of state"
  const [values, setValues] = useState(initState);

  // handle form submit
  const handleSubmit = e => {
    if (e) e.preventDefault();

    // call callback function
    callback();
  };

  // handle input change
  const handleChange = e => {
    e.persist();
    setValues(values => ({ ...values, [e.target.name]: e.target.value }));
  };

  // // return piece of state and function: to handle change and submit
  return {
    handleChange,
    handleSubmit,
    values,
  };
};
