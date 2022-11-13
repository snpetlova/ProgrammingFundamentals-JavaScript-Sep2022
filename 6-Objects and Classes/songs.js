function songs(array) {

    class Songs {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numberOfSongs = array.shift();
    let typeSong = array.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [typeList, name, time] = array[i].split('_');
        let song = new Songs(typeList, name, time);
        songs.push(song); 
    }

    if (typeSong === 'all') {
        songs.forEach((i) => console.log(i.name))
    } else {
        let filtered = songs.filter((i) => i.typeList === typeSong);
        filtered.forEach((i) => console.log(i.name))
    }


}songs
([3,'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])