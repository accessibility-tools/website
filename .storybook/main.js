module.exports = {
  stories: ['../src/**/*.stories.jsx'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions/register',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
  ],
};
