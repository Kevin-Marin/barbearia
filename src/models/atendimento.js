const cliente = require("../controllers/cliente.js");

let proximoId = 1

module.exports = (body, id=proximoId) => {
    if(body.servicos != undefined &&
        body.horarioInicio != undefined &&
        body.horarioFim != undefined &&
        body.preco >= 0 &&
        body.statusPagamento != undefined &&
        body.servicos.length > 0 &&
        body.horarioInicio != "" &&
        body.horarioFim != "" &&
        body.statusPagamento != ""
    ) {
        return {
            id: id,
            servicos: body.servicos,
            horarioInicio: body.horarioInicio,
            horarioFim: body.horarioFim,
            preco: body.preco,
            statusPagamento: body.statusPagamento
        }
    }
}