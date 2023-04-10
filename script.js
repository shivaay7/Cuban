gsap.registerPlugin(ScrollTrigger);

function dom() {
  const canvas = document.querySelector("#home>#canvas1");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `Cubans_Edge_Stack_002_0000.jpg
Cubans_Edge_Stack_002_0000.jpg
Cubans_Edge_Stack_002_0001.jpg
Cubans_Edge_Stack_002_0002.jpg
Cubans_Edge_Stack_002_0003.jpg
Cubans_Edge_Stack_002_0004.jpg
Cubans_Edge_Stack_002_0005.jpg
Cubans_Edge_Stack_002_0006.jpg
Cubans_Edge_Stack_002_0007.jpg
Cubans_Edge_Stack_002_0008.jpg
Cubans_Edge_Stack_002_0009.jpg
Cubans_Edge_Stack_002_0010.jpg
Cubans_Edge_Stack_002_0011.jpg
Cubans_Edge_Stack_002_0012.jpg
Cubans_Edge_Stack_002_0013.jpg
Cubans_Edge_Stack_002_0014.jpg
Cubans_Edge_Stack_002_0015.jpg
Cubans_Edge_Stack_002_0016.jpg
Cubans_Edge_Stack_002_0017.jpg
Cubans_Edge_Stack_002_0018.jpg
Cubans_Edge_Stack_002_0019.jpg
Cubans_Edge_Stack_002_0020.jpg
Cubans_Edge_Stack_002_0021.jpg
Cubans_Edge_Stack_002_0022.jpg
Cubans_Edge_Stack_002_0023.jpg
Cubans_Edge_Stack_002_0024.jpg
Cubans_Edge_Stack_002_0025.jpg
Cubans_Edge_Stack_002_0026.jpg
Cubans_Edge_Stack_002_0027.jpg
Cubans_Edge_Stack_002_0028.jpg
Cubans_Edge_Stack_002_0029.jpg
Cubans_Edge_Stack_002_0030.jpg
Cubans_Edge_Stack_002_0031.jpg
Cubans_Edge_Stack_002_0032.jpg
Cubans_Edge_Stack_002_0033.jpg
Cubans_Edge_Stack_002_0034.jpg
Cubans_Edge_Stack_002_0035.jpg
Cubans_Edge_Stack_002_0036.jpg
Cubans_Edge_Stack_002_0037.jpg
Cubans_Edge_Stack_002_0038.jpg
Cubans_Edge_Stack_002_0039.jpg
Cubans_Edge_Stack_002_0040.jpg
Cubans_Edge_Stack_002_0041.jpg
Cubans_Edge_Stack_002_0042.jpg
Cubans_Edge_Stack_002_0043.jpg
Cubans_Edge_Stack_002_0044.jpg
Cubans_Edge_Stack_002_0045.jpg
Cubans_Edge_Stack_002_0046.jpg
Cubans_Edge_Stack_002_0047.jpg
Cubans_Edge_Stack_002_0048.jpg
Cubans_Edge_Stack_002_0049.jpg
Cubans_Edge_Stack_002_0050.jpg
Cubans_Edge_Stack_002_0051.jpg
Cubans_Edge_Stack_002_0052.jpg
Cubans_Edge_Stack_002_0053.jpg
Cubans_Edge_Stack_002_0054.jpg
Cubans_Edge_Stack_002_0055.jpg
Cubans_Edge_Stack_002_0056.jpg
Cubans_Edge_Stack_002_0057.jpg
Cubans_Edge_Stack_002_0058.jpg
Cubans_Edge_Stack_002_0059.jpg
Cubans_Edge_Stack_002_0060.jpg
Cubans_Edge_Stack_002_0061.jpg
Cubans_Edge_Stack_002_0062.jpg
Cubans_Edge_Stack_002_0063.jpg
Cubans_Edge_Stack_002_0064.jpg
Cubans_Edge_Stack_002_0065.jpg
Cubans_Edge_Stack_002_0066.jpg
Cubans_Edge_Stack_002_0067.jpg
Cubans_Edge_Stack_002_0068.jpg
Cubans_Edge_Stack_002_0069.jpg
Cubans_Edge_Stack_002_0070.jpg
Cubans_Edge_Stack_002_0071.jpg
Cubans_Edge_Stack_002_0072.jpg
Cubans_Edge_Stack_002_0073.jpg
Cubans_Edge_Stack_002_0074.jpg
Cubans_Edge_Stack_002_0075.jpg
Cubans_Edge_Stack_002_0076.jpg
Cubans_Edge_Stack_002_0077.jpg
Cubans_Edge_Stack_002_0078.jpg
Cubans_Edge_Stack_002_0079.jpg
Cubans_Edge_Stack_002_0080.jpg
Cubans_Edge_Stack_002_0081.jpg
Cubans_Edge_Stack_002_0082.jpg
Cubans_Edge_Stack_002_0083.jpg
Cubans_Edge_Stack_002_0084.jpg
Cubans_Edge_Stack_002_0085.jpg
Cubans_Edge_Stack_002_0086.jpg
Cubans_Edge_Stack_002_0087.jpg
Cubans_Edge_Stack_002_0088.jpg
Cubans_Edge_Stack_002_0089.jpg
Cubans_Edge_Stack_002_0090.jpg
Cubans_Edge_Stack_002_0091.jpg
Cubans_Edge_Stack_002_0092.jpg
Cubans_Edge_Stack_002_0093.jpg
Cubans_Edge_Stack_002_0094.jpg
Cubans_Edge_Stack_002_0095.jpg
Cubans_Edge_Stack_002_0096.jpg
Cubans_Edge_Stack_002_0097.jpg
Cubans_Edge_Stack_002_0098.jpg
Cubans_Edge_Stack_002_0099.jpg
Cubans_Edge_Stack_002_0100.jpg
Cubans_Edge_Stack_002_0101.jpg
Cubans_Edge_Stack_002_0102.jpg
Cubans_Edge_Stack_002_0103.jpg
Cubans_Edge_Stack_002_0104.jpg
Cubans_Edge_Stack_002_0105.jpg
Cubans_Edge_Stack_002_0106.jpg
Cubans_Edge_Stack_002_0107.jpg
Cubans_Edge_Stack_002_0108.jpg
Cubans_Edge_Stack_002_0109.jpg
Cubans_Edge_Stack_002_0110.jpg
Cubans_Edge_Stack_002_0111.jpg
Cubans_Edge_Stack_002_0112.jpg
Cubans_Edge_Stack_002_0113.jpg
Cubans_Edge_Stack_002_0114.jpg
Cubans_Edge_Stack_002_0115.jpg
Cubans_Edge_Stack_002_0116.jpg
Cubans_Edge_Stack_002_0117.jpg
Cubans_Edge_Stack_002_0118.jpg
Cubans_Edge_Stack_002_0119.jpg
Cubans_Edge_Stack_002_0120.jpg
Cubans_Edge_Stack_002_0121.jpg
Cubans_Edge_Stack_002_0122.jpg
Cubans_Edge_Stack_002_0123.jpg
Cubans_Edge_Stack_002_0124.jpg
Cubans_Edge_Stack_002_0125.jpg
Cubans_Edge_Stack_002_0126.jpg
Cubans_Edge_Stack_002_0127.jpg
Cubans_Edge_Stack_002_0128.jpg
Cubans_Edge_Stack_002_0129.jpg
Cubans_Edge_Stack_002_0130.jpg
Cubans_Edge_Stack_002_0131.jpg
Cubans_Edge_Stack_002_0132.jpg
Cubans_Edge_Stack_002_0133.jpg
Cubans_Edge_Stack_002_0134.jpg
Cubans_Edge_Stack_002_0135.jpg
Cubans_Edge_Stack_002_0136.jpg
Cubans_Edge_Stack_002_0137.jpg
Cubans_Edge_Stack_002_0138.jpg
Cubans_Edge_Stack_002_0139.jpg
Cubans_Edge_Stack_002_0140.jpg
Cubans_Edge_Stack_002_0141.jpg
Cubans_Edge_Stack_002_0142.jpg
Cubans_Edge_Stack_002_0143.jpg
Cubans_Edge_Stack_002_0144.jpg
Cubans_Edge_Stack_002_0145.jpg
Cubans_Edge_Stack_002_0146.jpg
Cubans_Edge_Stack_002_0147.jpg
Cubans_Edge_Stack_002_0148.jpg
Cubans_Edge_Stack_002_0149.jpg
Cubans_Edge_Stack_002_0150.jpg
Cubans_Edge_Stack_002_0151.jpg
Cubans_Edge_Stack_002_0152.jpg
Cubans_Edge_Stack_002_0153.jpg
Cubans_Edge_Stack_002_0154.jpg
Cubans_Edge_Stack_002_0155.jpg
Cubans_Edge_Stack_002_0156.jpg
Cubans_Edge_Stack_002_0157.jpg
Cubans_Edge_Stack_002_0158.jpg
Cubans_Edge_Stack_002_0159.jpg
Cubans_Edge_Stack_002_0160.jpg
Cubans_Edge_Stack_002_0161.jpg
Cubans_Edge_Stack_002_0162.jpg
Cubans_Edge_Stack_002_0163.jpg
Cubans_Edge_Stack_002_0164.jpg
Cubans_Edge_Stack_002_0165.jpg
Cubans_Edge_Stack_002_0166.jpg
Cubans_Edge_Stack_002_0167.jpg
Cubans_Edge_Stack_002_0168.jpg
Cubans_Edge_Stack_002_0169.jpg
Cubans_Edge_Stack_002_0170.jpg
Cubans_Edge_Stack_002_0171.jpg
Cubans_Edge_Stack_002_0172.jpg
Cubans_Edge_Stack_002_0173.jpg
Cubans_Edge_Stack_002_0174.jpg
Cubans_Edge_Stack_002_0175.jpg
Cubans_Edge_Stack_002_0176.jpg
Cubans_Edge_Stack_002_0177.jpg
Cubans_Edge_Stack_002_0178.jpg
Cubans_Edge_Stack_002_0179.jpg
Cubans_Edge_Stack_002_0180.jpg
Cubans_Edge_Stack_002_0181.jpg
Cubans_Edge_Stack_002_0182.jpg
Cubans_Edge_Stack_002_0183.jpg
Cubans_Edge_Stack_002_0184.jpg
Cubans_Edge_Stack_002_0185.jpg
Cubans_Edge_Stack_002_0186.jpg
Cubans_Edge_Stack_002_0187.jpg
Cubans_Edge_Stack_002_0188.jpg
Cubans_Edge_Stack_002_0189.jpg
Cubans_Edge_Stack_002_0190.jpg
Cubans_Edge_Stack_002_0191.jpg
Cubans_Edge_Stack_002_0192.jpg
Cubans_Edge_Stack_002_0193.jpg
Cubans_Edge_Stack_002_0194.jpg
Cubans_Edge_Stack_002_0195.jpg
Cubans_Edge_Stack_002_0196.jpg
Cubans_Edge_Stack_002_0197.jpg
Cubans_Edge_Stack_002_0198.jpg
Cubans_Edge_Stack_002_0199.jpg
Cubans_Edge_Stack_002_0200.jpg
Cubans_Edge_Stack_002_0201.jpg
Cubans_Edge_Stack_002_0202.jpg
Cubans_Edge_Stack_002_0203.jpg
Cubans_Edge_Stack_002_0204.jpg
Cubans_Edge_Stack_002_0205.jpg
Cubans_Edge_Stack_002_0206.jpg
Cubans_Edge_Stack_002_0207.jpg
Cubans_Edge_Stack_002_0208.jpg
Cubans_Edge_Stack_002_0209.jpg
Cubans_Edge_Stack_002_0210.jpg
Cubans_Edge_Stack_002_0211.jpg
Cubans_Edge_Stack_002_0212.jpg
Cubans_Edge_Stack_002_0213.jpg
Cubans_Edge_Stack_002_0214.jpg
Cubans_Edge_Stack_002_0215.jpg
Cubans_Edge_Stack_002_0216.jpg
Cubans_Edge_Stack_002_0217.jpg
Cubans_Edge_Stack_002_0218.jpg
Cubans_Edge_Stack_002_0219.jpg
Cubans_Edge_Stack_002_0220.jpg
Cubans_Edge_Stack_002_0221.jpg
Cubans_Edge_Stack_002_0222.jpg
Cubans_Edge_Stack_002_0223.jpg
Cubans_Edge_Stack_002_0224.jpg
Cubans_Edge_Stack_002_0225.jpg
Cubans_Edge_Stack_002_0226.jpg
Cubans_Edge_Stack_002_0227.jpg
Cubans_Edge_Stack_002_0228.jpg
Cubans_Edge_Stack_002_0229.jpg
Cubans_Edge_Stack_002_0230.jpg
Cubans_Edge_Stack_002_0231.jpg
Cubans_Edge_Stack_002_0232.jpg
Cubans_Edge_Stack_002_0233.jpg
Cubans_Edge_Stack_002_0234.jpg
Cubans_Edge_Stack_002_0235.jpg
Cubans_Edge_Stack_002_0236.jpg
Cubans_Edge_Stack_002_0237.jpg
Cubans_Edge_Stack_002_0238.jpg
Cubans_Edge_Stack_002_0239.jpg
Cubans_Edge_Stack_002_0240.jpg
Cubans_Edge_Stack_002_0241.jpg
Cubans_Edge_Stack_002_0242.jpg
Cubans_Edge_Stack_002_0243.jpg
Cubans_Edge_Stack_002_0244.jpg
Cubans_Edge_Stack_002_0245.jpg
Cubans_Edge_Stack_002_0246.jpg
Cubans_Edge_Stack_002_0247.jpg
Cubans_Edge_Stack_002_0248.jpg
Cubans_Edge_Stack_002_0249.jpg
Cubans_Edge_Stack_002_0250.jpg`;
    return data.split("\n")[index];
  }

  const frameCount = 250;

  const images = [];
  const imageSeq = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 1.8,
      // pin:true,
      trigger: "#home",
      // start:"bottom 100%",
    },
    onUpdate: render,
  });

  images[0].onload = render;

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

  // gsap.to("#home canvas",{
  //     scale:1,
  //     scrollTrigger:{
  //         scrub:.1,
  //         trigger:"#home",
  //         start:"bottom 100%",
  //
  //         // end:"bottom 120%"

  //     },

  // })
  // ScrollTrigger.create({
  //     trigger:"#home",
  //     pin:true,
  //     start:"bottom 100%",

  // })
}
dom();

