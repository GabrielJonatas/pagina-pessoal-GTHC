import gerador from '../Imagens/gerador_de_senhas_icon.png'
import cronometro from '../Imagens/projeto_timer_icon.png'
import calculaIMC from '../Imagens/projeto_imc_icon.png'

const Proj = () => {
    const timer = "https://github.com/GabrielJonatas/Projeto-timer";
    const imc = "https://github.com/GabrielJonatas/Projeto-IMC";
    const geradorSenhas = "https://github.com/GabrielJonatas/Gerador-de-senhas";

    return ( 
        <div className="proj">
            <h2>Projetos até o momento</h2>
            <div className="block">
                <div className="projs">
                    <h3>Gerador senhas</h3>
                    <p><strong>Descrição: </strong>
                    Trata-se de um gerador de senhas utilizando JavaScript e Webpack. Além de englobar conceitos de módulos, classes e babel. <a href={geradorSenhas}><strong>Repositório Github</strong></a>
                    </p>
                    <img className="proj-icon" src={gerador}/>
                </div>
                <div className="projs">
                    <h3>Cronômetro</h3>
                    <p><strong>Descrição: </strong>
                    Projeto em que utilizei elementos de lógica de programação, conceitos de DOM e funções para fazer uma calculadora IMC. <a href={timer}><strong>Repositório Github</strong></a>   
                    </p>
                    <img className="proj-icon" src={cronometro}/>
                </div>
            </div>
            <div className="projs">
                <h3>Calculadora IMC</h3>
                <p><strong>Descrição: </strong>
                Utilizei elementos de lógica de programação, conceitos de DOM e funções para fazer uma calculadora IMC. <a href={imc}><strong>Repositório Github</strong></a>
                </p>
                <img className="proj-icon" src={calculaIMC}/>
            </div>
        </div>
     );
}
 
export default Proj;