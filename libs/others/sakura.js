var stop, staticx;
var img = new Image();
img.src ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKNSURBVDhPjZNNaBNBFMffTKbrJmST2NTWUG0vFVvBL4ql9QO0epAqitJ6VPSqd8FTiifrqeBFRSielAo9KF5UKIKHIrWKbaxtTZvWxMR0s0mT3WS3mR33bT8QVPAPAzv7/u+3b96bhX9JCCC41rf/pb+ao8eBRUehis+D59nhSGvtKQ9hDXVbhZXJcW1V1ZILszTlD/ECejJ5ud35cPIP2Abo1kVfpPvYvsEA1Xt3tUVIuVgUXkUhavy7HfKu0kzSsNGfWOJ0LmGI5+9XdntcwrqiUaDRIeD3rrf1HDm0882BtmC75A8Qwby2CZxQRjljlHLJB2rFQxRFAnVeJYmseeZhjI9tVuaComC/HOi61hTxPwoEKNTIsl2xVlzPql0iNdQvtKzm7o1kFhqqFZicLg5deGpd7esDD8WAezQHdKMj3I2gcL3P5tQSCEIILrMCkMqYMBcvQcBWobXJB0s/KTigO8hAUZwY9giBZy/tuY8ghAiquxA0LSZt+PJZA0VKka79zouqYi9+02BmfmXE2U1j7vAwcNrfvzbRjp6uyzsa5BZK1hqLQsjX2SLU+1Voaa5Adl6HJWdBJUfTCQuejZu3162u3GOipBpxGvuEwuPEExxqZQ6NwRJUTfeWQHOjDMEqtWcmDBgdN+6+zsLE79docwCfHp/84CH0YMHUhZcaBPgysC0MZCYENWxSyFk2KXG38LFJfSTdafZin51UZAhkEJzi0WDnk+11Sp+RSwvm08i2kIwxMAsmIIRanArLac50ufAxZj4YmKzedMJi4wa4Zkcskt97LlUu+7R0/Ep9mCpQlk7kfxTCGJSIBMU8iFSstDCnsxdvY/qrd8tQdDMdTU2t/XKEYGUAvwDHMj3rPaAdWQAAAABJRU5ErkJggg==";
    

function Sakura(x, y, s, r, fn) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.r = r;
    this.fn = fn;
}
Sakura.prototype.draw = function (cxt) {
    cxt.save();
    var xc = 40 * this.s / 4;
    cxt.translate(this.x, this.y);
    cxt.rotate(this.r);
    cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s)
    cxt.restore();
}
Sakura.prototype.update = function () {
    this.x = this.fn.x(this.x, this.y);
    this.y = this.fn.y(this.y, this.y);
    this.r = this.fn.r(this.r);
    if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
        this.r = getRandom('fnr');
        if (Math.random() > 0.4) {
            this.x = getRandom('x');
            this.y = 0;
            this.s = getRandom('s');
            this.r = getRandom('r');
        } else {
            this.x = window.innerWidth;
            this.y = getRandom('y');
            this.s = getRandom('s');
            this.r = getRandom('r');
        }
    }
}
SakuraList = function () {
    this.list = [];
}
SakuraList.prototype.push = function (sakura) {
    this.list.push(sakura);
}
SakuraList.prototype.update = function () {
    for (var i = 0, len = this.list.length; i < len; i++) {
        this.list[i].update();
    }
}
SakuraList.prototype.draw = function (cxt) {
    for (var i = 0, len = this.list.length; i < len; i++) {
        this.list[i].draw(cxt);
    }
}
SakuraList.prototype.get = function (i) {
    return this.list[i];
}
SakuraList.prototype.size = function () {
    return this.list.length;
}

function getRandom(option) {
    var ret, random;
    switch (option) {
        case 'x':
            ret = Math.random() * window.innerWidth;
            break;
        case 'y':
            ret = Math.random() * window.innerHeight;
            break;
        case 's':
            ret = Math.random();
            break;
        case 'r':
            ret = Math.random() * 6;
            break;
        case 'fnx':
            random = -0.5 + Math.random() * 1;
            ret = function (x, y) {
                return x + 0.5 * random - 1.7;
            };
            break;
        case 'fny':
            random = 1.5 + Math.random() * 0.7
            ret = function (x, y) {
                return y + random;
            };
            break;
        case 'fnr':
            random = Math.random() * 0.03;
            ret = function (r) {
                return r + random;
            };
            break;
    }
    return ret;
}

function startSakura() {
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    var canvas = document.createElement('canvas'),
        cxt;
    staticx = true;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;');
    canvas.setAttribute('id', 'canvas_sakura');
    document.getElementsByTagName('body')[0].appendChild(canvas);
    cxt = canvas.getContext('2d');
    var sakuraList = new SakuraList();
    for (var i = 0; i < 50; i++) {
        var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
        randomX = getRandom('x');
        randomY = getRandom('y');
        randomR = getRandom('r');
        randomS = getRandom('s');
        randomFnx = getRandom('fnx');
        randomFny = getRandom('fny');
        randomFnR = getRandom('fnr');
        sakura = new Sakura(randomX, randomY, randomS, randomR, {
            x: randomFnx,
            y: randomFny,
            r: randomFnR
        });
        sakura.draw(cxt);
        sakuraList.push(sakura);
    }
    stop = requestAnimationFrame(function () {
        cxt.clearRect(0, 0, canvas.width, canvas.height);
        sakuraList.update();
        sakuraList.draw(cxt);
        stop = requestAnimationFrame(arguments.callee);
    })
}
window.onresize = function () {
    var canvasSnow = document.getElementById('canvas_snow');
}
img.onload = function () {
    startSakura();
}

function stopp() {
    if (staticx) {
        var child = document.getElementById("canvas_sakura");
        child.parentNode.removeChild(child);
        window.cancelAnimationFrame(stop);
        staticx = false;
    } else {
        startSakura();
    }
}