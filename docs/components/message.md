---
id: message
title: vue 弹窗组件
sidebar_label: 弹窗组件
---

### 极简版弹窗

1、建立`notice`文件夹，在其下建立`index.js` 和 `Notice.vue` , 内容如下：
```js
// index.js
import Vue from 'vue'
import Notice from './Notice.vue'
const noticeConstructor  = Vue.extend(Notice)

export default function notice(options) {
    /**
     * options为一个对象
     *  title:'',
     *  content:'',
     */
    // 1、实例化
    const instance = new noticeConstructor({
        data:options
    })
    // 2、手动挂载
    instance.$mount()    // dom元素渲染完成
    // 手动挂载到body
    document.body.appendChild(instance.$el)
    return instance 
}
```



```html
//Notice.vue

<template>
    <div v-if="xianshi" class="notice">
        标题：{{ title }} <br>
        内容：{{ content }}
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {
            xianshi:true,
            title:'',
            content:'',
        };
    },
    created() {
        setTimeout(() => {
            this.xianshi = false
        },2000)
    },
    }
</script>
<style scoped>
.notice{
    background-color: greenyellow;
    width: 150px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: (-50%,-50%);
    border-radius: 10px;
    padding: 5px 10px;
}
</style>
```

2、使用方式
```js
this.$notice({
    title:'传入的标题',
    content:'传入的内容',
})
```





export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);




:::note
<Highlight color="#25c2a0">author:</Highlight> <Highlight color="#1877F2">YangXinHao</Highlight>

Write **Markdown** alongside  _JSX_!
:::




