import './util.js';
import { PHOTOS_COUNT, addPhotos} from './data.js';
import {renderPhotos} from './pictures.js';
import { initPictures } from './big-picture.js';

const pictures = Array.from( {length: PHOTOS_COUNT}, addPhotos);

renderPhotos(pictures);

initPictures(pictures);