function dom1() {
  const canvas = document.querySelector("#second>#canvas2");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `Cubans_Edge_whoweare_005_0000.jpg
    Cubans_Edge_whoweare_005_0001.jpg
    Cubans_Edge_whoweare_005_0002.jpg
    Cubans_Edge_whoweare_005_0003.jpg
    Cubans_Edge_whoweare_005_0004.jpg
    Cubans_Edge_whoweare_005_0005.jpg
    Cubans_Edge_whoweare_005_0006.jpg
    Cubans_Edge_whoweare_005_0007.jpg
    Cubans_Edge_whoweare_005_0008.jpg
    Cubans_Edge_whoweare_005_0009.jpg
    Cubans_Edge_whoweare_005_0010.jpg
    Cubans_Edge_whoweare_005_0011.jpg
    Cubans_Edge_whoweare_005_0012.jpg
    Cubans_Edge_whoweare_005_0013.jpg
    Cubans_Edge_whoweare_005_0014.jpg
    Cubans_Edge_whoweare_005_0015.jpg
    Cubans_Edge_whoweare_005_0016.jpg
    Cubans_Edge_whoweare_005_0017.jpg
    Cubans_Edge_whoweare_005_0018.jpg
    Cubans_Edge_whoweare_005_0019.jpg
    Cubans_Edge_whoweare_005_0020.jpg
    Cubans_Edge_whoweare_005_0021.jpg
    Cubans_Edge_whoweare_005_0022.jpg
    Cubans_Edge_whoweare_005_0023.jpg
    Cubans_Edge_whoweare_005_0024.jpg
    Cubans_Edge_whoweare_005_0025.jpg
    Cubans_Edge_whoweare_005_0026.jpg
    Cubans_Edge_whoweare_005_0027.jpg
    Cubans_Edge_whoweare_005_0028.jpg
    Cubans_Edge_whoweare_005_0029.jpg
    Cubans_Edge_whoweare_005_0030.jpg
    Cubans_Edge_whoweare_005_0031.jpg
    Cubans_Edge_whoweare_005_0032.jpg
    Cubans_Edge_whoweare_005_0033.jpg
    Cubans_Edge_whoweare_005_0034.jpg
    Cubans_Edge_whoweare_005_0035.jpg
    Cubans_Edge_whoweare_005_0036.jpg
    Cubans_Edge_whoweare_005_0037.jpg
    Cubans_Edge_whoweare_005_0038.jpg
    Cubans_Edge_whoweare_005_0039.jpg
    Cubans_Edge_whoweare_005_0040.jpg
    Cubans_Edge_whoweare_005_0041.jpg
    Cubans_Edge_whoweare_005_0042.jpg
    Cubans_Edge_whoweare_005_0043.jpg
    Cubans_Edge_whoweare_005_0044.jpg
    Cubans_Edge_whoweare_005_0045.jpg
    Cubans_Edge_whoweare_005_0046.jpg
    Cubans_Edge_whoweare_005_0047.jpg
    Cubans_Edge_whoweare_005_0048.jpg
    Cubans_Edge_whoweare_005_0049.jpg
    Cubans_Edge_whoweare_005_0050.jpg
    Cubans_Edge_whoweare_005_0051.jpg
    Cubans_Edge_whoweare_005_0052.jpg
    Cubans_Edge_whoweare_005_0053.jpg
    Cubans_Edge_whoweare_005_0054.jpg
    Cubans_Edge_whoweare_005_0055.jpg
    Cubans_Edge_whoweare_005_0056.jpg
    Cubans_Edge_whoweare_005_0057.jpg
    Cubans_Edge_whoweare_005_0058.jpg
    Cubans_Edge_whoweare_005_0059.jpg
    Cubans_Edge_whoweare_005_0060.jpg
    Cubans_Edge_whoweare_005_0061.jpg
    Cubans_Edge_whoweare_005_0062.jpg
    Cubans_Edge_whoweare_005_0063.jpg
    Cubans_Edge_whoweare_005_0064.jpg
    Cubans_Edge_whoweare_005_0065.jpg
    Cubans_Edge_whoweare_005_0066.jpg
    Cubans_Edge_whoweare_005_0067.jpg
    Cubans_Edge_whoweare_005_0068.jpg
    Cubans_Edge_whoweare_005_0069.jpg
    Cubans_Edge_whoweare_005_0070.jpg
    Cubans_Edge_whoweare_005_0071.jpg
    Cubans_Edge_whoweare_005_0072.jpg
    Cubans_Edge_whoweare_005_0073.jpg
    Cubans_Edge_whoweare_005_0074.jpg
    Cubans_Edge_whoweare_005_0075.jpg
    Cubans_Edge_whoweare_005_0076.jpg
    Cubans_Edge_whoweare_005_0077.jpg
    Cubans_Edge_whoweare_005_0078.jpg
    Cubans_Edge_whoweare_005_0079.jpg
    Cubans_Edge_whoweare_005_0080.jpg
    Cubans_Edge_whoweare_005_0081.jpg
    Cubans_Edge_whoweare_005_0082.jpg
    Cubans_Edge_whoweare_005_0083.jpg
    Cubans_Edge_whoweare_005_0084.jpg
    Cubans_Edge_whoweare_005_0085.jpg
    Cubans_Edge_whoweare_005_0086.jpg
    Cubans_Edge_whoweare_005_0087.jpg
    Cubans_Edge_whoweare_005_0088.jpg
    Cubans_Edge_whoweare_005_0089.jpg
    Cubans_Edge_whoweare_005_0090.jpg
    Cubans_Edge_whoweare_005_0091.jpg
    Cubans_Edge_whoweare_005_0092.jpg
    Cubans_Edge_whoweare_005_0093.jpg
    Cubans_Edge_whoweare_005_0094.jpg
    Cubans_Edge_whoweare_005_0095.jpg
    Cubans_Edge_whoweare_005_0096.jpg
    Cubans_Edge_whoweare_005_0097.jpg
    Cubans_Edge_whoweare_005_0098.jpg
    Cubans_Edge_whoweare_005_0099.jpg
    Cubans_Edge_whoweare_005_0100.jpg
    Cubans_Edge_whoweare_005_0101.jpg
    Cubans_Edge_whoweare_005_0102.jpg
    Cubans_Edge_whoweare_005_0103.jpg
    Cubans_Edge_whoweare_005_0104.jpg
    Cubans_Edge_whoweare_005_0105.jpg
    Cubans_Edge_whoweare_005_0106.jpg
    Cubans_Edge_whoweare_005_0107.jpg
    Cubans_Edge_whoweare_005_0108.jpg
    Cubans_Edge_whoweare_005_0109.jpg
    Cubans_Edge_whoweare_005_0110.jpg
    Cubans_Edge_whoweare_005_0111.jpg
    Cubans_Edge_whoweare_005_0112.jpg
    Cubans_Edge_whoweare_005_0113.jpg
    Cubans_Edge_whoweare_005_0114.jpg
    Cubans_Edge_whoweare_005_0115.jpg
    Cubans_Edge_whoweare_005_0116.jpg
    Cubans_Edge_whoweare_005_0117.jpg
    Cubans_Edge_whoweare_005_0118.jpg
    Cubans_Edge_whoweare_005_0119.jpg
    Cubans_Edge_whoweare_005_0120.jpg
    Cubans_Edge_whoweare_005_0121.jpg
    Cubans_Edge_whoweare_005_0122.jpg
    Cubans_Edge_whoweare_005_0123.jpg
    Cubans_Edge_whoweare_005_0124.jpg
    Cubans_Edge_whoweare_005_0125.jpg
    Cubans_Edge_whoweare_005_0126.jpg
    Cubans_Edge_whoweare_005_0127.jpg
    Cubans_Edge_whoweare_005_0128.jpg
    Cubans_Edge_whoweare_005_0129.jpg
    Cubans_Edge_whoweare_005_0130.jpg
    Cubans_Edge_whoweare_005_0131.jpg
    Cubans_Edge_whoweare_005_0132.jpg
    Cubans_Edge_whoweare_005_0133.jpg
    Cubans_Edge_whoweare_005_0134.jpg
    Cubans_Edge_whoweare_005_0135.jpg
    Cubans_Edge_whoweare_005_0136.jpg
    Cubans_Edge_whoweare_005_0137.jpg
    Cubans_Edge_whoweare_005_0138.jpg
    Cubans_Edge_whoweare_005_0139.jpg
    Cubans_Edge_whoweare_005_0140.jpg
    Cubans_Edge_whoweare_005_0141.jpg
    Cubans_Edge_whoweare_005_0142.jpg
    Cubans_Edge_whoweare_005_0143.jpg
    Cubans_Edge_whoweare_005_0144.jpg
    Cubans_Edge_whoweare_005_0145.jpg
    Cubans_Edge_whoweare_005_0146.jpg
    Cubans_Edge_whoweare_005_0147.jpg
    Cubans_Edge_whoweare_005_0148.jpg
    Cubans_Edge_whoweare_005_0149.jpg
    Cubans_Edge_whoweare_005_0150.jpg
    Cubans_Edge_whoweare_005_0151.jpg
    Cubans_Edge_whoweare_005_0152.jpg
    Cubans_Edge_whoweare_005_0153.jpg
    Cubans_Edge_whoweare_005_0154.jpg
    Cubans_Edge_whoweare_005_0155.jpg
    Cubans_Edge_whoweare_005_0156.jpg
    Cubans_Edge_whoweare_005_0157.jpg
    Cubans_Edge_whoweare_005_0158.jpg
    Cubans_Edge_whoweare_005_0159.jpg
    Cubans_Edge_whoweare_005_0160.jpg
    Cubans_Edge_whoweare_005_0161.jpg
    Cubans_Edge_whoweare_005_0162.jpg
    Cubans_Edge_whoweare_005_0163.jpg
    Cubans_Edge_whoweare_005_0164.jpg
    Cubans_Edge_whoweare_005_0165.jpg
    Cubans_Edge_whoweare_005_0166.jpg
    Cubans_Edge_whoweare_005_0167.jpg
    Cubans_Edge_whoweare_005_0168.jpg
    Cubans_Edge_whoweare_005_0169.jpg
    Cubans_Edge_whoweare_005_0170.jpg
    Cubans_Edge_whoweare_005_0171.jpg
    Cubans_Edge_whoweare_005_0172.jpg
    Cubans_Edge_whoweare_005_0173.jpg
    Cubans_Edge_whoweare_005_0174.jpg
    Cubans_Edge_whoweare_005_0175.jpg
    Cubans_Edge_whoweare_005_0176.jpg
    Cubans_Edge_whoweare_005_0177.jpg
    Cubans_Edge_whoweare_005_0178.jpg
    Cubans_Edge_whoweare_005_0179.jpg
    Cubans_Edge_whoweare_005_0180.jpg
    Cubans_Edge_whoweare_005_0181.jpg
    Cubans_Edge_whoweare_005_0182.jpg
    Cubans_Edge_whoweare_005_0183.jpg
    Cubans_Edge_whoweare_005_0184.jpg
    Cubans_Edge_whoweare_005_0185.jpg
    Cubans_Edge_whoweare_005_0186.jpg
    Cubans_Edge_whoweare_005_0187.jpg
    Cubans_Edge_whoweare_005_0188.jpg
    Cubans_Edge_whoweare_005_0189.jpg
    Cubans_Edge_whoweare_005_0190.jpg
    Cubans_Edge_whoweare_005_0191.jpg
    Cubans_Edge_whoweare_005_0192.jpg
    Cubans_Edge_whoweare_005_0193.jpg
    Cubans_Edge_whoweare_005_0194.jpg
    Cubans_Edge_whoweare_005_0195.jpg
    Cubans_Edge_whoweare_005_0196.jpg
    Cubans_Edge_whoweare_005_0197.jpg`;
    return data.split("\n")[index];
  }

  const frameCount = 198;

  const images = [];
  const imageSeq = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 1.8,
      // pin:true,
      trigger: "#second",
      // start:"bottom 100%",
    },
    onUpdate: render,
  });

  images[0].onload = render;

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

  // gsap.to("#second canvas",{
  //     scale:1,
  //     scrollTrigger:{
  //         scrub:.1,
  //         trigger:"#second",
  //         start:"bottom 100%",
  //
  //         // end:"bottom 120%"

  //     },

  // })
  // ScrollTrigger.create({
  //     trigger:"#second",
  //     pin:true,
  //     start:"bottom 100%",

  // })
}
dom1();

function dom11() {
  const canvas = document.querySelector("#second2>#canvas22");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `Cubans_Edge_Stack_009_0000.jpg
    Cubans_Edge_Stack_009_0001.jpg
    Cubans_Edge_Stack_009_0002.jpg
    Cubans_Edge_Stack_009_0003.jpg
    Cubans_Edge_Stack_009_0004.jpg
    Cubans_Edge_Stack_009_0005.jpg
    Cubans_Edge_Stack_009_0006.jpg
    Cubans_Edge_Stack_009_0007.jpg
    Cubans_Edge_Stack_009_0008.jpg
    Cubans_Edge_Stack_009_0009.jpg
    Cubans_Edge_Stack_009_0010.jpg
    Cubans_Edge_Stack_009_0011.jpg
    Cubans_Edge_Stack_009_0012.jpg
    Cubans_Edge_Stack_009_0013.jpg
    Cubans_Edge_Stack_009_0014.jpg
    Cubans_Edge_Stack_009_0015.jpg
    Cubans_Edge_Stack_009_0016.jpg
    Cubans_Edge_Stack_009_0017.jpg
    Cubans_Edge_Stack_009_0018.jpg
    Cubans_Edge_Stack_009_0019.jpg
    Cubans_Edge_Stack_009_0020.jpg
    Cubans_Edge_Stack_009_0021.jpg
    Cubans_Edge_Stack_009_0022.jpg
    Cubans_Edge_Stack_009_0023.jpg
    Cubans_Edge_Stack_009_0024.jpg
    Cubans_Edge_Stack_009_0025.jpg
    Cubans_Edge_Stack_009_0026.jpg
    Cubans_Edge_Stack_009_0027.jpg
    Cubans_Edge_Stack_009_0028.jpg
    Cubans_Edge_Stack_009_0029.jpg
    Cubans_Edge_Stack_009_0030.jpg
    Cubans_Edge_Stack_009_0031.jpg
    Cubans_Edge_Stack_009_0032.jpg
    Cubans_Edge_Stack_009_0033.jpg
    Cubans_Edge_Stack_009_0034.jpg
    Cubans_Edge_Stack_009_0035.jpg
    Cubans_Edge_Stack_009_0036.jpg
    Cubans_Edge_Stack_009_0037.jpg
    Cubans_Edge_Stack_009_0038.jpg
    Cubans_Edge_Stack_009_0039.jpg
    Cubans_Edge_Stack_009_0040.jpg
    Cubans_Edge_Stack_009_0041.jpg
    Cubans_Edge_Stack_009_0042.jpg
    Cubans_Edge_Stack_009_0043.jpg
    Cubans_Edge_Stack_009_0044.jpg
    Cubans_Edge_Stack_009_0045.jpg
    Cubans_Edge_Stack_009_0046.jpg
    Cubans_Edge_Stack_009_0047.jpg
    Cubans_Edge_Stack_009_0048.jpg
    Cubans_Edge_Stack_009_0049.jpg
    Cubans_Edge_Stack_009_0050.jpg
    Cubans_Edge_Stack_009_0051.jpg
    Cubans_Edge_Stack_009_0052.jpg
    Cubans_Edge_Stack_009_0053.jpg
    Cubans_Edge_Stack_009_0054.jpg
    Cubans_Edge_Stack_009_0055.jpg
    Cubans_Edge_Stack_009_0056.jpg
    Cubans_Edge_Stack_009_0057.jpg
    Cubans_Edge_Stack_009_0058.jpg
    Cubans_Edge_Stack_009_0059.jpg
    Cubans_Edge_Stack_009_0060.jpg
    Cubans_Edge_Stack_009_0061.jpg
    Cubans_Edge_Stack_009_0062.jpg
    Cubans_Edge_Stack_009_0063.jpg
    Cubans_Edge_Stack_009_0064.jpg
    Cubans_Edge_Stack_009_0065.jpg
    Cubans_Edge_Stack_009_0066.jpg
    Cubans_Edge_Stack_009_0067.jpg
    Cubans_Edge_Stack_009_0068.jpg
    Cubans_Edge_Stack_009_0069.jpg
    Cubans_Edge_Stack_009_0070.jpg
    Cubans_Edge_Stack_009_0071.jpg
    Cubans_Edge_Stack_009_0072.jpg
    Cubans_Edge_Stack_009_0073.jpg
    Cubans_Edge_Stack_009_0074.jpg
    Cubans_Edge_Stack_009_0075.jpg
    Cubans_Edge_Stack_009_0076.jpg
    Cubans_Edge_Stack_009_0077.jpg
    Cubans_Edge_Stack_009_0078.jpg
    Cubans_Edge_Stack_009_0079.jpg
    Cubans_Edge_Stack_009_0080.jpg
    Cubans_Edge_Stack_009_0081.jpg
    Cubans_Edge_Stack_009_0082.jpg
    Cubans_Edge_Stack_009_0083.jpg
    Cubans_Edge_Stack_009_0084.jpg
    Cubans_Edge_Stack_009_0085.jpg
    Cubans_Edge_Stack_009_0086.jpg
    Cubans_Edge_Stack_009_0087.jpg
    Cubans_Edge_Stack_009_0088.jpg
    Cubans_Edge_Stack_009_0089.jpg
    Cubans_Edge_Stack_009_0090.jpg
    Cubans_Edge_Stack_009_0091.jpg
    Cubans_Edge_Stack_009_0092.jpg
    Cubans_Edge_Stack_009_0093.jpg
    Cubans_Edge_Stack_009_0094.jpg
    Cubans_Edge_Stack_009_0095.jpg
    Cubans_Edge_Stack_009_0096.jpg
    Cubans_Edge_Stack_009_0097.jpg
    Cubans_Edge_Stack_009_0098.jpg
    Cubans_Edge_Stack_009_0099.jpg
    Cubans_Edge_Stack_009_0100.jpg
    Cubans_Edge_Stack_009_0101.jpg
    Cubans_Edge_Stack_009_0102.jpg
    Cubans_Edge_Stack_009_0103.jpg
    Cubans_Edge_Stack_009_0104.jpg
    Cubans_Edge_Stack_009_0105.jpg
    Cubans_Edge_Stack_009_0106.jpg
    Cubans_Edge_Stack_009_0107.jpg
    Cubans_Edge_Stack_009_0108.jpg
    Cubans_Edge_Stack_009_0109.jpg
    Cubans_Edge_Stack_009_0110.jpg
    Cubans_Edge_Stack_009_0111.jpg
    Cubans_Edge_Stack_009_0112.jpg
    Cubans_Edge_Stack_009_0113.jpg
    Cubans_Edge_Stack_009_0114.jpg
    Cubans_Edge_Stack_009_0115.jpg
    Cubans_Edge_Stack_009_0116.jpg
    Cubans_Edge_Stack_009_0117.jpg
    Cubans_Edge_Stack_009_0118.jpg
    Cubans_Edge_Stack_009_0119.jpg
    Cubans_Edge_Stack_009_0120.jpg
    Cubans_Edge_Stack_009_0121.jpg
    Cubans_Edge_Stack_009_0122.jpg
    Cubans_Edge_Stack_009_0123.jpg
    Cubans_Edge_Stack_009_0124.jpg
    Cubans_Edge_Stack_009_0125.jpg
    Cubans_Edge_Stack_009_0126.jpg
    Cubans_Edge_Stack_009_0127.jpg
    Cubans_Edge_Stack_009_0128.jpg
    Cubans_Edge_Stack_009_0129.jpg
    Cubans_Edge_Stack_009_0130.jpg
    Cubans_Edge_Stack_009_0131.jpg
    Cubans_Edge_Stack_009_0132.jpg
    Cubans_Edge_Stack_009_0133.jpg
    Cubans_Edge_Stack_009_0134.jpg
    Cubans_Edge_Stack_009_0135.jpg
    Cubans_Edge_Stack_009_0136.jpg
    Cubans_Edge_Stack_009_0137.jpg
    Cubans_Edge_Stack_009_0138.jpg
    Cubans_Edge_Stack_009_0139.jpg
    Cubans_Edge_Stack_009_0140.jpg
    Cubans_Edge_Stack_009_0141.jpg
    Cubans_Edge_Stack_009_0142.jpg
    Cubans_Edge_Stack_009_0143.jpg
    Cubans_Edge_Stack_009_0144.jpg
    Cubans_Edge_Stack_009_0145.jpg
    Cubans_Edge_Stack_009_0146.jpg
    Cubans_Edge_Stack_009_0147.jpg
    Cubans_Edge_Stack_009_0148.jpg
    Cubans_Edge_Stack_009_0149.jpg
    Cubans_Edge_Stack_009_0150.jpg
    Cubans_Edge_Stack_009_0151.jpg
    Cubans_Edge_Stack_009_0152.jpg
    Cubans_Edge_Stack_009_0153.jpg
    Cubans_Edge_Stack_009_0154.jpg
    Cubans_Edge_Stack_009_0155.jpg
    Cubans_Edge_Stack_009_0156.jpg
    Cubans_Edge_Stack_009_0157.jpg
    Cubans_Edge_Stack_009_0158.jpg
    Cubans_Edge_Stack_009_0159.jpg
    Cubans_Edge_Stack_009_0160.jpg
    Cubans_Edge_Stack_009_0161.jpg
    Cubans_Edge_Stack_009_0162.jpg
    Cubans_Edge_Stack_009_0163.jpg
    Cubans_Edge_Stack_009_0164.jpg
    Cubans_Edge_Stack_009_0165.jpg
    Cubans_Edge_Stack_009_0166.jpg
    Cubans_Edge_Stack_009_0167.jpg
    Cubans_Edge_Stack_009_0168.jpg
    Cubans_Edge_Stack_009_0169.jpg
    Cubans_Edge_Stack_009_0170.jpg
    Cubans_Edge_Stack_009_0171.jpg
    Cubans_Edge_Stack_009_0172.jpg
    Cubans_Edge_Stack_009_0173.jpg
    Cubans_Edge_Stack_009_0174.jpg
    Cubans_Edge_Stack_009_0175.jpg
    Cubans_Edge_Stack_009_0176.jpg
    Cubans_Edge_Stack_009_0177.jpg
    Cubans_Edge_Stack_009_0178.jpg
    Cubans_Edge_Stack_009_0179.jpg
    Cubans_Edge_Stack_009_0180.jpg
    Cubans_Edge_Stack_009_0181.jpg
    Cubans_Edge_Stack_009_0182.jpg
    Cubans_Edge_Stack_009_0183.jpg
    Cubans_Edge_Stack_009_0184.jpg
    Cubans_Edge_Stack_009_0185.jpg
    Cubans_Edge_Stack_009_0186.jpg
    Cubans_Edge_Stack_009_0187.jpg
    Cubans_Edge_Stack_009_0188.jpg
    Cubans_Edge_Stack_009_0189.jpg
    Cubans_Edge_Stack_009_0190.jpg
    Cubans_Edge_Stack_009_0191.jpg
    Cubans_Edge_Stack_009_0192.jpg
    Cubans_Edge_Stack_009_0193.jpg
    Cubans_Edge_Stack_009_0194.jpg
    Cubans_Edge_Stack_009_0195.jpg
    Cubans_Edge_Stack_009_0196.jpg
    Cubans_Edge_Stack_009_0197.jpg
    Cubans_Edge_Stack_009_0198.jpg
    Cubans_Edge_Stack_009_0199.jpg
    Cubans_Edge_Stack_009_0200.jpg`;
    return data.split("\n")[index];
  }

  const frameCount = 201;

  const images = [];
  const imageSeq = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 1.8,
      // pin:true,
      trigger: "#second2",
      // start:"bottom 100%",
    },
    onUpdate: render,
  });

  images[0].onload = render;

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
}
dom11();

