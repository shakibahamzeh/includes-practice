
let thisPageHref = window.location.href;
const linkPage=document.getElementById('link-page');
const title=document.getElementById('title');


if(thisPageHref.includes('fromPage1')){
    title.innerHTML="You Are Coming From Page 1";
    linkPage.innerHTML="click Me And Go To Page One";
    linkPage.href="page1.html"
    

}else if(thisPageHref.includes('fromPage2')){
    title.innerHTML="You Are Coming From Page 2";
    linkPage.innerHTML="click Me And Go To Page Two";
    linkPage.href="page2.html"
}