import { SERVER_CFG } from "../appConfig";

class LivroRequests {

    private serverURL;
    private routeListaLivro;
    private routeCadastraLivro;
    private routeAtualizaLivro;
    private routeRemoveLivro;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaLivro = '/lista/livros';
        this.routeCadastraLivro = '/novo/livro';
        this.routeAtualizaLivro = '/atualiza/livro';
        this.routeRemoveLivro = '/remove/livro';
    }

    async listarLivros() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaLivro}`);

            if (respostaAPI.ok) {
                const listaDeLivros = await respostaAPI.json();
                return listaDeLivros;
            }
        } catch (error) {
            console.error(`Erro ao fazer a consulta: ${error}`);
            return null;
        }
    }
}

export default new LivroRequests();