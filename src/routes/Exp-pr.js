const ExpPr = () => {
    const link = "https://drive.google.com/file/d/1ImBhs-CkDtfkC_SVyon9f4Y8hwADJSqr/view?usp=sharing";

    return ( 
        <div className="exppr">
            <h2>Pós-transição de carreira</h2>
            <p> Abril/2023 - Atual</p>
            <p>Atualmente procurando estágio em desenvolvimento de software. Deixo a disposição meu <a href={link}><strong>currículo</strong></a> para mais detalhes e oportunidades.</p>
            <h2>Pré-transição de carreira</h2>
            <h3>Ragtech - Empresa da área de segurança eletrônica localizada na Zona Norte de São Paulo</h3>
            <p>Técnico em eletrônica, Junho/2020 - Abril/2023</p>
            <p>Estagiário, Junho/2018 - Junho/2020</p>
            <h4>Atividades</h4>
            <p>Atuação na área de desenvolvimento, trabalhando com layout de placas, testes de produtos, análise de circuitos eletrônicos e suporte geral as atividades de engenharia.</p>
        </div>
     );
}
 
export default ExpPr;