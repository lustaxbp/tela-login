import { useEffect, useState } from 'react';
import EmprestimoRequest from '../../../fetch/EmprestimoRequest';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

function TabelaEmprestimo() {
    const [emprestimos, setEmprestimos] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        const fetchEmprestimos = async () => {
            try {
                const listaDeEmprestimos = await EmprestimoRequest.listarEmprestimos();
                setEmprestimos(listaDeEmprestimos);
                console.table(listaDeEmprestimos);
            } catch (error) {
                console.error(`Erro ao buscar empréstimos: ${error}`);
            }
        };
        fetchEmprestimos();
    }, []);

    return (
        <>
            <DataTable
                value={emprestimos}
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                tableStyle={{ minWidth: '60rem' }}
                paginatorLeft={paginatorLeft}
                paginatorRight={paginatorRight}
            >
                <Column field="nome" header="Nome do Aluno" body={(rowData) => rowData.aluno.nome}style={{ width: '20%' }} />
                <Column field="titulo" header="Nome do Livro"  body={(rowData) => rowData.livro.titulo} style={{ width: '20%' }} />
                <Column field="dataEmprestimo" header="Data de Empréstimo" style={{ width: '20%' }} />
                <Column field="dataDevolucao" header="Data de Devolução" style={{ width: '20%' }} />
                <Column field="statusEmprestimo" header="Status" style={{ width: '20%' }} />
            </DataTable>
        </>
    );
}

export default TabelaEmprestimo;