import { useEffect, useState } from 'react';
import LivroRequest from '../../../fetch/LivroRequest';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

function TabelaLivro() {
    const [livros, setLivros] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const listaDeLivros = await LivroRequest.listarLivros();
                setLivros(listaDeLivros);
                console.table(listaDeLivros);
            } catch (error) {
                console.error(`Erro ao buscar livros: ${error}`);
            }
        };
        fetchLivros();
    }, []);

    return (
        <>
            <DataTable
                value={livros}
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                tableStyle={{ minWidth: '50rem' }}
                paginatorLeft={paginatorLeft}
                paginatorRight={paginatorRight}
            >
                <Column field="titulo" header="Título" style={{ width: '25%' }} />
                <Column field="autor" header="Autor" style={{ width: '25%' }} />
                <Column field="editora" header="Editora" style={{ width: '25%' }} />
                <Column field="isbn" header="ISBN" style={{ width: '25%' }} />
                <Column field="valor_aquisicao" header="Valor Aquisição" style={{ width: '25%' }} />
            </DataTable>
        </>
    );
}

export default TabelaLivro;