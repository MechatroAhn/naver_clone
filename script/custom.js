let num = 0;
let num2 = 1;
let num3 = 0;
let num4 = 1;
let num5 = 0;
let num6 = 1;
let num7 = 1;
let num8 = 1;
let num9 = 1;
let onMore = 0;

for (num; num < 100; num++) {
  setTimeout(function () {
    $("#weather").css({ Animation: "move 0.5s linear forwards" });
  }, 3000 + 6000 * num);

  setTimeout(function () {
    $("#dust").css({ Animation: "move4 0.5s linear forwards" });
  }, 3000 + 6000 * num);

  setTimeout(function () {
    $("#weather").css({ Animation: "move2 0.5s linear forwards" });
  }, 6000 + 6000 * num);

  setTimeout(function () {
    $("#dust").css({ Animation: "move3 0.5s linear forwards" });
  }, 6000 + 6000 * num);
}

$("#RB").click(function () {
  num2++;

  if (num2 > 4) {
    num2 = 1;
  }

  if (num2 == 1) {
    $("#info_4").css({
      Animation: "move_ver_left 0.3s linear forwards",
    });
    $("#info_1").css({
      Animation: "move_ver_right 0.3s linear forwards",
      visibility: "visible",
    });
  } else if (num2 == 2) {
    $("#info_1").css({
      Animation: "move_ver_left 0.3s linear forwards",
    });
    $("#info_2").css({
      Animation: "move_ver_right 0.3s linear forwards",
      visibility: "visible",
    });
  } else if (num2 == 3) {
    $("#info_2").css({
      Animation: "move_ver_left 0.3s linear forwards",
    });
    $("#info_3").css({
      Animation: "move_ver_right 0.3s linear forwards",
      visibility: "visible",
    });
  } else if (num2 == 4) {
    $("#info_3").css({
      Animation: "move_ver_left 0.3s linear forwards",
    });
    $("#info_4").css({
      Animation: "move_ver_right 0.3s linear forwards",
      visibility: "visible",
    });
  }
});

$("#LB").click(function () {
  num2--;

  if (num2 <= 0) {
    num2 = 4;
  }

  if (num2 == 1) {
    $("#info_2").css({
      Animation: "move_ver_right2 0.3s linear forwards",
    });
    $("#info_1").css({
      Animation: "move_ver_left2 0.3s linear forwards",
      visibility: "visible",
    });
  } else if (num2 == 2) {
    $("#info_3").css({
      Animation: "move_ver_right2 0.3s linear forwards",
    });
    $("#info_2").css({
      Animation: "move_ver_left2 0.3s linear forwards",
      visibility: "visible",
    });
  } else if (num2 == 3) {
    $("#info_4").css({
      Animation: "move_ver_right2 0.3s linear forwards",
    });
    $("#info_3").css({
      Animation: "move_ver_left2 0.3s linear forwards",
      visibility: "visible",
    });
  } else if (num2 == 4) {
    $("#info_4").css({
      Animation: "move_ver_left2 0.3s linear forwards",
      visibility: "visible",
    });
    $("#info_1").css({
      Animation: "move_ver_right2 0.3s linear forwards",
    });
  }
});

for (num3; num3 < 100; num3++) {
  setTimeout(function () {
    $("#RB").click();
  }, 5000 + 5000 * num3);
}

for (num5; num5 < 100; num5++) {
  setTimeout(function () {
    num4++;

    if (num4 > 4) {
      num4 = 1;
    }

    if (num4 == 2) {
      $("#news_1").css({
        Animation: "moveUp 0.5s linear forwards",
      });
      $("#news_2").css({
        Animation: "moveUp2 0.5s linear forwards",
        visibility: "visible",
      });
    } else if (num4 == 3) {
      $("#news_2").css({
        Animation: "moveUp 0.5s linear forwards",
      });
      $("#news_3").css({
        Animation: "moveUp2 0.5s linear forwards",
        visibility: "visible",
      });
    } else if (num4 == 4) {
      $("#news_3").css({
        Animation: "moveUp 0.5s linear forwards",
      });
      $("#news_4").css({
        Animation: "moveUp2 0.5s linear forwards",
        visibility: "visible",
      });
    } else if (num4 == 1) {
      $("#news_4").css({
        Animation: "moveUp 0.5s linear forwards",
      });
      $("#news_1").css({
        Animation: "moveUp2 0.5s linear forwards",
        visibility: "visible",
      });
    }
  }, 4000 + 4000 * num5);
}

