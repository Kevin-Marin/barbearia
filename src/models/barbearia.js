let proximoId = 1;

const rede = require("../controllers/rede.js")

module.exports = (body, id=proximoId) => {
    if(body.nome != undefined &&
        body.fotos != undefined &&
        body.endereco.cep != undefined &&
        body.endereco.logradouro != undefined &&
        body.endereco.bairro != undefined &&
        body.endereco.numero > 0 &&
        body.nome != "" &&
        body.fotos.length > 0 &&
        body.endereco.cep != "" &&
        body.endereco.logradouro != "" &&
        body.endereco.bairro != ""
    ) 
    {
        if (body.complemento == undefined) {
            body.complemetno = ""
        }
        return {
            id: id,
            nome: body.nome,
            fotos: body.fotos,
            endereco: body.endereco,
            coordenadas: body.coordenadas,
            complemento: body.complemento,
            rede: body.idRede

        }
    }
}