import estilo from './Rodape.module.css'

function Rodape(){
    return (
        <footer className={estilo.rodape}>
            <p> Desenviolvido por Luís Otávio Bordin </p>
            <p>@Copyright</p>
        </footer>
    );
}

export default Rodape;