import '../style/Register.css'

export default function Register() {
    return(
        <div id='registerDiv'>
            <form id="registerForm">
                <h1 id='formTitle'>Formulário para ir ao céu</h1>
                <input id="nome" type="text" placeholder="Nome"/>
                <input id="idade" type="number" placeholder="Idade"/>
                <input id="cpf" type="number" placeholder="CPF"/>
                <button id="confirmButton" type="submit">Enviar</button>
            </form>
            <footer id="footer">Prefere ir ao INFERNO? <a id='linkProNether' href='https://www.youtube.com/watch?v=b53QJYP-lqY' target='_blank'>Clique aqui</a></footer>
        </div>
    )
}