const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;

app.get('/',(req,res)=>{
    res.send('Se conecto Exitosamente')
})

app.post('/prueba',(req,res,next)=>{
   const{nombre, apellido, dni} = req.body;

    console.log('Entro',req.body);

    
   res.status(500).send('Hubo algun error');
    if(typeof nombre === 'string' && typeof apellido === 'string'){
        if(dni>=10){
            res.status(201).send('Correcto');
        }
    }else{
        res.status(400).send('Error se enviaron mas atributos');
    }

    res.json({
        code: '201',
    });
    
});


app.listen(port, ()=>{
    console.log('servidor a su servicio en el puerto', port)
})