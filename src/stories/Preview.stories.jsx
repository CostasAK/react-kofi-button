import "./Preview.stories.css";

import KofiButton from "../components/KofiButton/index";

const Meta = {};
export default Meta;

const Template = (args) => (
  <div className="SocialPreviewBox">
    <section className="SocialPreview">
      <h1>react-kofi-button</h1>
      <h2>React Components to link to your Ko-fi profile</h2>
      <figure style={{ fontSize: "1.25em" }}>
        <KofiButton username="costasak" label="Support Me" animation={false} />
        <KofiButton
          username="costasak"
          label="I'm on Ko-fi"
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
        <KofiButton
          username="costasak"
          label="Ko-fi"
          preset="circle"
          backgroundColor="kofiYellow"
          animation={false}
        />
        <KofiButton
          username="costasak"
          label="Donate"
          preset="no_background"
          animation={false}
        />
      </figure>
    </section>
  </div>
);

export const Default = Template.bind({});
Default.parameters = {
  controls: { hideNoControlsWarning: true, disabled: true },
};
