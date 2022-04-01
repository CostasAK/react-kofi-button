import KofiButton from "../components/KofiButton/index";

const Meta = {
  component: KofiButton,
};
export default Meta;

const Template = (args) => (
  <div style={{ backgroundColor: "white", padding: "1em", fontSize: "18pt" }}>
    <KofiButton username="costasak" {...args} />
  </div>
);

export const Default = Template.bind({});

export const GreyThin = Template.bind({});
GreyThin.args = { preset: "thin", backgroundColor: "kofiGrey" };

export const Skinny = Template.bind({});
Skinny.args = { preset: "skinny" };

export const Circle = Template.bind({});
Circle.args = { preset: "circle" };

export const NoBackground = Template.bind({});
NoBackground.args = { preset: "no_background" };