$("#news_stand_RB").click(function () {
  num6++;

  if (num6 > 3) {
    num6 = 3;
  }

  if (num6 == 3) {
    $("#news_stand_RB").css({ visibility: "hidden" });
  }
  if (num6 != 3) {
    $("#news_stand_RB").css({ visibility: "visible" });
  }
  if (num6 != 1) {
    $("#news_stand_LB").css({ visibility: "visible" });
  }

  if (num6 == 1) {
    $("#news_list_1").css({ visibility: "visible" });
    $("#news_list_2").css({ visibility: "hidden" });
    $("#news_list_3").css({ visibility: "hidden" });
  } else if (num6 == 2) {
    $("#news_list_2").css({ visibility: "visible" });
    $("#news_list_1").css({ visibility: "hidden" });
    $("#news_list_3").css({ visibility: "hidden" });
  } else if (num6 == 3) {
    $("#news_list_3").css({ visibility: "visible" });
    $("#news_list_2").css({ visibility: "hidden" });
    $("#news_list_1").css({ visibility: "hidden" });
  }
});

$("#news_stand_LB").click(function () {
  num6--;

  if (num6 < 1) {
    num6 = 1;
  }

  if (num6 == 1) {
    $("#news_stand_LB").css({ visibility: "hidden" });
  }
  if (num6 != 1) {
    $("#news_stand_LB").css({ visibility: "visible" });
  }
  if (num6 != 3) {
    $("#news_stand_RB").css({ visibility: "visible" });
  }

  if (num6 == 1) {
    $("#news_list_1").css({ visibility: "visible" });
    $("#news_list_2").css({ visibility: "hidden" });
    $("#news_list_3").css({ visibility: "hidden" });
  } else if (num6 == 2) {
    $("#news_list_2").css({ visibility: "visible" });
    $("#news_list_1").css({ visibility: "hidden" });
    $("#news_list_3").css({ visibility: "hidden" });
  } else if (num6 == 3) {
    $("#news_list_3").css({ visibility: "visible" });
    $("#news_list_2").css({ visibility: "hidden" });
    $("#news_list_1").css({ visibility: "hidden" });
  }
});

$(".shopping_top_right > a:nth-child(1)").click(function () {
  $(".shopping_top_right > a:nth-child(1)").css({
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    color: "rgb(34, 182, 97)",
  });
  $(".shopping_top_right > a:nth-child(2)").css({
    textDecoration: "none",
    color: "white",
  });
  $(".shopping_top_right > a:nth-child(3)").css({
    textDecoration: "none",
    color: "white",
  });
  $("#shopping_1").css({ visibility: "visible" });
  $("#shopping_2").css({ visibility: "hidden" });
  $("#shopping_3").css({ visibility: "hidden" });
});

$(".shopping_top_right > a:nth-child(2)").click(function () {
  $(".shopping_top_right > a:nth-child(2)").css({
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    color: "rgb(34, 182, 97)",
  });
  $(".shopping_top_right > a:nth-child(1)").css({
    textDecoration: "none",
    color: "white",
  });
  $(".shopping_top_right > a:nth-child(3)").css({
    textDecoration: "none",
    color: "white",
  });
  $("#shopping_2").css({ visibility: "visible" });
  $("#shopping_1").css({ visibility: "hidden" });
  $("#shopping_3").css({ visibility: "hidden" });
});

$(".shopping_top_right > a:nth-child(3)").click(function () {
  $(".shopping_top_right > a:nth-child(3)").css({
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    color: "rgb(34, 182, 97)",
  });
  $(".shopping_top_right > a:nth-child(1)").css({
    textDecoration: "none",
    color: "white",
  });
  $(".shopping_top_right > a:nth-child(2)").css({
    textDecoration: "none",
    color: "white",
  });
  $("#shopping_3").css({ visibility: "visible" });
  $("#shopping_2").css({ visibility: "hidden" });
  $("#shopping_1").css({ visibility: "hidden" });
});

