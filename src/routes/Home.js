import linkedin from '../Imagens/linkedin_icon.png'
import github from '../Imagens/github_icon.png'
import gabriel from '../Imagens/foto.png'

//Seção inicial contendo o seu nome, 
//link para o seu LinkedIn e GitHub, um pequeno texto bibliográfico
// a respeito de você, 
// e uma figura 
//(pode ser sua ou um avatar caso não queira mostrar o rosto);

const Home = () => {
    return ( 
        <div className="home">
            <h2>Sobre mim</h2>
            <p className="home-description">
                Bem vindo a minha página pessoal!<br/><br/>
                Meu nome é Gabriel, tenho 23 anos e sou de São Caetano do Sul - SP <br/><br/>
                Estou cursando bacharelado em ciência e tecnologia na UFABC e faço  parte do GTHC - Green Team Hacker club <br/><br/>
                Estudo programação e vim de uma transição de carreira. <br/><br/>
                Anteriormente eu estava me formando em engenharia e trabalhando na área, porém descobri minha paixão na programação, solucionando problemas reais com sotware!!<br/><br/>
                Porém minha jornada na programação vem desde o técnico, onde tive contato com C e também onde veio aquela pulga atrás da orelha para migrar de vez para a área.<br/><br/>
                Além disso, sou naturalmente curioso e muito do meu tempo livre eu gasto aprendendo algo novo, especialmente sobre física, que ainda pretendo cursar como segunda graduação um dia.<br/><br/>
                E no restante do tempo, gosto de jogar video-games, ir para a academia, ler ocasionalmente, tocar guitarra, participar de resenha com os amigos, conhecer novas pessoas e estudar mais programação.<br/><br/>
                Nas próximas seções teremos mais detalhes sobre meu trajeto até aqui.<br/><br/>
                Abaixo estão meu Linkedin para contato e GitHub para meu portfolio de atividades. Aproveitem!!<br/><br/>
            </p>
            <a href="https://linkedin.com/in/gabriel-jonatas-035078160"><img className="home-icon" src={linkedin}/></a>
            <a href="https://github.com/GabrielJonatas"><img className="home-icon" src={github}/></a>
            <img className="home-avatar" src={gabriel}/>
        </div>
    );
}
    
export default Home;