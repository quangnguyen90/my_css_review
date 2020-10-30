//=======================================
// var arr = [1, 4, 6, 8, 9];
// var arrEven = arr.filter(function (value, index) {
//     return value % 2 == 0
// });
// console.log(arrEven); // 4, 6, 8

//=======================================
// function nauAn (cb){
//     console.log("che bien");
//     cb();
//     console.log("an");
// }

// nauAn(function(){
//     console.log("thai thit")
// }); // che bien - thai thit - an

// nauAn(function(){
//     console.log("uop thit")
// }); // che bien - uop thit - an

//=======================================
// let x = 150;
// if (x > 100) {
//     let x = 1;
// }
// console.log(x); // 150

//=======================================
// const PI = 3.14;
// console.log(PI); // 3.14

//=======================================
// function add (a= 8, b=5) {
//     return a + b;
// }
// var a = add (10, 20);
// var b = add (10);
// var c = add (undefined, 20);
// var d = add();
// console.log(a, b, c, d); // 30, 15, 28, 13

//=======================================
// console.log(false == '0'); // true
// console.log(false === '0'); // false

//=======================================
//console.log("1" + 2 + 3); // 123

//=======================================
// var x = 3;
// var foo = {
//     x: 2,
//     bar: {
//         x: 1,
//         baz: function() {
//             return this.x;
//         }
//     }
// }
// var go = foo.bar.baz;
// var test1 = go();
// var test2 = foo.bar.baz();
// console.log(test1, test2); // test1 = undefined. test2 = 1

//=======================================
// function GCD (a, b) {
//     while (a != b)
//         if (a > b)
//             a -= b;
//         else
//             b -= a;
//     return a;
// }
// var a = GCD(9, 15);
// console.log(a); // 3


//=======================================
// function bestGCD(a, b)
// {
//     if (b == 0) return a;
//     return bestGCD(b, a % b);
// }
// var a = bestGCD(10, 15);//L1: 15 - 10 //L2: 10 - 5 //L3: 5 - 0
// console.log(a); // 5

//=======================================
// var friend = {
// 	name: 'Nguyễn Ngọc Hoàng  Ân',
// 	height: '1m6',
// 	weight: '48kg'
// }

// friend.skin = 'trang';
// friend.name = 'Hoàng  Ân Nguyễn Ngọc';
// console.log(friend.name);
// console.log(friend);

//=======================================
// var car = {
//     hangXe: 'BMW',
//     price: 30000,
//     country: 'Germany' 
// }
// console.log(car);

//=======================================
// 1-3-4-2
// console.log("1");
// setTimeout(function(){
//     console.log("2");
// }, 2000);
// console.log("3");
// setTimeout(function(){
//     console.log("4");
// }, 1000);
//=======================================
// 1-3-4-2
// console.log("1");
// setTimeout(function(){
//     console.log("2");
// }, 2000);
// console.log("3");
// console.log("4");
//=======================================
// var arr = [1,5,7,8,9,15];
// function soChan(num) {
//     return num % 2 == 0;
// }
// console.log(arr.filter(soChan);
//=======================================
// var arr = [1,5,7,8,9,15];
// function soLe(num) {
//     return num % 2 != 0;
// }
// console.log(arr.filter(soLe));
//=======================================
// var arr = [1,5,7,8,9,15];
// function soGt5(num) {
//     return num >= 5;
// }
// console.log(arr.filter(soGt5));
//=======================================
// var arr = [1,5,7,8,9,15];
// function soChiaHet5(num) {
//     return num % 5 == 0;
// }
// console.log(arr.filter(soChiaHet5));
//=======================================
// var arr = [1,5,7,8,9,15];
// function soGt5(num) {
//     return num > 5;
// }

// function tang1(num) {
//     if (num > 5) ++num;
//     return num;
// }
// var arrGt5 = arr.filter(soGt5);
// console.log(arrGt5.map(tang1));
//=======================================
// var doan = {
//     name: 'Doan',
//     age:  22,
//     salary: 10000
// };