function dom2() {
  const canvas = document.querySelector("#third>#canvas3");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `Cubans_Edge_Stack_003_0000.jpg
    Cubans_Edge_Stack_003_0001.jpg
    Cubans_Edge_Stack_003_0002.jpg
    Cubans_Edge_Stack_003_0003.jpg
    Cubans_Edge_Stack_003_0004.jpg
    Cubans_Edge_Stack_003_0005.jpg
    Cubans_Edge_Stack_003_0006.jpg
    Cubans_Edge_Stack_003_0007.jpg
    Cubans_Edge_Stack_003_0008.jpg
    Cubans_Edge_Stack_003_0009.jpg
    Cubans_Edge_Stack_003_0010.jpg
    Cubans_Edge_Stack_003_0011.jpg
    Cubans_Edge_Stack_003_0012.jpg
    Cubans_Edge_Stack_003_0013.jpg
    Cubans_Edge_Stack_003_0014.jpg
    Cubans_Edge_Stack_003_0015.jpg
    Cubans_Edge_Stack_003_0016.jpg
    Cubans_Edge_Stack_003_0017.jpg
    Cubans_Edge_Stack_003_0018.jpg
    Cubans_Edge_Stack_003_0019.jpg
    Cubans_Edge_Stack_003_0020.jpg
    Cubans_Edge_Stack_003_0021.jpg
    Cubans_Edge_Stack_003_0022.jpg
    Cubans_Edge_Stack_003_0023.jpg
    Cubans_Edge_Stack_003_0024.jpg
    Cubans_Edge_Stack_003_0025.jpg
    Cubans_Edge_Stack_003_0026.jpg
    Cubans_Edge_Stack_003_0027.jpg
    Cubans_Edge_Stack_003_0028.jpg
    Cubans_Edge_Stack_003_0029.jpg
    Cubans_Edge_Stack_003_0030.jpg
    Cubans_Edge_Stack_003_0031.jpg
    Cubans_Edge_Stack_003_0032.jpg
    Cubans_Edge_Stack_003_0033.jpg
    Cubans_Edge_Stack_003_0034.jpg
    Cubans_Edge_Stack_003_0035.jpg
    Cubans_Edge_Stack_003_0036.jpg
    Cubans_Edge_Stack_003_0037.jpg
    Cubans_Edge_Stack_003_0038.jpg
    Cubans_Edge_Stack_003_0039.jpg
    Cubans_Edge_Stack_003_0040.jpg
    Cubans_Edge_Stack_003_0041.jpg
    Cubans_Edge_Stack_003_0042.jpg
    Cubans_Edge_Stack_003_0043.jpg
    Cubans_Edge_Stack_003_0044.jpg
    Cubans_Edge_Stack_003_0045.jpg
    Cubans_Edge_Stack_003_0046.jpg
    Cubans_Edge_Stack_003_0047.jpg
    Cubans_Edge_Stack_003_0048.jpg
    Cubans_Edge_Stack_003_0049.jpg
    Cubans_Edge_Stack_003_0050.jpg
    Cubans_Edge_Stack_003_0051.jpg
    Cubans_Edge_Stack_003_0052.jpg
    Cubans_Edge_Stack_003_0053.jpg
    Cubans_Edge_Stack_003_0054.jpg
    Cubans_Edge_Stack_003_0055.jpg
    Cubans_Edge_Stack_003_0056.jpg
    Cubans_Edge_Stack_003_0057.jpg
    Cubans_Edge_Stack_003_0058.jpg
    Cubans_Edge_Stack_003_0059.jpg
    Cubans_Edge_Stack_003_0060.jpg
    Cubans_Edge_Stack_003_0061.jpg
    Cubans_Edge_Stack_003_0062.jpg
    Cubans_Edge_Stack_003_0063.jpg
    Cubans_Edge_Stack_003_0064.jpg
    Cubans_Edge_Stack_003_0065.jpg
    Cubans_Edge_Stack_003_0066.jpg
    Cubans_Edge_Stack_003_0067.jpg
    Cubans_Edge_Stack_003_0068.jpg
    Cubans_Edge_Stack_003_0069.jpg
    Cubans_Edge_Stack_003_0070.jpg
    Cubans_Edge_Stack_003_0071.jpg
    Cubans_Edge_Stack_003_0072.jpg
    Cubans_Edge_Stack_003_0073.jpg
    Cubans_Edge_Stack_003_0074.jpg
    Cubans_Edge_Stack_003_0075.jpg
    Cubans_Edge_Stack_003_0076.jpg
    Cubans_Edge_Stack_003_0077.jpg
    Cubans_Edge_Stack_003_0078.jpg
    Cubans_Edge_Stack_003_0079.jpg
    Cubans_Edge_Stack_003_0080.jpg
    Cubans_Edge_Stack_003_0081.jpg
    Cubans_Edge_Stack_003_0082.jpg
    Cubans_Edge_Stack_003_0083.jpg
    Cubans_Edge_Stack_003_0084.jpg
    Cubans_Edge_Stack_003_0085.jpg
    Cubans_Edge_Stack_003_0086.jpg
    Cubans_Edge_Stack_003_0087.jpg
    Cubans_Edge_Stack_003_0088.jpg
    Cubans_Edge_Stack_003_0089.jpg
    Cubans_Edge_Stack_003_0090.jpg
    Cubans_Edge_Stack_003_0091.jpg
    Cubans_Edge_Stack_003_0092.jpg
    Cubans_Edge_Stack_003_0093.jpg
    Cubans_Edge_Stack_003_0094.jpg
    Cubans_Edge_Stack_003_0095.jpg
    Cubans_Edge_Stack_003_0096.jpg
    Cubans_Edge_Stack_003_0097.jpg
    Cubans_Edge_Stack_003_0098.jpg
    Cubans_Edge_Stack_003_0099.jpg
    Cubans_Edge_Stack_003_0100.jpg
    Cubans_Edge_Stack_003_0101.jpg
    Cubans_Edge_Stack_003_0102.jpg
    Cubans_Edge_Stack_003_0103.jpg
    Cubans_Edge_Stack_003_0104.jpg
    Cubans_Edge_Stack_003_0105.jpg
    Cubans_Edge_Stack_003_0106.jpg
    Cubans_Edge_Stack_003_0107.jpg
    Cubans_Edge_Stack_003_0108.jpg
    Cubans_Edge_Stack_003_0109.jpg
    Cubans_Edge_Stack_003_0110.jpg
    Cubans_Edge_Stack_003_0111.jpg
    Cubans_Edge_Stack_003_0112.jpg
    Cubans_Edge_Stack_003_0113.jpg
    Cubans_Edge_Stack_003_0114.jpg
    Cubans_Edge_Stack_003_0115.jpg
    Cubans_Edge_Stack_003_0116.jpg
    Cubans_Edge_Stack_003_0117.jpg
    Cubans_Edge_Stack_003_0118.jpg
    Cubans_Edge_Stack_003_0119.jpg
    Cubans_Edge_Stack_003_0120.jpg
    Cubans_Edge_Stack_003_0121.jpg
    Cubans_Edge_Stack_003_0122.jpg
    Cubans_Edge_Stack_003_0123.jpg
    Cubans_Edge_Stack_003_0124.jpg
    Cubans_Edge_Stack_003_0125.jpg
    Cubans_Edge_Stack_003_0126.jpg
    Cubans_Edge_Stack_003_0127.jpg
    Cubans_Edge_Stack_003_0128.jpg
    Cubans_Edge_Stack_003_0129.jpg
    Cubans_Edge_Stack_003_0130.jpg
    Cubans_Edge_Stack_003_0131.jpg
    Cubans_Edge_Stack_003_0132.jpg
    Cubans_Edge_Stack_003_0133.jpg
    Cubans_Edge_Stack_003_0134.jpg
    Cubans_Edge_Stack_003_0135.jpg
    Cubans_Edge_Stack_003_0136.jpg
    Cubans_Edge_Stack_003_0137.jpg
    Cubans_Edge_Stack_003_0138.jpg
    Cubans_Edge_Stack_003_0139.jpg
    Cubans_Edge_Stack_003_0140.jpg
    Cubans_Edge_Stack_003_0141.jpg
    Cubans_Edge_Stack_003_0142.jpg
    Cubans_Edge_Stack_003_0143.jpg
    Cubans_Edge_Stack_003_0144.jpg
    Cubans_Edge_Stack_003_0145.jpg
    Cubans_Edge_Stack_003_0146.jpg
    Cubans_Edge_Stack_003_0147.jpg
    Cubans_Edge_Stack_003_0148.jpg
    Cubans_Edge_Stack_003_0149.jpg
    Cubans_Edge_Stack_003_0150.jpg
    Cubans_Edge_Stack_003_0151.jpg
    Cubans_Edge_Stack_003_0152.jpg
    Cubans_Edge_Stack_003_0153.jpg
    Cubans_Edge_Stack_003_0154.jpg
    Cubans_Edge_Stack_003_0155.jpg
    Cubans_Edge_Stack_003_0156.jpg
    Cubans_Edge_Stack_003_0157.jpg
    Cubans_Edge_Stack_003_0158.jpg
    Cubans_Edge_Stack_003_0159.jpg
    Cubans_Edge_Stack_003_0160.jpg
    Cubans_Edge_Stack_003_0161.jpg
    Cubans_Edge_Stack_003_0162.jpg
    Cubans_Edge_Stack_003_0163.jpg
    Cubans_Edge_Stack_003_0164.jpg
    Cubans_Edge_Stack_003_0165.jpg
    Cubans_Edge_Stack_003_0166.jpg
    Cubans_Edge_Stack_003_0167.jpg
    Cubans_Edge_Stack_003_0168.jpg
    Cubans_Edge_Stack_003_0169.jpg
    Cubans_Edge_Stack_003_0170.jpg
    Cubans_Edge_Stack_003_0171.jpg
    Cubans_Edge_Stack_003_0172.jpg
    Cubans_Edge_Stack_003_0173.jpg
    Cubans_Edge_Stack_003_0174.jpg
    Cubans_Edge_Stack_003_0175.jpg
    Cubans_Edge_Stack_003_0176.jpg
    Cubans_Edge_Stack_003_0177.jpg
    Cubans_Edge_Stack_003_0178.jpg
    Cubans_Edge_Stack_003_0179.jpg
    Cubans_Edge_Stack_003_0180.jpg
    Cubans_Edge_Stack_003_0181.jpg
    Cubans_Edge_Stack_003_0182.jpg
    Cubans_Edge_Stack_003_0183.jpg
    Cubans_Edge_Stack_003_0184.jpg
    Cubans_Edge_Stack_003_0185.jpg
    Cubans_Edge_Stack_003_0186.jpg
    Cubans_Edge_Stack_003_0187.jpg
    Cubans_Edge_Stack_003_0188.jpg
    Cubans_Edge_Stack_003_0189.jpg
    Cubans_Edge_Stack_003_0190.jpg
    Cubans_Edge_Stack_003_0191.jpg
    Cubans_Edge_Stack_003_0192.jpg
    Cubans_Edge_Stack_003_0193.jpg
    Cubans_Edge_Stack_003_0194.jpg
    Cubans_Edge_Stack_003_0195.jpg
    Cubans_Edge_Stack_003_0196.jpg
    Cubans_Edge_Stack_003_0197.jpg
    Cubans_Edge_Stack_003_0198.jpg
    Cubans_Edge_Stack_003_0199.jpg
    Cubans_Edge_Stack_003_0200.jpg`;
    return data.split("\n")[index];
  }

  const frameCount = 201;

  const images = [];
  const imageSeq = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 1.8,
      // pin:true,
      trigger: "#third",
      // start:"bottom 100%",
    },
    onUpdate: render,
  });

  images[0].onload = render;

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

  // gsap.to("#third canvas",{
  //     scale:1,
  //     scrollTrigger:{
  //         scrub:1.8,
  //         trigger:"#third",
  //         start:"top 100%",
  //
  //         // end:"bottom 120%"

  //     },

  // })
  // ScrollTrigger.create({
  //     trigger:"#third",
  //     pin:true,
  //     start:"top 100%",

  // })
}
dom2();

