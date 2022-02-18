import { render } from "@testing-library/react";
import React from "react";
import { useForm } from "react-hook-form";
import  "./Component.css"


export default function Reg(){
    const{
        register,
        formState:{
          errors,
        },
        handleSubmit,
        reset,
     
      }= useForm({
          mode:"onBlur"
      });
     
     const onSubmit = (data)=> {
       alert(JSON.stringify(data));
       reset();
     }

     return (
        <div class="wrapper">
        
           
        <form class="form" onSubmit={handleSubmit(onSubmit)}>
         <h1 class="form__title">Регистрация</h1> 
        <div class="form__group">
               <input {...register('firstName',{
                   required:"Заполните поле",
                   minLength: {
                       value:5,
                       message:'Минимум 5 символов.'
                   },
                   
                   })} type="text" class="form__input" placeholder=" " />
               <label for="" class="form__label">Имя</label>
              {errors?.firstName && <span>{errors?.firstName?.message || 'Error'}</span>}
         </div>
         <div class="form__group">
               <input {...register('Email',{
                   required: 'Заполните поле',
               }

               )} type="email" class="form__input" placeholder=" " />
               <label for="" class="form__label">Email</label>
               {errors?.Email && <span>{errors?.Email?.message || 'Error'}</span>}
         </div>
        <div class="form__group">
             <input {...register('password')} type="password" class="form__input"  placeholder=" " minLength="6" maxLength="13" />
             <label for="" class="form__label">Пароль</label>
       
          </div>
          <div class="form__group">
             <input {...register('password')} type="password" class="form__input"  placeholder=" " minLength="6" maxLength="13" />
             <label for="" class="form__label">Повторите пароль</label>
       
          </div>
          <button type="submit" class="form__button" >Регистрация</button>
            </form>
    
          
           
    
       </div>
      
        
      );
  

    


}