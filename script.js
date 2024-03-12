function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

loco();

gsap.to("#page>video", {
  scrollTrigger: {
    trigger: "#page>video",
    start: "20% top",
    end: "bottom top",
    // markers:true,
    scroller: "#main",
  },
  onStart: () => {
    document.querySelector("#page>video").play();
  },
});

gsap.to("#page", {
  scrollTrigger: {
    trigger: "#page",
    start: "top top",
    end: "bottom top",
    scroller: "#main",
    pin: true,
  },
});

gsap.to("#page-bottom", {
  scrollTrigger: {
    trigger: "#page",
    start: "5% top",
    end: "bottom top",
    scroller: "#main",
  },
  opacity: 0,
});

var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1",
    start: "top top",
    scrub: 1,
    scroller: "#main",
    // markers:true,
    pin: true,
  },
});

tl1.to("#page1>h1", {
  top: "-50%",
});



var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    start: "top top",
    scrub: 1,
    scroller: "#main",
    // markers:true,
    pin: true,
  },
});

tl2.to("#page2>h1", {
  top: "-50%",
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page3",
    start: "top top",
    scrub: 1,
    scroller: "#main",
    // markers:true,
    pin: true,
  },
});

tl3.to("#page3>h1", {
  top: "-50%",
});

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page4",
    start: "top top",
    scrub: 1,
    scroller: "#main",
    // markers:true,
    pin: true,
  },
});

tl4.to("#page4>h1", {
  top: "-50%",
});

var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page6",
    start: "top top",
    scrub: 1,
    scroller: "#main",
    // markers:true,
    pin: true,
  },
});

tl6.to("#page6>#center-page6",{
  top: "-50%",
});

