const Header = () => {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <a className="navbar-brand ml-5" href="index.html">
                    <img src="imag/fslogo.png" alt="fseletro" width="120px" />
                </a>


                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#collapseNavbar" aria-controls="collapseNavbar" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>

            
                <div className="collapse navbar-collapse justify-content-end" id="collapseNavbar">
                    <ul className="nav navbar-nav">
                        <li className="nav-item mr-5">
                            <a className="nav-link text-white" href="produtos.html">Produtos</a>
                        </li>

                        <li className="nav-item mr-5">
                            <a className="nav-link text-white" href="lojas.html">Nossas lojas</a>
                        </li>

                        <li className="nav-item mr-5">
                            <a className="nav-link text-white" href="contato.html">Contato</a>
                        </li>

                        <li className="nav-item mr-5">
                            <a className="nav-link text-white disabled" href="pedidos.html">Desativado</a>
                        </li>
                    </ul>

                </div>
            </nav>
        
    );
}