// var trung = Object.assign({}, doan);
// trung.name = 'Trung';
// trung.clone = true;
// console.log(trung);
// console.log(doan);
//=======================================
// var arr = [1,5,7,8,9,15,8];
// for (let i = 0; i < arr.length; ++i) {
//     arr[i] *= 2;
// }
// console.log(arr);
//=======================================
// var arr = [1,5,7,8,9,15,8];
// var res = [];
// for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] % 2 == 0) {
//         res.push(arr[i]);
//     }
// }
// console.log(res);
//=======================================
// var arr = [1,5,7,8,9,15,8];
// var res = [];
// for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] % 2 != 0) {
//         res.push(arr[i]);
//     }
// }
// console.log(res);
//=======================================
// var arr = [1,5,7,8,9,15,8];
// var res = [];
// for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] >= 5) {
//         res.push(arr[i]);
//     }
// }
// console.log(res);
//=======================================
// var arr = [1,5,7,8,9,15,8];
// var res = 0;
// for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] % 5 == 0) {
//         res += arr[i];
//     }
// }
// console.log(res);
//=======================================
// var arr = [1,5,7,8,9,15,8];
// var res = 0;
// for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] % 5 == 0) {
//         res += arr[i];
//     }
// }
// console.log(res);
//=======================================
// var arr = [1,5,7,8,9,15,8];
// var res = 1;
// for (let i = 0; i < arr.length; ++i) {
//     res *= arr[i];
//     if (i >= 2) break;
// }
// console.log(res);
//=======================================
// var arr = [1,5,7,8,9,15,8];
// var res = false;
// for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] == 5) {
//         res = true;
//         break;
//     }
// }
// if (res == true) console.log("Yes")
// else console.log("No");
//=======================================
// var arr = [1,5,7,8,9,15,8];
// var res = '';
// for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] == 8) {
//         res = 'Phan tu 8 dau tien o vi tri ' + (i+1);
//         break;
//     }
// }
// console.log(res);
//=======================================
// var arr = [1,5,7,8,9,15,8];
// var res = 0;
// for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] == 8) {
//         ++res;
//     }
// }
// console.log('Co tat ca ' + res + ' phan tu 8');
//=======================================
// var arr = [1,5,7,8,9,15,8];
// var res = 1;
// for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] != 8) {
//         res *= arr[i];
//     }
// }
// console.log(res);
//=======================================
// var arr = [1, 5, 7, 8, 9, 15, 8];
// var res = 0;
// for (let i = 0; i < arr.length; ++i) {
//     let pos = (arr.length - 1) - i;
//     res += arr[pos];
//     if (i >= 2 ) break;
// }
// console.log(res);
//==================================================
//console.log (Math.min.apply(null, [100, -1, 8, 219]))
//==================================================
// <!DOCTYPE html>
// <html>
// <body>
// <button id="demo"> Click me</button>
// <br>
// Ket qua la: <p id="res"></p>
// <script>
//   function add(num1, num2) {
//       return num1 + num2;
//   }

//   var buton = document.getElementById("demo");
//   buton.addEventListener("click", function(){
//     var ketqua = add.bind(null, 4, 6);
//     document.getElementById("res").innerHTML = ketqua();
//   });
// </script>

// </body>
// </html>
//==================================================
// <!DOCTYPE html>
// <html>
// <body>
// Type something here
// <br>
// <input type="text" id="demo" onkeypress="show()"/>

// <script>
//   function show() {
//     var valu = document.getElementById("demo").value;
//         clearInput(valu);
//   }

//   function clearInput(value)
//   {
//       clearTimeout(typing);
//       var typing = setTimeout(function(){
//           alert('ban da go: ' + value);
//       } , 1000);
//   }
// </script>

// </body>
// </html>
//==================================================
// <!DOCTYPE html>
// <html>
// <body>
// Current time is:
// <br>
// <p id="demo"></p>

// <script>
//   setInterval(function(){ 
//     var today = new Date();
//     var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//     var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     var res = date + '--' + time;
//     document.getElementById('demo').innerHTML = res;
//   }, 1000);
// </script>

// </body>
// </html>
//==================================================
// //tạo 1 promise1 với tác vụ resolve sau 3 giây (dùng settimeout)
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         return resolve("resolve");
//     }, 3000)
// })

// promise1.then((status) => {
//     console.log(status + " sau 3 s");
// })


// //tạo 1 promise2 tác vụ resolve sau 2 giây
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         return resolve("resolve");
//     }, 2000)
// })

