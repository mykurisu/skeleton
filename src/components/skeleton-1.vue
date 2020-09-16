<template>
  <div class="skeleton-1">
      <div class="circle-list">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
      </div>
      <div class="long-item"></div>
  </div>
</template>

<style lang="scss" scoped>
.skeleton-1 {
    width: 375px;
    min-height: 500px;
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 15px;
    box-sizing: border-box;
}

.long-item {
    width: 300px;
    height: 20px;
    border-radius: 5px;
    background: linear-gradient(90deg,#d3959b 25%,#b3cadd 60%, #d3959b);
    background-size: 200% 100%;
    background-position: 0% 0%;
    animation: swiper 2s infinite;
}

@keyframes swiper {
    0% {
        background-position-x: 0%;
    }
    100% {
        background-position-x: 200%;
    }
}

.circle-list {
    display: flex;
    justify-content: center;
    align-items: center;
    .item {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #eee;
    }
}
</style>