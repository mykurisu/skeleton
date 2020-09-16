<template>
  <div class="skeleton-2">

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
              <div class="imgag"></div>
              <div class="text"></div>
              <div class="text"></div>
              <div class="text"></div>
          </div>
          <div class="item">
              <div class="imgag"></div>
              <div class="text"></div>
              <div class="text"></div>
              <div class="text"></div>
          </div>
          <div class="item">
              <div class="imgag"></div>
              <div class="text"></div>
              <div class="text"></div>
          </div>
          <div class="item">
              <div class="imgag"></div>
              <div class="text"></div>
              <div class="text"></div>
          </div>
      </div>
      
  </div>
</template>

<style lang="scss" scoped>
.base-swiper {
    background: linear-gradient(90deg,#d3959b 25%,#b3cadd 60%, #d3959b);
    background-size: 200% 100%;
    background-position: 0% 0%;
    animation: swiper 2s infinite;
}

.skeleton-2 {
    width: 375px;
    height: 500px;
    overflow: hidden;
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 15px;
    box-sizing: border-box;
}

.long-item {
    @extend .base-swiper;
    margin: 10px auto 25px auto;
    width: 100%;
    height: 30px;
    border-radius: 5px;
}

.circle-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
        display: flex;
        flex-direction: column;
        flex-shrink: 1;
        width: 160px;
        height: 245px;
        overflow: hidden;
        .imgag {
            @extend .base-swiper;
            width: 160px;
            height: 160px;
            border-radius: 5px;
            margin: 0 auto 10px auto;
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