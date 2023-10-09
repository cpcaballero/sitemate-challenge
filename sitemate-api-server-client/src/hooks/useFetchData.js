import * as React from 'react';

const { useEffect, useState } = React;
const URL = 'http://localhost:4000/issues';

export const useFetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let ignore = false;
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setData(json);
        }
      })
      return () => {
        ignore = true;
      }
  }, []);
  return data;
}