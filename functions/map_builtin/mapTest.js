const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

const count = lighthouses.map(obj => Object.keys(obj).length);

console.log(count);