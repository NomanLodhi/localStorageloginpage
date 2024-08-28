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
if(Email==EmailConfirm && Password==PasswordSetConfirm){
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

let PostSubmit=document.getElementById('PostSubmit');
PostSubmit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ImgUrl=document.getElementById('ImgUrl').value;
    let PostDescrip=document.getElementById('PostDescrip').value;
    let PostContainer=document.getElementById('PostContainer');
    localStorage.setItem('Image',JSON.stringify(ImgUrl));
    localStorage.setItem('Description',JSON.stringify(PostDescrip));
    let Image=JSON.parse(localStorage.getItem('Image'))
    let Description=JSON.parse(localStorage.getItem('Description'))
    console.log('Posted');
    // PostContainer.innerHTML+=`
    //  <div class="col-lg-4 my-2">
    //       <div class="card">
    //         <img src="${Image}" alt="" class="card-img-top">
    //         <p id="card-text" class="p-3">${Description}</p>
    //       </div>
    //     </div>
    // `
    
        let col=document.createElement('div');
        let card=document.createElement('div');
        let image=document.createElement('img');
        let des=document.createElement('p');
        let btnDel=document.createElement('button');
    
        col.setAttribute('class','col-lg-4 my-3')
        card.setAttribute('class','card pb-3');
        image.setAttribute('src',Image)
        des.setAttribute('class','p-3')
        btnDel.setAttribute('class','btn btn-primary m-2')
        btnDel.innerText='Delete Post'
        PostContainer.append(col)
        col.append(card)
        des.innerText=Description
        card.append(image)
        card.append(des)
        card.append(btnDel)
btnDel.addEventListener('click',(e)=>{
    e.preventDefault()
    let dlt=e.target.parentElement;
    dlt.style.display='none'
})
 
})