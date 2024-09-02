let proximoId = 1

module.exports = (body, id=proximoId) => {
    if(body.email != undefined &&
        body.senha != undefined &&
        body.email != "" &&
        body.senha != ""
    ) {
        return {
            id: id,
            email: body.email,
            senha: body.senha
        }
    }
}