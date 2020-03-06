let demo = document.getElementById("demo");
let divWidth = document.getElementById("divWidth");
let style = document.getElementsByTagName("style")[0];
let string1 = `
/*你好！
*给你画个太极劈一下邪吧！
*首先准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*在变成圆
*
*在根据样式进行调整
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成的
*一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div1::before{
    content:"";
    position:absolute;
    width:100px;
    height:100px;
    border-radius:50%;
    left:25%;
    background:black;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(255,255,255,1) 85%, rgba(255,255,255,1) 100%);
}
#div1::after{
    content:"";
    position:absolute;
    width:100px;
    height:100px;
    border-radius:50%;
    left:25%;
    bottom:0;
    background:white;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 15%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 85%, rgba(0,0,0,1) 85%, rgba(0,0,0,1) 100%);
}
`;
let n = -1;
let string2 = "";

let step = () => {
  setTimeout(() => {
    n += 1;
    if (string1[n] === "\n") {
      string2 += "<br/>";
    } else if (string1[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string1[n];
    }
    demo.innerHTML = string2;
    style.innerHTML = string1.substring(0, n);
    demo.scrollTo(0, 99999999);
    window.scrollTo(0, 9999999);
    if (n >= string1.length - 1) {
      return;
    } else {
      step();
    }
  }, 10);
};

step();
