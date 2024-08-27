let SignupForm=document.getElementById('SignupForm');
let AlertDanger=document.getElementById('AlertDanger');
let SignInMain=document.getElementById('SignInMain')
let SignupPassword=document.getElementById('SignupPassword').value;
let SignupPasswordConfirm=document.getElementById('SignupPasswordConfirm').value;
let SignupEmail=document.getElementById('SignupEmail').value;
let Email=document.getElementById('Email');
let Password=document.getElementById('Password');
let SignupPage=document.getElementById('SignupPage')
let ProfilePage=document.getElementById('ProfilePage')
let Logout=document.getElementById('Logout')

SignupForm.addEventListener('submit',(e)=>{
    let SignupPassword=document.getElementById('SignupPassword').value;
    let SignupPasswordConfirm=document.getElementById('SignupPasswordConfirm').value;
    let SignupEmail=document.getElementById('SignupEmail').value;
    let Username=document.getElementById('Username').value
   
    e.preventDefault();
   localStorage.setItem('SignupEmail',JSON.stringify(SignupEmail));
   localStorage.setItem('SignupPassword',JSON.stringify(SignupPassword))
   localStorage.setItem('SignupPasswordConfirm',JSON.stringify(SignupPasswordConfirm))
   localStorage.setItem('UserName',JSON.stringify(Username))
   let PasswordSet=localStorage.getItem('SignupPassword');
   let PasswordSetConfirm=localStorage.getItem('SignupPasswordConfirm');
   let EmailConfirm=localStorage.getItem('SignupEmail')
 
   if(PasswordSet!=PasswordSetConfirm){
    alert('Password did not match')
    localStorage.removeItem('SignupPassword')
    localStorage.removeItem('SignupPasswordConfirm')
    AlertDanger.style.display='block'
}
else{
    AlertDanger.style.display='none'
}
if(SignupEmail=="" || SignupPassword=="" || SignupPasswordConfirm=="" || Username=="" ){
    AlertDanger.style.display='block'
    localStorage.removeItem('SignupEmail')
    localStorage.removeItem('SignupPassword')
    localStorage.removeItem('SignupPasswordConfirm')
}

})
SignInMain.addEventListener('submit',(e)=>{
   
    let PasswordSetConfirm=JSON.parse(localStorage.getItem('SignupPasswordConfirm'));
    let EmailConfirm=JSON.parse(localStorage.getItem('SignupEmail'))
    let Email=document.getElementById('Email').value;
    let Password=document.getElementById('Password').value;
    let Name=document.getElementById('Name');
    Name.innerHTML=JSON.parse(localStorage.getItem('UserName'))
e.preventDefault();
if(Email==EmailConfirm || Password==PasswordSetConfirm){
    SignupPage.style.display='none'
    ProfilePage.style.display='block'

}  
else{
    alert('SignIn Failed')
    SignupPage.style.display='block'
    ProfilePage.style.display='none'
    console.log(PasswordSetConfirm)
}
}) 
Logout.addEventListener('click',()=>{
    localStorage.clear();
    ProfilePage.style.display='none'
    SignupPage.style.display='block'
})