const Client = require('../models/nfse');
const request = require('request');
const parser = require("fast-xml-parser");
var file = require('file-system');

const nfseController = {};

nfseController.generate = async (req, res) => {
    
    let url = "http://sync.nfs-e.net/datacenter/include/nfw/importa_nfw/nfw_import_upload.php?eletron=1";

    console.log('__dirname: ', __dirname);
    
    let formData = {
        login: '21775027000126',
        senha: 'afdsbs13'
        ,
        f1: file.createReadStream('./public/xmls/modelo.xml')
    }
    request.post({url: url, formData: formData}, function(error, response, body) {

        let retorno = {};
        console.log('error: ', error);
        console.log('response: ', response);
        console.log('body: ', body);
        
        if(error === null){
            if( response.statusCode === 200) {
                console.log(response.body);
                
                if( parser.validate(response.body) === true) {
                    retorno = parser.parse(response.body);
                } else {
                    //retorno.error = {error: 'Formato body invalido'};
                    response.statusMessage = "NOK";
                    retorno = {retorno: response.body};
                }
            } else {
                response.statusMessage = "NOK";
                retorno.retorno = { error: 'Verificar statusCode'};
            }
        } else {
            response = {};
            response.statusCode = 200;
            response.statusMessage = 'NOK';
            retorno.error = error;
            retorno.retorno = error;
        }

        res.json({
            statusCode: response.statusCode,
            statusMessage: response.statusMessage,
            error: retorno.error,
            retorno: retorno.retorno
        });
        
    });

};

module.exports = nfseController;