function dom3() {
  const canvas = document.querySelector("#fourth>#canvas4");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `Cubans_Edge_Stack_006_0000.jpg
    Cubans_Edge_Stack_006_0001.jpg
    Cubans_Edge_Stack_006_0002.jpg
    Cubans_Edge_Stack_006_0003.jpg
    Cubans_Edge_Stack_006_0004.jpg
    Cubans_Edge_Stack_006_0005.jpg
    Cubans_Edge_Stack_006_0006.jpg
    Cubans_Edge_Stack_006_0007.jpg
    Cubans_Edge_Stack_006_0008.jpg
    Cubans_Edge_Stack_006_0009.jpg
    Cubans_Edge_Stack_006_0010.jpg
    Cubans_Edge_Stack_006_0011.jpg
    Cubans_Edge_Stack_006_0012.jpg
    Cubans_Edge_Stack_006_0013.jpg
    Cubans_Edge_Stack_006_0014.jpg
    Cubans_Edge_Stack_006_0015.jpg
    Cubans_Edge_Stack_006_0016.jpg
    Cubans_Edge_Stack_006_0017.jpg
    Cubans_Edge_Stack_006_0018.jpg
    Cubans_Edge_Stack_006_0019.jpg
    Cubans_Edge_Stack_006_0020.jpg
    Cubans_Edge_Stack_006_0021.jpg
    Cubans_Edge_Stack_006_0022.jpg
    Cubans_Edge_Stack_006_0023.jpg
    Cubans_Edge_Stack_006_0024.jpg
    Cubans_Edge_Stack_006_0025.jpg
    Cubans_Edge_Stack_006_0026.jpg
    Cubans_Edge_Stack_006_0027.jpg
    Cubans_Edge_Stack_006_0028.jpg
    Cubans_Edge_Stack_006_0029.jpg
    Cubans_Edge_Stack_006_0030.jpg
    Cubans_Edge_Stack_006_0031.jpg
    Cubans_Edge_Stack_006_0032.jpg
    Cubans_Edge_Stack_006_0033.jpg
    Cubans_Edge_Stack_006_0034.jpg
    Cubans_Edge_Stack_006_0035.jpg
    Cubans_Edge_Stack_006_0036.jpg
    Cubans_Edge_Stack_006_0037.jpg
    Cubans_Edge_Stack_006_0038.jpg
    Cubans_Edge_Stack_006_0039.jpg
    Cubans_Edge_Stack_006_0040.jpg
    Cubans_Edge_Stack_006_0041.jpg
    Cubans_Edge_Stack_006_0042.jpg
    Cubans_Edge_Stack_006_0043.jpg
    Cubans_Edge_Stack_006_0044.jpg
    Cubans_Edge_Stack_006_0045.jpg
    Cubans_Edge_Stack_006_0046.jpg
    Cubans_Edge_Stack_006_0047.jpg
    Cubans_Edge_Stack_006_0048.jpg
    Cubans_Edge_Stack_006_0049.jpg
    Cubans_Edge_Stack_006_0050.jpg
    Cubans_Edge_Stack_006_0051.jpg
    Cubans_Edge_Stack_006_0052.jpg
    Cubans_Edge_Stack_006_0053.jpg
    Cubans_Edge_Stack_006_0054.jpg
    Cubans_Edge_Stack_006_0055.jpg
    Cubans_Edge_Stack_006_0056.jpg
    Cubans_Edge_Stack_006_0057.jpg
    Cubans_Edge_Stack_006_0058.jpg
    Cubans_Edge_Stack_006_0059.jpg
    Cubans_Edge_Stack_006_0060.jpg
    Cubans_Edge_Stack_006_0061.jpg
    Cubans_Edge_Stack_006_0062.jpg
    Cubans_Edge_Stack_006_0063.jpg
    Cubans_Edge_Stack_006_0064.jpg
    Cubans_Edge_Stack_006_0065.jpg
    Cubans_Edge_Stack_006_0066.jpg
    Cubans_Edge_Stack_006_0067.jpg
    Cubans_Edge_Stack_006_0068.jpg
    Cubans_Edge_Stack_006_0069.jpg
    Cubans_Edge_Stack_006_0070.jpg
    Cubans_Edge_Stack_006_0071.jpg
    Cubans_Edge_Stack_006_0072.jpg
    Cubans_Edge_Stack_006_0073.jpg
    Cubans_Edge_Stack_006_0074.jpg
    Cubans_Edge_Stack_006_0075.jpg
    Cubans_Edge_Stack_006_0076.jpg
    Cubans_Edge_Stack_006_0077.jpg
    Cubans_Edge_Stack_006_0078.jpg
    Cubans_Edge_Stack_006_0079.jpg
    Cubans_Edge_Stack_006_0080.jpg
    Cubans_Edge_Stack_006_0081.jpg
    Cubans_Edge_Stack_006_0082.jpg
    Cubans_Edge_Stack_006_0083.jpg
    Cubans_Edge_Stack_006_0084.jpg
    Cubans_Edge_Stack_006_0085.jpg
    Cubans_Edge_Stack_006_0086.jpg
    Cubans_Edge_Stack_006_0087.jpg
    Cubans_Edge_Stack_006_0088.jpg
    Cubans_Edge_Stack_006_0089.jpg
    Cubans_Edge_Stack_006_0090.jpg
    Cubans_Edge_Stack_006_0091.jpg
    Cubans_Edge_Stack_006_0092.jpg
    Cubans_Edge_Stack_006_0093.jpg
    Cubans_Edge_Stack_006_0094.jpg
    Cubans_Edge_Stack_006_0095.jpg
    Cubans_Edge_Stack_006_0096.jpg
    Cubans_Edge_Stack_006_0097.jpg
    Cubans_Edge_Stack_006_0098.jpg
    Cubans_Edge_Stack_006_0099.jpg
    Cubans_Edge_Stack_006_0100.jpg
    Cubans_Edge_Stack_006_0101.jpg
    Cubans_Edge_Stack_006_0102.jpg
    Cubans_Edge_Stack_006_0103.jpg
    Cubans_Edge_Stack_006_0104.jpg
    Cubans_Edge_Stack_006_0105.jpg
    Cubans_Edge_Stack_006_0106.jpg
    Cubans_Edge_Stack_006_0107.jpg
    Cubans_Edge_Stack_006_0108.jpg
    Cubans_Edge_Stack_006_0109.jpg
    Cubans_Edge_Stack_006_0110.jpg
    Cubans_Edge_Stack_006_0111.jpg
    Cubans_Edge_Stack_006_0112.jpg
    Cubans_Edge_Stack_006_0113.jpg
    Cubans_Edge_Stack_006_0114.jpg
    Cubans_Edge_Stack_006_0115.jpg
    Cubans_Edge_Stack_006_0116.jpg
    Cubans_Edge_Stack_006_0117.jpg
    Cubans_Edge_Stack_006_0118.jpg
    Cubans_Edge_Stack_006_0119.jpg
    Cubans_Edge_Stack_006_0120.jpg
    Cubans_Edge_Stack_006_0121.jpg
    Cubans_Edge_Stack_006_0122.jpg
    Cubans_Edge_Stack_006_0123.jpg
    Cubans_Edge_Stack_006_0124.jpg
    Cubans_Edge_Stack_006_0125.jpg
    Cubans_Edge_Stack_006_0126.jpg
    Cubans_Edge_Stack_006_0127.jpg
    Cubans_Edge_Stack_006_0128.jpg
    Cubans_Edge_Stack_006_0129.jpg
    Cubans_Edge_Stack_006_0130.jpg
    Cubans_Edge_Stack_006_0131.jpg
    Cubans_Edge_Stack_006_0132.jpg
    Cubans_Edge_Stack_006_0133.jpg
    Cubans_Edge_Stack_006_0134.jpg
    Cubans_Edge_Stack_006_0135.jpg
    Cubans_Edge_Stack_006_0136.jpg
    Cubans_Edge_Stack_006_0137.jpg
    Cubans_Edge_Stack_006_0138.jpg
    Cubans_Edge_Stack_006_0139.jpg
    Cubans_Edge_Stack_006_0140.jpg
    Cubans_Edge_Stack_006_0141.jpg
    Cubans_Edge_Stack_006_0142.jpg
    Cubans_Edge_Stack_006_0143.jpg
    Cubans_Edge_Stack_006_0144.jpg
    Cubans_Edge_Stack_006_0145.jpg
    Cubans_Edge_Stack_006_0146.jpg
    Cubans_Edge_Stack_006_0147.jpg
    Cubans_Edge_Stack_006_0148.jpg
    Cubans_Edge_Stack_006_0149.jpg
    Cubans_Edge_Stack_006_0150.jpg
    Cubans_Edge_Stack_006_0151.jpg
    Cubans_Edge_Stack_006_0152.jpg
    Cubans_Edge_Stack_006_0153.jpg
    Cubans_Edge_Stack_006_0154.jpg
    Cubans_Edge_Stack_006_0155.jpg
    Cubans_Edge_Stack_006_0156.jpg
    Cubans_Edge_Stack_006_0157.jpg
    Cubans_Edge_Stack_006_0158.jpg
    Cubans_Edge_Stack_006_0159.jpg
    Cubans_Edge_Stack_006_0160.jpg
    Cubans_Edge_Stack_006_0161.jpg
    Cubans_Edge_Stack_006_0162.jpg
    Cubans_Edge_Stack_006_0163.jpg
    Cubans_Edge_Stack_006_0164.jpg
    Cubans_Edge_Stack_006_0165.jpg
    Cubans_Edge_Stack_006_0166.jpg
    Cubans_Edge_Stack_006_0167.jpg
    Cubans_Edge_Stack_006_0168.jpg
    Cubans_Edge_Stack_006_0169.jpg
    Cubans_Edge_Stack_006_0170.jpg
    Cubans_Edge_Stack_006_0171.jpg
    Cubans_Edge_Stack_006_0172.jpg
    Cubans_Edge_Stack_006_0173.jpg
    Cubans_Edge_Stack_006_0174.jpg
    Cubans_Edge_Stack_006_0175.jpg
    Cubans_Edge_Stack_006_0176.jpg
    Cubans_Edge_Stack_006_0177.jpg
    Cubans_Edge_Stack_006_0178.jpg
    Cubans_Edge_Stack_006_0179.jpg
    Cubans_Edge_Stack_006_0180.jpg
    Cubans_Edge_Stack_006_0181.jpg
    Cubans_Edge_Stack_006_0182.jpg
    Cubans_Edge_Stack_006_0183.jpg
    Cubans_Edge_Stack_006_0184.jpg
    Cubans_Edge_Stack_006_0185.jpg
    Cubans_Edge_Stack_006_0186.jpg
    Cubans_Edge_Stack_006_0187.jpg
    Cubans_Edge_Stack_006_0188.jpg
    Cubans_Edge_Stack_006_0189.jpg
    Cubans_Edge_Stack_006_0190.jpg
    Cubans_Edge_Stack_006_0191.jpg
    Cubans_Edge_Stack_006_0192.jpg
    Cubans_Edge_Stack_006_0193.jpg
    Cubans_Edge_Stack_006_0194.jpg
    Cubans_Edge_Stack_006_0195.jpg
    Cubans_Edge_Stack_006_0196.jpg
    Cubans_Edge_Stack_006_0197.jpg
    Cubans_Edge_Stack_006_0198.jpg
    Cubans_Edge_Stack_006_0199.jpg
    Cubans_Edge_Stack_006_0200.jpg
    `;
    return data.split("\n")[index];
  }

  const frameCount = 201;

  const images = [];
  const imageSeq = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 1.8,
      // pin:true,
      trigger: "#fourth",
      // start:"bottom 100%",
    },
    onUpdate: render,
  });

  images[0].onload = render;

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
}
dom3();

function dom4() {
  const canvas = document.querySelector("#fifth>#canvas5");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `Cubans_Edge_Stack_007_0000.jpg
    Cubans_Edge_Stack_007_0001.jpg
    Cubans_Edge_Stack_007_0002.jpg
    Cubans_Edge_Stack_007_0003.jpg
    Cubans_Edge_Stack_007_0004.jpg
    Cubans_Edge_Stack_007_0005.jpg
    Cubans_Edge_Stack_007_0006.jpg
    Cubans_Edge_Stack_007_0007.jpg
    Cubans_Edge_Stack_007_0008.jpg
    Cubans_Edge_Stack_007_0009.jpg
    Cubans_Edge_Stack_007_0010.jpg
    Cubans_Edge_Stack_007_0011.jpg
    Cubans_Edge_Stack_007_0012.jpg
    Cubans_Edge_Stack_007_0013.jpg
    Cubans_Edge_Stack_007_0014.jpg
    Cubans_Edge_Stack_007_0015.jpg
    Cubans_Edge_Stack_007_0016.jpg
    Cubans_Edge_Stack_007_0017.jpg
    Cubans_Edge_Stack_007_0018.jpg
    Cubans_Edge_Stack_007_0019.jpg
    Cubans_Edge_Stack_007_0020.jpg
    Cubans_Edge_Stack_007_0021.jpg
    Cubans_Edge_Stack_007_0022.jpg
    Cubans_Edge_Stack_007_0023.jpg
    Cubans_Edge_Stack_007_0024.jpg
    Cubans_Edge_Stack_007_0025.jpg
    Cubans_Edge_Stack_007_0026.jpg
    Cubans_Edge_Stack_007_0027.jpg
    Cubans_Edge_Stack_007_0028.jpg
    Cubans_Edge_Stack_007_0029.jpg
    Cubans_Edge_Stack_007_0030.jpg
    Cubans_Edge_Stack_007_0031.jpg
    Cubans_Edge_Stack_007_0032.jpg
    Cubans_Edge_Stack_007_0033.jpg
    Cubans_Edge_Stack_007_0034.jpg
    Cubans_Edge_Stack_007_0035.jpg
    Cubans_Edge_Stack_007_0036.jpg
    Cubans_Edge_Stack_007_0037.jpg
    Cubans_Edge_Stack_007_0038.jpg
    Cubans_Edge_Stack_007_0039.jpg
    Cubans_Edge_Stack_007_0040.jpg
    Cubans_Edge_Stack_007_0041.jpg
    Cubans_Edge_Stack_007_0042.jpg
    Cubans_Edge_Stack_007_0043.jpg
    Cubans_Edge_Stack_007_0044.jpg
    Cubans_Edge_Stack_007_0045.jpg
    Cubans_Edge_Stack_007_0046.jpg
    Cubans_Edge_Stack_007_0047.jpg
    Cubans_Edge_Stack_007_0048.jpg
    Cubans_Edge_Stack_007_0049.jpg
    Cubans_Edge_Stack_007_0050.jpg
    Cubans_Edge_Stack_007_0051.jpg
    Cubans_Edge_Stack_007_0052.jpg
    Cubans_Edge_Stack_007_0053.jpg
    Cubans_Edge_Stack_007_0054.jpg
    Cubans_Edge_Stack_007_0055.jpg
    Cubans_Edge_Stack_007_0056.jpg
    Cubans_Edge_Stack_007_0057.jpg
    Cubans_Edge_Stack_007_0058.jpg
    Cubans_Edge_Stack_007_0059.jpg
    Cubans_Edge_Stack_007_0060.jpg
    Cubans_Edge_Stack_007_0061.jpg
    Cubans_Edge_Stack_007_0062.jpg
    Cubans_Edge_Stack_007_0063.jpg
    Cubans_Edge_Stack_007_0064.jpg
    Cubans_Edge_Stack_007_0065.jpg
    Cubans_Edge_Stack_007_0066.jpg
    Cubans_Edge_Stack_007_0067.jpg
    Cubans_Edge_Stack_007_0068.jpg
    Cubans_Edge_Stack_007_0069.jpg
    Cubans_Edge_Stack_007_0070.jpg
    Cubans_Edge_Stack_007_0071.jpg
    Cubans_Edge_Stack_007_0072.jpg
    Cubans_Edge_Stack_007_0073.jpg
    Cubans_Edge_Stack_007_0074.jpg
    Cubans_Edge_Stack_007_0075.jpg
    Cubans_Edge_Stack_007_0076.jpg
    Cubans_Edge_Stack_007_0077.jpg
    Cubans_Edge_Stack_007_0078.jpg
    Cubans_Edge_Stack_007_0079.jpg
    Cubans_Edge_Stack_007_0080.jpg
    Cubans_Edge_Stack_007_0081.jpg
    Cubans_Edge_Stack_007_0082.jpg
    Cubans_Edge_Stack_007_0083.jpg
    Cubans_Edge_Stack_007_0084.jpg
    Cubans_Edge_Stack_007_0085.jpg
    Cubans_Edge_Stack_007_0086.jpg
    Cubans_Edge_Stack_007_0087.jpg
    Cubans_Edge_Stack_007_0088.jpg
    Cubans_Edge_Stack_007_0089.jpg
    Cubans_Edge_Stack_007_0090.jpg
    Cubans_Edge_Stack_007_0091.jpg
    Cubans_Edge_Stack_007_0092.jpg
    Cubans_Edge_Stack_007_0093.jpg
    Cubans_Edge_Stack_007_0094.jpg
    Cubans_Edge_Stack_007_0095.jpg
    Cubans_Edge_Stack_007_0096.jpg
    Cubans_Edge_Stack_007_0097.jpg
    Cubans_Edge_Stack_007_0098.jpg
    Cubans_Edge_Stack_007_0099.jpg
    Cubans_Edge_Stack_007_0100.jpg
    Cubans_Edge_Stack_007_0101.jpg
    Cubans_Edge_Stack_007_0102.jpg
    Cubans_Edge_Stack_007_0103.jpg
    Cubans_Edge_Stack_007_0104.jpg
    Cubans_Edge_Stack_007_0105.jpg
    Cubans_Edge_Stack_007_0106.jpg
    Cubans_Edge_Stack_007_0107.jpg
    Cubans_Edge_Stack_007_0108.jpg
    Cubans_Edge_Stack_007_0109.jpg
    Cubans_Edge_Stack_007_0110.jpg
    Cubans_Edge_Stack_007_0111.jpg
    Cubans_Edge_Stack_007_0112.jpg
    Cubans_Edge_Stack_007_0113.jpg
    Cubans_Edge_Stack_007_0114.jpg
    Cubans_Edge_Stack_007_0115.jpg
    Cubans_Edge_Stack_007_0116.jpg
    Cubans_Edge_Stack_007_0117.jpg
    Cubans_Edge_Stack_007_0118.jpg
    Cubans_Edge_Stack_007_0119.jpg
    Cubans_Edge_Stack_007_0120.jpg
    Cubans_Edge_Stack_007_0121.jpg
    Cubans_Edge_Stack_007_0122.jpg
    Cubans_Edge_Stack_007_0123.jpg
    Cubans_Edge_Stack_007_0124.jpg
    Cubans_Edge_Stack_007_0125.jpg
    `;
    return data.split("\n")[index];
  }

  const frameCount = 126;

  const images = [];
  const imageSeq = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 1.8,
      // pin:true,
      trigger: "#fifth",
      // start:"bottom 100%",
    },
    onUpdate: render,
  });

  images[0].onload = render;

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
}
dom4();

