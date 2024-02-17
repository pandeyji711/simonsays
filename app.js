document.addEventListener("DOMContentLoaded", function () {
  // Show popup on page load
  document.getElementById("popup-container").style.display = "flex";
});

function startGame() {
  // Hide popup
  document.getElementById("popup-container").style.display = "none";
  var audio = document.getElementById("myAudio");
  function backchange(pre, obj) {
    setTimeout(function () {
      obj.style.backgroundColor = "white";
    }, 0);
    setTimeout(function () {
      obj.style.backgroundColor = pre;
    }, 70);
  }
  var aud1 = new Audio("l.mp3");
  var aud2 = new Audio("l1.mp3");
  var aud3 = new Audio("point.wav");
  var aud4 = new Audio("tap.wav");
  function changebg() {
    document.body.style.backgroundColor = "red";
  }
  function addbutton() {
    let but = document.createElement("button");
    but.innerText = "Click to play Again!!";
    let h3 = document.querySelector("h3");
    h3.append(but);
    but.className = "butt";
    but.addEventListener("click", function () {
      location.reload();
    });
  }
  let obj1 = document.all[29];
  let obj2 = document.all[30];
  let obj3 = document.all[32];
  let obj4 = document.all[33];
  let objs = {
    1: obj1,
    2: obj2,
    3: obj3,
    4: obj4,
  };
  let arr = [];
  let index = 0;
  let p = document.querySelector("h3");
  let x = Math.floor(Math.random() * 4) + 1;
  setTimeout(function () {
    backchange(objs[x].style.backgroundColor, objs[x]);
  }, 2000);
  arr.push(x);
  let c = 0;
  obj1.addEventListener("click", function (e) {
    aud4.play();
    let pre = obj1.style.backgroundColor;
    backchange(pre, obj1);
    y = obj1.className;
    if (arr[index] == y) {
      index++;
    } else {
      p.innerHTML = `your final Score: ${c} `;
      changebg();
      addbutton();
      aud1.play();
      aud2.play();
      arr[index] = -1;
    }
    if (index == arr.length) {
      aud3.play();
      c++;
      p.innerHTML = `Score: ${c}`;
      x = Math.floor(Math.random() * 4) + 1;
      arr.push(x);
      setTimeout(function () {
        backchange(objs[x].style.backgroundColor, objs[x]);
      }, 1000);
      index = 0;
    }
  });

  obj2.addEventListener("click", function (e) {
    aud4.play();
    let pre = obj2.style.backgroundColor;
    backchange(pre, obj2);
    y = obj2.className;
    if (arr[index] == y) {
      index++;
    } else {
      p.innerHTML = `your final Score: ${c} `;
      changebg();
      addbutton();
      aud1.play();
      aud2.play();
      arr[index] = -1;
    }
    if (index == arr.length) {
      aud3.play();
      c++;
      p.innerHTML = `Score: ${c}`;
      x = Math.floor(Math.random() * 4) + 1;
      arr.push(x);
      setTimeout(function () {
        backchange(objs[x].style.backgroundColor, objs[x]);
      }, 1000);
      index = 0;
    }
  });

  obj3.addEventListener("click", function (e) {
    aud4.play();
    let pre = obj3.style.backgroundColor;
    backchange(pre, obj3);
    y = obj3.className;
    if (arr[index] == y) {
      index++;
    } else {
      p.innerHTML = `your final Score: ${c} `;
      changebg();
      addbutton();
      aud1.play();
      aud2.play();
      arr[index] = -1;
    }
    if (index == arr.length) {
      aud3.play();
      c++;
      p.innerHTML = `Score: ${c}`;
      x = Math.floor(Math.random() * 4) + 1;
      arr.push(x);
      setTimeout(function () {
        backchange(objs[x].style.backgroundColor, objs[x]);
      }, 1000);
      index = 0;
    }
  });

  obj4.addEventListener("click", function (e) {
    aud4.play();
    let pre = obj4.style.backgroundColor;
    backchange(pre, obj4);
    y = obj4.className;
    if (arr[index] == y) {
      index++;
    } else {
      p.innerHTML = `your final Score: ${c} `;
      changebg();
      addbutton();
      aud1.play();
      aud2.play();
      arr[index] = -1;
    }
    if (index == arr.length) {
      aud3.play();
      c++;
      p.innerHTML = `Score: ${c}`;
      x = Math.floor(Math.random() * 4) + 1;
      arr.push(x);
      setTimeout(function () {
        backchange(objs[x].style.backgroundColor, objs[x]);
      }, 1000);
      index = 0;
    }
  });
  console.log("Simon Says game started!");
}
