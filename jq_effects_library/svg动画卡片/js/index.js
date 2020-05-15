function newAnimationObj() {
  var timeline = arguments.length <= 0 || arguments[0] === undefined ? new TimelineMax() : arguments[0];

  var obj = {};
  obj.last = false;
  obj.start = function () {
    obj.last = false;
    timeline.resume();
  };
  obj.stop = function () {
    obj.last = true;
  };
  return obj;
}

var newOilAnimation = function newOilAnimation() {
  var oilTL = new TimelineMax({ repeat: -1, repeatDelay: 0.3 });
  var oilObj = newAnimationObj(oilTL);
  oilTL.to("#myTeardrop", 0.3, {
    y: 55,
    ease: Power3.easeIn
  }).set("#myTeardrop", {
    y: -53
  }).to("#myTeardrop", 0.8, {
    y: -24,
    ease: Power4.easeIn
  }).to("#TopInit", 0.8, {
    morphSVG: { shape: "#TopBulb" },
    ease: Power4.easeIn
  }, "-=0.8").to("#TopInit", 0.17, {
    morphSVG: { shape: "#TopBulbSm" },
    ease: Power0.easeOut
  }).to("#TopInit", 0.03, {
    morphSVG: { shape: "#TopInit" },
    ease: Power0.easeOut
  }).to("#TopInit", 0.05, {
    morphSVG: { shape: "#TopRound" },
    ease: Power0.easeNone
  }).to("#TopInit", 0.3, {
    morphSVG: { shape: "#TopInit" },
    ease: Bounce.easeOut
  }).to("#myTeardrop", 1.2, {
    y: 0,
    ease: Elastic.easeOut.config(1.2, 0.3),
    onComplete: function onComplete() {
      if (oilObj.last == true) oilTL.pause();
    }
  }, "-=0.55").invalidate();
  oilTL.pause();
  return oilObj;
};

var newTreeAnimation = function newTreeAnimation() {
  var treeTL = new TimelineMax({ repeat: -1, repeatDelay: 0.3 });
  var treeObj = newAnimationObj(treeTL);
  TweenMax.set("#Axe", { transformOrigin: '50% 50%' });
  TweenMax.set(["#Branches", "#Trunk", "#topBranches", "#botBranches"], { transformOrigin: '50% 100%' });
  treeTL.to("#Axe", 0.3, {
    bezier: {
      values: [{ x: 0, y: 0 }, { x: 5, y: 37 }, { x: 30, y: 43 }],
      autoRotate: -90
    },
    ease: Power1.easeIn
  }).to("#Axe", 0.2, {
    x: -10,
    ease: Power0.easeNone
  }).to("#Particle", 0.2, {
    x: -10,
    y: 4,
    ease: Power1.easeIn
  }, "-=0.2").to("#Branches", 0.05, {
    rotation: 5,
    ease: Power0.easeNone
  }, "-=0.25").to("#Branches", 0.05, {
    rotation: 0,
    ease: Power0.easeNone
  }, "-=0.20").set("#Particle", { autoAlpha: 0 }).set("#Branches", { transformOrigin: '100% 100%' }).to("#Branches", 0.3, {
    rotation: 90,
    y: 7,
    ease: Bounce.easeOut
  }, "+=0.05").to("#Branches", 0.5, {
    x: 28,
    ease: SlowMo.ease.config(0.5, 0.8, false)
  }, "+=0.1").to("#Trunk", 0.2, {
    scaleY: 0,
    ease: SlowMo.ease.config(0.1, 0.7, true)
  }, "+=0.1").set("#Branches", {
    x: 0,
    y: 0,
    rotation: 0
  }).set("#topBranches", {
    scale: 0.1,
    y: 10
  }).set("#botBranches", { scale: 0.1 }).to("#botBranches", 0.2, {
    scale: 1,
    ease: Power2.easeOut
  }).to("#topBranches", 0.2, {
    scale: 1,
    ease: Power2.easeOut
  }, "-=0.15").to("#topBranches", 0.25, {
    y: 0,
    ease: Back.easeOut.config(3),
    onComplete: function onComplete() {
      if (treeObj.last == true) treeTL.pause();
    }
  }, "-=0.15").invalidate();
  treeTL.pause();
  return treeObj;
};

var newWaveAnimation = function newWaveAnimation() {
  var waveTL = new TimelineMax({ repeat: -1, repeatDelay: 0.3 });
  var waveObj = newAnimationObj(waveTL);
  var xDur = 2;
  var dx = 16.5;
  TweenMax.set("#waveGroup", { transformOrigin: '50% 50%' });
  waveTL.to("#waveGroup", 0.25, {
    rotation: -3,
    ease: Power2.easeOut
  }).to("#waveGroup", 1.5, {
    rotation: 0,
    ease: Elastic.easeOut.config(2, 0.2)
  }).to("#waveTop", xDur, {
    x: dx,
    ease: Power0.easeNone
  }, "0").to("#waveBot", xDur, {
    x: -dx,
    ease: Power0.easeNone,
    onComplete: function onComplete() {
      if (waveObj.last == true) waveTL.pause();
    }
  }, "0").invalidate();
  waveTL.pause();
  return waveObj;
};

var waveAnimation = newWaveAnimation();
var treeAnimation = newTreeAnimation();
var oilAnimation = newOilAnimation();

setTimeout(function () {
  treeAnimation.start();
  treeAnimation.stop();
}, 300);

//TweenMax.globalTimeScale(0.5);

$(document).on("mouseenter touchstart", ".card", function (e) {
  if (e.currentTarget.classList[1] == "card--water") {
    waveAnimation.start();
  }
  if (e.currentTarget.classList[1] == "card--tree") {
    treeAnimation.start();
  }
  if (e.currentTarget.classList[1] == "card--oil") {
    oilAnimation.start();
  }
});

$(document).on("mouseleave touchend", ".card", function (e) {
  e.preventDefault();
  [waveAnimation, treeAnimation, oilAnimation].forEach(function (obj) {
    obj.stop();
  });
});