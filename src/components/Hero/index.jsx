import './style.css'
import SwanlyLogo from '../../assets/images/logo.png';

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h2>Conecte-se, inspire e faça ondas no Swanly!</h2>
        <p>Onde ideias livres fluem como cisnes na água.</p>
        <button>Registrar</button>
        <p>Já tem uma conta? <a href="/login">Login</a></p>
      </div>
      <div className="hero-image">
        <img className='logo-swanly' src={SwanlyLogo} alt="Logo Swanly" />
      </div>
    </div>
  );
}
