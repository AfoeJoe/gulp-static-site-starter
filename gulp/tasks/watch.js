import GulpClient from 'gulp';
import { path } from '../config/path.js';
import { copy } from './copy.js';
import { html } from './html.js';
import { js } from './js.js';
import { scss } from './scss.js';
import { images } from './images.js';

export const watcher = () => {
  GulpClient.watch(path.watch.files, copy);
  GulpClient.watch(path.watch.html, html);
  GulpClient.watch(path.watch.scss, scss);
  GulpClient.watch(path.watch.js, js);
  GulpClient.watch(path.watch.images, images);
};
