<template>
    <div>
        <div class="entry">
            <p>X</p>
            <div class="cline">
                <span class="bgColorMud"></span>
                <span class="bgColorGray"></span>
                <span class="bgColorGreen"></span>
                <span class="bgColorBlack"></span>
            </div>
            <div class="title testCenter">
                <div>
                    <p>翡翠联盟 . 入会资格</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.entry{
    .cline{
        display: flex;
        span{
            flex: 1;
            margin: 0 10px;
            height: 20px;
        }
    }
    .title{
        width: 400px;
        border-radius: 50%;
        overflow: hidden;
        background-color: #2d8f53;
        div{
            border-radius: 50%;
            background-color: #fff;
            padding: 10px;
        }
        p{
            border-radius: 50%;
            font-size: .24rem;
            background-color: #2d8f53;
            padding: 20px;
            color: #fff;
            font-weight: bolder;
        }
    }
}
</style>

