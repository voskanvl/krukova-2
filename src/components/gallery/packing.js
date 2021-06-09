const a = new Array(28).fill(0).map((e, i) => i);
const b = [];
let tmp = [];
a.forEach((e, i) => {

  if ((i+1) % 6 > 0) {
    tmp.push(e);
  } else {
    b.push(tmp);
    tmp = [];
  }
});
