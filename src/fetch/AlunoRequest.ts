import { SERVER_CFG } from "../appConfig";

class AlunoRequests {

    private serverURL;
    private routeListaAluno;
    private routeCadastraAluno;
    private routeAtualizaAluno;
    private routeRemoveAluno;

    constructor() {

        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaAluno = '/lista/alunos';
        this.routeCadastraAluno = '/novo/aluno';
        this.routeAtualizaAluno = '/atualiza/aluno';
        this.routeRemoveAluno = '/remove/aluno';
    }

    async listarAlunos() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaAluno}`);
            if (respostaAPI.ok) {
                const listaDeAlunos = await respostaAPI.json();
                return listaDeAlunos;
            }
        } catch (error) {
            console.error(`Erro ao fazer a consulta:${error}`)
            return null
        }
    }
}
export default new AlunoRequests();