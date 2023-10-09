import * as React from 'react';

const { useEffect, useState } = React;
const URL = 'http://localhost:4000/issues';

export const useFetchData = () => {
  const [data, setData] = useState([]);
  const [shouldRefreshList, toggleUpdateList] = useState(true);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        if (shouldRefreshList) {
          setData(json);
        }
      })
      return () => {
        toggleUpdateList(false);
      }
  }, [shouldRefreshList]);
  return { data, shouldRefreshList, toggleUpdateList };
}

export const useDeleteData = async (id) => {
  return await fetch(
    `${URL}/${id}`, 
    { method: 'DELETE' },
  );
}

export const useInsertData = async (form) => {
  return await fetch(
    `${URL}`, 
    { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(form),
    },
  );
}

export const useUpdateData = async (form, id) => {
  return await fetch(
    `${URL}/${id}`, 
    { 
      method: 'PUT', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(form),
    },
  );
}