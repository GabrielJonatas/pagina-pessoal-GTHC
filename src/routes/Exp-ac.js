import ufabc from '../Imagens/Ufabc_icon.png'
import etec from '../Imagens/etec_icon.png'
import gthc from '../Imagens/gthc_icon.png'
import grub from '../Imagens/grub_icon.png'

const ExpAc = () => {    
    return ( 
        <div className="expac">
            <div className="un">
                <div className="uf">
                    <h2>Universidade - UFABC</h2>
                    <img className="logos" src={ufabc}/>
                    <p>Bacharelado em ciência da computação, 2022 - Atual</p>
                    <p>Bacharelado em engenharia IAR, 2019 - 2022 Interrompido</p>
                    <p>Bacharelado em ciência e tecnologia, 2018 - Atual</p>
                </div>
                <div className="uf">
                    <h3>Entidade acadêmica</h3>
                    <img className="logos-gthc" src={gthc}/>
                    <p>Green Team Hacker Club - GTHC, Junho/2023 - Atual  </p>
                </div>
                <div className="uf">
                    <h3>Grupo de estudos</h3>
                    <img className="logos-grub" src={grub}/>
                    <p>GRUB UFABC - Programação competitiva, Julho/2023 - Atual</p>
                </div>
            </div>
            <div className="etec">
                <h2>Curso técnico integrado ao ensino médio - ETEC Jorge Street</h2>
                <img className="logos" src={etec}/>
                <p>Técnico em eletrônica, 2015 - 2017</p>
            </div>
        </div>
     );
}
 
export default ExpAc;