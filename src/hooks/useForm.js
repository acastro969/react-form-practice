import { useState } from 'react';

const useForm = (initialState) => {
  const [formData, setFormData] = useState({ name: '', lastName: '', email: '' });

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value } );
  }

  const reset = () => setFormData(initialState);

  return [formData, handleOnChange, reset];
}

export default useForm;