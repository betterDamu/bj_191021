### 实现左右列表的联动
    1. 获取到右侧列表 滑到每一项时的位置 记录成一个数组
    2. 获取右侧列表实时位置
        var test = new BScroll(dom,{probeType:3});
        test.on("事件名",()=>{})
            scroll
                参数：{Object} {x, y} 滚动的实时坐标
                触发时机：滚动过程中，具体时机取决于选项中的 probeType。