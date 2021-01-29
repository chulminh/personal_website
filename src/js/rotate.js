//frontFace
const ffStyle = document.getElementById("front").style;
var ffWidth = 30;

//sideFace
const sideStyle = document.getElementById("side").style;
var sideWidth = 0;

//sideLegs Width
const sLegsStyle = document.getElementById("sideLegs").style;
var sLegsWidth = 0;
//right
var sLegsLeft = 2;

//front legs width
const fLegsStyle = document.getElementById("frontLegs").style;
var fLegsWidth = 22;
//right
var fLegsRight = 6;

//backLeg
const backLegStyle = document.getElementById("backLeg").style;
var bLegPos = 2;

//drawers
const drawer1 = document.getElementById("draw1").style;
const drawer2 = document.getElementById("draw2").style;
const drawer3 = document.getElementById("draw3").style;
var drawWidth = 22;
//right
var drawPos = 6;

//ex top
const exTop = document.getElementById("exTop").style;
var exTopAngle = 0;
//expos
var exPos = 0;

//ex Bot
const exBot = document.getElementById("exBot").style;
var exBotAngle = 0;

//topper
const topper = document.getElementById("topRight").style;
var topWidth = 34;

//nav and menu selectors
const menuHeader = document.querySelector("header").style;
var menuWidth = 100;
const navSelect = document.getElementsByClassName("nav_options").style;
var navOpacity = 0;

//boolean
var rot = false;

