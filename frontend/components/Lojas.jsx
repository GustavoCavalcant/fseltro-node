const Lojas = () => {
  return (
    <div className="container-fluid">
      <h1>Nossas lojas</h1>
      <hr />
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Rio de Janeiro</th>
            <th scope="col">São Paulo</th>
            <th scope="col">Santa Catarina</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Avenida Presidente Vargas, 5000</td>
            <td>Avenida Paulista, 985</td>
            <td>Rua Major &Aacute;vila, 370</td>
          </tr>
          <tr>
            <td>10 &ordm; andar</td>
            <td>3 &ordm; andar</td>
            <td>Vila Mariana</td>
          </tr>
          <tr>
            <td>Centro</td>
            <td>Jardins</td>
            <td>(47) 5555-5555</td>
          </tr>
          <tr>
            <td>(21) 3333-3333</td>
            <td colspan="2">(11) 4444-4444</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
  