$("#shopping_detail_LB").click(function () {
  num7--;
  if (num7 < 1) {
    num7 = 3;
  }

  document.getElementById("current_page").innerText = num7;
  document.getElementById("current_page2").innerText = num7;
  if (num7 == 1) {
    $(".shopping_list_detail_1").css({ visibility: "visible" });
    $(".shopping_list_detail_2").css({ visibility: "hidden" });
    $(".shopping_list_detail_3").css({ visibility: "hidden" });
  } else if (num7 == 2) {
    $(".shopping_list_detail_2").css({ visibility: "visible" });
    $(".shopping_list_detail_1").css({ visibility: "hidden" });
    $(".shopping_list_detail_3").css({ visibility: "hidden" });
  } else if (num7 == 3) {
    $(".shopping_list_detail_3").css({ visibility: "visible" });
    $(".shopping_list_detail_1").css({ visibility: "hidden" });
    $(".shopping_list_detail_2").css({ visibility: "hidden" });
  }
});

$("#shopping_detail_RB").click(function () {
  num7++;
  if (num7 > 3) {
    num7 = 1;
  }
  document.getElementById("current_page").innerText = num7;
  document.getElementById("current_page2").innerText = num7;

  if (num7 == 1) {
    $(".shopping_list_detail_1").css({ visibility: "visible" });
    $(".shopping_list_detail_2").css({ visibility: "hidden" });
    $(".shopping_list_detail_3").css({ visibility: "hidden" });
  } else if (num7 == 2) {
    $(".shopping_list_detail_2").css({ visibility: "visible" });
    $(".shopping_list_detail_1").css({ visibility: "hidden" });
    $(".shopping_list_detail_3").css({ visibility: "hidden" });
  } else if (num7 == 3) {
    $(".shopping_list_detail_3").css({ visibility: "visible" });
    $(".shopping_list_detail_1").css({ visibility: "hidden" });
    $(".shopping_list_detail_2").css({ visibility: "hidden" });
  }
});

$("#shopping_detail_LB2").click(function () {
  num7--;
  if (num7 < 1) {
    num7 = 3;
  }

  document.getElementById("current_page").innerText = num7;
  document.getElementById("current_page2").innerText = num7;
  if (num7 == 1) {
    $(".shopping_list_detail_1").css({ visibility: "visible" });
    $(".shopping_list_detail_2").css({ visibility: "hidden" });
    $(".shopping_list_detail_3").css({ visibility: "hidden" });
  } else if (num7 == 2) {
    $(".shopping_list_detail_2").css({ visibility: "visible" });
    $(".shopping_list_detail_1").css({ visibility: "hidden" });
    $(".shopping_list_detail_3").css({ visibility: "hidden" });
  } else if (num7 == 3) {
    $(".shopping_list_detail_3").css({ visibility: "visible" });
    $(".shopping_list_detail_1").css({ visibility: "hidden" });
    $(".shopping_list_detail_2").css({ visibility: "hidden" });
  }
});

$("#shopping_detail_RB2").click(function () {
  num7++;
  if (num7 > 3) {
    num7 = 1;
  }
  document.getElementById("current_page").innerText = num7;
  document.getElementById("current_page2").innerText = num7;

  if (num7 == 1) {
    $(".shopping_list_detail_1").css({ visibility: "visible" });
    $(".shopping_list_detail_2").css({ visibility: "hidden" });
    $(".shopping_list_detail_3").css({ visibility: "hidden" });
  } else if (num7 == 2) {
    $(".shopping_list_detail_2").css({ visibility: "visible" });
    $(".shopping_list_detail_1").css({ visibility: "hidden" });
    $(".shopping_list_detail_3").css({ visibility: "hidden" });
  } else if (num7 == 3) {
    $(".shopping_list_detail_3").css({ visibility: "visible" });
    $(".shopping_list_detail_1").css({ visibility: "hidden" });
    $(".shopping_list_detail_2").css({ visibility: "hidden" });
  }
});

