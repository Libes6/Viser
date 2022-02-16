
import './App.css';

function App() {
  
  return (
    <div class="wrapper">
    
       
    <div class="form">
     <h1 class="form__title">Вход</h1> 
    <div class="form__group">
           <input type="text" class="form__input" placeholder=" " />
           <label for="" class="form__label">Email</label>
     </div>
    <div class="form__group">
         <input type="password" class="form__input"  placeholder=" " minLength="6" maxLength="13" />
         <label for="" class="form__label">Пароль</label>
    <button class="form__button">Вход</button>
      </div>
     
        </div>

      
       

   </div>
   
  );
}

export default App;
