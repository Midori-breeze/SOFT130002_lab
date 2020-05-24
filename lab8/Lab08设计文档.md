# Lab8设计文档

一开始不太理解把几张图连在一起的操作，故修改了html和css文档，在container里仅留下一张图片。在js中建立了一串图片src的数组，通过修改图片的src以达到切换的目的。

设置全局变量index，控制图片的序号及图片的src。

任务四中给每个td添加鼠标事件，新建一个input元素并将td里本身的值赋给它，同时清除td原本的数据；通过focus和setSelectionRange来使光标自动定位，失去焦点后将input里的值赋给target。