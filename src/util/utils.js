/**
 * @file 通用工具类方法文件,
 **/

//反显金额格式化方法,千分位分割，保留两位小数
export function amountFormat(amount) {
  let amountResult = "";
  // 未定义默认返回0.00
  if (!amount) {
    amountResult = "0.00";
  } else {
    const amountpre = amount.toString().split("."); // 将字符串化的金额分割为数组
    const amountInt = amountpre[0].replace(/\B(?=(\d{3})+$)/g, ",");
    let amountFloat = amountpre[1];
    if (!amountFloat) {
      amountResult = amountInt + ".00";
    } else {
      if (amountFloat.length < 2) {
        amountFloat = amountFloat + "0";
      } else {
        amountFloat = amountFloat.substr(0, 2);
      }
      amountResult = amountInt + "." + amountFloat;
    }
  }
  return amountResult;
}

// 数字动态增长
export function dynamicIncreaseNum(num, time = 1500) {
  // const total = 16000;
  // const t = 100000 / time; //间隔时间；
  // let i = 0;
  // const numInterval = setInterval(() => {
  //   if (i < 15) {
  //     i++;
  //     _this.amount = (total * i * 100) / time;
  //   } else {
  //     clearInterval(numInterval);
  //   }
  // }, 60);
}
