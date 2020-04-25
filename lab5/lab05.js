//1. 获取url中名为name的参数。在URL输入框输入url，点击同行submit按钮后，其中的参数名为name的参数值需要出现在Argument value输入框内。
//如果没有名为name的参数，那么可以在Argument value输入框出现任何值。
//请仅在showWindowHref函数内写代码。

//提示：url指代 （若干字符串）?（参数名1）=（参数1值）&（参数2）=（参数2值）...  这样的字符串。具体可以上网查找。例如：hjsdghgbj?name=666666&group=876。
//url、url_submit、url_result指代对应id的三个对象，其中url和url_result可以通过url.value或者url_result.value获得值。
//字符数组处理可以使用相关函数
let url = document.getElementById("url");
let url_submit = document.getElementById("url_submit");
let url_result = document.getElementById("url-result");
url_submit.addEventListener('click', showWindowHref);

function showWindowHref() {
    let queryString = url.value.split("?")[1];//获取url中"?"后的字符串
    if (queryString.indexOf("=") !== -1) {//判断是否有参数
        let query = queryString.split("&");//创建参数的字符串数组
        for (let i = 0; i < query.length; i++) {
            let parameter = query[i].split("=");//将参数名和参数值分割
            if (parameter[0] === "name") {
                url_result.value = parameter[1];
                return;
            }
        }
    }
    url_result.value = "请输入正确的url";
}

//2. 每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
//注意：你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
//与设置时间相关的函数可以上网查找。

//提示：mul为html中id为"mul"的元素对象，可直接通过mul.value获得其内的输入值。
let mul = document.getElementById("mul");
mul.value = 1;
setInterval(stop, 1000);//实时刷新时间，控制函数执行
let action = setInterval(timeTest, 5000);
let count = 0;//计算函数执行次数

function timeTest() {
    mul.value = mul.value * 2;
    count++;
}

function stop() {
    if (count === 10) {
        clearInterval(action);
        action = null;
    } else if (new Date().getSeconds() === 0) {
        clearInterval(action);
        action = null;
    }
}

//3. 判断输入框most里出现最多的字符，并统计出来。统计出是信息在most_result输入框内以"The most character is:" + index + " times:" + max的形式显示。
//如果多个出现数量一样则选择一个即可。
//请仅在arrSameStr函数内写代码。

//提示：most、result、most_submit的解释及其.value与上面类似。
let most = document.getElementById("most");
let result = document.getElementById("most-result");
let most_submit = document.getElementById("most_submit");
most_submit.addEventListener('click', arrSameStr);

function arrSameStr() {
    let obj = {};//建立一个新的数组，放置出现的字符数目
    for (let i = 0; i < most.value.length; i++) {
        let key = most.value[i];//遍历字符串
        if (obj[key]) {
            obj[key]++;//如果数组中有这个字符，则次数加1
        } else {
            obj[key] = 1;//如果数组中没有这个字符，就取默认值1
        }
    }
    let max = 0, index;
    for (let i in obj) {//遍历数组
        if (max < obj[i]) {
            max = obj[i];
            index = i;
        }
    }
    result.value = "The most character is:" + index + " times:" + max;
}
