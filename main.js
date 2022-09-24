const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/C7_API');

const Persona = mongoose.mode ('Persona',{
    nombre: String,
    edad: Number,
    activo: Boolean,

});

const persona = new Persona({
    nombre: 'Mario',
    edad: 40,
    activo: true,
});

persona.save().then(()=>{console.log('guardado')
});

Persona.find({nombre: 'Juan'}).then ((personas)=>{console.log(personas)});