// promise2.then((status) => {
//     console.log(status + " sau 2 s");
// })
// //tạo 1 promise3 tác vụ reject sau 2 giây
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         return reject("reject");
//     }, 2000)
// })

// promise3.catch((status) => {
//     console.log(status + " sau 2 s");
// })
//==================================================
// function promisse1(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function(){
//             resolve(num);
//         }, 3000)
//     })
// }

// function promisse2(num1) {
//     return new Promise((resolve, reject) => {
//         let res = num1 * 3;
//         setTimeout(function(){
//             resolve(res);
//         }, 3000)
//     })
// }

// function promisse3(res) {
//     return new Promise((resolve, reject) => {
//         if (res > 10) {
//             resolve(true)
//         } else {
//             resolve(false)
//         }
//     })
// }

// promisse1(5)
// .then(function(num1) {
//     console.log(num1);
//     return promisse2(num1)
// })
// .then(function(res){
//     console.log(res);
//     return promisse3(res);
// })
// .then(function(ketqua){
//     console.log("ket qua la " + ketqua);
// })

//=======================================
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         return resolve("resolve1");
//     }, 3000)
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         return resolve("resolve2");
//     }, 2000)
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         return resolve("resolve3");
//     }, 2000)
// })

// const promiseAll = Promise.all([
//     promise1,
//     promise2,
//     promise3
// ])
// .then((result) => {
//     console.log(result)
// })
// .catch(error => console.log(`Error in promises ${error}`));
//=======================================



// -----------------------------------
// HỌC REDUCE() QUA CÁC VÍ DỤ ĐƠN GIẢN
// -----------------------------------

// Trong cái mớ hàm này
// for...i, for...of
// forEach
// filter
// map
// ...
// Cái hàm dễ diên nhất chính là reduce() :P
// Hàm này nó làm gì?
// Lặp qua các phần tử của mảng, 
// tính toán và trả về 1 KQ cuối cùng



// Hàm tính tổng viết bằng for...of
const sumFor = (numberList) => {
    let sum = 0;

    for (const number of numberList) {
        const newSum = sum + number;
        // để sử dụng ở bước sau
        sum = newSum;
    }

    return sum;
};
console.log(sumFor([1, 2, 3, 4, 5]));

// 1. Xác định giá trị khởi tạo
// 2. Xác định công thức với KQ của bước trước đó
// --
// 0
// result = prevResult + current


const sumReduce = (numberList) => {
    // return numberList.reduce((resultFromLastStep, curValue) => { }, 0);
    return numberList.reduce((sum, number) => sum + number, 0);

    // [1, 2, 3]
    // sum = 0, number = 1 --> 0 + 1 = 1
    // sum = 1, number = 2 --> 1 + 2 = 3
    // sum = 3, number = 3 --> 3 + 3 = 6
};
console.log(sumReduce([1, 2, 3, 4, 5]));


// Find the first longest word in list
// Input:   ['love', 'easy', 'frontend']
// Output:  frontend
const findTheLongestWord = (wordList) => {
    if (!Array.isArray(wordList) || wordList.length === 0) return null;

    return wordList.reduce((theLongestWord, currentWord) => {
        return theLongestWord.length > currentWord.length
            ? theLongestWord
            : currentWord;
    }, wordList[0]);
};
const wordList = ['love', 'easy', 'frontend'];
console.log(findTheLongestWord(wordList));


const sumReduce = (numberList) => {
    // return numberList.reduce((resultFromLastStep, curValue) => { }, 0);
    return numberList.reduce((sum, number) => sum > number, 0);
};
console.log(sumReduce([1, 2, 3, 4, 5]));


// Viết hàm để chuyển đối mảng thành object như bên dưới sử dụng reduce()
// const itemList = [
//   { id: 'key1', value: 'Superman' },
//   { id: 'key2', value: 'Wonder Woman' },
//   { id: 'key3', value: 'Spider man' },
// ];
// 
// is converted to 
// 
// const itemMap = {
//   key1: 'Superman',
//   key2: 'Wonder Woman',
//   key3: 'Spider man'
// };
// 
// to use later as itemMap.key1, O(1)
// instead of look up in itemList with id = key1, 0(n)
const arrayToObject = (itemList) => {
    return itemList.reduce((itemMap, item) => {
        itemMap[item.id] = item.value;
        return itemMap;
    }, {});
};

