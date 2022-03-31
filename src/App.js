import "./App.scss";

import { KofiButton } from "./components";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1>react-kofi-button</h1>
        <h2>React Components to link to your Ko-fi profile</h2>
      </header>
      <main className="Main">
        <KofiButton username="costasak" label="Default preset" />
        <KofiButton
          username="costasak"
          label="Thin preset"
          preset="thin"
          backgroundColor="kofiRed"
        />
        <KofiButton
          username="costasak"
          label="Skinny preset"
          preset="skinny"
          backgroundColor="kofiGrey"
        />
      </main>
    </div>
  );
}

export default App;
