import jwt from "jsonwebtoken"

const isAuth = async (req,res,next) => {
    try {
        let {token} = req.cookies
        if(!token){
            return res.status(400).json({message:"User doesn't have a token!"})
        }
        const verifyToken = jwt.verify(token,process.env.JWTSECRET)
        if(!verifyToken){
            return res.status(400).json({message:"User doesn't have a valid token!"})
        }
        req.userId = verifyToken.userId
        next()
    } catch (error) {
        return res.status(400).json({message:`isAuth error ${error}`})
    }
}

export default isAuth