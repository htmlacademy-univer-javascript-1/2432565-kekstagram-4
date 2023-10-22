const COUNT_PHOTO = 25;
const COMMENTS = [
  'Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const USERS = ['Romchik', 'Jenek', 'Mishanya', 'Vika', 'Otpety Moshennik', 'The Rolling Stones', 'Gryaz'];
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const addComments = () => {
  const randomComment = COMMENTS[randomInteger(0, COMMENTS.length)];

  return {
    id: randomInteger(1, 5000),
    avatar: `img/avatar-${randomInteger(1, 6)}.svg`,
    message: randomComment,
    name: USERS[randomInteger[0, USERS.length]]
  };
};

const addPhoto = (index) => {
  const likes = randomInteger(15,200);
  const commentsCount = randomInteger(0, 30);

  const comments = [];
  for (let i = 0; i < commentsCount; i++) {
    comments.push(addComments());
  }
  return {
    id: index,
    url: `photos/$(index + 1}.jpg`,
    description: 'бомбовое изображение',
    likes: likes,
    comments: comments
  };
};

const photos = Array.from({length: COUNT_PHOTO}, (_, index) => addPhoto(index + 1));
