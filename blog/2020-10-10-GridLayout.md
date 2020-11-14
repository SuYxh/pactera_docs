---
slug: Grid
title: 未来布局之星Grid
author: YangXinHao
author_title: 写Bug月入过万
author_url: https://ironc.gitee.io/vpreco/
author_image_url: http://qn.huat.xyz/content/20201114145106.png
tags: [Grid, Layout, css]
---

Grid-layout不是为了取代flex-layout，它是flex的补充。grid擅长二维布局，flex擅长一维布局。他们需要各司其职。grid-layout终于在2017年3月开始支持得到了部分浏览器的支持。

![](http://qn.huat.xyz/content/20200619174318.png)



## 术语简介

#### 网格容器 grid-container

网格容器为其内容建立新的网格格式化上下文，是内部网格项的边界。

#### 网格线 grid-line

水平垂直分割线，构建出网格轨道、网格单元格和网格区域。就像经纬，分割出南北半球、东西半球，热带、南北温带、南北寒带。网格线是有数字索引的，也可以自己取名字。经纬线都是有数字的，也可以命名，比如本初子午线、赤道。

#### 网格轨道 grid-track

网格内容块之间的水平或垂直的空间。滨盛、滨和、滨兴、滨安、滨康，江陵、江晖、江汉、江虹。（郊区的经典命名，摊手）

#### 网格单元格 grid-cell

网格内容的单位区块，是可以放置内容的最小区块。比如用横纵三条网格线划分了页面，那么单元格就是九宫格中的一块

#### 网格区域 grid-area

以网格线为界划定一块区域。原本网易和阿里巴巴都是占用一个单元格，现在都要扩建了，占用两个，两个加起来就是它们各自的网格区域。

## grid-container

#### 1. grid-template-columns | grid-template-rows

`grid-template-columns: `，**定义网格的行数、列数、网格大小**。

有很多中形式，常见的是这么几种：

```css
grid-template-columns: 100px 1fr;
grid-template-columns: [linename] 100px;    // 定义网格线名字
grid-template-columns: [linename1] 100px [linename2 linename3]; // 一条网格线多个名字
grid-template-columns: minmax(100px, 1fr);  // 最小100px, 最大满屏
grid-template-columns: fit-content(40%);    // 指定最大值不超过屏宽40%
grid-template-columns: repeat(3, 200px);    // 三列200px
```



```css
// 给网格线指定名字
.box {
    grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
    grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
}
```



![](https://user-gold-cdn.xitu.io/2017/9/24/c941f114fd42f8f81d3023300944d7e9?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

#### 2. grid-template-areas

定义网格区域，使用grid-area调用声明好的网格区域名称放置对应的网格项目。定义一个显式的网格区域。

#### 3. grid-row-gap、grid-column-gap

定义网格之间的间距（不包括grid-item到容器边缘的间距）

#### 4. justify-items: start | end | center | stretch(默认);

定义网格子项的内容水平方向上的对齐方式，类似于flex-container的justify-content，只不过没有space-around和space-between

![](https://user-gold-cdn.xitu.io/2017/9/24/1f8ac56fc0bcfad1377acdd1425b7932?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![](https://user-gold-cdn.xitu.io/2017/9/24/ae942fbba3691ebcbde2230e5f716976?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![](https://user-gold-cdn.xitu.io/2017/9/24/752b3f63fdd4eea77394c6ec53998e92?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![](https://user-gold-cdn.xitu.io/2017/9/24/7a28060c2092970668d4abbddc3aad91?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

#### 5. align-items: start | end | center | stretch(默认);

定义网格子项的内容垂直方向上的对齐方式，类似于flex-container的align-items

![](https://user-gold-cdn.xitu.io/2017/9/24/7a0a2e0646cf343b18f26d71ddbcddfe?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![](https://user-gold-cdn.xitu.io/2017/9/24/e59001fb6ad72184fe4486539e689dac?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![](https://user-gold-cdn.xitu.io/2017/9/24/2ead79a555ee030ae2078b3ef3b1ec40?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![](https://user-gold-cdn.xitu.io/2017/9/24/7a28060c2092970668d4abbddc3aad91?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

#### 6. justify-content: start | end | center | stretch | space-around | space-between | space-evenly;

当出现网格容器容量大于网格总大小，比如每一个网格子项都用了固定值的时候，指定网格在网格容器中和纵轴的对齐方式。后面三个属性值的区别在：

1. space-around: 始末两端的间距是网格间距的一半

2. space-between: 始末两端的间距为零

3. space-evenly: 始末两端的间距与网格间距相等

![](https://user-gold-cdn.xitu.io/2017/9/24/1f963607eeaea14939ed5e8f3f9ec8bb?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)   

![](https://user-gold-cdn.xitu.io/2017/9/24/0ba5aaca144abf644dd835d0efa11d37?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![](https://user-gold-cdn.xitu.io/2017/9/24/2cb53eaa7a91c653ddc722235dc5ade9?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![](https://user-gold-cdn.xitu.io/2017/9/24/b29f60e57d8846969038ba020cd0344b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![](https://user-gold-cdn.xitu.io/2017/9/24/536846212f244414f1a2699c00b94243?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![](https://user-gold-cdn.xitu.io/2017/9/24/9cb7f0535640e5b07d72f9870f26e7c9?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![](https://user-gold-cdn.xitu.io/2017/9/24/ce862ab4b71b94adc91ca8e8f7350d18?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



#### 7. align-content: start | end | center | stretch | space-around | space-between | space-evenly;

和justify-content对齐方向垂直，指定网格和横轴的对齐方式。

#### 8. grid-auto-columns、grid-auto-rows; grid-auto-flow

grid-auto-columns | grid-auto-rows作用是网格单元格不够的时候创建隐式的网格放置grid-item。看一个[例子](https://codepen.io/AubreyDDun/pen/RVVywG)

我们只定义了一个1×1的网格容器，box1放了进来，然后其他的三个怎么办呢？漏出来。box2接在box1后面渲染至屏幕右侧，box3和box4在底下渲染，高度仅仅为内容高度。

指定了`grid-auto-columns： 200px; grid-auto-rows: 200px;`，相当于在容器中横纵都创建了更多的隐式的200*200的网格单元来盛放可能多出来的元素。

与之相关的还有另一个属性：grid-auto-flow，在我们没有设定这个属性的时候，多余的元素也按照从左到右从上到下的顺序排列，这个属性是控制自动布局算法的。

```
grid-auto-flow: row | column | row dense | column dense;
```

1. row为默认值，代表自动布局算法在每一行中依次填充，只有必要时才会添加新行。
2. column代表自动布局算法在每一列中依次填充，只有必要时才会添加新行。
3. dense代表告诉自动布局算法如果更小的子项出现时尝试在网格中填补漏洞。（不建议使用，可能会使布局产生混乱）

## grid-item

#### 1. grid-column-start | grid-column-end | grid-row-start | grid-row-end

```css
grid-row: grid-row-start / grid-row-end
grid-column: grid-column-start / grid-column-end | grid-column-start | span <value>
```

![](https://user-gold-cdn.xitu.io/2017/9/24/f2f6efd974b1ae666f975a7cd649adb8?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

如果没有显式设置grid-column-end/grid-row-end，网格子项将默认跨越一个网格单元。此外，网格子项可以互相重叠，可以使用z-index来控制他们的层叠顺序。

有一些元素，我们想让它贯穿整个视口，比如像 header、footer，对于小屏幕，两列布局:

```css
.header, .footer {
  grid-column: 1 / 3;
}
```

不幸的是，当我们换到大屏的时候，一行12列，这些元素将仅仅占满前两列，并不会占满12列，我们需要定义新的grid-column-end，并且把他的值设为 13. 这种方式比较麻烦，还有一种简单的方式，grid-column: 1 / -1;，这样不论在什么屏幕尺寸下，它们都是占满整行的了。就像下面这样：

```css
.header, .footer {
  grid-column: 1 / -1;
}
```

#### 2. grid-area

```
grid-area:  | grid-row-start / grid-column-start / grid-row-end / grid-column-end
```

#### 3. justify-self: start | end | center | stretch 网格单元格内容水平方向上的对齐方式 。与flex中的justify-self。

![](https://user-gold-cdn.xitu.io/2017/9/24/f34e5d19c8701c6fe05a9a81743bd843?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![](https://user-gold-cdn.xitu.io/2017/9/24/f4365866683fc5f5362d14178daeebe8?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![](https://user-gold-cdn.xitu.io/2017/9/24/90e6f7bae0bd10e82769cff140ef67f0?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![](https://user-gold-cdn.xitu.io/2017/9/24/4b24462c19d6bafb35d2d01bb0255bf2?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

#### 4. align-self: start | end | center | stretch 网格单元格内容垂直方向上的对齐方式 。类似与flex中的align-self。

![](https://user-gold-cdn.xitu.io/2017/9/24/470f2052a506a3f6d4813930f00f0715?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![](https://user-gold-cdn.xitu.io/2017/9/24/3d5146f4e38d29f1f5077aa2b51a0281?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![](https://user-gold-cdn.xitu.io/2017/9/24/424847f5a1dbc1dbfd2d210dad9c75d2?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![](https://user-gold-cdn.xitu.io/2017/9/24/4b24462c19d6bafb35d2d01bb0255bf2?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## grid-layout带来的函数

#### 1. repeat()

repeat()提供了一个紧凑的声明方式。如果行列太多并且是规则的分布，我们可以用函数来做网格线的排布。

```css
grid-template-columns: repeat(3, 20px) 5%;
// 等价于
grid-template-columns: 20px 20px 20px 5%;
}
```

#### 2. minmax()

minmax()相当于为网格线间隔指定一个最小到最大的区间。如果min>max，这个区间就失效了，展示的是min。

#### 3. fit-content()

fit-content()相当于 min('max-content', max('auto', argument));

## 参考

[原生CSS网格布局学习笔记](https://segmentfault.com/a/1190000007651321)

[网格布局（CSS Grid Layout）浅谈](https://fe.ele.me/wang-ge-bu-ju-css-grid-layout-qian-tan/)

[CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

[拥抱未来的CSS布局方式：flex与grid布局](http://www.xingbofeng.com/css-grid-flex/)

[A Complete Guide to CSS Grid Layout](http://chris.house/blog/a-complete-guide-css-grid-layout/)

