
if ($(window).width() > 1200) {
  $("#project1").attr({"onmouseover":"reveal(1)", "onmouseout":"hide(1)"});
  $("#project2").attr({"onmouseover":"reveal(2)", "onmouseout":"hide(2)"});
  $("#project3").attr({"onmouseover":"reveal(3)", "onmouseout":"hide(3)"});
  $("#project4").attr({"onmouseover":"reveal(4)", "onmouseout":"hide(4)"});
  $("#project5").attr({"onmouseover":"reveal(5)", "onmouseout":"hide(5)"});
  $("#project6").attr({"onmouseover":"reveal(6)", "onmouseout":"hide(6)"});
}

function reveal(x) {
  if(x === 1) {
    var text = document.getElementById("fun1");
    text.style.opacity = "1";
  } else if(x === 2) {
    var text = document.getElementById("fun2");
    text.style.opacity = "1";
  } else if(x === 3) {
    var text = document.getElementById("fun3");
    text.style.opacity = "1";
  } else if(x === 4) {
    var text = document.getElementById("fun4");
    text.style.opacity = "1";
  } else if(x === 5) {
    var text = document.getElementById("fun5");
    text.style.opacity = "1";
  } else if(x === 6) {
    var text = document.getElementById("fun6");
    text.style.opacity = "1";
  }
}

function hide(x) {
  if (x === 1) {
    var text = document.getElementById("fun1");
    text.style.opacity = "0";
  } else if(x === 2) {
    var text = document.getElementById("fun2");
    text.style.opacity = "0";
  } else if(x === 3) {
    var text = document.getElementById("fun3");
    text.style.opacity = "0";
  } else if(x === 4) {
    var text = document.getElementById("fun4");
    text.style.opacity = "0";
  } else if(x === 5) {
    var text = document.getElementById("fun5");
    text.style.opacity = "0";
  } else if(x === 6) {
    var text = document.getElementById("fun6");
    text.style.opacity = "0";
  }
}
