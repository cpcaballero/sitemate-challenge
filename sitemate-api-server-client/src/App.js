import { IssueList } from "./components/IssueList";
import { useFetchData } from "./hooks/useFetchData";

function App() {

  const issues = useFetchData();
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Issues
        </p>
      </header>
      {issues && <IssueList issues={issues} /> }
    </div>
  );
}

export default App;
