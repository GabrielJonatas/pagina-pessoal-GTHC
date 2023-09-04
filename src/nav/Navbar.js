import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Gabriel Jonatas</h1>
            <div className="links">
                <Link to="/about">Sobre mim</Link>
                <Link to="/exp-ac">Experiências acadêmicas</Link>
                <Link to="/exp-pr">Experiências profissionais</Link>
                <Link to="/ex-hv">Habilidades e voluntariado</Link>
                <Link to="/prj">Projetos</Link>
                <Link to="/ativ">Atividades na entidade acadêmica GTHC</Link>
            </div>
        </nav>
     );
}

export default Navbar;