let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// 해당 btns 값이 잘 나오는지 확인
// console.log("btns 확인 : ", btns);

btns.forEach((button) => {
  button.addEventListener("click", (event) => {
    // click event 확인
    // console.log("event 확인 : ", event);
    let btnElementID = event.currentTarget.id;

    if (btnElementID === "decrease") {
      count--;
    } else if (btnElementID === "reset") {
      count = 0;
    } else {
      count++;
    }

    // count에 따라서 값 색상 변화
    if (count > 0) {
      value.style.color = "blue";
    } else if (count < 0) {
      value.style.color = "red";
    } else if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  })
});