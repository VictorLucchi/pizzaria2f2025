const Produtos = () => {
    // Objeto com a lista de pizzas
    const pizzas = [
        'Pizza de muçarela',
        'pizza de Calabresa',
        'Pizza Baiana',
        'Pizza Quatro Queijos'

    ]
    // Interação da lista de pizzas
    const listaPizzas = pizzas.map(pizza=><li>{pizza}</li>)

    return (
        <div>
            <ul>
                {listaPizzas}
            </ul>
        </div>
    )

}

export default Produtos