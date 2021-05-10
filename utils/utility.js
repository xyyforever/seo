/**
 *
 * @param str
 * @return {boolean}
 */
 const isJSONString = str => {
    if (typeof str == "string") {
      try {
        const obj = JSON.parse(str);
        if (str.indexOf("{") > -1) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
    return false;
  };
  
  /**
   * 根据key获取对象
   * @param {string}key
   * @return {any}
   */
  const getLocalStorage = key => {
    let localStorage = window.localStorage;
    let valueObject = localStorage.getItem(key);
    if (typeof valueObject === "string") {
      //尝试能否转成对象
      if (utility.isJSONString(valueObject)) {
        let parseObject = JSON.parse(valueObject);
        if (typeof parseObject === "object") {
          return parseObject;
        }
      }
      return valueObject;
    } else {
      // window.console.log('localStorage:无key=' + key + '值可取');
      return null;
    }
  };
  
  /**
   * localStorage保存本地
   * @param {string}key
   * @param {string | number | object}valueObject
   */
  const setLocalStorage = (key, valueObject) => {
    let localStorage = window.localStorage;
    if (typeof valueObject === "string" || typeof valueObject === "number") {
      localStorage.setItem(key, String(valueObject));
    } else if (typeof valueObject === "boolean") {
      if (valueObject === true) {
        localStorage.setItem(key, "true");
      } else {
        localStorage.setItem(key, "false");
      }
    } else if (valueObject === null || typeof valueObject === "undefined") {
      localStorage.removeItem(key);
      // window.console.log('LocalStorage:暂不支持存储:key=' + key + '\nvalueObject=' + JSON.stringify(valueObject));
    } else if (typeof valueObject === "object") {
      localStorage.setItem(key, JSON.stringify(valueObject));
    } else {
      localStorage.removeItem(key);
      // window.console.log('LocalStorage:暂不支持存储:key=' + key + '\nvalueObject=' + JSON.stringify(valueObject));
    }
  };
  
  //复制文本
  const copyText = value => {
    let oInput = document.createElement('input')
    oInput.value = value
    document.body.appendChild(oInput)
    oInput.select()
    document.execCommand("Copy")
    oInput.style.display = 'none'
    document.body.removeChild(oInput)
  }
  /**
   * 根据key获取对象
   * @param {string}key
   */
  const getSessionStorage = key => {
    let sessionStorage = window.sessionStorage;
    let valueObject = sessionStorage.getItem(key);
    if (typeof valueObject === "string") {
      //尝试能否转成对象
      if (utility.isJSONString(valueObject)) {
        let parseObject = JSON.parse(valueObject);
        if (typeof parseObject === "object") {
          return parseObject;
        }
      }
      return valueObject;
    } else {
      // window.console.log('sessionStorage:无key=' + key + '值可取');
      return null;
    }
  };
  
  /**
   * sessionStorage保存本地
   * @param {string}key
   * @param {string | number | object}valueObject
   */
  const setSessionStorage = (key, valueObject) => {
    let sessionStorage = window.sessionStorage;
    if (typeof valueObject === "string" || typeof valueObject === "number") {
      sessionStorage.setItem(key, String(valueObject));
    } else if (typeof valueObject === "boolean") {
      if (valueObject === true) {
        sessionStorage.setItem(key, "true");
      } else {
        sessionStorage.setItem(key, "false");
      }
    } else if (valueObject === null || typeof valueObject === "undefined") {
      sessionStorage.removeItem(key);
      // window.console.log('sessionStorage:暂不支持存储:key=' + key + '\nvalueObject=' + JSON.stringify(valueObject));
    } else if (typeof valueObject === "object") {
      sessionStorage.setItem(key, JSON.stringify(valueObject));
    } else {
      sessionStorage.removeItem(key);
      // window.console.log('sessionStorage:暂不支持存储:key=' + key + '\nvalueObject=' + JSON.stringify(valueObject));
    }
  };
  
  /**
   * 是否是中文
   * @param {string} str
   * @return {boolean}
   */
  const isChineseCode = str => {
    if (str.length !== 0) {
      const reg = /^[\u0391-\uFFE5]+$/;
      if (!reg.test(str)) {
        return false;
      }
    }
    return true;
  };
  
  /**
   * 是否是数组
   */
  const isArray = array => {
    return Object.prototype.toString.call(array) == "[object Array]";
  };
  
  /**
   * 去除字符串首尾空格
   * @param {string|number} str
   * @return {string}
   */
  const trimString = str => {
    if (typeof str === "string") {
      return str.replace(/(^\s*)|(\s*$)/g, "");
    }
    return String(str);
  };
  
  /**
   * 检测字符串是否为空,也不是undefined
   * @param {string} str
   * @return {boolean}
   */
  const isEmptyString = str => {
    if (typeof str == "number") {
      str = String(str);
    }
    if (typeof str == "boolean") {
      str = String(str);
    }
    return (
      str === null ||
      typeof str === "undefined" ||
      str == "undefined" ||
      str === "" ||
      utility.trimString(str) === ""
    );
  };
  
  /**
   * 检测一组字符串是否为空
   * @param {string[]} strs
   * @return {boolean}
   */
  const isEmptyStrings = (...strs) => {
    let isEmpty = false;
    for (const str of strs) {
      if (utility.isEmptyString(str)) {
        isEmpty = true;
        break;
      }
    }
    return isEmpty;
  };
  
  /**
   * 检测一组字符串是否全部不为空
   * @param {string} strs
   * @return {boolean}
   */
  const isNotEmptyStrings = (...strs) => {
    let isNotEmpty = true;
    for (const str of strs) {
      if (utility.isEmptyString(str)) {
        isNotEmpty = false;
        break;
      }
    }
    return isNotEmpty;
  };
  
  /**
   * 清楚null字符串
   * @param {string} str
   * @return {string}
   */
  const clearNullString = str => {
    if (utility.isEmptyString(str)) {
      return "";
    }
    return utility.trimString(String(str));
  };
  
  /**
   * 清除对象中的空值属性
   * @param {Object} obj
   * @return {Object}
   */
  const clearNullObject = obj => {
    let newObj = {};
    for (let p in obj) {
      let value = obj[p];
      if (!utility.isEmptyString(value)) {
        newObj[p] = value;
      }
    }
    return newObj;
  };
  
  /**
   /**
   * 对象是否为空
   * @param {Object} object
   * @return {boolean}
   */
  const objectIsNull = object => {
    if (object == null || typeof object == "unhasOwnPropertydefined") {
      return true;
    }
    return false;
  };
  
  /**
   * 根据object对象拼接成&链接起来的参数，形式：a=1&b=2
   * @param {Object | string} param
   * @param { Boolean } encodeUrl
   * @return {string}
   */
  const addQueryParamByObj = (param, encodeUrl) => {
    let paramStr = "";
    if (typeof param === "object") {
      let firstIndex = true;
      for (const p in param) {
        if (param.hasOwnProperty(p) && p != "stringArrayKeys") {
          if (utility.isArray(param[p])) {
            if (
              param["stringArrayKeys"] &&
              param["stringArrayKeys"].indexOf(p) != -1
            ) {
              paramStr +=
                (firstIndex ? "" : "&") + String(p) + "=" + param[p].toString();
            } else {
              paramStr +=
                (firstIndex ? "" : "&") +
                String(p) +
                "=" +
                JSON.stringify(param[p]);
            }
            firstIndex = false;
          } else {
            let pValue = typeof param[p] == "undefined" ? "" : param[p];
            paramStr +=
              (firstIndex ? "" : "&") + String(p) + "=" + String(pValue);
            firstIndex = false;
          }
        }
      }
    }
    if (encodeUrl == false) {
      return paramStr;
    } else {
      return encodeURI(paramStr);
    }
  };
  
  /**
   * 是否是固定电话
   * @param phone
   * @return {boolean}
   */
  const isTelephone = phone => {
    const phone_reg = new RegExp(/^([+]{0,1}\d{3,4}|\d{3,4}-)?\d{7,8}$/);
    return phone_reg.test(phone);
  };
  
  /**
   * 是否是手机号码
   * @param mobile
   * @return {boolean}
   */
  const isMobile = mobile => {
    const mobile_reg = new RegExp(/^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/);
    return mobile_reg.test(mobile);
  };
  
  /**
   * 是否是税号
   * @param  duty
   * @return {boolean}
   */
  const isDuty  = duty => {
    const duty_reg = new RegExp(/^[A-Z0-9]{15}$|^[A-Z0-9]{18}$|^[A-Z0-9]{20}$/);
    return duty_reg.test(duty);
  };
  
  /**
   * 是否是邮箱
   * @param email
   * @return {boolean}
   */
  const isEmail = email => {
    const email_reg = new RegExp(
      /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
    );
    return email_reg.test(email);
  };
  /**
   * 根据每条数据主键primaryKey，合并两组数据，并过滤掉重复数据
   * @param {any[]} value 当前值
   * @param {any[]} comparedValue 原先值
   * @param {string} primaryKey 每条数据的唯一标识，如id(可以取这条数据的id)
   * @return {any[]}
   */
  const filterSame = (value, comparedValue, primaryKey) => {
    if (!utility.isArray(value) || !utility.isArray(comparedValue)) {
      return value;
    }
    if (value.length == 0) {
      return comparedValue;
    }
    let newValue = value.filter(item => {
      let newComItem = comparedValue.filter(comItem => {
        return comItem[primaryKey] == item[primaryKey];
      })[0];
      return !newComItem || item[primaryKey] != newComItem[primaryKey];
    });
    const combineValue = [...newValue, ...comparedValue];
    console.log(combineValue);
    return combineValue;
  };
  
  /**
   * 小数点转百分数
   * @param point
   * @return {string}
   */
  const toPercent = point => {
    if (Number(point) == 0 || Number(point) == 1) {
      return Number(point) * 100 + "%";
    }
    let str = (Number(point) * 100).toFixed(1);
    str += "%";
    if (Number(point)) {
      console.log(str);
    }
    return str;
  };
  
  /**
   * 处理数据
   * @param {Object | any[]} data
   * @param {Function} callback
   */
  const handleDataBeforeRender = (data, callback) => {
    if (callback) {
      if (utility.isArray(data)) {
        data.forEach(item => {
          callback(item);
        });
      }
    }
    return data;
  };
  
  /**
   *
   * @param {any[]}data
   * @param {{ labelKey: string }}prop
   * @returns {string}
   */
  const dicArrayToStrArray = (data, prop) => {
    if (!isArray(data)) {
      return "";
    }
    let array = [];
    data.forEach(item => {
      array.push(item[prop.labelKey]);
    });
    return array.toString();
  };
  
  /**
   * 格式化金额 例如10:00、12.25
   * @param {string|number} val 需要格式化的参数
   * @return {string|number}
   * */
  const moneyAbs = val => {
    //金额转换 分->元 保留2位小数 并每隔3位用逗号分开 1,234.56
    let str = (Number(val) / 100).toFixed(2) + "";
    //取到整数部分
    let intSum = str
      .substring(0, str.indexOf("."))
      .replace(/\B(?=(?:\d{3})+$)/g, ",");
    //取到小数部分搜索
    let dot = str.substring(str.length, str.indexOf("."));
    return intSum + dot;
  };
  
  //拼接数组对象转为字符串
  /**
   *
   * @param {object}formValue
   * @param {string[]}listKeys
   * @returns {object}
   */
  const setObjectArrayToStr = (formValue, ...listKeys) => {
    if (objectIsNull(formValue) || !listKeys || listKeys.length == 0) {
      return {};
    }
    const param = { ...formValue };
    for (let key of listKeys) {
      const list = param[key];
      if (isArray(list) && list.length > 0) {
        for (let listItem of list) {
          const index = list.indexOf(listItem);
          if (typeof listItem == "object") {
            for (let listKey in listItem) {
              const listKeyValue = listItem[listKey];
              const targetKey = key + "[" + index + "]." + listKey;
              param[targetKey] = listKeyValue;
            }
          } else {
            const targetKey = key + "[" + index + "]";
            param[targetKey] = listItem;
          }
        }
      }
      delete param[key];
    }
    console.log(param);
    return param;
  };
  
  /**
   * 格式化秒杀的倒计时
   * @param time 倒计时秒数
   * @param fullTime 是否返回完整时间
   * @param {Function}callback
   * @return {{type:string,noDayHour:number,day:number,hour:number,min:number,sec:number,countDownText:string}}
   */
  var formatMSCountTimes = function(time, fullTime, callback) {
    var countDown = Number(time) || 0;
    if (countDown === 0) {
      callback();
      return "0";
    }
    var day = parseInt(countDown / 3600 / 24);
    var hour = parseInt((countDown / 3600) % 24);
    var min = parseInt((countDown % 3600) / 60);
    var sec = parseInt((countDown % 3600) % 60);
    var noDayHour = day * 24 + hour;
    function formatT(t) {
      return Number(t) < 10 ? "0" + String(t) : t;
    }
  
    function formatFullTimeStr(times) {
      var day = times.day;
      var hour = times.hour;
      var min = times.min;
      var sec = times.sec;
      var countDownText = "";
      if (day > 0) {
        countDownText += day + "天";
      }
      var hourMinSec = [];
      if (hour >= 0) {
        hourMinSec.push(`${hour}时`);
      }
      if (min >= 0) {
        hourMinSec.push(`${min}分钟`);
      }
      if (sec > 0) {
        hourMinSec.push(`${sec}秒`);
      }
      countDownText += hourMinSec.join("");
      return countDownText;
    }
  
    var times = {
      type: "",
      noDayHour: 0,
      day: 0,
      hour: 0,
      min: 0,
      sec: 0,
      countDownText: ""
    };
    if (fullTime) {
      times = {
        type: "full",
        noDayHour: noDayHour,
        day: formatT(day),
        hour: formatT(hour),
        min: formatT(min),
        sec: formatT(sec)
      };
    } else {
      if (day > 0) {
        times = {
          type: "day",
          day: formatT(day),
          noDayHour: noDayHour,
          hour: formatT(hour),
          min: 0,
          sec: 0
        };
      } else {
        times = {
          type: "hour",
          day: 0,
          noDayHour: noDayHour,
          hour: formatT(hour),
          min: formatT(min),
          sec: formatT(sec)
        };
      }
    }
    times.countDownText = formatFullTimeStr(times);
    return times;
  };
  
  /**
   * 更新我的文件list
   * @param {string}previews
   * @returns {Array}
   */
  const updatePreviewFileList = previews => {
    if (!previews) {
      return [];
    }
    // const urls = decodeURIComponent(previews).split(',');
    const urls = previews.split(",");
    let imgArr = [];
    urls.forEach(url => {
      const hasFixedPar = url.indexOf("_o") > -1;
      imgArr.push({
        url: hasFixedPar ? url : `${url}_o`,
        // url: url,
        isImage: true
      });
    });
    console.log(imgArr);
    return imgArr;
  };
  
  //隐藏手机号码中间的4位
  const hiddenTel = tel => {
    if (!tel || tel.length < 7) {
      return tel;
    }
    return (
      tel.substring(0, 3) + "****" + tel.substring(tel.length - 4, tel.length)
    );
  };
  
  //像数组中注入固定值
  const injectObjectInArray = (array, constObject) => {
    if (!constObject) {
      return array;
    }
    let arr = [];
    array.forEach(item => {
      arr.push({
        ...item,
        ...constObject
      });
    });
    return arr;
  };
  
  //格式化商品规格
  const formatGoodsSpecAttr = str => {
    return str
      .replace(/{/g, "")
      .replace(/}/g, "")
      .replace(/\[/g, "")
      .replace(/]/g, "")
      .replace(/"/g, "");
  };
  
  //map值转到array
  const mapKeyValueList = map => {
    if (typeof map != "object") {
      console.error("map is not object=>", map);
      return [];
    }
    let keyArray = [];
    let valueArray = [];
    for (let key in map) {
      var value = map[key];
      keyArray.push(key);
      valueArray.push(value);
    }
    return {
      keys: keyArray,
      values: valueArray
    };
  };
  
  /**
   * 获取固定长度的随机字母
   * @param length
   * @returns {string}
   */
  const getRandomWord = function(length) {
    var chars = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];
    var nums = "";
    for (var i = 0; i < length; i++) {
      var id = Math.abs(parseInt(Math.random()) % 26);
      nums += chars[id];
    }
    return nums;
  };
  
  /**
   * 获取固定长度的随机数字
   * @param length
   * @returns {string}
   */
  const getRandomNumber = function(length) {
    var chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var nums = "";
    for (var i = 0; i < length; i++) {
      var id = Math.abs(parseInt(Math.random()) % 10);
      nums += chars[id];
    }
    return nums;
  };
  
  /**
   * 获取固定长度的随机字符串
   * @param length
   * @returns {string}
   */
  const getRandomString = function(length) {
    var chars = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];
    var nums = "";
    for (var i = 0; i < length; i++) {
      var random = utility.getRandomWithRange(0, 61);
      var id = Math.abs(parseInt(random) % 62);
      nums += chars[id];
    }
    return nums;
  };
  
  /**
   * 获取范围内的随机数
   * @param min
   * @param max
   */
  const getRandomWithRange = function(min, max) {
    var num = parseInt(Math.random() * (max - min + 1) + min, 10);
    // var var2 = Math.floor(Math.random()*(max-min+1)+min);
    // console.log(val1,var2);
    return num;
  };
  
  // const browser = {
  //   versions: function () {
  //     var u = navigator.userAgent, app = navigator.appVersion;
  //     return {         //移动终端浏览器版本信息
  //       trident: u.indexOf('Trident') > -1, //IE内核
  //       presto: u.indexOf('Presto') > -1, //opera内核
  //       webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
  //       gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
  //       mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
  //       ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
  //       android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
  //       iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
  //       iPad: u.indexOf('iPad') > -1, //是否iPad
  //       webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
  //     };
  //   }(),
  //   language: (navigator.browserLanguage || navigator.language).toLowerCase()
  // };
  
  // const browserMobile =  ()=>{
  //   if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
  //     var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
  //     return {
  //       wechat:ua.match(/MicroMessenger/i) == "micromessenger",//在微信中打开
  //       weibo:ua.match(/WeiBo/i) == "weibo",//在新浪微博客户端打开
  //       qq:ua.match(/QQ/i) == "qq",//在QQ空间打开
  //       ios:browser.versions.ios,//是否在IOS浏览器打开
  //       android:browser.versions.android,//是否在安卓浏览器打开,
  //       wechatDevelopTool:ua.match(/wechatdevtools/) == "wechatdevtools",//微信开发者工具
  //     };
  //   }
  //   return  {
  //
  //   }
  // };
  
  //格式化 数字 10000-》1万
  const formatMoneyLength = function(value) {
    if (!value || value < 10000) {
      return value;
    } else {
      const intVal = parseInt(String(value / 10000));
      const decimalVal = parseFloat(String(value % 10000), 4);
      return `${intVal}${decimalVal > 0 ? "." + decimalVal : ""}`;
    }
  };
  
  //过滤特殊字符
  const regexSpecChars = function(s) {
    // var regex = /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|["',，.。/、\]【】\\n\s！!?？——_<>%;‘’；)《（）》(&+=`“”·*#@]){0,}$/g;
    // // var regex = /^([\p{Han}\p{P}A-Za-z0-9])*$/u;
    // return  value.replace(regex,'');
    var rs = "";
    var startIndex = 0;
    var maxIndex = s.length;
    while (startIndex < maxIndex) {
      var str = s.substr(startIndex, 1).replace(/－/, "-"); // 特殊字符的替换
      var charCode = str.charCodeAt(0);
      if (
        /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|["',，.。/、\]\[【】\\n\s！!?？——_<>%;‘’；)《（）》(&+=`“”·*#@@$￥：:~]){0,}$/.test(
          str
        )
      ) {
        if (charCode >= 55296 && charCode <= 56319) {
          startIndex = startIndex + 2;
        } else {
          rs += str;
          startIndex++;
        }
      } else {
        startIndex++;
      }
    }
    console.log(rs);
    return rs;
    // for (var i = 0; i < s.length; i++) {
    //   var str  = s.substr(i, 1);
    //
    //   if (/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|["',，.。/、\]\[【】\\n\s！!?？——_<>%;‘’；)《（）》(&+=`“”·*#@@$￥：:~]){0,}$/.test(str)) {
    //     rs = rs + str
    //   }
    // }
    // //在过滤表情
    // return rs.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "")
    //   .replace(/\s+/g, "");
  };
  
  /**
   *  fullDict包含targetDict 根据key更新targetDict的值
   * @param {object} targetDict
   * @param {object} fullDict
   */
  const updateDictFromDict = (targetDict, fullDict) => {
    Object.keys(targetDict).forEach(key => {
      targetDict[key] = fullDict[key];
    });
    return targetDict;
  };
  
  /**
   * 根据一个key获取数组从数组Object组成的数组
   * 如 arr = [{id:1,name:'magelineA'},{id:2,name:'magelineB'}],key=id
   * 则 result = [1,2];
   * @param {object[]}array
   * @param {string}key
   * @param {string[]}ignoreKeys
   * @returns {any[]}
   */
  const getArrayFromArrayDictByKey = (array, key, ...ignoreKeys) => {
    if (!isArray(array)) {
      console.error("array不是数组！");
      array = [];
    }
    let arr = [];
    ignoreKeys = ignoreKeys || [];
    array.forEach(item => {
      let val = item[key];
      if (val) {
        if (typeof val == "object" && ignoreKeys.length > 0) {
          var newVal = {};
          for (let key in val) {
            if (ignoreKeys.indexOf(key) == -1) {
              newVal[key] = val[key];
            }
          }
          arr.push(newVal);
        } else {
          arr.push(val);
        }
      }
    });
    return arr;
  };
  
  /**
   * 对象数组根据key的值为主键转为字典
   * 如 arr = [{id:1,name:'magelineA'},{id:2,name:'magelineB'}],key=id
   * 则 result = {1:{id:1,name:'magelineA'},2:{id:2,name:'magelineB'}};
   * @param array
   * @param key
   * @returns {object}
   */
  const dictArrayToDictByKey = (array, key) => {
    if (!isArray(array)) {
      console.error("array不是数组！");
      array = [];
    }
    let dict = {};
    array.forEach(item => {
      dict[item[key]] = item;
    });
    return dict;
  };
  
  /**
   * 合并上面俩方法的
   * @param array
   * @param key1 外层key
   * @param key2 内层key
   * @returns {{}}
   */
  const combineDictArrayToDictByKey = (array, key1, key2) => {
    if (!isArray(array)) {
      console.error("array不是数组！");
      array = [];
    }
    let dict = {};
    array.forEach(item => {
      let val = item[key1];
      if (typeof val == "object" && val) {
        let key2Value = val[key2];
        dict[key2Value] = val;
      }
    });
    return dict;
  };
  
  /**
   * 根据字段过滤字典数组里面
   * @param array
   * @param ignoreKeys
   */
  const filterDictArrayByIgnoreKey = (array, ...ignoreKeys) => {
    if (!ignoreKeys || ignoreKeys.length == 0) return array;
    if (!isArray(array)) {
      console.error("array不是数组！");
      array = [];
    }
    let arr = [];
    array.forEach(item => {
      if (typeof item == "object") {
        let newVal = {};
        for (let key in item) {
          if (ignoreKeys.indexOf(key) == -1) {
            newVal[key] = item[key];
          }
        }
        arr.push(newVal);
      } else {
        arr.push(item);
      }
    });
    return arr;
  };
  
  /**
   * 根据字段过滤字典数组里面
   * @param array
   * @param keys
   */
  const filterDictArrayByKey = (array, ...keys) => {
    if (!keys || keys.length == 0) return array;
    if (!isArray(array)) {
      console.error("array不是数组！");
      array = [];
    }
    let arr = [];
    array.forEach(item => {
      if (typeof item == "object") {
        let newVal = {};
        for (let key in item) {
          if (keys.indexOf(key) != -1) {
            newVal[key] = item[key];
          }
        }
        arr.push(newVal);
      } else {
        arr.push(item);
      }
    });
    return arr;
  };
  
  /**
   * 比较两个对象是否相同
   * @param obj1
   * @param obj2
   */
  const isSameObject = (obj1, obj2) => {
    if (typeof obj1 != typeof obj2) {
      return false;
    }
    if (typeof obj1 == "object") {
      if (Object.keys(obj1).length != Object.keys(obj2).length) {
        return false;
      } else {
        for (var key in obj1) {
          var val1 = obj1[key];
          var val2 = obj2[key];
          if (val1 != val2) {
            return false;
          }
        }
        return true;
      }
    }
    return obj1 == obj2;
  };
  
  //获取Vue级联选择器多选的值
  const getVueCascaderMultipleValue = list => {
    if (isArray(list)) {
      let values = [];
      const eachItems = value => {
        if (isArray(value)) {
          value.forEach(item => {
            eachItems(item);
          });
        } else {
          values.push(value);
        }
      };
      eachItems(list);
      console.log("getVueCascaderMultipleValue:", values);
      return values;
    } else {
      return [];
    }
  };
  // 递归深拷贝
  const deepClone = obj => {
    let objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === "object") {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] && typeof obj[key] === "object") {
            objClone[key] = deepClone(obj[key]);
          } else {
            objClone[key] = obj[key];
          }
        }
      }
    }
    return objClone
  }
  //设置值
  const setVueCascaderSingleVue = list => {
    if (isArray(list)) {
      let values = [];
      list.forEach(id => {
        values.push(id);
      });
      return values;
    } else {
      return [];
    }
  };
  
  /**
   *  isNullOrUndefined
   * @param value
   * @returns {boolean}
   */
  const isNullOrUndefined = value => {
    return typeof value == "undefined" || value == null;
  };
  
  /**
   * 排序纯数组或者数字数组
   * @param {string} attr 根据属性排序（数字数组不需要传递）
   * @param {boolean} asc false，降序，true升序
   * @returns {(a, b) => (number | number)}
   */
  const sortBy = (attr, asc) => {
    //第二个参数没有传递 默认升序排列
    let rev = asc == false ? -1 : 1;
    return (a, b) => {
      let _a = a;
      let _b = b;
      if (attr) {
        _a = a[attr];
        _b = b[attr];
      }
      if (_a < _b) {
        return rev * -1;
      }
      if (_a > _b) {
        return rev;
      }
      return 0;
    };
  };
  
  //获取当前时间，格式YYYY-MM-DD
  const getNowFormatDate = () => {
    const Dates = new Date();
    const year = Dates.getFullYear();
    const month =
      Dates.getMonth() + 1 < 10
        ? "0" + (Dates.getMonth() + 1)
        : Dates.getMonth() + 1;
    const day = Dates.getDate() < 10 ? "0" + Dates.getDate() : Dates.getDate();
    return year + "-" + month + "-" + day;
  };
  const timestampFormat = (t,fmt = 'YYYY-MM-DD hh:mm:ss') => {
    t = new Date(t);
    let o = {
      "Y+": t.getFullYear(),
      "M+": t.getMonth() + 1,
      "D+": t.getDate(),
      "h+": t.getHours(),
      "m+": t.getMinutes(),
      "s+": t.getSeconds()
    }
    for (let k in o) {
      let reg = new RegExp(k);
      if (reg.test(fmt)) {
        fmt = fmt.replace(reg, o[k] < 10 ? "0" + o[k] : o[k]);
      }
    }
    return fmt;
  };
  //获取当前时间的前一天
  const getYesterday = () => {
    const Dates = new Date();
    const year = Dates.getFullYear();
    const month =
      Dates.getMonth() + 1 < 10
        ? "0" + (Dates.getMonth() + 1)
        : Dates.getMonth() + 1;
    const day =
      Dates.getDate() - 1 < 10
        ? "0" + (Dates.getDate() - 1)
        : Dates.getDate() - 1;
    return year + "-" + month + "-" + day;
  };
  
  //获取不可用的form表单的错误信息
  const getInValidFormErrorMsg = errorValue => {
    errorValue = errorValue || {};
    if (!objectIsNull(errorValue)) {
      for (let key in errorValue) {
        let invalidList = errorValue[key];
        if (invalidList.length > 0 && invalidList[0]) {
          return invalidList[0].message;
        }
      }
    } else {
      return null;
    }
  };
  const switchChinese = keys => {
    switch (keys) {
      case "tstClassList":
        keys = "检测分类";
        break;
      case "certList":
        keys = "资质";
        break;
      case "reportUseList":
        keys = "报告用途";
        break;
      case "tstProList":
        keys = "检测项目";
        break;
      case "reportLanguageList":
        keys = "报告语言";
        break;
      case "reportPeriodList":
        keys = "服务周期";
        break;
      case 'selectOptionEc':
        keys = '电商类目'
        break
      case 'selectOptionField':
        keys = '领域类目'
        break
      case 'shopType':
        keys = '店铺类型'
        break
    }
    return keys;
  };
  export const utility = {
    isChineseCode: isChineseCode,
    isArray: isArray,
    trimString: trimString,
    isEmptyString: isEmptyString,
    isEmptyStrings: isEmptyStrings,
    isNotEmptyStrings: isNotEmptyStrings,
    clearNullString: clearNullString,
    clearNullObject: clearNullObject,
    addQueryParamByObj: addQueryParamByObj,
    objectIsNull: objectIsNull,
    isTelephone: isTelephone,
    isMobile: isMobile,
    isJSONString: isJSONString,
    getSessionStorage: getSessionStorage,
    setSessionStorage: setSessionStorage,
    setLocalStorage: setLocalStorage,
    getLocalStorage: getLocalStorage,
    filterSame: filterSame,
    toPercent: toPercent,
    handleDataBeforeRender: handleDataBeforeRender,
    dicArrayToStrArray: dicArrayToStrArray,
    moneyAbs: moneyAbs,
    setObjectArrayToStr: setObjectArrayToStr,
    formatMSCountTimes: formatMSCountTimes,
    updatePreviewFileList: updatePreviewFileList,
    hiddenTel: hiddenTel,
    injectObjectInArray: injectObjectInArray,
    formatGoodsSpecAttr: formatGoodsSpecAttr,
    mapKeyValueList: mapKeyValueList,
    getRandomWord: getRandomWord,
    getRandomNumber: getRandomNumber,
    getRandomString: getRandomString,
    getRandomWithRange: getRandomWithRange,
    // browser:browser,
    // browserMobile:browserMobile,
    formatMoneyLength: formatMoneyLength,
    regexSpecChars: regexSpecChars,
    updateDictFromDict: updateDictFromDict,
    getArrayFromArrayDictByKey: getArrayFromArrayDictByKey,
    dictArrayToDictByKey: dictArrayToDictByKey,
    combineDictArrayToDictByKey: combineDictArrayToDictByKey,
    filterDictArrayByIgnoreKey: filterDictArrayByIgnoreKey,
    filterDictArrayByKey: filterDictArrayByKey,
    isSameObject: isSameObject,
    getVueCascaderMultipleValue: getVueCascaderMultipleValue,
    setVueCascaderSingleVue: setVueCascaderSingleVue,
    isNullOrUndefined: isNullOrUndefined,
    sortBy: sortBy,
    getNowFormatDate: getNowFormatDate,
    getYesterday: getYesterday,
    getInValidFormErrorMsg: getInValidFormErrorMsg,
    switchChinese: switchChinese,
    isEmail: isEmail,
    timestampFormat: timestampFormat,
    deepClone: deepClone,
    isDuty:isDuty,
    copyText:copyText
  };
  