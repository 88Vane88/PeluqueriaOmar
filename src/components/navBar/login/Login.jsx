import { NavBar } from "../NavBar"
import './Login.css'

export const Login = () => {



  return (
    <>
    <NavBar/>
   <section className="sectionLogin">
    <div className='form-box'>
      <div className='form-value'>
        <form>
          <h2 className="login">LOGIN</h2>
          <div className='inputbox'>
            <ion-icon name="mail-outline"></ion-icon>
            <input name='email' type='email'/>
            <label htmlFor='email' /* onChange={handleLogin} */>Email</label>
          </div>
          <div className='inputbox'>
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input name='password' type='password'/>
            <label htmlFor='password' /* onChange={handleLogin} */>Contraseña</label>
          </div>
          <button className='iniciar-sesion' type='submit'>Iniciar sesión</button>
          <div className='register'>
            <p> Don't have a account <a href='#'>Register</a></p>

          </div>
        </form>
      </div>
    </div>
  </section> 
    </>
  )
}



