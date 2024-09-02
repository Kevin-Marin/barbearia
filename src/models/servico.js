const barbeiro = require("../controllers/barbeiro.js");
let proximoId = 1;

module.exports = (body, id=proximoId) => {
    if(body.nome != undefined &&
        body.nome != "" &&
        body.preco > 0 &&
        body.duracaoMinutos > 0 &&
        barbeiro.show(body.idBarbeiro)
    ) {
        return {
            id: id,
            nome: body.nome,
            preco: body.preco,
            duracaoMinutos: body.duracaoMinutos,
            idBarbeiro: body.idBarbeiro
        }
    }
}