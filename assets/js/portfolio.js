var result,
  nowstaff,
  nowstudent,
  freshmilk,
  freshmilkdelivery,
  gcclive,
  getingetit,
  rxstores,
  rxdelivery,
  zohrx;

let options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  mode: "no-cors",
};

$(window).on("load", function () {
  fetch("./assets/json/portfolio.json", options)
    .then((res) => res.json())
    .then((data) => {
      result = data;
      console.log(result);
    });
});
