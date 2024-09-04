
//At first i tried to do it like this but i was having dificulties trying to save the value of the userinfo in local storage and then place the webpage
const loginButton = document.querySelector("button")
console.log (loginButton)
loginButton.addEventListener("click",(e)=>{
document.location.replace("index.html")   
})
//So i did this but wasn't working and cassidy's solution was way better and efficient 
const Userlogin = document.querySelector("login-container")
console.log (Userlogin)
Userlogin.addEventListener("submit",(e)=>{ 
 e.preventDefault()
 const userName = document.querySelector("#username").value;
 const password = document.querySelector("#password").value;
 const userInfo =  {
   userName: userName,
   password: password,
 }
 loginPage.push (userInfo)
 localStorage.setItem("loginPage",JSON.stringify(loginPage));
 console.log("hello")
document.location.replace("index.html")
})
