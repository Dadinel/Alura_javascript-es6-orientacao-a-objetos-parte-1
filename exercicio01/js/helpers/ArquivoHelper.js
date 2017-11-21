class ArquivoHelper {

    static cria(informacao) {
        //return new Arquivo(...informacao.split('/').map(item => item.toUpperCase()));
        return new Arquivo(...informacao.toUpperCase().split('/'));
    }
}