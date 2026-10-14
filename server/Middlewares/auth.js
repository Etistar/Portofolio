import jwt from 'jsonwebtoken'
import config from '../../config/config.js'

const requireSignin = (req, res, next) => {
  const authHeader = req.headers.authorization || ''
  let token = null

  if (authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1]
  } else if (req.cookies && req.cookies.t) {
    token = req.cookies.t
  }

  if (!token) {
    return res.status(401).json({ error: 'No token provided, authorization denied' })
  }

  try {
    req.auth = jwt.verify(token, config.jwtSecret)
    next()
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' })
  }
}

export default requireSignin
