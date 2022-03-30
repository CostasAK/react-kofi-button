import "./App.scss";

import { KofiButton } from "./components";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1>React Components for Ko-fi</h1>
      </header>
      <main className="Main">
        <KofiButton username="costasak" label="Support me" />
      </main>
    </div>
  );
}

export default App;
