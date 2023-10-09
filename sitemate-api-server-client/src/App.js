import * as React from 'react';
import { IssueList } from './components/IssueList';
import { useFetchData } from './hooks/useServerData';
import { IssueForm } from './components/IssueForm';

function App() {
  
  const { data, toggleUpdateList } = useFetchData();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Issues
        </p>
      </header>
      <IssueForm toggleUpdateList={toggleUpdateList} />
      {data && <IssueList issues={data} toggleUpdateList={toggleUpdateList} /> }
    </div>
  );
}

export default App;