function dom5() {
  const canvas = document.querySelector("#sixth>#canvas6");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `Cubans_Edge_Stack_007_0000.jpg
    Cubans_Edge_Stack_007_0001.jpg
    Cubans_Edge_Stack_007_0002.jpg
    Cubans_Edge_Stack_007_0003.jpg
    Cubans_Edge_Stack_007_0004.jpg
    Cubans_Edge_Stack_007_0005.jpg
    Cubans_Edge_Stack_007_0006.jpg
    Cubans_Edge_Stack_007_0007.jpg
    Cubans_Edge_Stack_007_0008.jpg
    Cubans_Edge_Stack_007_0009.jpg
    Cubans_Edge_Stack_007_0010.jpg
    Cubans_Edge_Stack_007_0011.jpg
    Cubans_Edge_Stack_007_0012.jpg
    Cubans_Edge_Stack_007_0013.jpg
    Cubans_Edge_Stack_007_0014.jpg
    Cubans_Edge_Stack_007_0015.jpg
    Cubans_Edge_Stack_007_0016.jpg
    Cubans_Edge_Stack_007_0017.jpg
    Cubans_Edge_Stack_007_0018.jpg
    Cubans_Edge_Stack_007_0019.jpg
    Cubans_Edge_Stack_007_0020.jpg
    Cubans_Edge_Stack_007_0021.jpg
    Cubans_Edge_Stack_007_0022.jpg
    Cubans_Edge_Stack_007_0023.jpg
    Cubans_Edge_Stack_007_0024.jpg
    Cubans_Edge_Stack_007_0025.jpg
    Cubans_Edge_Stack_007_0026.jpg
    Cubans_Edge_Stack_007_0027.jpg
    Cubans_Edge_Stack_007_0028.jpg
    Cubans_Edge_Stack_007_0029.jpg
    Cubans_Edge_Stack_007_0030.jpg
    Cubans_Edge_Stack_007_0031.jpg
    Cubans_Edge_Stack_007_0032.jpg
    Cubans_Edge_Stack_007_0033.jpg
    Cubans_Edge_Stack_007_0034.jpg
    Cubans_Edge_Stack_007_0035.jpg
    Cubans_Edge_Stack_007_0036.jpg
    Cubans_Edge_Stack_007_0037.jpg
    Cubans_Edge_Stack_007_0038.jpg
    Cubans_Edge_Stack_007_0039.jpg
    Cubans_Edge_Stack_007_0040.jpg
    Cubans_Edge_Stack_007_0041.jpg
    Cubans_Edge_Stack_007_0042.jpg
    Cubans_Edge_Stack_007_0043.jpg
    Cubans_Edge_Stack_007_0044.jpg
    Cubans_Edge_Stack_007_0045.jpg
    Cubans_Edge_Stack_007_0046.jpg
    Cubans_Edge_Stack_007_0047.jpg
    Cubans_Edge_Stack_007_0048.jpg
    Cubans_Edge_Stack_007_0049.jpg
    Cubans_Edge_Stack_007_0050.jpg
    Cubans_Edge_Stack_007_0051.jpg
    Cubans_Edge_Stack_007_0052.jpg
    Cubans_Edge_Stack_007_0053.jpg
    Cubans_Edge_Stack_007_0054.jpg
    Cubans_Edge_Stack_007_0055.jpg
    Cubans_Edge_Stack_007_0056.jpg
    Cubans_Edge_Stack_007_0057.jpg
    Cubans_Edge_Stack_007_0058.jpg
    Cubans_Edge_Stack_007_0059.jpg
    Cubans_Edge_Stack_007_0060.jpg
    Cubans_Edge_Stack_007_0061.jpg
    Cubans_Edge_Stack_007_0062.jpg
    Cubans_Edge_Stack_007_0063.jpg
    Cubans_Edge_Stack_007_0064.jpg
    Cubans_Edge_Stack_007_0065.jpg
    Cubans_Edge_Stack_007_0066.jpg
    Cubans_Edge_Stack_007_0067.jpg
    Cubans_Edge_Stack_007_0068.jpg
    Cubans_Edge_Stack_007_0069.jpg
    Cubans_Edge_Stack_007_0070.jpg
    Cubans_Edge_Stack_007_0071.jpg
    Cubans_Edge_Stack_007_0072.jpg
    Cubans_Edge_Stack_007_0073.jpg
    Cubans_Edge_Stack_007_0074.jpg
    Cubans_Edge_Stack_007_0075.jpg
    Cubans_Edge_Stack_007_0076.jpg
    Cubans_Edge_Stack_007_0077.jpg
    Cubans_Edge_Stack_007_0078.jpg
    Cubans_Edge_Stack_007_0079.jpg
    Cubans_Edge_Stack_007_0080.jpg
    Cubans_Edge_Stack_007_0081.jpg
    Cubans_Edge_Stack_007_0082.jpg
    Cubans_Edge_Stack_007_0083.jpg
    Cubans_Edge_Stack_007_0084.jpg
    Cubans_Edge_Stack_007_0085.jpg
    Cubans_Edge_Stack_007_0086.jpg
    Cubans_Edge_Stack_007_0087.jpg
    Cubans_Edge_Stack_007_0088.jpg
    Cubans_Edge_Stack_007_0089.jpg
    Cubans_Edge_Stack_007_0090.jpg
    Cubans_Edge_Stack_007_0091.jpg
    Cubans_Edge_Stack_007_0092.jpg
    Cubans_Edge_Stack_007_0093.jpg
    Cubans_Edge_Stack_007_0094.jpg
    Cubans_Edge_Stack_007_0095.jpg
    Cubans_Edge_Stack_007_0096.jpg
    Cubans_Edge_Stack_007_0097.jpg
    Cubans_Edge_Stack_007_0098.jpg
    Cubans_Edge_Stack_007_0099.jpg
    Cubans_Edge_Stack_007_0100.jpg
    Cubans_Edge_Stack_007_0101.jpg
    Cubans_Edge_Stack_007_0102.jpg
    Cubans_Edge_Stack_007_0103.jpg
    Cubans_Edge_Stack_007_0104.jpg
    Cubans_Edge_Stack_007_0105.jpg
    Cubans_Edge_Stack_007_0106.jpg
    Cubans_Edge_Stack_007_0107.jpg
    Cubans_Edge_Stack_007_0108.jpg
    Cubans_Edge_Stack_007_0109.jpg
    Cubans_Edge_Stack_007_0110.jpg
    Cubans_Edge_Stack_007_0111.jpg
    Cubans_Edge_Stack_007_0112.jpg
    Cubans_Edge_Stack_007_0113.jpg
    Cubans_Edge_Stack_007_0114.jpg
    Cubans_Edge_Stack_007_0115.jpg
    Cubans_Edge_Stack_007_0116.jpg
    Cubans_Edge_Stack_007_0117.jpg
    Cubans_Edge_Stack_007_0118.jpg
    Cubans_Edge_Stack_007_0119.jpg
    Cubans_Edge_Stack_007_0120.jpg
    Cubans_Edge_Stack_007_0121.jpg
    Cubans_Edge_Stack_007_0122.jpg
    Cubans_Edge_Stack_007_0123.jpg
    Cubans_Edge_Stack_007_0124.jpg
    Cubans_Edge_Stack_007_0125.jpg
    `;
    return data.split("\n")[index];
  }

  const frameCount = 126;

  const images = [];
  const imageSeq = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 1.8,
      // pin:true,
      trigger: "#sixth",
      // start:"bottom 100%",
    },
    onUpdate: render,
  });

  images[0].onload = render;

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
}
dom5();

