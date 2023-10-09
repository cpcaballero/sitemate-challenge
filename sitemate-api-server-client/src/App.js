import * as React from 'react';
import { IssueList } from './components/IssueList';
import { useFetchData } from './hooks/useServerData';


function App() {
  
  const { data, shouldUpdateList, toggleUpdateList } = useFetchData();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Issues
        </p>
      </header>
      {data && <IssueList issues={data} toggleUpdateList={toggleUpdateList} /> }
    </div>
  );
}

export default App;
