import * as React from 'react';

const { useEffect, useState } = React;
const URL = 'http://localhost:4000/issues';

export const useFetchData = () => {
  const [data, setData] = useState([]);
  const [shouldUpdateList, toggleUpdateList] = useState(true);

  useEffect(() => {
    // shouldUpdateList(true);
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        if (shouldUpdateList) {
          setData(json);
        }
      })
      return () => {
        toggleUpdateList(false);
      }
  }, [shouldUpdateList]);
  return { data, shouldUpdateList, toggleUpdateList };
}

export const useDeleteData = async (id) => {
  return await fetch(`${URL}/${id}`, {method: 'DELETE'});
}