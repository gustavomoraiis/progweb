const jtw = require('jsonwebtoken');
const {Usuario} = require('../models');
const {secret} = require('../config/security.json');
const controller = {};

controller.login = async (email, senha) =>{
    try{
        const usuario = await Usuario.findOne({where: {email}});

        if(usuario.senha != senha) return false;

        jtw.sign({id: usuario.id}, secret,{
            expiresIn: '24h',
        });
    } catch (error){
        console.log(error);
        throw new Error(error);
    }
};

module.exports = controller;