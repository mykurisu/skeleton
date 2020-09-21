<template>
  <div class="skeleton-3">
    <div class="wave">
      <div class="circle"></div>
      <div class="circle1"></div>
      <div class="circle2"></div>
    </div>

    <div class="long-item"></div>

    <div class="circle-list">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>

    <div class="gap"></div>

    <div class="card-list">
      <div class="item">
        <div class="title"></div>
        <div class="text"></div>
        <div class="text"></div>
        <div class="text"></div>
      </div>
      <div class="gap"></div>
      <div class="item">
        <div class="title"></div>
        <div class="text"></div>
        <div class="text"></div>
        <div class="text"></div>
      </div>
      <div class="gap"></div>
      <div class="item">
        <div class="title"></div>
        <div class="text"></div>
        <div class="text"></div>
      </div>
      <div class="gap"></div>
      <div class="item">
        <div class="title"></div>
        <div class="text"></div>
        <div class="text"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-swiper {
  background-color: #eee;
}

.base-circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    // background-color: rgb(219, 131, 131);
    border: 5px solid rgba(238, 238, 238, 0.5);
    opacity: 0;
    transform: translate(-50%, -50%);
}

.wave {
  width: 100%;
  height: 667px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  .circle {
    @extend .base-circle;
    animation: wave 3s infinite;
  }
  .circle1 {
    @extend .base-circle;
    animation: wave 3s infinite .3s;
  }
  .circle2 {
    @extend .base-circle;
    animation: wave 3s infinite .6s;
  }
}

@keyframes wave {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
  100%{
    opacity: 0.7;
    transform: translate(-50%, -50%) scale(15);
  }
}

.skeleton-3 {
  width: 375px;
  height: 667px;
  overflow: hidden;
  position: relative;
  border: 1px solid #eee;
  padding: 15px;
  box-sizing: border-box;
}

.long-item {
  @extend .base-swiper;
  margin: 10px auto 25px auto;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  position: relative;
}

.circle-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  position: relative;
  .item {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #eee;
  }
}

.card-list {
  margin-top: 25px;
  width: 100%;
  position: relative;
  .item {
    display: block;
    margin: 25px 0;
    .title {
      @extend .base-swiper;
      width: 150px;
      height: 15px;
      border-radius: 5px;
      margin-bottom: 18px;
    }
    .text {
      @extend .base-swiper;
      width: 100%;
      height: 15px;
      border-radius: 5px;
      margin-bottom: 10px;
      &:last-child {
        width: 80%;
      }
    }
  }
}

.gap {
  width: 100%;
  height: 1px;
  background-color: #eee;
  position: relative;
}

@keyframes swiper {
  0% {
    background-position-x: 0%;
  }
  100% {
    background-position-x: 200%;
  }
}
</style>