function dom6() {
  const canvas = document.querySelector("#seventh>#canvas7");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `Cubans_Edge_Stack_011_0000.jpg
    Cubans_Edge_Stack_011_0001.jpg
    Cubans_Edge_Stack_011_0002.jpg
    Cubans_Edge_Stack_011_0003.jpg
    Cubans_Edge_Stack_011_0004.jpg
    Cubans_Edge_Stack_011_0005.jpg
    Cubans_Edge_Stack_011_0006.jpg
    Cubans_Edge_Stack_011_0007.jpg
    Cubans_Edge_Stack_011_0008.jpg
    Cubans_Edge_Stack_011_0009.jpg
    Cubans_Edge_Stack_011_0010.jpg
    Cubans_Edge_Stack_011_0011.jpg
    Cubans_Edge_Stack_011_0012.jpg
    Cubans_Edge_Stack_011_0013.jpg
    Cubans_Edge_Stack_011_0014.jpg
    Cubans_Edge_Stack_011_0015.jpg
    Cubans_Edge_Stack_011_0016.jpg
    Cubans_Edge_Stack_011_0017.jpg
    Cubans_Edge_Stack_011_0018.jpg
    Cubans_Edge_Stack_011_0019.jpg
    Cubans_Edge_Stack_011_0020.jpg
    Cubans_Edge_Stack_011_0021.jpg
    Cubans_Edge_Stack_011_0022.jpg
    Cubans_Edge_Stack_011_0023.jpg
    Cubans_Edge_Stack_011_0024.jpg
    Cubans_Edge_Stack_011_0025.jpg
    Cubans_Edge_Stack_011_0026.jpg
    Cubans_Edge_Stack_011_0027.jpg
    Cubans_Edge_Stack_011_0028.jpg
    Cubans_Edge_Stack_011_0029.jpg
    Cubans_Edge_Stack_011_0030.jpg
    Cubans_Edge_Stack_011_0031.jpg
    Cubans_Edge_Stack_011_0032.jpg
    Cubans_Edge_Stack_011_0033.jpg
    Cubans_Edge_Stack_011_0034.jpg
    Cubans_Edge_Stack_011_0035.jpg
    Cubans_Edge_Stack_011_0036.jpg
    Cubans_Edge_Stack_011_0037.jpg
    Cubans_Edge_Stack_011_0038.jpg
    Cubans_Edge_Stack_011_0039.jpg
    Cubans_Edge_Stack_011_0040.jpg
    Cubans_Edge_Stack_011_0041.jpg
    Cubans_Edge_Stack_011_0042.jpg
    Cubans_Edge_Stack_011_0043.jpg
    Cubans_Edge_Stack_011_0044.jpg
    Cubans_Edge_Stack_011_0045.jpg
    Cubans_Edge_Stack_011_0046.jpg
    Cubans_Edge_Stack_011_0047.jpg
    Cubans_Edge_Stack_011_0048.jpg
    Cubans_Edge_Stack_011_0049.jpg
    Cubans_Edge_Stack_011_0050.jpg
    Cubans_Edge_Stack_011_0051.jpg
    Cubans_Edge_Stack_011_0052.jpg
    Cubans_Edge_Stack_011_0053.jpg
    Cubans_Edge_Stack_011_0054.jpg
    Cubans_Edge_Stack_011_0055.jpg
    Cubans_Edge_Stack_011_0056.jpg
    Cubans_Edge_Stack_011_0057.jpg
    Cubans_Edge_Stack_011_0058.jpg
    Cubans_Edge_Stack_011_0059.jpg
    Cubans_Edge_Stack_011_0060.jpg
    Cubans_Edge_Stack_011_0061.jpg
    Cubans_Edge_Stack_011_0062.jpg
    Cubans_Edge_Stack_011_0063.jpg
    Cubans_Edge_Stack_011_0064.jpg
    Cubans_Edge_Stack_011_0065.jpg
    Cubans_Edge_Stack_011_0066.jpg
    Cubans_Edge_Stack_011_0067.jpg
    Cubans_Edge_Stack_011_0068.jpg
    Cubans_Edge_Stack_011_0069.jpg
    Cubans_Edge_Stack_011_0070.jpg
    Cubans_Edge_Stack_011_0071.jpg
    Cubans_Edge_Stack_011_0072.jpg
    Cubans_Edge_Stack_011_0073.jpg
    Cubans_Edge_Stack_011_0074.jpg
    Cubans_Edge_Stack_011_0075.jpg
    Cubans_Edge_Stack_011_0076.jpg
    Cubans_Edge_Stack_011_0077.jpg
    Cubans_Edge_Stack_011_0078.jpg
    Cubans_Edge_Stack_011_0079.jpg
    Cubans_Edge_Stack_011_0080.jpg
    Cubans_Edge_Stack_011_0081.jpg
    Cubans_Edge_Stack_011_0082.jpg
    Cubans_Edge_Stack_011_0083.jpg
    Cubans_Edge_Stack_011_0084.jpg
    Cubans_Edge_Stack_011_0085.jpg
    Cubans_Edge_Stack_011_0086.jpg
    Cubans_Edge_Stack_011_0087.jpg
    Cubans_Edge_Stack_011_0088.jpg
    Cubans_Edge_Stack_011_0089.jpg
    Cubans_Edge_Stack_011_0090.jpg
    Cubans_Edge_Stack_011_0091.jpg
    Cubans_Edge_Stack_011_0092.jpg
    Cubans_Edge_Stack_011_0093.jpg
    Cubans_Edge_Stack_011_0094.jpg
    Cubans_Edge_Stack_011_0095.jpg
    Cubans_Edge_Stack_011_0096.jpg
    Cubans_Edge_Stack_011_0097.jpg
    Cubans_Edge_Stack_011_0098.jpg
    Cubans_Edge_Stack_011_0099.jpg
    Cubans_Edge_Stack_011_0100.jpg
    Cubans_Edge_Stack_011_0101.jpg
    Cubans_Edge_Stack_011_0102.jpg
    Cubans_Edge_Stack_011_0103.jpg
    Cubans_Edge_Stack_011_0104.jpg
    Cubans_Edge_Stack_011_0105.jpg
    Cubans_Edge_Stack_011_0106.jpg
    Cubans_Edge_Stack_011_0107.jpg
    Cubans_Edge_Stack_011_0108.jpg
    Cubans_Edge_Stack_011_0109.jpg
    Cubans_Edge_Stack_011_0110.jpg
    Cubans_Edge_Stack_011_0111.jpg
    Cubans_Edge_Stack_011_0112.jpg
    Cubans_Edge_Stack_011_0113.jpg
    Cubans_Edge_Stack_011_0114.jpg
    Cubans_Edge_Stack_011_0115.jpg
    Cubans_Edge_Stack_011_0116.jpg
    Cubans_Edge_Stack_011_0117.jpg
    Cubans_Edge_Stack_011_0118.jpg
    Cubans_Edge_Stack_011_0119.jpg
    Cubans_Edge_Stack_011_0120.jpg
    Cubans_Edge_Stack_011_0121.jpg
    Cubans_Edge_Stack_011_0122.jpg
    Cubans_Edge_Stack_011_0123.jpg
    Cubans_Edge_Stack_011_0124.jpg
    Cubans_Edge_Stack_011_0125.jpg
    Cubans_Edge_Stack_011_0126.jpg
    Cubans_Edge_Stack_011_0127.jpg
    Cubans_Edge_Stack_011_0128.jpg
    Cubans_Edge_Stack_011_0129.jpg
    Cubans_Edge_Stack_011_0130.jpg
    Cubans_Edge_Stack_011_0131.jpg
    Cubans_Edge_Stack_011_0132.jpg
    Cubans_Edge_Stack_011_0133.jpg
    Cubans_Edge_Stack_011_0134.jpg
    Cubans_Edge_Stack_011_0135.jpg
    Cubans_Edge_Stack_011_0136.jpg
    Cubans_Edge_Stack_011_0137.jpg
    Cubans_Edge_Stack_011_0138.jpg
    Cubans_Edge_Stack_011_0139.jpg
    Cubans_Edge_Stack_011_0140.jpg
    Cubans_Edge_Stack_011_0141.jpg
    Cubans_Edge_Stack_011_0142.jpg
    Cubans_Edge_Stack_011_0143.jpg
    Cubans_Edge_Stack_011_0144.jpg
    Cubans_Edge_Stack_011_0145.jpg
    Cubans_Edge_Stack_011_0146.jpg
    Cubans_Edge_Stack_011_0147.jpg
    Cubans_Edge_Stack_011_0148.jpg
    Cubans_Edge_Stack_011_0149.jpg
    Cubans_Edge_Stack_011_0150.jpg
    Cubans_Edge_Stack_011_0151.jpg
    Cubans_Edge_Stack_011_0152.jpg
    Cubans_Edge_Stack_011_0153.jpg
    Cubans_Edge_Stack_011_0154.jpg
    Cubans_Edge_Stack_011_0155.jpg
    Cubans_Edge_Stack_011_0156.jpg
    Cubans_Edge_Stack_011_0157.jpg
    Cubans_Edge_Stack_011_0158.jpg
    Cubans_Edge_Stack_011_0159.jpg
    Cubans_Edge_Stack_011_0160.jpg
    Cubans_Edge_Stack_011_0161.jpg
    Cubans_Edge_Stack_011_0162.jpg
    Cubans_Edge_Stack_011_0163.jpg
    Cubans_Edge_Stack_011_0164.jpg
    Cubans_Edge_Stack_011_0165.jpg
    Cubans_Edge_Stack_011_0166.jpg
    Cubans_Edge_Stack_011_0167.jpg
    Cubans_Edge_Stack_011_0168.jpg
    Cubans_Edge_Stack_011_0169.jpg
    Cubans_Edge_Stack_011_0170.jpg
    Cubans_Edge_Stack_011_0171.jpg
    Cubans_Edge_Stack_011_0172.jpg
    Cubans_Edge_Stack_011_0173.jpg
    Cubans_Edge_Stack_011_0174.jpg
    Cubans_Edge_Stack_011_0175.jpg
    Cubans_Edge_Stack_011_0176.jpg
    Cubans_Edge_Stack_011_0177.jpg
    Cubans_Edge_Stack_011_0178.jpg
    Cubans_Edge_Stack_011_0179.jpg
    Cubans_Edge_Stack_011_0180.jpg
    Cubans_Edge_Stack_011_0181.jpg
    Cubans_Edge_Stack_011_0182.jpg
    Cubans_Edge_Stack_011_0183.jpg
    Cubans_Edge_Stack_011_0184.jpg
    Cubans_Edge_Stack_011_0185.jpg
    Cubans_Edge_Stack_011_0186.jpg
    Cubans_Edge_Stack_011_0187.jpg
    Cubans_Edge_Stack_011_0188.jpg
    Cubans_Edge_Stack_011_0189.jpg
    Cubans_Edge_Stack_011_0190.jpg
    Cubans_Edge_Stack_011_0191.jpg
    Cubans_Edge_Stack_011_0192.jpg
    Cubans_Edge_Stack_011_0193.jpg
    Cubans_Edge_Stack_011_0194.jpg
    Cubans_Edge_Stack_011_0195.jpg
    Cubans_Edge_Stack_011_0196.jpg
    Cubans_Edge_Stack_011_0197.jpg
    Cubans_Edge_Stack_011_0198.jpg
    Cubans_Edge_Stack_011_0199.jpgCubans_Edge_Stack_011_0200.jpg
    `;
    return data.split("\n")[index];
  }

  const frameCount = 201;

  const images = [];
  const imageSeq = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 1.8,
      // pin:true,
      trigger: "#seventh",
      // start:"bottom 100%",
    },
    onUpdate: render,
  });

  images[0].onload = render;

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
}
dom6();
function dom7() {
  const canvas = document.querySelector("#eighth>#canvas8");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `Cubans_Edge_Stack_011_0000.jpg
    Cubans_Edge_Stack_011_0001.jpg
    Cubans_Edge_Stack_011_0002.jpg
    Cubans_Edge_Stack_011_0003.jpg
    Cubans_Edge_Stack_011_0004.jpg
    Cubans_Edge_Stack_011_0005.jpg
    Cubans_Edge_Stack_011_0006.jpg
    Cubans_Edge_Stack_011_0007.jpg
    Cubans_Edge_Stack_011_0008.jpg
    Cubans_Edge_Stack_011_0009.jpg
    Cubans_Edge_Stack_011_0010.jpg
    Cubans_Edge_Stack_011_0011.jpg
    Cubans_Edge_Stack_011_0012.jpg
    Cubans_Edge_Stack_011_0013.jpg
    Cubans_Edge_Stack_011_0014.jpg
    Cubans_Edge_Stack_011_0015.jpg
    Cubans_Edge_Stack_011_0016.jpg
    Cubans_Edge_Stack_011_0017.jpg
    Cubans_Edge_Stack_011_0018.jpg
    Cubans_Edge_Stack_011_0019.jpg
    Cubans_Edge_Stack_011_0020.jpg
    Cubans_Edge_Stack_011_0021.jpg
    Cubans_Edge_Stack_011_0022.jpg
    Cubans_Edge_Stack_011_0023.jpg
    Cubans_Edge_Stack_011_0024.jpg
    Cubans_Edge_Stack_011_0025.jpg
    Cubans_Edge_Stack_011_0026.jpg
    Cubans_Edge_Stack_011_0027.jpg
    Cubans_Edge_Stack_011_0028.jpg
    Cubans_Edge_Stack_011_0029.jpg
    Cubans_Edge_Stack_011_0030.jpg
    Cubans_Edge_Stack_011_0031.jpg
    Cubans_Edge_Stack_011_0032.jpg
    Cubans_Edge_Stack_011_0033.jpg
    Cubans_Edge_Stack_011_0034.jpg
    Cubans_Edge_Stack_011_0035.jpg
    Cubans_Edge_Stack_011_0036.jpg
    Cubans_Edge_Stack_011_0037.jpg
    Cubans_Edge_Stack_011_0038.jpg
    Cubans_Edge_Stack_011_0039.jpg
    Cubans_Edge_Stack_011_0040.jpg
    Cubans_Edge_Stack_011_0041.jpg
    Cubans_Edge_Stack_011_0042.jpg
    Cubans_Edge_Stack_011_0043.jpg
    Cubans_Edge_Stack_011_0044.jpg
    Cubans_Edge_Stack_011_0045.jpg
    Cubans_Edge_Stack_011_0046.jpg
    Cubans_Edge_Stack_011_0047.jpg
    Cubans_Edge_Stack_011_0048.jpg
    Cubans_Edge_Stack_011_0049.jpg
    Cubans_Edge_Stack_011_0050.jpg
    Cubans_Edge_Stack_011_0051.jpg
    Cubans_Edge_Stack_011_0052.jpg
    Cubans_Edge_Stack_011_0053.jpg
    Cubans_Edge_Stack_011_0054.jpg
    Cubans_Edge_Stack_011_0055.jpg
    Cubans_Edge_Stack_011_0056.jpg
    Cubans_Edge_Stack_011_0057.jpg
    Cubans_Edge_Stack_011_0058.jpg
    Cubans_Edge_Stack_011_0059.jpg
    Cubans_Edge_Stack_011_0060.jpg
    Cubans_Edge_Stack_011_0061.jpg
    Cubans_Edge_Stack_011_0062.jpg
    Cubans_Edge_Stack_011_0063.jpg
    Cubans_Edge_Stack_011_0064.jpg
    Cubans_Edge_Stack_011_0065.jpg
    Cubans_Edge_Stack_011_0066.jpg
    Cubans_Edge_Stack_011_0067.jpg
    Cubans_Edge_Stack_011_0068.jpg
    Cubans_Edge_Stack_011_0069.jpg
    Cubans_Edge_Stack_011_0070.jpg
    Cubans_Edge_Stack_011_0071.jpg
    Cubans_Edge_Stack_011_0072.jpg
    Cubans_Edge_Stack_011_0073.jpg
    Cubans_Edge_Stack_011_0074.jpg
    Cubans_Edge_Stack_011_0075.jpg
    Cubans_Edge_Stack_011_0076.jpg
    Cubans_Edge_Stack_011_0077.jpg
    Cubans_Edge_Stack_011_0078.jpg
    Cubans_Edge_Stack_011_0079.jpg
    Cubans_Edge_Stack_011_0080.jpg
    Cubans_Edge_Stack_011_0081.jpg
    Cubans_Edge_Stack_011_0082.jpg
    Cubans_Edge_Stack_011_0083.jpg
    Cubans_Edge_Stack_011_0084.jpg
    Cubans_Edge_Stack_011_0085.jpg
    Cubans_Edge_Stack_011_0086.jpg
    Cubans_Edge_Stack_011_0087.jpg
    Cubans_Edge_Stack_011_0088.jpg
    Cubans_Edge_Stack_011_0089.jpg
    Cubans_Edge_Stack_011_0090.jpg
    Cubans_Edge_Stack_011_0091.jpg
    Cubans_Edge_Stack_011_0092.jpg
    Cubans_Edge_Stack_011_0093.jpg
    Cubans_Edge_Stack_011_0094.jpg
    Cubans_Edge_Stack_011_0095.jpg
    Cubans_Edge_Stack_011_0096.jpg
    Cubans_Edge_Stack_011_0097.jpg
    Cubans_Edge_Stack_011_0098.jpg
    Cubans_Edge_Stack_011_0099.jpg
    Cubans_Edge_Stack_011_0100.jpg
    Cubans_Edge_Stack_011_0101.jpg
    Cubans_Edge_Stack_011_0102.jpg
    Cubans_Edge_Stack_011_0103.jpg
    Cubans_Edge_Stack_011_0104.jpg
    Cubans_Edge_Stack_011_0105.jpg
    Cubans_Edge_Stack_011_0106.jpg
    Cubans_Edge_Stack_011_0107.jpg
    Cubans_Edge_Stack_011_0108.jpg
    Cubans_Edge_Stack_011_0109.jpg
    Cubans_Edge_Stack_011_0110.jpg
    Cubans_Edge_Stack_011_0111.jpg
    Cubans_Edge_Stack_011_0112.jpg
    Cubans_Edge_Stack_011_0113.jpg
    Cubans_Edge_Stack_011_0114.jpg
    Cubans_Edge_Stack_011_0115.jpg
    Cubans_Edge_Stack_011_0116.jpg
    Cubans_Edge_Stack_011_0117.jpg
    Cubans_Edge_Stack_011_0118.jpg
    Cubans_Edge_Stack_011_0119.jpg
    Cubans_Edge_Stack_011_0120.jpg
    Cubans_Edge_Stack_011_0121.jpg
    Cubans_Edge_Stack_011_0122.jpg
    Cubans_Edge_Stack_011_0123.jpg
    Cubans_Edge_Stack_011_0124.jpg
    Cubans_Edge_Stack_011_0125.jpg
    Cubans_Edge_Stack_011_0126.jpg
    Cubans_Edge_Stack_011_0127.jpg
    Cubans_Edge_Stack_011_0128.jpg
    Cubans_Edge_Stack_011_0129.jpg
    Cubans_Edge_Stack_011_0130.jpg
    Cubans_Edge_Stack_011_0131.jpg
    Cubans_Edge_Stack_011_0132.jpg
    Cubans_Edge_Stack_011_0133.jpg
    Cubans_Edge_Stack_011_0134.jpg
    Cubans_Edge_Stack_011_0135.jpg
    Cubans_Edge_Stack_011_0136.jpg
    Cubans_Edge_Stack_011_0137.jpg
    Cubans_Edge_Stack_011_0138.jpg
    Cubans_Edge_Stack_011_0139.jpg
    Cubans_Edge_Stack_011_0140.jpg
    Cubans_Edge_Stack_011_0141.jpg
    Cubans_Edge_Stack_011_0142.jpg
    Cubans_Edge_Stack_011_0143.jpg
    Cubans_Edge_Stack_011_0144.jpg
    Cubans_Edge_Stack_011_0145.jpg
    Cubans_Edge_Stack_011_0146.jpg
    Cubans_Edge_Stack_011_0147.jpg
    Cubans_Edge_Stack_011_0148.jpg
    Cubans_Edge_Stack_011_0149.jpg
    Cubans_Edge_Stack_011_0150.jpg
    Cubans_Edge_Stack_011_0151.jpg
    Cubans_Edge_Stack_011_0152.jpg
    Cubans_Edge_Stack_011_0153.jpg
    Cubans_Edge_Stack_011_0154.jpg
    Cubans_Edge_Stack_011_0155.jpg
    Cubans_Edge_Stack_011_0156.jpg
    Cubans_Edge_Stack_011_0157.jpg
    Cubans_Edge_Stack_011_0158.jpg
    Cubans_Edge_Stack_011_0159.jpg
    Cubans_Edge_Stack_011_0160.jpg
    Cubans_Edge_Stack_011_0161.jpg
    Cubans_Edge_Stack_011_0162.jpg
    Cubans_Edge_Stack_011_0163.jpg
    Cubans_Edge_Stack_011_0164.jpg
    Cubans_Edge_Stack_011_0165.jpg
    Cubans_Edge_Stack_011_0166.jpg
    Cubans_Edge_Stack_011_0167.jpg
    Cubans_Edge_Stack_011_0168.jpg
    Cubans_Edge_Stack_011_0169.jpg
    Cubans_Edge_Stack_011_0170.jpg
    Cubans_Edge_Stack_011_0171.jpg
    Cubans_Edge_Stack_011_0172.jpg
    Cubans_Edge_Stack_011_0173.jpg
    Cubans_Edge_Stack_011_0174.jpg
    Cubans_Edge_Stack_011_0175.jpg
    Cubans_Edge_Stack_011_0176.jpg
    Cubans_Edge_Stack_011_0177.jpg
    Cubans_Edge_Stack_011_0178.jpg
    Cubans_Edge_Stack_011_0179.jpg
    Cubans_Edge_Stack_011_0180.jpg
    Cubans_Edge_Stack_011_0181.jpg
    Cubans_Edge_Stack_011_0182.jpg
    Cubans_Edge_Stack_011_0183.jpg
    Cubans_Edge_Stack_011_0184.jpg
    Cubans_Edge_Stack_011_0185.jpg
    Cubans_Edge_Stack_011_0186.jpg
    Cubans_Edge_Stack_011_0187.jpg
    Cubans_Edge_Stack_011_0188.jpg
    Cubans_Edge_Stack_011_0189.jpg
    Cubans_Edge_Stack_011_0190.jpg
    Cubans_Edge_Stack_011_0191.jpg
    Cubans_Edge_Stack_011_0192.jpg
    Cubans_Edge_Stack_011_0193.jpg
    Cubans_Edge_Stack_011_0194.jpg
    Cubans_Edge_Stack_011_0195.jpg
    Cubans_Edge_Stack_011_0196.jpg
    Cubans_Edge_Stack_011_0197.jpg
    Cubans_Edge_Stack_011_0198.jpg
    Cubans_Edge_Stack_011_0199.jpgCubans_Edge_Stack_011_0200.jpg
    `;
    return data.split("\n")[index];
  }

  const frameCount = 201;

  const images = [];
  const imageSeq = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 1.8,
      // pin:true,
      trigger: "#eighth",
      // start:"bottom 100%",
    },
    onUpdate: render,
  });

  images[0].onload = render;

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
}
dom7();