$("#shopping_news_LB").click(function () {
  num8--;
  if (num8 < 1) {
    num8 = 3;
  }

  document.getElementById("current_page3").innerText = num8;

  if (num8 == 1) {
    $("#shopping_news_1").css({ visibility: "visible" });
    $("#shopping_news_2").css({ visibility: "hidden" });
    $("#shopping_news_3").css({ visibility: "hidden" });
  } else if (num8 == 2) {
    $("#shopping_news_2").css({ visibility: "visible" });
    $("#shopping_news_1").css({ visibility: "hidden" });
    $("#shopping_news_3").css({ visibility: "hidden" });
  } else if (num8 == 3) {
    $("#shopping_news_3").css({ visibility: "visible" });
    $("#shopping_news_1").css({ visibility: "hidden" });
    $("#shopping_news_2").css({ visibility: "hidden" });
  }
});

$("#shopping_news_RB").click(function () {
  num8++;
  if (num8 > 3) {
    num8 = 1;
  }
  document.getElementById("current_page3").innerText = num8;

  if (num8 == 1) {
    $("#shopping_news_1").css({ visibility: "visible" });
    $("#shopping_news_2").css({ visibility: "hidden" });
    $("#shopping_news_3").css({ visibility: "hidden" });
  } else if (num8 == 2) {
    $("#shopping_news_2").css({ visibility: "visible" });
    $("#shopping_news_1").css({ visibility: "hidden" });
    $("#shopping_news_3").css({ visibility: "hidden" });
  } else if (num8 == 3) {
    $("#shopping_news_3").css({ visibility: "visible" });
    $("#shopping_news_1").css({ visibility: "hidden" });
    $("#shopping_news_2").css({ visibility: "hidden" });
  }
});

$("#article_nav_LB").click(function () {
  num9--;
  render();
});

$("#article_nav_RB").click(function () {
  num9++;
  render();
});

$(".article_content > div:nth-child(1)").click(function () {
  num9 = 1;
  render();
});
$(".article_content > div:nth-child(2)").click(function () {
  num9 = 2;
  render();
});
$(".article_content > div:nth-child(2)").click(function () {
  num9 = 2;
  render();
});
$(".article_content > div:nth-child(3)").click(function () {
  num9 = 3;
  render();
});
$(".article_content > div:nth-child(4)").click(function () {
  num9 = 4;
  render();
});
$(".article_content > div:nth-child(5)").click(function () {
  num9 = 5;
  render();
});
$(".article_content > div:nth-child(6)").click(function () {
  num9 = 6;
  render();
});
$(".article_content > div:nth-child(7)").click(function () {
  num9 = 7;
  render();
});
$(".article_content > div:nth-child(8)").click(function () {
  num9 = 8;
  render();
});
$(".article_content > div:nth-child(9)").click(function () {
  num9 = 9;
  render();
});
$(".article_content > div:nth-child(10)").click(function () {
  num9 = 10;
  render();
});

