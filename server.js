import config from './config/config.js'
import app from './server/express.js'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const mongoUri = process.env.MONGO_URI || config.mongoUri

mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to the database!')
  })
  .catch(() => {
    console.error('unable to connect to database')
  })

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to My Portfolio application.' })
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
