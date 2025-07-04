 const name=document.getElementById("name");
 const form=document.getElementById("form");
 const email=document.getElementById("email");
 const password=document.getElementById("password");
 const password_check=document.getElementById("password_check");

form.addEventListener('submit', e =>{
    e.preventDefault();
    inputCheck();
});

function inputCheck(){
    const namevalue=name.value.trim();
      const emailvalue=email.value.trim();
       const passwordvalue=password.value.trim(); 
       const password_checkvalue=password_check.value.trim();
     if(namevalue===''){
        setError(name,'Username cannot be blank');
     }
     else{
        setSuccess(name);
     }
      if(emailvalue===''){
        setError(email,'Email cannot be blank');
     }
     else{
        setSuccess(email);
     }
     if(passwordvalue===''){
        setError(password,'Password cannot be blank');
     }
     else{
        setSuccess(password);
     }
      if(password_checkvalue===''){
        setError(password_check,'Password cannot be blank');
     }
     else if(password_checkvalue !== passwordvalue){
        setError(password_check,'Password does not Match');
     }
     else{
        setSuccess(password_check);
}
};

function setError(input,arg){
   const formCont=input.parentElement;
   const small=formCont.querySelector('small');
   formCont.className='form-control error';
   small.innerText=arg;
};
function setSuccess(input){
 const formCont=input.parentElement;
 formCont.className='form-control success';
};
