<template>
  <div id="page">
    <canvas ref="myCanvas"></canvas>
  </div>
</template>
<script>
import { Star } from "./starrySky.js";

export default {
  data() {
    return {
      myCanvas: {}, //画布
      starImg: [], // 星星序列帧图片，7*7
      bgImg: {}, //画布背景图
      starNum: 80, // 星星数量
      stars: [], // 所有星星数组
      lastTime: 0, // 最新时间
      deltaTime: 0 // 动画刷新间隔时间
    };
  },
  created() {
    // 初始化星星对象
    this.initStar();
    // 初始化页面参数
    this.initParams();
  },
  mounted() {
    this.myCanvas = this.$refs.myCanvas;
    this.myCanvas.width = window.innerWidth;
    this.myCanvas.height = window.innerHeight;
    console.log(this.myCanvas);
    // 动画开始
    this.loop();
  },
  methods: {
    // 初始化对象属性
    initStar() {
      const _this = this;
      // 初始化星星位置
      Star.prototype.init = function() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight * 0.6; //只出现在画布的60%高度以上位置
        this.timer = 0;
        this.picNo = Math.floor(Math.random() * 7); // 随机序列帧
      };

      // 画对应的序列帧
      Star.prototype.draw = function(ctx, starImg) {
        /* 
          context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
          img	规定要使用的图像、画布或视频。
          sx	可选。开始剪切的 x 坐标位置。
          sy	可选。开始剪切的 y 坐标位置。
          swidth	可选。被剪切图像的宽度。
          sheight	可选。被剪切图像的高度。
          x	在画布上放置图像的 x 坐标位置。
          y	在画布上放置图像的 y 坐标位置。
          width	可选。要使用的图像的宽度。（伸展或缩小图像）
          height	可选。要使用的图像的高度。（伸展或缩小图像）
        */
        ctx.save();
        // 将图片上的序列帧画在画布上，每个序列帧大小为7*7
        ctx.drawImage(starImg, this.picNo * 7, 0, 7, 7, this.x, this.y, 28, 28);

        ctx.restore();
      };

      // 7帧序列帧轮流展示，每隔一定时间间隔换一帧
      Star.prototype.update = function() {
        this.timer += _this.deltaTime;
        // 控制星星闪烁频率
        if (this.timer > 140) {
          this.picNo += 1;
          this.timer = 0;
          this.picNo = this.picNo % 7;
        }
      };
    },
    // 初始化页面参数
    initParams() {
      (this.starImg = new Image()), (this.bgImg = new Image());
      this.starImg.src = require("./imgs/star.png");
      this.bgImg.src = require("./imgs/starrySky.jpg");
      for (let i = 0; i < this.starNum; i++) {
        this.stars[i] = new Star();
        this.stars[i].init();
      }
      this.lastTime = Date.now();
    },
    // 群星闪烁动画
    loop() {
      const ctx = this.myCanvas.getContext("2d");
      const _this = this;
      let animation = window.webkitRequestAnimationFrame(function f() {
        animation = requestAnimationFrame(f);
        const now = Date.now();
        _this.deltaTime = now - _this.lastTime;
        _this.lastTime = now;
        // 刷新画布
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.drawImage(_this.bgImg, 0, 0, window.innerWidth, window.innerHeight);
        _this.drawStars(ctx);
      });
    },

    // 星星绘制
    drawStars(ctx) {
      for (let i = 0; i < this.starNum; i++) {
        this.stars[i].update();
        this.stars[i].draw(ctx, this.starImg);
      }
    }
  }
};
</script>
