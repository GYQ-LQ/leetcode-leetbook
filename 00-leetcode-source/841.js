/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let resList = [],
    len = rooms.length,
    queen = []
  if (!len) return false
  resList.push(0)
  let l = rooms[0].length
  while (l--) {
    if (queen.indexOf(rooms[0][l]) === -1 && resList.indexOf(rooms[0][l]) === -1) {
      queen.push(rooms[0][l])
    }
  }
  while (queen.length) {
    let ind = queen.shift()
    if (resList.indexOf(ind) === -1) resList.push(ind)
    l = rooms[ind].length;
    while (l--) {
      if (queen.indexOf(rooms[ind][l]) === -1 && resList.indexOf(rooms[ind][l]) === -1) {
        queen.push(rooms[ind][l])
      }
    }
  }
  return resList.length === len
};

console.log(canVisitAllRooms([]))
