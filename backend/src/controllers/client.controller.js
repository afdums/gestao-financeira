const Client = require('../models/client');
const clientController = {};

clientController.getClients = async (req, res) => {

    const clients = await Client.find();
    res.json(clients)

    //res.json({message: 'return GetClients'});

};

clientController.saveClient = async (req, res) => {
    console.log('req.body: ', req.body);
    
    let client = new Client({
        tipo: req.body.tipo,
        cpfcnpj: req.body.cpfcnpj,
        ie: req.body.ie,
        nome_razao_social: req.body.nome_razao_social,
        sobrenome_nome_fantasia: req.body.sobrenome_nome_fantasia,
        logradouro: req.body.logradouro,
        email: req.body.email,
        complemento: req.body.complemento,
        ponto_referencia: req.body.ponto_referencia,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        cep: req.body.cep,
        ddd_fone_comercial: req.body.ddd_fone_comercial,
        fone_comercial: req.body.fone_comercial,
        ddd_fone_residencial: req.body.ddd_fone_residencial,
        fone_residencial: req.body.fone_residencial,
        ddd_fax: req.body.ddd_fax,
        fone_fax: req.body.fone_fax
    })

    await client.save();
    
    res.json({
        message: 'Client saved'
    });

};

module.exports = clientController;