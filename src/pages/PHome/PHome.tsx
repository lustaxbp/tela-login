import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Welcome from "../../components/welcome/welcome";
import Rodape from "../../components/Rodape/Rodape";
import TabelaAluno from "../../components/Tabelas/TabelaAluno/TabelaAluno";
import TabelaLivro from "../../components/Tabelas/TabelaLIvro/TabelaLivro";
import TabelaEmprestimo from "../../components/Tabelas/TabelaEmprestimo/TabelaEmprestimo";
function PHome() {
    return (
        <>
            <Cabecalho />
            <TabelaEmprestimo/>
            <Rodape />
        </>
    );
}

export default PHome;