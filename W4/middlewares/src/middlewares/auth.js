const auth = (req, res, next) => {
    const key = req.query.key;
    if(key === '12345'){
        next();
    } else {
        res.status(401).send('no autenticado')
        //res.sendStatus(401);
    }
}


module.exports = auth;