function dom8() {
  const canvas = document.querySelector("#ninth>#canvas9");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `Cubans_Edge_Stack_011_0000.jpg
    Cubans_Edge_Stack_011_0001.jpg
    Cubans_Edge_Stack_011_0002.jpg
    Cubans_Edge_Stack_011_0003.jpg
    Cubans_Edge_Stack_011_0004.jpg
    Cubans_Edge_Stack_011_0005.jpg
    Cubans_Edge_Stack_011_0006.jpg
    Cubans_Edge_Stack_011_0007.jpg
    Cubans_Edge_Stack_011_0008.jpg
    Cubans_Edge_Stack_011_0009.jpg
    Cubans_Edge_Stack_011_0010.jpg
    Cubans_Edge_Stack_011_0011.jpg
    Cubans_Edge_Stack_011_0012.jpg
    Cubans_Edge_Stack_011_0013.jpg
    Cubans_Edge_Stack_011_0014.jpg
    Cubans_Edge_Stack_011_0015.jpg
    Cubans_Edge_Stack_011_0016.jpg
    Cubans_Edge_Stack_011_0017.jpg
    Cubans_Edge_Stack_011_0018.jpg
    Cubans_Edge_Stack_011_0019.jpg
    Cubans_Edge_Stack_011_0020.jpg
    Cubans_Edge_Stack_011_0021.jpg
    Cubans_Edge_Stack_011_0022.jpg
    Cubans_Edge_Stack_011_0023.jpg
    Cubans_Edge_Stack_011_0024.jpg
    Cubans_Edge_Stack_011_0025.jpg
    Cubans_Edge_Stack_011_0026.jpg
    Cubans_Edge_Stack_011_0027.jpg
    Cubans_Edge_Stack_011_0028.jpg
    Cubans_Edge_Stack_011_0029.jpg
    Cubans_Edge_Stack_011_0030.jpg
    Cubans_Edge_Stack_011_0031.jpg
    Cubans_Edge_Stack_011_0032.jpg
    Cubans_Edge_Stack_011_0033.jpg
    Cubans_Edge_Stack_011_0034.jpg
    Cubans_Edge_Stack_011_0035.jpg
    Cubans_Edge_Stack_011_0036.jpg
    Cubans_Edge_Stack_011_0037.jpg
    Cubans_Edge_Stack_011_0038.jpg
    Cubans_Edge_Stack_011_0039.jpg
    Cubans_Edge_Stack_011_0040.jpg
    Cubans_Edge_Stack_011_0041.jpg
    Cubans_Edge_Stack_011_0042.jpg
    Cubans_Edge_Stack_011_0043.jpg
    Cubans_Edge_Stack_011_0044.jpg
    Cubans_Edge_Stack_011_0045.jpg
    Cubans_Edge_Stack_011_0046.jpg
    Cubans_Edge_Stack_011_0047.jpg
    Cubans_Edge_Stack_011_0048.jpg
    Cubans_Edge_Stack_011_0049.jpg
    Cubans_Edge_Stack_011_0050.jpg
    Cubans_Edge_Stack_011_0051.jpg
    Cubans_Edge_Stack_011_0052.jpg
    Cubans_Edge_Stack_011_0053.jpg
    Cubans_Edge_Stack_011_0054.jpg
    Cubans_Edge_Stack_011_0055.jpg
    Cubans_Edge_Stack_011_0056.jpg
    Cubans_Edge_Stack_011_0057.jpg
    Cubans_Edge_Stack_011_0058.jpg
    Cubans_Edge_Stack_011_0059.jpg
    Cubans_Edge_Stack_011_0060.jpg
    Cubans_Edge_Stack_011_0061.jpg
    Cubans_Edge_Stack_011_0062.jpg
    Cubans_Edge_Stack_011_0063.jpg
    Cubans_Edge_Stack_011_0064.jpg
    Cubans_Edge_Stack_011_0065.jpg
    Cubans_Edge_Stack_011_0066.jpg
    Cubans_Edge_Stack_011_0067.jpg
    Cubans_Edge_Stack_011_0068.jpg
    Cubans_Edge_Stack_011_0069.jpg
    Cubans_Edge_Stack_011_0070.jpg
    Cubans_Edge_Stack_011_0071.jpg
    Cubans_Edge_Stack_011_0072.jpg
    Cubans_Edge_Stack_011_0073.jpg
    Cubans_Edge_Stack_011_0074.jpg
    Cubans_Edge_Stack_011_0075.jpg
    Cubans_Edge_Stack_011_0076.jpg
    Cubans_Edge_Stack_011_0077.jpg
    Cubans_Edge_Stack_011_0078.jpg
    Cubans_Edge_Stack_011_0079.jpg
    Cubans_Edge_Stack_011_0080.jpg
    Cubans_Edge_Stack_011_0081.jpg
    Cubans_Edge_Stack_011_0082.jpg
    Cubans_Edge_Stack_011_0083.jpg
    Cubans_Edge_Stack_011_0084.jpg
    Cubans_Edge_Stack_011_0085.jpg
    Cubans_Edge_Stack_011_0086.jpg
    Cubans_Edge_Stack_011_0087.jpg
    Cubans_Edge_Stack_011_0088.jpg
    Cubans_Edge_Stack_011_0089.jpg
    Cubans_Edge_Stack_011_0090.jpg
    Cubans_Edge_Stack_011_0091.jpg
    Cubans_Edge_Stack_011_0092.jpg
    Cubans_Edge_Stack_011_0093.jpg
    Cubans_Edge_Stack_011_0094.jpg
    Cubans_Edge_Stack_011_0095.jpg
    Cubans_Edge_Stack_011_0096.jpg
    Cubans_Edge_Stack_011_0097.jpg
    Cubans_Edge_Stack_011_0098.jpg
    Cubans_Edge_Stack_011_0099.jpg
    Cubans_Edge_Stack_011_0100.jpg
    Cubans_Edge_Stack_011_0101.jpg
    Cubans_Edge_Stack_011_0102.jpg
    Cubans_Edge_Stack_011_0103.jpg
    Cubans_Edge_Stack_011_0104.jpg
    Cubans_Edge_Stack_011_0105.jpg
    Cubans_Edge_Stack_011_0106.jpg
    Cubans_Edge_Stack_011_0107.jpg
    Cubans_Edge_Stack_011_0108.jpg
    Cubans_Edge_Stack_011_0109.jpg
    Cubans_Edge_Stack_011_0110.jpg
    Cubans_Edge_Stack_011_0111.jpg
    Cubans_Edge_Stack_011_0112.jpg
    Cubans_Edge_Stack_011_0113.jpg
    Cubans_Edge_Stack_011_0114.jpg
    Cubans_Edge_Stack_011_0115.jpg
    Cubans_Edge_Stack_011_0116.jpg
    Cubans_Edge_Stack_011_0117.jpg
    Cubans_Edge_Stack_011_0118.jpg
    Cubans_Edge_Stack_011_0119.jpg
    Cubans_Edge_Stack_011_0120.jpg
    Cubans_Edge_Stack_011_0121.jpg
    Cubans_Edge_Stack_011_0122.jpg
    Cubans_Edge_Stack_011_0123.jpg
    Cubans_Edge_Stack_011_0124.jpg
    Cubans_Edge_Stack_011_0125.jpg
    Cubans_Edge_Stack_011_0126.jpg
    Cubans_Edge_Stack_011_0127.jpg
    Cubans_Edge_Stack_011_0128.jpg
    Cubans_Edge_Stack_011_0129.jpg
    Cubans_Edge_Stack_011_0130.jpg
    Cubans_Edge_Stack_011_0131.jpg
    Cubans_Edge_Stack_011_0132.jpg
    Cubans_Edge_Stack_011_0133.jpg
    Cubans_Edge_Stack_011_0134.jpg
    Cubans_Edge_Stack_011_0135.jpg
    Cubans_Edge_Stack_011_0136.jpg
    Cubans_Edge_Stack_011_0137.jpg
    Cubans_Edge_Stack_011_0138.jpg
    Cubans_Edge_Stack_011_0139.jpg
    Cubans_Edge_Stack_011_0140.jpg
    Cubans_Edge_Stack_011_0141.jpg
    Cubans_Edge_Stack_011_0142.jpg
    Cubans_Edge_Stack_011_0143.jpg
    Cubans_Edge_Stack_011_0144.jpg
    Cubans_Edge_Stack_011_0145.jpg
    Cubans_Edge_Stack_011_0146.jpg
    Cubans_Edge_Stack_011_0147.jpg
    Cubans_Edge_Stack_011_0148.jpg
    Cubans_Edge_Stack_011_0149.jpg
    Cubans_Edge_Stack_011_0150.jpg
    Cubans_Edge_Stack_011_0151.jpg
    Cubans_Edge_Stack_011_0152.jpg
    Cubans_Edge_Stack_011_0153.jpg
    Cubans_Edge_Stack_011_0154.jpg
    Cubans_Edge_Stack_011_0155.jpg
    Cubans_Edge_Stack_011_0156.jpg
    Cubans_Edge_Stack_011_0157.jpg
    Cubans_Edge_Stack_011_0158.jpg
    Cubans_Edge_Stack_011_0159.jpg
    Cubans_Edge_Stack_011_0160.jpg
    Cubans_Edge_Stack_011_0161.jpg
    Cubans_Edge_Stack_011_0162.jpg
    Cubans_Edge_Stack_011_0163.jpg
    Cubans_Edge_Stack_011_0164.jpg
    Cubans_Edge_Stack_011_0165.jpg
    Cubans_Edge_Stack_011_0166.jpg
    Cubans_Edge_Stack_011_0167.jpg
    Cubans_Edge_Stack_011_0168.jpg
    Cubans_Edge_Stack_011_0169.jpg
    Cubans_Edge_Stack_011_0170.jpg
    Cubans_Edge_Stack_011_0171.jpg
    Cubans_Edge_Stack_011_0172.jpg
    Cubans_Edge_Stack_011_0173.jpg
    Cubans_Edge_Stack_011_0174.jpg
    Cubans_Edge_Stack_011_0175.jpg
    Cubans_Edge_Stack_011_0176.jpg
    Cubans_Edge_Stack_011_0177.jpg
    Cubans_Edge_Stack_011_0178.jpg
    Cubans_Edge_Stack_011_0179.jpg
    Cubans_Edge_Stack_011_0180.jpg
    Cubans_Edge_Stack_011_0181.jpg
    Cubans_Edge_Stack_011_0182.jpg
    Cubans_Edge_Stack_011_0183.jpg
    Cubans_Edge_Stack_011_0184.jpg
    Cubans_Edge_Stack_011_0185.jpg
    Cubans_Edge_Stack_011_0186.jpg
    Cubans_Edge_Stack_011_0187.jpg
    Cubans_Edge_Stack_011_0188.jpg
    Cubans_Edge_Stack_011_0189.jpg
    Cubans_Edge_Stack_011_0190.jpg
    Cubans_Edge_Stack_011_0191.jpg
    Cubans_Edge_Stack_011_0192.jpg
    Cubans_Edge_Stack_011_0193.jpg
    Cubans_Edge_Stack_011_0194.jpg
    Cubans_Edge_Stack_011_0195.jpg
    Cubans_Edge_Stack_011_0196.jpg
    Cubans_Edge_Stack_011_0197.jpg
    Cubans_Edge_Stack_011_0198.jpg
    Cubans_Edge_Stack_011_0199.jpgCubans_Edge_Stack_011_0200.jpg
    `;
    return data.split("\n")[index];
  }

  const frameCount = 201;

  const images = [];
  const imageSeq = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 1.8,
      // pin:true,
      trigger: "#ninth",
      // start:"bottom 100%",
    },
    onUpdate: render,
  });

  images[0].onload = render;

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
}
dom8();

