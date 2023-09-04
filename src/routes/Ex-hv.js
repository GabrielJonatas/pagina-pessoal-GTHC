import voluntariado from '../Imagens/filantropando_icon.png'
import portugues from '../Imagens/brazil_icon.png'
import ingles from '../Imagens/english_icon.png'
import alemao from '../Imagens/german_icon.png'

const ExHv = () => {
    return ( 
        <div className="exhv">
            <h2>Idiomas</h2>
            <img className="icon" src={portugues}/>
            <p><strong>Português</strong> - Nativo/Fluente</p>
            <img className="icon" src={ingles}/>
            <p><strong>Inglês</strong> - Nivel avançado de proeficiência para ouvir e falar, porém intermediário para conversação</p>
            <img className="icon" src={alemao}/>
            <p><strong>Alemão</strong> - Nível básico de proeficiência, aprendendo o básico da linguagem</p>
            <h2>Voluntariado</h2>
            <p><strong>Filantropando</strong> Doação de valores para o projeto em abril de 2023</p>
            <img className="icon-volunt" src={voluntariado}/>
        </div>
     );
}
 
export default ExHv;