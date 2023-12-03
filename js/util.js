const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const createImgUrl = (id, directory, format) => directory + id + format;

const isEscKey = (evt) => evt.key === 'Escape';

export {createImgUrl, randomInteger, isEscKey};

