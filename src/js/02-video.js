// Add imports above this line
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// console.log(Player);
// console.log(throttle);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onCatchCurrentTime, 1000));

function onCatchCurrentTime(data) {
  return localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}

player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));