const render = () => {
  if (num9 == 1) {
    $("#article_nav_LB").css({ visibility: "hidden" });
  } else if (num != 1) {
    $("#article_nav_LB").css({ visibility: "visible" });
  }

  if (num9 == 10) {
    $("#article_nav_RB").css({ visibility: "hidden" });
  } else if (num9 != 10) {
    $("#article_nav_RB").css({ visibility: "visible" });
  }

  if (num9 == 1) {
    $(".article_content > div:nth-child(1)").css({ backgroundColor: "white" });
    $(".article_content > div:nth-child(2)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(3)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(4)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(5)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(6)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(7)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(8)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(9)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(10)").css({
      backgroundColor: "#2c2d30",
    });

    $("#article_1").css({ visibility: "visible" });
    $("#article_2").css({ visibility: "hidden" });
    $("#article_3").css({ visibility: "hidden" });
    $("#article_4").css({ visibility: "hidden" });
    $("#article_5").css({ visibility: "hidden" });
    $("#article_6").css({ visibility: "hidden" });
    $("#article_7").css({ visibility: "hidden" });
    $("#article_8").css({ visibility: "hidden" });
    $("#article_9").css({ visibility: "hidden" });
    $("#article_10").css({ visibility: "hidden" });
  } else if (num9 == 2) {
    $(".article_content > div:nth-child(2)").css({ backgroundColor: "white" });
    $(".article_content > div:nth-child(1)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(3)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(4)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(5)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(6)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(7)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(8)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(9)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(10)").css({
      backgroundColor: "#2c2d30",
    });

    $("#article_2").css({ visibility: "visible" });
    $("#article_1").css({ visibility: "hidden" });
    $("#article_3").css({ visibility: "hidden" });
    $("#article_4").css({ visibility: "hidden" });
    $("#article_5").css({ visibility: "hidden" });
    $("#article_6").css({ visibility: "hidden" });
    $("#article_7").css({ visibility: "hidden" });
    $("#article_8").css({ visibility: "hidden" });
    $("#article_9").css({ visibility: "hidden" });
    $("#article_10").css({ visibility: "hidden" });
  } else if (num9 == 3) {
    $(".article_content > div:nth-child(3)").css({ backgroundColor: "white" });
    $(".article_content > div:nth-child(2)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(1)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(4)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(5)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(6)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(7)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(8)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(9)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(10)").css({
      backgroundColor: "#2c2d30",
    });

    $("#article_3").css({ visibility: "visible" });
    $("#article_2").css({ visibility: "hidden" });
    $("#article_1").css({ visibility: "hidden" });
    $("#article_4").css({ visibility: "hidden" });
    $("#article_5").css({ visibility: "hidden" });
    $("#article_6").css({ visibility: "hidden" });
    $("#article_7").css({ visibility: "hidden" });
    $("#article_8").css({ visibility: "hidden" });
    $("#article_9").css({ visibility: "hidden" });
    $("#article_10").css({ visibility: "hidden" });
  } else if (num9 == 4) {
    $(".article_content > div:nth-child(4)").css({ backgroundColor: "white" });
    $(".article_content > div:nth-child(2)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(3)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(1)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(5)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(6)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(7)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(8)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(9)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(10)").css({
      backgroundColor: "#2c2d30",
    });

    $("#article_4").css({ visibility: "visible" });
    $("#article_2").css({ visibility: "hidden" });
    $("#article_3").css({ visibility: "hidden" });
    $("#article_1").css({ visibility: "hidden" });
    $("#article_5").css({ visibility: "hidden" });
    $("#article_6").css({ visibility: "hidden" });
    $("#article_7").css({ visibility: "hidden" });
    $("#article_8").css({ visibility: "hidden" });
    $("#article_9").css({ visibility: "hidden" });
    $("#article_10").css({ visibility: "hidden" });
  } else if (num9 == 5) {
    $(".article_content > div:nth-child(5)").css({ backgroundColor: "white" });
    $(".article_content > div:nth-child(2)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(3)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(4)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(1)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(6)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(7)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(8)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(9)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(10)").css({
      backgroundColor: "#2c2d30",
    });

    $("#article_5").css({ visibility: "visible" });
    $("#article_2").css({ visibility: "hidden" });
    $("#article_3").css({ visibility: "hidden" });
    $("#article_4").css({ visibility: "hidden" });
    $("#article_1").css({ visibility: "hidden" });
    $("#article_6").css({ visibility: "hidden" });
    $("#article_7").css({ visibility: "hidden" });
    $("#article_8").css({ visibility: "hidden" });
    $("#article_9").css({ visibility: "hidden" });
    $("#article_10").css({ visibility: "hidden" });
  } else if (num9 == 6) {
    $(".article_content > div:nth-child(6)").css({ backgroundColor: "white" });
    $(".article_content > div:nth-child(2)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(3)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(4)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(5)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(1)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(7)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(8)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(9)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(10)").css({
      backgroundColor: "#2c2d30",
    });

    $("#article_6").css({ visibility: "visible" });
    $("#article_2").css({ visibility: "hidden" });
    $("#article_3").css({ visibility: "hidden" });
    $("#article_4").css({ visibility: "hidden" });
    $("#article_5").css({ visibility: "hidden" });
    $("#article_1").css({ visibility: "hidden" });
    $("#article_7").css({ visibility: "hidden" });
    $("#article_8").css({ visibility: "hidden" });
    $("#article_9").css({ visibility: "hidden" });
    $("#article_10").css({ visibility: "hidden" });
  } else if (num9 == 7) {
    $(".article_content > div:nth-child(7)").css({ backgroundColor: "white" });
    $(".article_content > div:nth-child(2)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(3)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(4)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(5)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(6)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(1)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(8)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(9)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(10)").css({
      backgroundColor: "#2c2d30",
    });

    $("#article_7").css({ visibility: "visible" });
    $("#article_2").css({ visibility: "hidden" });
    $("#article_3").css({ visibility: "hidden" });
    $("#article_4").css({ visibility: "hidden" });
    $("#article_5").css({ visibility: "hidden" });
    $("#article_6").css({ visibility: "hidden" });
    $("#article_1").css({ visibility: "hidden" });
    $("#article_8").css({ visibility: "hidden" });
    $("#article_9").css({ visibility: "hidden" });
    $("#article_10").css({ visibility: "hidden" });
  } else if (num9 == 8) {
    $(".article_content > div:nth-child(8)").css({ backgroundColor: "white" });
    $(".article_content > div:nth-child(2)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(3)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(4)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(5)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(6)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(7)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(1)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(9)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(10)").css({
      backgroundColor: "#2c2d30",
    });

    $("#article_8").css({ visibility: "visible" });
    $("#article_2").css({ visibility: "hidden" });
    $("#article_3").css({ visibility: "hidden" });
    $("#article_4").css({ visibility: "hidden" });
    $("#article_5").css({ visibility: "hidden" });
    $("#article_6").css({ visibility: "hidden" });
    $("#article_7").css({ visibility: "hidden" });
    $("#article_1").css({ visibility: "hidden" });
    $("#article_9").css({ visibility: "hidden" });
    $("#article_10").css({ visibility: "hidden" });
  } else if (num9 == 9) {
    $(".article_content > div:nth-child(9)").css({ backgroundColor: "white" });
    $(".article_content > div:nth-child(2)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(3)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(4)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(5)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(6)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(7)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(8)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(1)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(10)").css({
      backgroundColor: "#2c2d30",
    });

    $("#article_9").css({ visibility: "visible" });
    $("#article_2").css({ visibility: "hidden" });
    $("#article_3").css({ visibility: "hidden" });
    $("#article_4").css({ visibility: "hidden" });
    $("#article_5").css({ visibility: "hidden" });
    $("#article_6").css({ visibility: "hidden" });
    $("#article_7").css({ visibility: "hidden" });
    $("#article_8").css({ visibility: "hidden" });
    $("#article_1").css({ visibility: "hidden" });
    $("#article_10").css({ visibility: "hidden" });
  } else if (num9 == 10) {
    $(".article_content > div:nth-child(10)").css({ backgroundColor: "white" });
    $(".article_content > div:nth-child(2)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(3)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(4)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(5)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(6)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(7)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(8)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(9)").css({
      backgroundColor: "#2c2d30",
    });
    $(".article_content > div:nth-child(1)").css({
      backgroundColor: "#2c2d30",
    });

    $("#article_10").css({ visibility: "visible" });
    $("#article_2").css({ visibility: "hidden" });
    $("#article_3").css({ visibility: "hidden" });
    $("#article_4").css({ visibility: "hidden" });
    $("#article_5").css({ visibility: "hidden" });
    $("#article_6").css({ visibility: "hidden" });
    $("#article_7").css({ visibility: "hidden" });
    $("#article_8").css({ visibility: "hidden" });
    $("#article_9").css({ visibility: "hidden" });
    $("#article_1").css({ visibility: "hidden" });
  }
};

function more() {
  if (onMore == 0) {
    onMore = 1;
    document.getElementById("more").style.display = "block";
    $(".nav_left > a:nth-child(17)").css({ color: "rgb(4, 207, 92)" });
    document.querySelector(".nav_left a:nth-child(17)").innerText = "　접기 △";
  } else if (onMore == 1) {
    onMore = 0;
    document.getElementById("more").style.display = "none";
    $(".nav_left > a:nth-child(17)").css({ color: "rgb(142, 148, 166)" });
    document.querySelector(".nav_left a:nth-child(17)").innerText = "더보기 ▽";
  }
}