function canvas(){
  const canvas = document.querySelector("#page9>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    Assests/canvas1/0000.jpg
    Assests/canvas1/0001.jpg
    Assests/canvas1/0002.jpg
    Assests/canvas1/0003.jpg
    Assests/canvas1/0004.jpg
    Assests/canvas1/0005.jpg
    Assests/canvas1/0006.jpg
    Assests/canvas1/0007.jpg
    Assests/canvas1/0008.jpg
    Assests/canvas1/0009.jpg
    Assests/canvas1/0010.jpg
    Assests/canvas1/0011.jpg
    Assests/canvas1/0012.jpg
    Assests/canvas1/0013.jpg
    Assests/canvas1/0014.jpg
    Assests/canvas1/0015.jpg
    Assests/canvas1/0016.jpg
    Assests/canvas1/0017.jpg
    Assests/canvas1/0018.jpg
    Assests/canvas1/0019.jpg
    Assests/canvas1/0020.jpg
    Assests/canvas1/0021.jpg
    Assests/canvas1/0022.jpg
    Assests/canvas1/0023.jpg
    Assests/canvas1/0024.jpg
    Assests/canvas1/0025.jpg
    Assests/canvas1/0026.jpg
    Assests/canvas1/0027.jpg
    Assests/canvas1/0028.jpg
    Assests/canvas1/0029.jpg
    Assests/canvas1/0030.jpg
    Assests/canvas1/0031.jpg
    Assests/canvas1/0032.jpg
    Assests/canvas1/0033.jpg
    Assests/canvas1/0034.jpg
    Assests/canvas1/0035.jpg
    Assests/canvas1/0036.jpg
    Assests/canvas1/0037.jpg
    Assests/canvas1/0038.jpg
    Assests/canvas1/0039.jpg
    Assests/canvas1/0040.jpg
    Assests/canvas1/0041.jpg
    Assests/canvas1/0042.jpg
    Assests/canvas1/0043.jpg
    Assests/canvas1/0044.jpg
    Assests/canvas1/0045.jpg
    Assests/canvas1/0046.jpg
    Assests/canvas1/0047.jpg
    Assests/canvas1/0048.jpg
    Assests/canvas1/0049.jpg
    Assests/canvas1/0050.jpg
    Assests/canvas1/0051.jpg
    Assests/canvas1/0052.jpg
    Assests/canvas1/0053.jpg
    Assests/canvas1/0054.jpg
    Assests/canvas1/0055.jpg
    Assests/canvas1/0056.jpg
    Assests/canvas1/0057.jpg
    Assests/canvas1/0058.jpg
    Assests/canvas1/0059.jpg
    Assests/canvas1/0060.jpg
    Assests/canvas1/0061.jpg
    Assests/canvas1/0062.jpg
    Assests/canvas1/0063.jpg
    Assests/canvas1/0064.jpg
    Assests/canvas1/0065.jpg
    Assests/canvas1/0066.jpg
    Assests/canvas1/0067.jpg
    Assests/canvas1/0068.jpg
    Assests/canvas1/0069.jpg
    Assests/canvas1/0070.jpg
    Assests/canvas1/0071.jpg
    Assests/canvas1/0072.jpg
    Assests/canvas1/0073.jpg
    Assests/canvas1/0074.jpg
    Assests/canvas1/0075.jpg
    Assests/canvas1/0076.jpg
    Assests/canvas1/0077.jpg
    Assests/canvas1/0078.jpg
    Assests/canvas1/0079.jpg
    Assests/canvas1/0080.jpg
    Assests/canvas1/0081.jpg
    Assests/canvas1/0082.jpg
    Assests/canvas1/0083.jpg
    Assests/canvas1/0084.jpg
    Assests/canvas1/0085.jpg
    Assests/canvas1/0086.jpg
    Assests/canvas1/0087.jpg
    Assests/canvas1/0088.jpg
    Assests/canvas1/0089.jpg
    Assests/canvas1/0090.jpg
    Assests/canvas1/0091.jpg
    Assests/canvas1/0092.jpg
    Assests/canvas1/0093.jpg
    Assests/canvas1/0094.jpg
    Assests/canvas1/0095.jpg
    Assests/canvas1/0096.jpg
    Assests/canvas1/0097.jpg
    Assests/canvas1/0098.jpg
    Assests/canvas1/0099.jpg
    Assests/canvas1/0100.jpg
    Assests/canvas1/0101.jpg
    Assests/canvas1/0102.jpg
    Assests/canvas1/0103.jpg
    Assests/canvas1/0104.jpg
    Assests/canvas1/0105.jpg
    Assests/canvas1/0106.jpg
    Assests/canvas1/0107.jpg
    Assests/canvas1/0108.jpg
    Assests/canvas1/0109.jpg
    Assests/canvas1/0110.jpg
    Assests/canvas1/0111.jpg
    Assests/canvas1/0112.jpg
    Assests/canvas1/0113.jpg
    Assests/canvas1/0114.jpg
    Assests/canvas1/0115.jpg
    Assests/canvas1/0116.jpg
    Assests/canvas1/0117.jpg
    Assests/canvas1/0118.jpg
    Assests/canvas1/0119.jpg
    Assests/canvas1/0120.jpg
    Assests/canvas1/0121.jpg
    Assests/canvas1/0122.jpg
    Assests/canvas1/0123.jpg
    Assests/canvas1/0124.jpg
    Assests/canvas1/0125.jpg
    Assests/canvas1/0126.jpg
    Assests/canvas1/0127.jpg
    Assests/canvas1/0128.jpg
    Assests/canvas1/0129.jpg
    Assests/canvas1/0130.jpg
    Assests/canvas1/0131.jpg
    Assests/canvas1/0132.jpg
    Assests/canvas1/0133.jpg
    Assests/canvas1/0134.jpg
    Assests/canvas1/0135.jpg
    Assests/canvas1/0136.jpg
    Assests/canvas1/0137.jpg
    Assests/canvas1/0138.jpg
    Assests/canvas1/0139.jpg
    Assests/canvas1/0140.jpg
    Assests/canvas1/0141.jpg
    Assests/canvas1/0142.jpg
    Assests/canvas1/0143.jpg
    Assests/canvas1/0144.jpg
    Assests/canvas1/0145.jpg
    Assests/canvas1/0146.jpg
    Assests/canvas1/0147.jpg
    Assests/canvas1/0148.jpg
    Assests/canvas1/0149.jpg
    Assests/canvas1/0150.jpg
    Assests/canvas1/0151.jpg
    Assests/canvas1/0152.jpg
    Assests/canvas1/0153.jpg
    Assests/canvas1/0154.jpg
    Assests/canvas1/0155.jpg
    Assests/canvas1/0156.jpg
    Assests/canvas1/0157.jpg
    Assests/canvas1/0158.jpg
    Assests/canvas1/0159.jpg
    Assests/canvas1/0160.jpg
    Assests/canvas1/0161.jpg
    Assests/canvas1/0162.jpg
    Assests/canvas1/0163.jpg
    Assests/canvas1/0164.jpg
    Assests/canvas1/0165.jpg
    Assests/canvas1/0166.jpg
    Assests/canvas1/0167.jpg
    Assests/canvas1/0168.jpg
    Assests/canvas1/0169.jpg
    Assests/canvas1/0170.jpg
    Assests/canvas1/0171.jpg
    Assests/canvas1/0172.jpg
    Assests/canvas1/0173.jpg
    Assests/canvas1/0174.jpg
    Assests/canvas1/0175.jpg
    Assests/canvas1/0176.jpg
    Assests/canvas1/0177.jpg
    Assests/canvas1/0178.jpg
    Assests/canvas1/0179.jpg
    Assests/canvas1/0180.jpg
    Assests/canvas1/0181.jpg
    Assests/canvas1/0182.jpg
    Assests/canvas1/0183.jpg
    Assests/canvas1/0184.jpg
    Assests/canvas1/0185.jpg
    Assests/canvas1/0186.jpg
    Assests/canvas1/0187.jpg
    Assests/canvas1/0188.jpg
    Assests/canvas1/0189.jpg
    Assests/canvas1/0190.jpg
    Assests/canvas1/0191.jpg
    Assests/canvas1/0192.jpg
    Assests/canvas1/0193.jpg
    Assests/canvas1/0194.jpg
    Assests/canvas1/0195.jpg
    Assests/canvas1/0196.jpg
    Assests/canvas1/0197.jpg
    Assests/canvas1/0198.jpg
    Assests/canvas1/0199.jpg
 `;
  return data.split("\n")[index];
}

const frameCount = 200;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});
}

canvas()



function canvas1(){
  const canvas = document.querySelector("#page19>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
Apple vision canvas images/Vision00001.png
Apple vision canvas images/Vision00002.png
Apple vision canvas images/Vision00003.png
Apple vision canvas images/Vision00004.png
Apple vision canvas images/Vision00005.png
Apple vision canvas images/Vision00006.png
Apple vision canvas images/Vision00007.png
Apple vision canvas images/Vision00008.png
Apple vision canvas images/Vision00009.png
Apple vision canvas images/Vision00010.png
Apple vision canvas images/Vision00011.png
Apple vision canvas images/Vision00012.png
Apple vision canvas images/Vision00013.png
Apple vision canvas images/Vision00014.png
Apple vision canvas images/Vision00015.png
Apple vision canvas images/Vision00016.png
Apple vision canvas images/Vision00017.png
Apple vision canvas images/Vision00018.png
Apple vision canvas images/Vision00019.png
Apple vision canvas images/Vision00020.png
Apple vision canvas images/Vision00021.png
Apple vision canvas images/Vision00022.png
Apple vision canvas images/Vision00023.png
Apple vision canvas images/Vision00024.png
Apple vision canvas images/Vision00025.png

`;
return data.split("\n")[index];
}

const frameCount = 25;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: 0.15,
  trigger: `#page19`,
  //   set start end according to preference
  start: `top top`,
  end: `80% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page19",
pin: true,
// markers:true,
scroller: `#main`,
//   set start end according to preference
start: `top top`,
end: `80% top`,
});
}
canvas1();

var tlp22 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page22",
    start: "top top",
    scrub: 1,
    scroller: "#main",
    // markers:true,
    pin: true,
  },
});

tlp22.to("#page22>#off",{
  opacity:0,
});

var tlp23 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page23",
    start: "top top",
    scrub: 1,
    scroller: "#main",
    // markers:true,
    pin: true,
  },
});

tlp23.to("#page23>#Soff",{
  opacity:0,
});

gsap.to("#page24>img",{
  scrollTrigger:{
    trigger:"#page24>img",
    start:"top bottom",
    end:"bottom 60%",
    scrub:0.5,
    scroller:"#main"
  },
  opacity:1
})