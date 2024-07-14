const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')
const { StatusCodes } = require('http-status-codes')

const auth = async (req, res, next) => {

  
    const { token, email, password } = req.body

    if (token == None)
    {
        next()
        return 
    }


    if (!token.startsWith('Bearer ')) {

        throw new UnauthenticatedError('Unauthenticated')
    }


    const payload = token.split(' ')[1]
    // const payload = token


    try {

        const decoded = jwt.verify(payload, process.env.JWT_SECRET)
        
        const { mongoID, role } = decoded

        req.body["mongoID"] =  mongoID
        
        next()
    
    } catch (error) {

        throw new UnauthenticatedError('Token Invalid')
    }
}


module.exports = auth
