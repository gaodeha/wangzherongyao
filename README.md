# 王者荣耀闯关

#### 项目介绍
通过答题闯关的形式，帮助用户熟悉王者荣耀英雄、物品、皮肤、召唤师技能等细节，闯关成功能得到一个红包奖励。

目前已经发布，可扫描小程序二维码
<img src="https://wwwwzry.oss-cn-shenzhen.aliyuncs.com/wzrycg.jpg"/>

#### 项目截图
<img src="https://wwwwzry.oss-cn-shenzhen.aliyuncs.com/wzrycg1.jpg">
<img src="https://wwwwzry.oss-cn-shenzhen.aliyuncs.com/wzrycg2.jpg">
<img src="https://wwwwzry.oss-cn-shenzhen.aliyuncs.com/wzrycg3.jpg">
<img src="https://wwwwzry.oss-cn-shenzhen.aliyuncs.com/wzrycg4.jpg">

#### 软件架构
1. 程序基于 小程序wepy框架 
2. 里面使用了es6的语法，包括 Promise aync wait 

#### 安装教程
1\.  安装wepy软件, 参考wepy官网文档 https://tencent.github.io/wepy/document.html

2\.  下载代码 [github](https://github.com/gaodeha/wangzherongyao.git) 
```
git clone https://github.com/gaodeha/wangzherongyao.git
```

3\.  安装打包 
```
cd wangzherongyao 
npm install 
wepy build --watch
```

4\.  用微信开发工具打开dist目录


#### 注意事项

在wepy官方文档里有提交，这里也备注一下。

在微信开发工具里打开wepy生成的dist目录，运行可能会有报错，需要手动点击 设置 -》 项目设置

关闭：
- ES6转ES5选项
- 关闭上传代码时样式自动补全
- 关闭代码压缩上传


开发测试阶段，建议开启
- 不检查安全域名选项
