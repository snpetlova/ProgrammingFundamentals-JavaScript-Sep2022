function solve(bandName, albumName, songName) {
    let songDuration = (albumName.length * bandName.length) * songName.length / 2;
    let rotation = Math.ceil(songDuration / 2.5);
    console.log(`The plate was rotated ${rotation} times.`);
}
solve('Black Sabbath', 'Paranoid','War Pigs')