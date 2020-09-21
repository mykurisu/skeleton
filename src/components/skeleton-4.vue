<template>
    <div class="skeleton-4">

        <div class="banner"></div>

        <div class="article">
        
            <div class="title"></div>
            <div class="title" style="width: 80%"></div>
            <div class="title" style="width: 30%;margin-bottom: 20px;"></div>

            <div class="gap"></div>

            <div class="content">
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item" style="opacity: 0"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item" style="opacity: 0"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.skeleton-4 {
    width: 375px;
    height: 667px;
    overflow: hidden;
    border: 1px solid #eee;
    padding: 15px;
    box-sizing: border-box;
    margin-top: 30px;
}

.banner {
    width: 100%;
    height: 300px;
    background-color: #eee;
}

.article {
    width: 100%;
    box-sizing: border-box;
    .title {
        background-color: #eee;
        margin-top: 10px;
        width: 100%;
        height: 18px;
        border-radius: 5px;
        position: relative;
    }
    .content {
        padding-top: 10px;
        .item {
            background-color: #eee;
            margin-top: 10px;
            width: 100%;
            height: 14px;
            border-radius: 5px;
            position: relative;
        }
    }
}

.gap {
  width: 100%;
  height: 1px;
  background-color: #eee;
  position: relative;
}
</style>