function rotateMenu() {
  if (rot === false) {
    //front of the drawer
    var ffTiming = setInterval(frontFace, 10);
    function frontFace() {
      if (ffWidth == 0) {
        ffStyle.display = "none";
        clearInterval(ffTiming);
        rot = true;
      } else {
        ffStyle.display = "block";
        ffWidth--;
        ffStyle.width = ffWidth + "px";
      }
    }

    //front legs of the drawer WIDTH
    var fLegsTiming = setInterval(frontLegsWidth, 12);
    function frontLegsWidth() {
      if (fLegsWidth == 0) {
        fLegsStyle.display = "none";
        clearInterval(fLegsTiming);
      } else {
        fLegsStyle.display = "block";
        fLegsWidth--;
        fLegsStyle.width = fLegsWidth + "px";
      }
    }

    //DRAWER WIDTH
    var drawTiming = setInterval(drawerWidth, 12);
    function drawerWidth() {
      if (drawWidth == 0) {
        drawer1.display = "none";
        drawer2.display = "none";
        drawer3.display = "none";
        clearInterval(drawTiming);
      } else {
        drawer1.display = "block";
        drawer2.display = "block";
        drawer3.display = "block";
        drawWidth--;
        drawer1.width = drawWidth + "px";
        drawer2.width = drawWidth + "px";
        drawer3.width = drawWidth + "px";
      }
    }

    //front legs of the drawer RIGHT
    var fLRTiming = setInterval(frontLegsRight, 80);
    function frontLegsRight() {
      if (fLegsRight == 2) {
        clearInterval(fLRTiming);
      } else {
        fLegsRight--;
        fLegsStyle.right = fLegsRight + "px";
      }
    }

    //DRAWERS RIGHT
    var dRTiming = setInterval(drawerPosition, 80);
    function drawerPosition() {
      if (drawPos == 2) {
        clearInterval(dRTiming);
      } else {
        drawPos--;
        drawer1.right = drawPos + "px";
        drawer2.right = drawPos + "px";
        drawer3.right = drawPos + "px";
      }
    }

    //side of the drawer
    var sideTiming = setInterval(sideFace, 10);
    function sideFace() {
      if (sideWidth == 30) {
        clearInterval(sideTiming);
      } else {
        sideStyle.display = "block";
        sideWidth++;
        sideStyle.width = sideWidth + "px";
      }
    }

    //side legs of the drawer
    var sLegsTiming = setInterval(sideLegs, 12);
    function sideLegs() {
      if (sLegsWidth == 22) {
        clearInterval(sLegsTiming);
      } else {
        sLegsStyle.display = "block";
        sLegsWidth++;
        sLegsStyle.width = sLegsWidth + "px";
      }
    }

    //side legs of the drawer Left
    var sLLTiming = setInterval(sideLegsLeft, 80);
    function sideLegsLeft() {
      if (sLegsLeft == 6) {
        clearInterval(sLLTiming);
      } else {
        sLegsLeft++;
        sLegsStyle.left = sLegsLeft + "px";
      }
    }

    //Back Leg
    var backLegTiming = setInterval(backLeg, 10);
    function backLeg() {
      if (bLegPos == 26) {
        clearInterval(backLegTiming);
        backLegStyle.display = "none";
      } else {
        backLegStyle.display = "block";
        bLegPos++;
        backLegStyle.right = bLegPos + "px";
      }
    }

    //exTop
    var exTopTiming = setInterval(exTopRot, 8);
    function exTopRot() {
      if (exTopAngle == -43) {
        clearInterval(exTopTiming);
      } else {
        exTop.display = "block";
        exTopAngle--;
        exTop.transform = "rotate(" + exTopAngle + "deg)";
      }
    }

    //exBot
    var exBotTiming = setInterval(exBotRot, 0);
    function exBotRot() {
      if (exBotAngle == 86) {
        clearInterval(exBotTiming);
      } else {
        exBot.display = "block";
        exBotAngle++;
        exBot.transform = "rotate(" + exBotAngle + "deg)";
      }
    }

    //exPosition
    var exPTiming = setInterval(exPosition, 25);
    function exPosition() {
      if (exPos == 14) {
        clearInterval(exPTiming);
      } else {
        exPos++;
        exTop.left = exPos + "px";
      }
    }

    //topper
    var topTiming = setInterval(topperWidth, 8);
    function topperWidth() {
      if (topWidth == 0) {
        clearInterval(topTiming);
        topper.display = "none";
      } else {
        topWidth--;
        topper.width = topWidth + "px";
      }
    }
  } else {
    //front face of the drawer BACK
    var backTiming = setInterval(backwards, 10);
    function backwards() {
      if (ffWidth == 30) {
        clearInterval(backTiming);
        rot = false;
      } else {
        ffStyle.display = "block";
        ffWidth++;
        ffStyle.width = ffWidth + "px";
      }
    }

    //side of the drawer BACK
    var sideBackTiming = setInterval(sideBackFace, 10);
    function sideBackFace() {
      if (sideWidth == 0) {
        sideStyle.display = "none";
        clearInterval(sideBackTiming);
      } else {
        sideWidth--;
        sideStyle.width = sideWidth + "px";
      }
    }

    //front legs of the drawer WIDTH
    var fLegsBackTiming = setInterval(frontLegsWidth, 12);
    function frontLegsWidth() {
      if (fLegsWidth == 22) {
        clearInterval(fLegsBackTiming);
      } else {
        fLegsStyle.display = "block";
        fLegsWidth++;
        fLegsStyle.width = fLegsWidth + "px";
      }
    }

    //DRAWER WIDTH BACK
    var dBTiming = setInterval(drawerWBack, 12);
    function drawerWBack() {
      if (drawWidth == 22) {
        clearInterval(dBTiming);
      } else {
        drawer1.display = "block";
        drawer2.display = "block";
        drawer3.display = "block";
        drawWidth++;
        drawer1.width = drawWidth + "px";
        drawer2.width = drawWidth + "px";
        drawer3.width = drawWidth + "px";
      }
    }

    //front legs of the drawer RIGHT GOING BACK
    var fLRBackTiming = setInterval(fLRBack, 80);
    function fLRBack() {
      if (fLegsRight == 6) {
        clearInterval(fLRBackTiming);
      } else {
        fLegsRight++;
        fLegsStyle.right = fLegsRight + "px";
      }
    }

    //DRAWER RIGHT BACK
    var dRBTiming = setInterval(dRBack, 80);
    function dRBack() {
      if (drawPos == 6) {
        clearInterval(dRBTiming);
      } else {
        drawPos++;
        drawer1.right = drawPos + "px";
        drawer2.right = drawPos + "px";
        drawer3.right = drawPos + "px";
      }
    }

    //side legs of the drawer BACK
    var sLBTiming = setInterval(sideLegsBack, 12);
    function sideLegsBack() {
      if (sLegsWidth == 0) {
        clearInterval(sLBTiming);
        sLegsStyle.display = "none";
      } else {
        sLegsWidth--;
        sLegsStyle.width = sLegsWidth + "px";
      }
    }

    //side legs of the drawer Left BACK
    var sLLBTiming = setInterval(sideLLBack, 80);
    function sideLLBack() {
      if (sLegsLeft == 2) {
        clearInterval(sLLBTiming);
      } else {
        sLegsLeft--;
        sLegsStyle.left = sLegsLeft + "px";
      }
    }

    //Back Leg BACK
    var bLBTiming = setInterval(backLegBack, 10);
    function backLegBack() {
      if (bLegPos == 5) {
        clearInterval(bLBTiming);
        backLegStyle.display = "none";
      } else {
        backLegStyle.display = "block";
        bLegPos--;
        backLegStyle.right = bLegPos + "px";
      }
    }

    //exTop BACK
    var exTBTiming = setInterval(exTopBack, 8);
    function exTopBack() {
      if (exTopAngle == 0) {
        clearInterval(exTBTiming);
      } else {
        exTopAngle++;
        exTop.transform = "rotate(" + exTopAngle + "deg)";
      }
    }

    //exBot BACK
    var exBBTiming = setInterval(exBotRotBack, 2);
    function exBotRotBack() {
      if (exBotAngle == 0) {
        clearInterval(exBBTiming);
      } else {
        exBotAngle--;
        exBot.transform = "rotate(" + exBotAngle + "deg)";
      }
    }

    //exPosition BACK
    var exPBackTiming = setInterval(exPosBack, 20);
    function exPosBack() {
      if (exPos == 3) {
        clearInterval(exPBackTiming);
        exTop.display = "none";
      } else {
        exPos--;
        exTop.left = exPos + "px";
      }
    }

    //topper
    var topBTiming = setInterval(topperWidthBack, 8);
    function topperWidthBack() {
      if (topWidth == 34) {
        clearInterval(topBTiming);
      } else {
        topper.display = "block";
        topWidth++;
        topper.width = topWidth + "px";
      }
    }
  }
}
