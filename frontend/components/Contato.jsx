const Contato = () => {
    const [comentarios, setComentario] = React.useState([])
    const [render, setRender] = React.useState(false);
    const [nome, setNome] = React.useState();
    const [mensagem, setMensagem] = React.useState();
    const [msg, setMsg] = React.useState(false);

    React.useEffect(async () => {
        const url = "http://localhost:3333/comentarios";
        const response = await fetch(url);
        setComentario(await response.json());

    }, [render])

    function registerComment(event) {
        event.preventDefault();
        const form = { nome: nome, msg: mensagem }
        const url = "http://localhost:3333/comentarios";

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
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

        <div className="container-fluid">
            <h1>Contato</h1>
            <hr />
            <div className="row">
                <div className="col">
                    <img src="imag/email.jpg" width="40px" />contato@fullstackeletro.com
                </div>
                <div className="col">
                    <img src="imag/whats.webp" width="70px" />(11) 99999-9999
                </div>
            </div>

            <br /> <br /> <br />

             <form className="form-group" onSubmit={registerComment}>
                <div className="form-group">
                    <label for="nome">Nome: </label>
                    <input id="input_nome" type="text" className="form-control" name="nome" placeholder="Digite seu nome" value={nome}
                        onChange={(event) => setNome(event.target.value)}/>
                    <label for="msg">Mensagem: </label>
                    <textarea id="input_msgs" className="form-control" placeholder="Digite sua mensagem" name="msg" value={mensagem}
                        onChange={(event) => setMensagem(event.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn-info" name="submit">Enviar</button>

            </form> 

            {msg && <div className="alert alert-success mx-auto mt-3 w-75" role="alert">
                Obrigado, comentário efetuado com sucesso!
            </div>}

            <div className="col">
                {comentarios.map(element => {
                    return (
                        <div key={element.id} className="card mt-3 shadow w-50">
                            <p><b>Nome:</b> {element.nome} </p>
                            <p><b>Comentário:</b> {element.msg} </p>
                            <p><b>Data:</b> {element.data} </p>
                        </div>
                    )
                })}
            </div>

        </div>

    );
}


