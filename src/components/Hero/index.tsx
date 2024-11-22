import './style.css'
import SwanlyLogo from '../../assets/images/logo.png';

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h2 id='hero-heading'>Conecte-se, inspire e faça ondas no Swanly!</h2>
        <p className='effect-phrase'>Onde ideias livres fluem como cisnes na água.</p>
        <button className='register-button'>Registrar</button>
        <p className='login-text'>Já tem uma conta? <a className='login-button' href="/login">Login</a></p>
      </div>
      <div className="hero-image">
        <img className='logo-swanly' src={SwanlyLogo} alt="Logo Swanly" />
      </div>
    </div>
  );
}
