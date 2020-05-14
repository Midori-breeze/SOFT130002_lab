## 困难与解决方案

1、一开始不知道很疑惑为何报错说div.append不是一个function，后来上网查询后发现document.getElementsByClassName()方法返回的是一个数组，应该改为div[0].append；

2、一开始将类名写在了document.createElement的tagName中，发现格式不对，然后又看了一遍视频发现了classList属性可以在元素中添加css类，用.classList.add（“类名”）方法后发现可行；

3、写第二个innerbox时一开始很疑惑为什么只出现了一张图片，后来发现自己把创建出的img元素写在了循环外，拖到循环里就行了。

