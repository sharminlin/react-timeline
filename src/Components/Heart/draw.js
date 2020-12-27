
export class HeartAnimation {
  constructor (canvas) {
    this._init(canvas)
  }

  _init (canvas) {
    // 铺满屏幕
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    // 初始化
    this.posCenter = [width / 2, height / 2];
    this.context = canvas.getContext('2d');
    this.posLength = 2 * 3000 // 分割多少个点, 2的倍数
    
    // 存储要画的点的位置和数量 
    this.posList = getPosList(this.posLength, this.posCenter)

    this.currentIndex = 0
    this.DRAW_NUM = Math.floor(this.posLength * 3 / 4)

    this.width = width
    this.height = height
  }

  draw () {
    const { context, DRAW_NUM, posList, posLength } = this
    context.clearRect(0, 0, this.width, this.height)

    let drawNum = DRAW_NUM

    let i = this.currentIndex

    while (drawNum) {
      var a = 1 - Math.ceil(drawNum / (DRAW_NUM / 10)) / 10 // 不透明度
      context.fillStyle = `rgba(249, 176, 195, ${a})`;
      context.fillRect(posList[i][0], posList[i][1], 1, 1);
      i++;
      i >= posLength && (i = 0) // 如果超过坐标边界则从头开始
      drawNum--
    }

    // 此时i点就是头
    context.textAlign = 'center'
    context.font = '24px'
    // context.fillText('♥', posList[i][0], posList[i][1])
    this.currentIndex += 10
    this.currentIndex >= posLength && (this.currentIndex = 0)
    requestAnimationFrame(() => this.draw());
  }
}

function getPosList (posLength, [x0, y0]) {
  const posList = new Array(posLength);
  // 左右各一半
  var x, y;
  var i = 0;
  var j = posLength / 2 + 1;
  // 将心的坐标存入数组中
  for (let t = -3; t <= 3; t = t + 0.001) {
    //坐标系的 x,y
    x = 16 * Math.pow(Math.sin(t), 3);
    y = 13 * Math.cos(t) - 5 * Math.cos(t * 2) - 2 * Math.cos(t * 3) - Math.cos(t * 4);
    // 增大心
    x = x * 8;
    y = y * 8;
    // 算出对于计算机的坐标 计算机左上角是0,0
    x = x0 + x;
    y = y0 - y;

    // 存入数组
    if (x <= x0) {
      posList[i] = [x, y];
      i = i + 1;
    }
    if (x > x0) {
      posList[j] = [x, y];
      j = j + 1;
    }
  }
  return posList
}