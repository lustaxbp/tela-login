import { useEffect, useState } from "react";
import AlunoRequest from "../../../fetch/AlunoRequest";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button";
import estilo from "./TabelaAluno.module.css";

function TabelaAluno() {
    const [alunos, setAlunos] = useState([]);
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        const fetchAlunos = async () => {
            try {
                const listaDeAlunos = await AlunoRequest.listarAlunos();
                setAlunos(listaDeAlunos);
                console.table(listaDeAlunos);
            } catch (error) {
                console.error(`Erro ao buscar alunos : ${error}`);
            }
        };
        fetchAlunos();
    }, []);

    return (
        <div className={estilo.container}>
            <div className={estilo.tabelaWrapper}>
                <DataTable 
                    value={alunos} 
                    paginator 
                    rows={5} 
                    rowsPerPageOptions={[5, 10, 25, 50]} 
                    className={estilo.tabela}
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" 
                    paginatorLeft={paginatorLeft} 
                    paginatorRight={paginatorRight}
                >
                    <Column field="nome" header="Nome" className={estilo.coluna} />
                    <Column field="sobrenome" header="Sobrenome" className={estilo.coluna} />
                    <Column field="endereco" header="Endereço" className={estilo.coluna} />
                    <Column field="email" header="Email" className={estilo.coluna} />
                    <Column field="data_nascimento" header="Data Nascimento" className={estilo.coluna} />
                    <Column field="celular" header="Celular" className={estilo.coluna} />
                </DataTable>
            </div>
        </div>
    );
}

export default TabelaAluno;
