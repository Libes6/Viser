import React from "react";
import { useForm } from "react-hook-form";

export default function Aut() {
 const{
   register,
   formState:{
     errors,
   },
   handleSubmit,

 }= useForm();

const onSubmit = (data)=> {
  alert(JSON.stringify(data));
}

let max=()=>{ 
   console.log("hi, max");
}
 

  return (
    <div class="wrapper">
    
       
    <form class="form" onSubmit={handleSubmit(onSubmit)}>
     <h1 class="form__title">Вход</h1> 
    <div class="form__group">
           <input {...register('login')} type="text" class="form__input" placeholder=" " />
           <label for="" class="form__label">Email</label>
     </div>
    <div class="form__group">
         <input {...register('password')} type="password" class="form__input"  placeholder=" " minLength="6" maxLength="13" />
         <label for="" class="form__label">Пароль</label>
    <button type="submit" class="form__button" onClick={max}>Вход</button>
      </div>
     
        </form>

      
       

   </div>
  
    
  );
}