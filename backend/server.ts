import express from 'express'
import cors from 'cors'
import authRoute from './Authent/auth.route'
import produitRoute from './Produits/produit.route'
import userRoute from './Users/users.route'

const app = express()
const port = 3306

app.use(cors({}))

app.use(express.json())
app.use('/api/produits', produitRoute)
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
