var floodFill = function (image, sr, sc, newColor) {
  let color = image[sr][sc],
    maxi = image.length,
    maxj = image[0].length;
  var changeImg = function (i, j, c, nc) {
    if (image[i][j] === nc) {
      return
    }
    if (image[i][j] === c) {
      image[i][j] = nc;
      if (i - 1 >= 0) {
        changeImg(i - 1, j, c, nc);
      }
      if (i + 1 < maxi)
        changeImg(i + 1, j, c, nc)
      if (j - 1 >= 0)
        changeImg(i, j - 1, c, nc);
      if (j + 1 < maxj)
        changeImg(i, j + 1, c, nc)
    }
  }
  changeImg(sr, sc, color, newColor)
  return image
};

let a = floodFill([
    [0, 0, 0],
    [0, 1, 1]
  ],
  1,
  1,
  1
)
console.log(a);
