const Produtos = () => {
    const [produto, setProduto] = React.useState([])

    React.useEffect(async() => {

            const url = "http://localhost:3333/produtos";
            const response = await fetch(url);
            setProduto(await response.json());
    }, [])

    const cat = produto.map(cat => {
        const container = {}
        container['id'] = cat.id_categoria
        container['name'] = cat.categoria
        return container
    })

    const categoriaFinal = cat.map(JSON.stringify)
    .reverse()
    .filter(function(item, index, arr){
        return arr.indexOf(item, index +1) === -1
    }).reverse()
    .map(JSON.parse)


    const destaque = (event) => {
        if (event.target.style.width === "240px") {
            event.target.style.width = "120px";
        }
        else {
            event.target.style.width = "240px";
        }
    }

    const redimensiona = (event) => {
        if (event.target.style.width === "120px") {
            event.target.style.width = "240px";
        }
        else {
            event.target.style.width = "120px";
        }
    }

   let elementos = document.getElementsByClassName('produtos-blocos')
    const exibir = (event) => {
               let item = event.target.id;
                for (let i=0; i<elementos.length; i++) {
                    if (item == elementos[i].id) {
                        elementos[i].style = "display:inline-block";
                    } else {
                        elementos[i].style = "display:none";
                }
            }

    }

    let exibirTodos = () => {
            for (let i = 0; i < elementos.length; i++) {
                elementos[i].style = "display:inline-block";
             }

    }


    return (
        <React.Fragment>
            <div class="container-fluid mt-5 row">


                <aside className="col-lg-3 col-sm-3">

                <ul className="listas navbar-nav ml-auto lead">
                        <li className="nav-item" onClick={exibirTodos}> <b> Todos </b> </li>

                        {categoriaFinal.map(categoria => {
                            return (
                                <li key={categoria.id} id={categoria.id} className="nav-item" onClick={exibir}> {categoria.name} </li>
                            )
                        })}
                    </ul>
                </aside>
                

                <div className="col-lg-9 col-sm-9">
                    <div className="row">
                        {produto.map(element => {
                            return (
                                <div key={element.id_produto} className="produtos-blocos card border-0 col-lg-3 col-sm-3" id={element.id_categoria}>
                                    <img id="imag_produto" className="tamanhoprod border-0 img-thumbnail" alt={""} src={element.imagem} onMouseOver={destaque}
                                        onMouseOut={redimensiona} />
                                    <br />
                                    <p className="card-text"> {element.descricao} </p>
                                    <br />
                                    <p className="preco-antigo"> R$ {element.preco}  </p>

                                    <p className="preco-atual"> R$ {element.preco_venda}  </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr />
            </div>
            <hr />

        </React.Fragment>
    );
}
