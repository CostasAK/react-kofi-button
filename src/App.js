import "./App.scss";

import { KofiButton } from "./components";

function App() {
  return (
    <div className="App">
      <section className="Examples">
        <h1>react-kofi-button</h1>
        <h2>Examples for the README</h2>
        <figure>
          <KofiButton username="costasak" label="Default preset" />
          <KofiButton
            username="costasak"
            label="Thin preset"
            preset="thin"
            backgroundColor="kofiRed"
            animation="on_hover"
          />
          <KofiButton
            username="costasak"
            label="Skinny preset"
            preset="skinny"
            backgroundColor="kofiGrey"
            animation={false}
          />
        </figure>
      </section>
      <section className="SocialPreviewContainer">
        <h1>Social Preview</h1>
        <div className="SocialPreviewBox">
          <section className="SocialPreview">
            <h1>react-kofi-button</h1>
            <h2>React Components to link to your Ko-fi profile</h2>
            <figure>
              <KofiButton
                username="costasak"
                label="Support Me"
                animation={false}
              />
              <KofiButton
                username="costasak"
                label="Donate"
                preset="thin"
                backgroundColor="kofiRed"
                animation={false}
              />
              <KofiButton
                username="costasak"
                label="Buy me a coffee"
                preset="skinny"
                backgroundColor="kofiGrey"
                animation={false}
              />
            </figure>
          </section>
        </div>
      </section>
    </div>
  );
}

export default App;
