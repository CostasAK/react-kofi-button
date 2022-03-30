import "./App.scss";

import { KofiButton } from "./components";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1>react-kofi-button</h1>
        <h2>Examples of the different components, presets and properties</h2>
      </header>
      <main className="Main">
        <KofiButton username="costasak" label="Default preset" />
        <KofiButton username="costasak" label="Thin preset" preset="thin" />
        <KofiButton username="costasak" label="Skinny preset" preset="skinny" />
      </main>
    </div>
  );
}

export default App;