function dom9() {
  const canvas = document.querySelector("#tenth>#canvas10");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `Cubans_Edge_Stack_011_0000.jpg
    Cubans_Edge_Stack_011_0001.jpg
    Cubans_Edge_Stack_011_0002.jpg
    Cubans_Edge_Stack_011_0003.jpg
    Cubans_Edge_Stack_011_0004.jpg
    Cubans_Edge_Stack_011_0005.jpg
    Cubans_Edge_Stack_011_0006.jpg
    Cubans_Edge_Stack_011_0007.jpg
    Cubans_Edge_Stack_011_0008.jpg
    Cubans_Edge_Stack_011_0009.jpg
    Cubans_Edge_Stack_011_0010.jpg
    Cubans_Edge_Stack_011_0011.jpg
    Cubans_Edge_Stack_011_0012.jpg
    Cubans_Edge_Stack_011_0013.jpg
    Cubans_Edge_Stack_011_0014.jpg
    Cubans_Edge_Stack_011_0015.jpg
    Cubans_Edge_Stack_011_0016.jpg
    Cubans_Edge_Stack_011_0017.jpg
    Cubans_Edge_Stack_011_0018.jpg
    Cubans_Edge_Stack_011_0019.jpg
    Cubans_Edge_Stack_011_0020.jpg
    Cubans_Edge_Stack_011_0021.jpg
    Cubans_Edge_Stack_011_0022.jpg
    Cubans_Edge_Stack_011_0023.jpg
    Cubans_Edge_Stack_011_0024.jpg
    Cubans_Edge_Stack_011_0025.jpg
    Cubans_Edge_Stack_011_0026.jpg
    Cubans_Edge_Stack_011_0027.jpg
    Cubans_Edge_Stack_011_0028.jpg
    Cubans_Edge_Stack_011_0029.jpg
    Cubans_Edge_Stack_011_0030.jpg
    Cubans_Edge_Stack_011_0031.jpg
    Cubans_Edge_Stack_011_0032.jpg
    Cubans_Edge_Stack_011_0033.jpg
    Cubans_Edge_Stack_011_0034.jpg
    Cubans_Edge_Stack_011_0035.jpg
    Cubans_Edge_Stack_011_0036.jpg
    Cubans_Edge_Stack_011_0037.jpg
    Cubans_Edge_Stack_011_0038.jpg
    Cubans_Edge_Stack_011_0039.jpg
    Cubans_Edge_Stack_011_0040.jpg
    Cubans_Edge_Stack_011_0041.jpg
    Cubans_Edge_Stack_011_0042.jpg
    Cubans_Edge_Stack_011_0043.jpg
    Cubans_Edge_Stack_011_0044.jpg
    Cubans_Edge_Stack_011_0045.jpg
    Cubans_Edge_Stack_011_0046.jpg
    Cubans_Edge_Stack_011_0047.jpg
    Cubans_Edge_Stack_011_0048.jpg
    Cubans_Edge_Stack_011_0049.jpg
    Cubans_Edge_Stack_011_0050.jpg
    Cubans_Edge_Stack_011_0051.jpg
    Cubans_Edge_Stack_011_0052.jpg
    Cubans_Edge_Stack_011_0053.jpg
    Cubans_Edge_Stack_011_0054.jpg
    Cubans_Edge_Stack_011_0055.jpg
    Cubans_Edge_Stack_011_0056.jpg
    Cubans_Edge_Stack_011_0057.jpg
    Cubans_Edge_Stack_011_0058.jpg
    Cubans_Edge_Stack_011_0059.jpg
    Cubans_Edge_Stack_011_0060.jpg
    Cubans_Edge_Stack_011_0061.jpg
    Cubans_Edge_Stack_011_0062.jpg
    Cubans_Edge_Stack_011_0063.jpg
    Cubans_Edge_Stack_011_0064.jpg
    Cubans_Edge_Stack_011_0065.jpg
    Cubans_Edge_Stack_011_0066.jpg
    Cubans_Edge_Stack_011_0067.jpg
    Cubans_Edge_Stack_011_0068.jpg
    Cubans_Edge_Stack_011_0069.jpg
    Cubans_Edge_Stack_011_0070.jpg
    Cubans_Edge_Stack_011_0071.jpg
    Cubans_Edge_Stack_011_0072.jpg
    Cubans_Edge_Stack_011_0073.jpg
    Cubans_Edge_Stack_011_0074.jpg
    Cubans_Edge_Stack_011_0075.jpg
    Cubans_Edge_Stack_011_0076.jpg
    Cubans_Edge_Stack_011_0077.jpg
    Cubans_Edge_Stack_011_0078.jpg
    Cubans_Edge_Stack_011_0079.jpg
    Cubans_Edge_Stack_011_0080.jpg
    Cubans_Edge_Stack_011_0081.jpg
    Cubans_Edge_Stack_011_0082.jpg
    Cubans_Edge_Stack_011_0083.jpg
    Cubans_Edge_Stack_011_0084.jpg
    Cubans_Edge_Stack_011_0085.jpg
    Cubans_Edge_Stack_011_0086.jpg
    Cubans_Edge_Stack_011_0087.jpg
    Cubans_Edge_Stack_011_0088.jpg
    Cubans_Edge_Stack_011_0089.jpg
    Cubans_Edge_Stack_011_0090.jpg
    Cubans_Edge_Stack_011_0091.jpg
    Cubans_Edge_Stack_011_0092.jpg
    Cubans_Edge_Stack_011_0093.jpg
    Cubans_Edge_Stack_011_0094.jpg
    Cubans_Edge_Stack_011_0095.jpg
    Cubans_Edge_Stack_011_0096.jpg
    Cubans_Edge_Stack_011_0097.jpg
    Cubans_Edge_Stack_011_0098.jpg
    Cubans_Edge_Stack_011_0099.jpg
    Cubans_Edge_Stack_011_0100.jpg
    Cubans_Edge_Stack_011_0101.jpg
    Cubans_Edge_Stack_011_0102.jpg
    Cubans_Edge_Stack_011_0103.jpg
    Cubans_Edge_Stack_011_0104.jpg
    Cubans_Edge_Stack_011_0105.jpg
    Cubans_Edge_Stack_011_0106.jpg
    Cubans_Edge_Stack_011_0107.jpg
    Cubans_Edge_Stack_011_0108.jpg
    Cubans_Edge_Stack_011_0109.jpg
    Cubans_Edge_Stack_011_0110.jpg
    Cubans_Edge_Stack_011_0111.jpg
    Cubans_Edge_Stack_011_0112.jpg
    Cubans_Edge_Stack_011_0113.jpg
    Cubans_Edge_Stack_011_0114.jpg
    Cubans_Edge_Stack_011_0115.jpg
    Cubans_Edge_Stack_011_0116.jpg
    Cubans_Edge_Stack_011_0117.jpg
    Cubans_Edge_Stack_011_0118.jpg
    Cubans_Edge_Stack_011_0119.jpg
    Cubans_Edge_Stack_011_0120.jpg
    Cubans_Edge_Stack_011_0121.jpg
    Cubans_Edge_Stack_011_0122.jpg
    Cubans_Edge_Stack_011_0123.jpg
    Cubans_Edge_Stack_011_0124.jpg
    Cubans_Edge_Stack_011_0125.jpg
    Cubans_Edge_Stack_011_0126.jpg
    Cubans_Edge_Stack_011_0127.jpg
    Cubans_Edge_Stack_011_0128.jpg
    Cubans_Edge_Stack_011_0129.jpg
    Cubans_Edge_Stack_011_0130.jpg
    Cubans_Edge_Stack_011_0131.jpg
    Cubans_Edge_Stack_011_0132.jpg
    Cubans_Edge_Stack_011_0133.jpg
    Cubans_Edge_Stack_011_0134.jpg
    Cubans_Edge_Stack_011_0135.jpg
    Cubans_Edge_Stack_011_0136.jpg
    Cubans_Edge_Stack_011_0137.jpg
    Cubans_Edge_Stack_011_0138.jpg
    Cubans_Edge_Stack_011_0139.jpg
    Cubans_Edge_Stack_011_0140.jpg
    Cubans_Edge_Stack_011_0141.jpg
    Cubans_Edge_Stack_011_0142.jpg
    Cubans_Edge_Stack_011_0143.jpg
    Cubans_Edge_Stack_011_0144.jpg
    Cubans_Edge_Stack_011_0145.jpg
    Cubans_Edge_Stack_011_0146.jpg
    Cubans_Edge_Stack_011_0147.jpg
    Cubans_Edge_Stack_011_0148.jpg
    Cubans_Edge_Stack_011_0149.jpg
    Cubans_Edge_Stack_011_0150.jpg
    Cubans_Edge_Stack_011_0151.jpg
    Cubans_Edge_Stack_011_0152.jpg
    Cubans_Edge_Stack_011_0153.jpg
    Cubans_Edge_Stack_011_0154.jpg
    Cubans_Edge_Stack_011_0155.jpg
    Cubans_Edge_Stack_011_0156.jpg
    Cubans_Edge_Stack_011_0157.jpg
    Cubans_Edge_Stack_011_0158.jpg
    Cubans_Edge_Stack_011_0159.jpg
    Cubans_Edge_Stack_011_0160.jpg
    Cubans_Edge_Stack_011_0161.jpg
    Cubans_Edge_Stack_011_0162.jpg
    Cubans_Edge_Stack_011_0163.jpg
    Cubans_Edge_Stack_011_0164.jpg
    Cubans_Edge_Stack_011_0165.jpg
    Cubans_Edge_Stack_011_0166.jpg
    Cubans_Edge_Stack_011_0167.jpg
    Cubans_Edge_Stack_011_0168.jpg
    Cubans_Edge_Stack_011_0169.jpg
    Cubans_Edge_Stack_011_0170.jpg
    Cubans_Edge_Stack_011_0171.jpg
    Cubans_Edge_Stack_011_0172.jpg
    Cubans_Edge_Stack_011_0173.jpg
    Cubans_Edge_Stack_011_0174.jpg
    Cubans_Edge_Stack_011_0175.jpg
    Cubans_Edge_Stack_011_0176.jpg
    Cubans_Edge_Stack_011_0177.jpg
    Cubans_Edge_Stack_011_0178.jpg
    Cubans_Edge_Stack_011_0179.jpg
    Cubans_Edge_Stack_011_0180.jpg
    Cubans_Edge_Stack_011_0181.jpg
    Cubans_Edge_Stack_011_0182.jpg
    Cubans_Edge_Stack_011_0183.jpg
    Cubans_Edge_Stack_011_0184.jpg
    Cubans_Edge_Stack_011_0185.jpg
    Cubans_Edge_Stack_011_0186.jpg
    Cubans_Edge_Stack_011_0187.jpg
    Cubans_Edge_Stack_011_0188.jpg
    Cubans_Edge_Stack_011_0189.jpg
    Cubans_Edge_Stack_011_0190.jpg
    Cubans_Edge_Stack_011_0191.jpg
    Cubans_Edge_Stack_011_0192.jpg
    Cubans_Edge_Stack_011_0193.jpg
    Cubans_Edge_Stack_011_0194.jpg
    Cubans_Edge_Stack_011_0195.jpg
    Cubans_Edge_Stack_011_0196.jpg
    Cubans_Edge_Stack_011_0197.jpg
    Cubans_Edge_Stack_011_0198.jpg
    Cubans_Edge_Stack_011_0199.jpgCubans_Edge_Stack_011_0200.jpg
    `;
    return data.split("\n")[index];
  }

  const frameCount = 201;

  const images = [];
  const imageSeq = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 1.8,
      // pin:true,
      trigger: "#tenth",
      // start:"bottom 100%",
    },
    onUpdate: render,
  });

  images[0].onload = render;

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
}
dom9();

function box1() {
  const card = document.querySelector("#box1");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const tiltX = (rect.left - e.clientX) / 120;
    const tiltY = (rect.top - e.clientY) / 120;
    const tiltString = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

    card.style.transform = tiltString;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "none";
  });
}
box1();
function box2() {
  const card = document.querySelector("#box2");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const tiltX = (rect.left - e.clientX) / 120;
    const tiltY = (rect.top - e.clientY) / 120;
    const tiltString = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

    card.style.transform = tiltString;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "none";
  });
}
box2();
function box3() {
  const card = document.querySelector("#box3");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const tiltX = (rect.left - e.clientX) / 120;
    const tiltY = (rect.top - e.clientY) / 120;
    const tiltString = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

    card.style.transform = tiltString;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "none";
  });
}
box3();
function box4() {
  const card = document.querySelector("#box4");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const tiltX = (rect.left - e.clientX) / 120;
    const tiltY = (rect.top - e.clientY) / 120;
    const tiltString = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

    card.style.transform = tiltString;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "none";
  });
}
box4();
function box5() {
  const card = document.querySelector("#box5");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const tiltX = (rect.left - e.clientX) / 120;
    const tiltY = (rect.top - e.clientY) / 120;
    const tiltString = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

    card.style.transform = tiltString;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "none";
  });
}
box5();

function box6() {
  const card = document.querySelector("#box6");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const tiltX = (rect.left - e.clientX) / 100;
    const tiltY = (rect.top - e.clientY) / 100;
    const tiltString = `perspective(1200px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

    card.style.transform = tiltString;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "none";
  });
}
box6();
function box7() {
  const card = document.querySelector("#box7");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const tiltX = (rect.left - e.clientX) / 100;
    const tiltY = (rect.top - e.clientY) / 100;
    const tiltString = `perspective(1200px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

    card.style.transform = tiltString;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "none";
  });
}
box7();
function box8() {
  const card = document.querySelector("#box8");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const tiltX = (rect.left - e.clientX) / 100;
    const tiltY = (rect.top - e.clientY) / 100;
    const tiltString = `perspective(1200px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

    card.style.transform = tiltString;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "none";
  });
}
box8();

function box9() {
  const card = document.querySelector("#box9");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const tiltX = (rect.left - e.clientX) / 200;
    const tiltY = (rect.top - e.clientY) / 200;
    const tiltString = `perspective(1600px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

    card.style.transform = tiltString;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "none";
  });
}
box9();
function box10() {
  const card = document.querySelector("#box10");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const tiltX = (rect.left - e.clientX) / 200;
    const tiltY = (rect.top - e.clientY) / 200;
    const tiltString = `perspective(1600px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

    card.style.transform = tiltString;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "none";
  });
}
box10();
function box11() {
  const card = document.querySelector("#box11");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const tiltX = (rect.left - e.clientX) / 200;
    const tiltY = (rect.top - e.clientY) / 200;
    const tiltString = `perspective(1600px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

    card.style.transform = tiltString;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "none";
  });
}
box11();
function box12() {
  const card = document.querySelector("#pcard1");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const tiltX = (rect.left - e.clientX) / 100;
    const tiltY = (rect.top - e.clientY) / 100;
    const tiltString = `perspective(1400px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

    card.style.transform = tiltString;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "none";
  });
}
box12();
function box13() {
  const card = document.querySelector("#pcard2");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const tiltX = (rect.left - e.clientX) / 100;
    const tiltY = (rect.top - e.clientY) / 100;
    const tiltString = `perspective(1400px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

    card.style.transform = tiltString;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "none";
  });
}
box13();
function box14() {
  const card = document.querySelector("#pcard3");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const tiltX = (rect.left - e.clientX) / 100;
    const tiltY = (rect.top - e.clientY) / 100;
    const tiltString = `perspective(1400px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

    card.style.transform = tiltString;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "none";
  });
}
box14();

// gsap.from("#nav1>h3",{
//     rotation:20,
//     duration:0.5,
//     opacity: 0
// })
// gsap.from("#nav2>h3",{
//     rotation:20,
//     duration:0.5,
//     opacity: 0,
//     stagger:0.2
// })
// gsap.from("#nav3",{
//     rotation:20,
//     duration:0.5,
//     opacity: 0,
//     stagger:0.2
// })
// gsap.from("#first>h1",{
//     rotation:15,
//     duration:1,
//     opacity: 0,
//     stagger:0.2
// })
// gsap.from("#first>h3",{
//     rotation:15,
//     duration:1,
//     opacity: 0,
//     stagger:0.2
// })

document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    gsap.to("#pre", {
      height: 0,
      y: -200,
      delay: 2,
      duration: 2,
      ease: Expo.easeInOut,
      onComplete: function () {
        // Run animations for landing page elements here
        gsap.to("#nav1>h3", {
          rotation: 0,
          duration: 0.5,
          opacity: 1,
        });
        gsap.to("#nav2>h3", {
          rotation: 0,
          duration: 0.5,
          opacity: 1,
          stagger: 0.2,
        });
        gsap.to("#nav3>button", {
          rotation: 0,
          duration: 0.5,
          opacity: 1,
          stagger: 0.2,
        });
        gsap.to("#first>h1", {
          rotation: 0,
          duration: 1,
          opacity: 1,
          stagger: 0.2,
        });
        gsap.to("#first>h3", {
          rotation: 0,
          duration: 1,
          opacity: 1,
          stagger: 0.2,
        });
      },
    });
  }
});

gsap.from("#second>h1", {
  rotation: 15,
  scrollTrigger: {
    trigger: "#second>h1",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  duration: 0.5,
  opacity: 0,
});
gsap.from("#second>#p", {
  rotation: 15,
  scrollTrigger: {
    trigger: "#second>#p",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  duration: 0.5,
  opacity: 0,
});
gsap.from("#second>#p2", {
  rotation: 15,
  scrollTrigger: {
    trigger: "#second>#p2",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  duration: 0.5,
  opacity: 0,
});
gsap.from("#textarea>h1", {
  rotation: 15,
  scrollTrigger: {
    trigger: "#textarea>h1",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  duration: 0.5,
  opacity: 0,
});
gsap.from("#box1", {
  // rotation:15,
  scrollTrigger: {
    trigger: "#box1",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  duration: 0.7,
  opacity: 0,
});
gsap.from("#box2", {
  // rotation:15,
  scrollTrigger: {
    trigger: "#box2",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  duration: 0.7,
  opacity: 0,
});
gsap.from("#box3", {
  // rotation:15,
  scrollTrigger: {
    trigger: "#box3",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  duration: 0.7,
  opacity: 0,
});
gsap.from("#box4", {
  // rotation:15,
  scrollTrigger: {
    trigger: "#box4",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  duration: 0.7,
  opacity: 0,
});
gsap.from("#box5", {
  // rotation:15,
  scrollTrigger: {
    trigger: "#box5",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  duration: 0.7,
  opacity: 0,
});
gsap.from("#second2>h1", {
  rotation: 15,
  scrollTrigger: {
    trigger: "#second2>h1",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  duration: 0.7,
  opacity: 0,
});
gsap.from("#third>h1", {
  rotation: 15,
  scrollTrigger: {
    trigger: "#third>h1",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  duration: 0.7,
  opacity: 0,
});
gsap.from("#box6", {
  // rotateZ:180,
  scrollTrigger: {
    trigger: "#box6",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  y: 50,
  duration: 1,
  opacity: 0,
});
gsap.from("#fourth>h1", {
  rotation: 15,
  scrollTrigger: {
    trigger: "#fourth>h1",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  duration: 0.7,
  opacity: 0,
});
gsap.from("#box7", {
  // rotateZ:180,
  scrollTrigger: {
    trigger: "#box7",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  y: 50,
  duration: 1,
  opacity: 0,
});
gsap.from("#fifth>h1", {
  rotation: 15,
  scrollTrigger: {
    trigger: "#fifth>h1",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  duration: 0.7,
  opacity: 0,
});
gsap.from("#box8", {
  // rotateZ:180,
  scrollTrigger: {
    trigger: "#box8",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  y: 50,
  duration: 1,
  opacity: 0,
});
gsap.from("#sixth>h1", {
  rotation: 15,
  scrollTrigger: {
    trigger: "#sixth>h1",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  duration: 0.7,
  opacity: 0,
});
gsap.from("#box9", {
  // rotateZ:180,
  scrollTrigger: {
    trigger: "#box9",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  y: 50,
  duration: 1,
  opacity: 0,
});
gsap.from("#box10", {
  // rotateZ:180,
  scrollTrigger: {
    trigger: "#box10",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  y: 50,
  duration: 1,
  opacity: 0,
});
gsap.from("#box11", {
  // rotateZ:180,
  scrollTrigger: {
    trigger: "#box11",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  y: 50,
  duration: 1,
  opacity: 0,
});
gsap.from("#eighth>h1", {
  rotation: 15,
  scrollTrigger: {
    trigger: "#eighth>h1",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  duration: 0.7,
  opacity: 0,
});
gsap.from("#pcard1", {
  // rotateZ:180,
  scrollTrigger: {
    trigger: "#pcard1",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  y: 50,
  duration: 1,
  opacity: 0,
});
gsap.from("#pcard2", {
  // rotateZ:180,
  scrollTrigger: {
    trigger: "#pcard2",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  y: 50,
  duration: 1,
  opacity: 0,
});
gsap.from("#pcard3", {
  // rotateZ:180,
  scrollTrigger: {
    trigger: "#pcard3",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  y: 50,
  duration: 1,
  opacity: 0,
});
gsap.from("#ninth>h1", {
  // rotation:15,
  scrollTrigger: {
    trigger: "#ninth>h1",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  y: 50,
  duration: 0.7,
  opacity: 0,
});
gsap.from("#faq", {
  y: 70,
  duration: 0.7,
  opacity: 0,
  stagger: 0.5,
  // rotation:15,
  scrollTrigger: {
    trigger: "#faq",
    scroller: "body",
    start: "top 60%",
    end: "top 40%",
    scrub: true,
  },
});
gsap.from("#tenth>h1", {
  // rotation:15,
  scrollTrigger: {
    trigger: "#tenth>h1",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
  y: 50,
  duration: 0.7,
  opacity: 0,
});