const itemList = [
    { id: 'key1', value: 'Superman' },
    { id: 'key2', value: 'Wonder Woman' },
    { id: 'key3', value: 'Spider man' },
];
console.log(arrayToObject(itemList));

// Tóm lại 
// Mình có thể dùng reduce() nếu như gặp bài toán 
// lặp qua một mảng -> xử lý gì đó -> trả về một kết quả cuối cùng. 
// Vd như tìm min, max, sum, ...

// BÀI TẬP 
// 1. Viết hàm findMin(numberList) sử dụng reduce() 
// 2. Viết hàm findMaxEvenNumber(numberList) sử dụng reduce()
// 3. Viết hàm chuyển đổi object thành mảng, ngược lại với bài ở trên.


// Channel: EASY FRONTEND - Hậu Nguyễn
// Youtube channel: https://www.youtube.com/channel/UCG2ovypNCpVOTFeY1YCocmQ
// THAM TRỊ vs THAM CHIẾU trong Javascript

// CHIA SẺ
// 1. Tham trị vs tham chiếu là gì?
// 2. Các khái niệm:
//     - stored by value
//     - stored by reference
//     - pass by value
//     - pass by reference
// 3. Cách khắc phục lỗi liên quan tới reference
// 4. Có liên quan gì tới ReactJS, Redux hk?
// Hôm nay học tới đây đủ rồi⁉️ 🤣




// -----------------
// THAM TRỊ - VALUE TYPE
// - Ví dụ cái box sau đây là đại diện cho biến trong JS.

// |                  |
// | number           |
// | string           |  => lưu luôn giá trị
// | boolean          |     vd số 1000, string 'Easy Frontend'
// | null, undefined  |
// |__________________|

// const a = 1000;
// |                  |
// | 1000             |
// | 'Easy Frontend'  |  
// | true, false      |     
// | null, undefined  |
// |__________________|




// -----------------
// THAM CHIẾU - REFERENCE TYPE

// |                         |    ===>    | KHO CHỨA 1E2F  |        
// | object, array           |    ===>    |                |        
// |                         |    ===>    | {name: 'Hau'}  |     
// | const a = {name: 'Hau'} |    ===>    |                |
// | thực chất a = 1E2F      |    ===>    |                |
// |_________________________|    ===>    |________________|
// => chỉ lưu địa chỉ nơi giữ giá trị 
// => phép gán với object === copy địa chỉ
// const b = a; --> b cũng trỏ về địa chỉ 1E2F




// tham trị - stored as value type
let a = 5;
let b = a;
a = 10;
console.log(b);


// tham chiếu - stored as reference type
const a = { name: 'Hau' }; // 1E2F
const b = a; // 1E2F
a.name = 'Po';
console.log(b.name);





// truyền tham số dạng tham trị - pass by value
function doMagic1(number) {
    number = 10;
}
const a = 5;
doMagic1(a);
console.log(a); // 5 or 10



// truyền tham số dạng tham chiếu - pass by reference
function doMagic2(a1) {
    a1.name = 'Po';
}
const a = { name: 'Hau' };
// const a1 = a; // 1e2f
doMagic2(a);
console.log(a.name); // Hau or Po???








// Làm sao để không bị dính tham chiếu
// --> Clone object
// --> Clone array
// ES6: spread operator (...)
const a = { name: 'Hau' }; // 1E2F
const b = { ...a }; // 1E2G
a.name = 'Po';
console.log(b.name);


const a = [1, 2, 3];
const b = [...a];
a.push(4);
console.log(b);






// Tham trị vs cả tham chiếu
// Cái này liên quan gì tới ReactJS, Redux?
// Có đó nha! :P
// Thỉnh thoảng component hk re-render
// mặc dù bạn nói đã thay đổi giá trị props rồi.
class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            numberList: [],
        };
    }

    componentDidMount() {
        const { numberList } = this.state;
        const newNumberList = [...numberList];
        newNumberList.push(1);
        // will it re-render?
        // shallow comparison
        this.setState({ numberList: newNumberList });
    }

    render() {
        // 0 or 1 --> 1
        const { numberList } = this.state;
        return <p>{numberList.length}</p>;
    }
}


