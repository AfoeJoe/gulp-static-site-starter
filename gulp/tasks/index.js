import GulpClient from 'gulp';
import { copy } from './copy.js';
import { watcher } from './watch.js';
import { reset } from './reset.js';
import { html } from './html.js';
import { server } from './server.js';
import { scss } from './scss.js';
import { images } from './images.js';
import { js } from './js.js';
import { otfToTtf, ttfTToWoff, fontsStyle } from './fonts.js';

const fonts = GulpClient.series(otfToTtf, ttfTToWoff, fontsStyle);

const mainTasks = GulpClient.series(
  fonts,
  GulpClient.parallel(copy, html, scss, js, images)
);

export const dev = GulpClient.series(
  reset,
  mainTasks,
  GulpClient.parallel(watcher, server)
);

export const build = GulpClient.series(reset, mainTasks);
