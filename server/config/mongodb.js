const mongoose = require('mongoose')

mongoose.connect(
    'mongodb://localhost/teachtolearn',
    { useNewUrlParser: true, useUnifiedTopology: true },
).catch(() => {
    console.log('Não foi possível conectar com o MongoDB.')
})
