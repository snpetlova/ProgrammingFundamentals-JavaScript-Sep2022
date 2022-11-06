function towns(table) {

    let townsInfo = {};

    for (const line of table) {
        let [townName, latitude, longitude] = line.split(' | ');

        townsInfo.town = townName;
        townsInfo.latitude = Number(latitude).toFixed(2);
        townsInfo.longitude = Number(longitude).toFixed(2);

        console.log(townsInfo);
    }

}towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])