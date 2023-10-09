import * as React from 'react';
import { useInsertData } from '../hooks/useServerData';

const { useState } = React;

export const IssueForm = ({toggleUpdateList}) => {
  const [formData, setFormData] = useState({title: '', description: ''});
  const { title, description } = formData; 

  const handleChange = (event) =>  {
    const { name, value } = event.target;
    setFormData({
      ...formData, 
      [name]: value,
    });
  };

  const useHandleSave = () => {
    useInsertData(formData);
    toggleUpdateList(true);
    setFormData({tite: '', description: ''});
  };

  return(<div>
    <p>Title</p>
    <input 
      type="text" 
      name="title" 
      value={title || ''} 
      onChange={handleChange}
    />
    <p>Description</p>
    <input 
      type="text" 
      name="description" 
      value={description || ''} 
      onChange={handleChange} 
    />
    <button onClick={useHandleSave}>
      Save
    </button>
  </div>);
};