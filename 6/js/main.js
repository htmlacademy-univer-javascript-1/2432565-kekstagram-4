import './util.js';
import {addPhotos} from './data.js';
import {renderPhotos} from './thumbnails.js';


const pictures = addPhotos();
renderPhotos(pictures);

