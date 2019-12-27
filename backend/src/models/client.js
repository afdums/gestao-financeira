const mongoose = require('mongoose');
const {Schema} = mongoose;

const Client = new Schema({
    tipo: {type: String, required: true},
    cpfcnpj: {type: String, required: true, unique: true},
    ie: String,
    nome_razao_social: {type: String, required: true},
    sobrenome_nome_fantasia: String,
    logradouro: String,
    email: String,
    complemento: String,
    ponto_referencia: String,
    bairro: String,
    cidade: String,
    cep: String,
    ddd_fone_comercial: String,
    fone_comercial: String,
    ddd_fone_residencial: String,
    fone_residencial: String,
    ddd_fax: String,
    fone_fax: String
});

module.exports = mongoose.model('Client', Client);

