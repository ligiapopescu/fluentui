const utils = require('./main.utils');
const rootMain = require('../../../.storybook/main');

module.exports = /** @type {Omit<import('../../../.storybook/main'), 'typescript'|'babel'>} */ ({
  ...rootMain,
  stories: [
    ...rootMain.stories,
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(ts|tsx)',
    ...utils.getVnextStories(),
    '../../../packages/react-migration-v8-v9/src/**/@(index.stories.@(ts|tsx)|*.stories.mdx)',
  ],
  staticDirs: ['../public'],
  addons: [...rootMain.addons],
  webpackFinal: (config, options) => {
    const localConfig = { ...rootMain.webpackFinal(config, options) };

    // add your own webpack tweaks if needed

    return localConfig;
  },
});
