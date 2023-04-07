import server from './src/config/app.js'
import database from './src/config/db.js'

const port = process.env.PORT || 3001

database();
server.listen(`${port}`, () => {
  // eslint-disable-next-line no-console
  console.log(`running server on http://localhost:${port}`)
})
