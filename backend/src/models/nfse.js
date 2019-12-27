const mongoose = require('mongoose');
const {Schema} = mongoose;

const NFSe = new Schema({
    nf: {
       valor_total: Number,
       valor_desconto: Number,
       valor_ir: Number,
       valor_inss: Number,
       valor_contribuicao_social: Number,
       valor_rps: Number,
       valor_pis: Number,
       valor_cofins: Number,
       observacao: String
    },
    prestador: {
       cpfcnpj: String,
       cidade: String
    },
    tomador: {
       tipo: String,
       cpfcnpj: String,
       ie: String,
       nome_razao_social: String,
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
    },
    itens: {
       lista: {
          codigo_local_prestacao_servico: String,
          codigo_item_lista_servico: String,
          descritivo: String,
          aliquota_item_lista_servico: String,
          situacao_tributaria: String,
          valor_tributavel: Number,
          valor_deducao: Number,
          valor_issrf: Number,
          tributa_municipio_prestador: String,
          unidade_codigo: String,
          unidade_quantidade: Number,
          unidade_valor_unitario: Number
       }
    }
 });

 module.exports = mongoose.model('NFSe', NFSe);
