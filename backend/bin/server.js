const mongoose = require('mongoose');
const app = require('../src/app');
const config = require('../src/config');

//connection database
mongoose.connect(config.DATABASE, { useNewUrlParser: true })
    .then(db => {
        console.log('DB Mongo conectado');
        //server
        app.listen(config.PORT, () => {
            console.log(`API REST na porta ${config.PORT}`);
        });
    }).catch(err => console.log(err));

mongoose.set('useCreateIndex', true);
