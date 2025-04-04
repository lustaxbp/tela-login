import  AlunoRequests  from '../../fetch/AlunoRequest';
import estilo from './welcome.module.css'
import { useEffect, useState } from 'react';
function Welcome() {
    const [alunos, setAlunos] = useState('');
    useEffect(() => {
        const fetchAlunos = async () => {
            try {
                const listaDeAlunos = await AlunoRequests.listarAlunos();
                setAlunos(listaDeAlunos);
                console.table(alunos);
            } catch (error) {
                console.error(`Erro ao chamar API : ${error}`)
            }
        };
        fetchAlunos();
    }, [alunos]);
    return (
        <main className={estilo.principal}>
            <p>Seja bem-vindo(a) à biblioteca.</p>
            <p>Para ter melhor uma melhor experiência, faça o login no sistema</p>
        </main>
    )
}

export default Welcome;