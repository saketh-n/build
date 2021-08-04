const pictures = [
  "https://pbs.twimg.com/profile_images/1365771430932185095/zhQD8o7Q_400x400.jpg",
  "https://i.pinimg.com/736x/9e/77/5e/9e775ed46d1bab1fb7e874b1fad08be2.jpg",
  "https://static.wikia.nocookie.net/unordinary6344/images/b/bc/Arlo4.png",
  "https://static.wikia.nocookie.net/shingekinokyojin/images/a/a1/Eren_Jaeger_%28Anime%29_character_image.png",
  "https://i.pinimg.com/originals/98/19/a2/9819a2f68bf442a2f7010753ab635e23.jpg",
];

export function getUserPic(username) {
  const picNum = Math.floor(Math.random() * pictures.length);
  return pictures[picNum];
}
