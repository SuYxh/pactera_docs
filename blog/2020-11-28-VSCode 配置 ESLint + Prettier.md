---
slug: ESLint + Prettier
title: VSCode 配置 ESLint + Prettier
author: YangXinHao
author_title: 写Bug月入过万
author_url: https://ironc.gitee.io/vpreco/
author_image_url: http://qn.huat.xyz/content/20201114145106.png
tags: [VSCode, ESLint, Prettier]
---

> 本文就跟大家分享下如何在vscode上配置Eslint+Prettier，欢迎各位感兴趣的开发者阅读本文。

### 插件安装

我们先需要为vscode安装相关插件。

安装eslint、prettier插件

![](http://qn.huat.xyz/content/20201128101126.png)

![](http://qn.huat.xyz/content/20201128101146.png)

![](http://qn.huat.xyz/content/20201128101201.png)


### 插件使用

这里你可以选择直接修改vscode的setting.json文件，这样的修改是本地的，无法做到同步，如果有其他人也是用的vscode，那么你要告诉他改什么改什么，他在去改，甚是麻烦。

我这里选择在项目的根目录创建.vscode文件夹， 然后再在其下面创建setting.json文件，将这个文件夹同步到git，这样做vscode就会优先读取项目根目录下的配置文件了，完美的解决了刚才那个痛点。

创建好文件后，添加下述配置：

```json
{
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "eslint.alwaysShowStatus": true,
  "eslint.format.enable": true,
  "eslint.packageManager": "yarn",
  "eslint.run": "onSave",
  "prettier.packageManager": "yarn",
  "eslint.validate": [
    "vue",
    "javascript",
    "javascriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "vetur.validation.template": false,
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,
  "editor.formatOnSave": true,
  "files.eol": "\n"
}
```

> 注意：如果你启用了prettier，但是没有相关配置文件，editor.formatOnSave选项就要设置为false。不然会与vscode自身的保存起冲突


接下来，我们来配置`prettier`，同样的在项目根目录创建.prettierrc.json文件，添加下述配置：

```json
{
  "tabWidth": 2,
  "useTabs": false,
  "endOfLine": "auto",
  "singleQuote": false,
  "semi": true,
  "trailingComma": "none",
  "bracketSpacing": true
}
```

做完上述配置后，vscode就已经可以按照我们的规范来进行相应的提示了，按ctrl+s保存代码时其也会按照我们自定义的的规范进行格式化。