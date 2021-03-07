/***   作業 1 填答區開始   **/

//解答是 
//true
//true
//true

//false
//true

//false
//true
//false

/***   作業 1 填答區結束   **/


/***   作業 2 填答區開始   **/

//解答是
//false
//true
//true

//true
//true
//false


//true,因為2*"5" js會自動轉成數值型別所以10>=5是true

/***   作業 2 填答區結束   **/




/***   作業 3 填答區開始   **/

// 解答是 
// m 為：3
// n 為：15
// 原因是 m的部分是因為if判斷式條件2>1是true,會執行後方大括號內的程式碼。因此m會被重新賦予為3,n的部分是因為if判斷式為true,所以執行5+10=15

/***   作業 3 填答區結束   **/




/***   作業 4 填答區開始   **/
// 請將作業四截圖程式碼都寫在這，並刻意練習
//小明身高133
let childHieght = 133;
//兒童未滿此身高免費
let restaurantChildHeight = 120;
//帳單初始金額(媽媽的費用)
let bill = 600;

//如果小明身高>免費的身高
if (childHieght > restaurantChildHeight) {
  //執行
  bill += 300;
  //不然
} else {
  bill += 0;
};
//印出
console.log(`他們總共支付了${bill}元`);

/***   作業 4 填答區結束   **/





/***   作業 5 填答區開始   **/
// 請將作業五截圖程式碼都寫過來，並附上您的答案
//設定預設值
let badge = 3;
//爸爸請小華買的5個商品
//小華有無購買狀態
let buyApple = true;
let buyBanana = true;
let buyRice = true;
let buyCoffee = false;
let buyBeef = true;
//判斷
if (buyApple === true && buyBanana === true && buyRice === true && buyCoffee === true && buyBeef === true) {
  //true
  badge += 3;
} else {
  //false
  badge += 1;
};
console.log(`小華一共得了${badge}個徽章`);

/***   作業 5 填答區結束   **/



/***   作業 6 填答區開始   **/
//解答是
//true
//false
//true

//是否有折扣資格
// true
// || 是代表只要符合其中一項條件即可成立，雖然 hamPrice*hamNum 沒有大於 3000，但 hamNum 有大於 20，所以結果為 true 。;

/***   作業 6 填答區結束   **/



/***   作業 7 填答區開始   **/
// 請將作業七截圖程式碼都寫過來，並附上您的答案
//預設
let weight = 60;
//判斷
if (weight > 0) {
  //true-判斷
  if (weight >= 80) {
    //true
    console.log(`過重`);
  } else if (60 <= weight && weight < 80) {
    //true
    console.log(`正常`);
  } else if (40 <= weight && weight < 60) {
    //true
    console.log(`過輕`);
  };
} else {
  //false
  console.log(`您資料輸入錯誤,請重新輸入`);
};

/***   作業 7 填答區結束   **/


/***   作業 8 填答區開始   **/
// 請將作業八截圖程式碼都寫過來，並附上您的答案
let giftNum = 200;/*贈品數量*/
let giftPriceRule = 399;/*贈品消費門檻*/
let BobPrice = 500;/*Bob 消費金額*/
let BobIsVip = false;/*Bob 是否為Vip*/

//修改開始
//判斷
if (BobPrice >= giftPriceRule || BobIsVip) {
  //true
  console.log(`客戶您好,您有符合贈品資格`);
  giftNum -= 1;
} else {
  //false
  console.log(`客戶您好,您沒有符合贈品資格`);
};
//修改結束
console.log(`贈品還剩下${giftNum}個`);

/***   作業 8 填答區結束   **/


/***   作業 9 填答區開始   **/
// 請將作業九截圖程式碼都寫過來，並附上您的答案
let mingMoney = 870000;/*小明全年個人所得*/
let mingBill = 5000;/*小明稅收帳單,並已加入條件-基本費5000元*/
//程式碼填寫處開始
//判斷
if (mingMoney > 1000000) {
  //true
  mingBill += mingMoney * 0.8;
} else if (540000 < mingMoney && mingMoney <= 1000000) {
  //true
  mingBill += mingMoney * 0.5;
} else {
  //false
  mingBill += mingMoney * 0.3;
}

//程式碼填寫處結束
console.log(`小明總共需支付${mingBill}帳單`)


/***   作業 9 填答區結束   **/



/***   作業 10 填答區開始   **/
// 需附上 Whimsical 連結（記得開啟權限）
/*Whimsical:https://whimsical.com/js-7GHKT6Yxi2JWcwKWVEeJbd*/
let playerA = '石頭';
let playerB = '布';
if (playerA === playerB) {
  console.log('平手');
} else if (playerA === '剪刀' && playerB === '石頭') {
  console.log('playerB WIN');
} else if (playerA === '剪刀' && playerB === '布') {
  console.log('playerA WIN');
} else if (playerA === '石頭' && playerB === '剪刀') {
  console.log('playerA WIN');
} else if (playerA === '石頭' && playerB === '布') {
  console.log('playerB WIN');
} else if (playerA === '布' && playerB === '剪刀') {
  console.log('playerB WIN');
} else if (playerA === '布' && playerB === '石頭') {
  console.log('playerA WIN');
} else {
  console.log('無效');
}

/***   作業 10 填答區結束   **/