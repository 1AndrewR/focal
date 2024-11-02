const lighthouses = ["Gibraltar Point", "Peggy's Point", "CoveIsland", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

const count = lighthouses.map(obj => Object.keys(obj).length);

console.log(count);