// NHỚ NÈ
// - Tham trị chứa giá trị (mấy kiểu dữ liệu đơn giản)
// - Tham chiếu chứa địa chi (kiểu dữ liệu phức tạp như object, array)
// - Nhớ clone ra object mới khi thay đổi props/state trong ReactJS / Redux.
// 💻 HAPPY CODING! ❤️

// Nhớ like, share và subscribe để ủng hộ mình nhen.
// Còn nếu muốn ủng hộ 💰 thì tìm trong phần mô tả video nhé!





// BÀI TẬP GIẢI TRÍ
// Câu 1: 
function doSomethingCool(number, obj) {
    number = 1500;
    obj.value = 2500;
};
const a = 1000;
const b = { value: 2000 };
doSomethingCool(a, b);
console.log(a + b.value); // in ra bao nhiêu?


// Câu 2:
function doSomethingGreat(obj, arr) {
    obj.value = 3500;
    arr.push(obj.value);
}
const a = { value: 1500 };
const b = [1000];
b.push(a.value);
doSomethingGreat(a, b);
console.log(b); // in ra cái gì?

// Easy Frontend
// Học FE đơn giản, dễ hiểu và đặc biệt phải vui ❤️
// JS NÂNG CAO - Xử lý expired token trong Javascript như thế nào?


// ❓ Chuyện gì xảy ra nếu giữa chừng token bị expired?
// Ví dụ: 3 api requests đồng thời với nhau

// TRƯỜNG HỢP 1: Token chưa expired, vẫn còn tốt chán 🤣
// --request 1-->
// --request 2-->
// --request 3-->


// TRƯỜNG HỢP 2: Token bị expired, sóng gió kéo tới 🥴
// --request 1--> refresh token 1 --> failed
// --request 2--> refresh token 2 --> failed
// --request 3--> refresh token 3 --> success





// GIẢI PHÁP
// --request 1--> (phát hiện token expired)
//               --request 2--> (những requests đến sau phải đợi token trả về)
//               --request 3--> (dù có bao nhiêu requests thì vẫn phải đợi)







// Cái này giả bộ 
// Thực tế bạn phải kiểm tra thông tin từ token 
// để biết là token có bị expired hay chưa
// còn ở đây làm video nên mình gán luôn giá trị cho lẹ
const isTokenExpired = true;
let token = 'Current token'; // thường lưu trong local storage

const refreshToken = (url) => {
    console.log('Refresh token url: ', url);
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('\n');
            resolve('Yes, this is a new token 😎');
        }, 3000);
    });
};

// closure: to save the refreshTokenRequest
let refreshTokenRequest = null;
const requestApi = async (url) => {
    if (isTokenExpired) {
        console.log('requestApi: Ooops ... token expired: ', url, token);

        refreshTokenRequest = refreshTokenRequest
            ? refreshTokenRequest
            : refreshToken(url);
        // 1 --> null --> refreshToken
        // 2 --> refreshToken --> refreshToken
        // 3 --> refreshToken --> refreshToken

        const newToken = await refreshTokenRequest;
        // reset token request for the next expiration
        refreshTokenRequest = null;

        token = newToken; // thường update token trong localStorage
        console.log('requestApi: Fetch data with new token: ', url, token);
        return;
    }

    console.log('Fetch data: ', url, token);
};

// ---------------
// MAIN LOGIC
// ---------------
const main = () => {
    // ví dụ 3 requests này đến từ 3 nơi khác nhau trong app của bạn
    // bạn không thể biết cái nào chạy trước, chạy sau 
    // và cũng không thể biết cái nào nên đợi cái nào
    requestApi('/me');
    requestApi('/shops');
    requestApi('/products');
};
main();






// 📝 Nhớ nè 
// - Áp dụng closure để xử lý bất đồng bộ.
// - Token phải được lưu dưới localStorage để đảm bảo sync token giữa các tabs.
// - Trong video này, mình dùng NodeJS để chạy JS, chứ hk phải browser.
// - Chắc chắn bạn sẽ gặp vấn đề này nếu bạn có xử lý expired token.



// Easy Frontend - Học FE đơn giản, dễ hiểu và đặc biệt phải vui ❤️
// - Cảm ơn tất cả các bạn đã xem video này.
// - Like, share và subscribe nếu bạn thấy hữu ích nhé.
// - Ủng hộ mình làm video FE thì hãy donate 5k, 10k 
//   vào link trong phần mô tả video nhé. 😍