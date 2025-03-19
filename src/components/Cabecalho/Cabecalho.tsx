import estilo from './Cabecalho.module.css'
function Cabecalho(){

    return (
        <header className={estilo.cabecalho}>
            <h1>logotipo</h1>
            <a href="#">login</a>
        </header>
    );
}

export default Cabecalho;