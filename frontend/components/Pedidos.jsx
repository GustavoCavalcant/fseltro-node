const Pedido = () => {
    const [pedidos, setPedido] = React.useState([])
    const [render, setRender] = React.useState(false);
    const [msg, setMsg] = React.useState(false);

    React.useEffect(() => {
        async function fetchData() {
            const url = "http://localhost/fullstackeletro/backend/ped.php"
            const response = await fetch(url);
            setPedido(await response.json());
        }
        fetchData();
    }, [render])

    function registerRequest(event) {
        event.preventDefault();
        const url = "http://localhost/fullstackeletro/backend/register-request.php";

        fetch(url, {
            method: "POST",
            body: new FormData(event.target)
        }).then((response) => response.json())
            .then((dados) => {
                setRender(!render);
                setMsg(dados);
                setTimeout(() => {
                    setMsg(false)
                }, 3000);
            })
    }

    return (

        <React.Fragment>
            <div className="container-fluid">
                <h1>Registre seu Pedido</h1>
                <hr />
            </div>

            <main className="container">

                <form className="form-group" onSubmit={registerRequest}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="nome">Nome</label>
                            <input type="text" className="form-control" name="nome" placeholder="Digite seu nome completo" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="endereco">Endereço</label>
                            <input type="text" className="form-control" name="endereco" placeholder="Ex: Rua das flores, 180" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="telefone">Telefone</label>
                            <input type="number" className="form-control" name="telefone" placeholder="Ex: 11987878787" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="produto">Produto</label>
                            <input type="text" className="form-control" name="produto" placeholder="Descrição do produto" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-5">
                            <label for="unitario">Valor unitario(R$)</label>
                            <input type="number" name="valor_unitario" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-2">
                            <label for="qtd">Quantidade</label>
                            <input type="number" className="form-control" name="qtd" />
                        </div>
                        <div className="form-group col-md-5">
                            <label for="total">Valor Total(R$)</label>
                            <input type="number" className="form-control" name="valor_total" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-info" name="submit">Enviar Pedido</button>
                </form>

                {msg && <div className="alert alert-success mx-auto mt-3 w-75" role="alert">
                    Obrigado, Pedido efetuado com sucesso!
                </div>}

            </main>

            <div className="col">
                {pedidos.map(element => {
                    return (
                        <div key={element.id} className="card mt-3 shadow w-50">
                            <p><b>Nome:</b> {element.nome} </p>
                            <p><b>Produto:</b> {element.produto} </p>
                            <p><b>Valor Unitário:</b> R${element.valor_unitario} </p>
                            <p><b>Quantidade:</b> {element.qtd} </p>
                            <p><b>Valor Total:</b> R${element.valor_total} </p>
                        </div>
                    )
                })}
            </div>

        </React.Fragment>
    );
}


