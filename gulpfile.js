import GulpClient from 'gulp';
import { path } from './gulp/config/path.js';
import { dev, build } from './gulp/tasks/index.js';
import { plugins } from './gulp/config/plugin.js';
import { svgSprite } from './gulp/tasks/svgSprite.js';

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: GulpClient,
  plugins,
};

export { svgSprite, dev, build };

GulpClient.task('default', dev);
