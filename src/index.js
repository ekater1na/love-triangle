/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
 
let count = 0;

   for (let i in preferences) {
      count += i == preferences[preferences[i]];
   }
return (Math.floor(count/3));
};
