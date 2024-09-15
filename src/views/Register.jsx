import '../style/Register.css'

export default function Register() {
    return(
        <div id='register-div'>
            <h1>Javex Feed</h1>
            <form id='register-form'>
                <h2>Registre-se</h2>
                <input type="email" className="register-inputs" placeholder='Email' required/>
                <input type="text" className="register-inputs" placeholder='Username' required/>
                <input type="password" className="register-inputs" placeholder='Senha' required/>
                <button type='submit' id="register-button">Registrar</button>
            </form>
        </div>
    )
}