
const sqlite = require('./database')

function candidateSearch(request, response) {
  const name = request.body.name.toUpperCase()
  const sql = "select cand_nome, cand_status,muni_nome, cand_votos " +
              "from votos_cand_municipio " +
              `where cand_nome like '${name}%'`

  sqlite.db.all(
    sql,
    (error, rows) => {
      if (error) {
        throw Error(error.message)
      }

      const data = rows.map((cand) => {
        return {
          name: cand.cand_nome,
          office: cand.cand_status,
          city: cand.muni_nome,
          votes: cand.cand_votos
        }
      })

      const json = JSON.stringify(data)
      response.send(json)
    }
  )

  console.log(name)
  console.log(sql)
}

module.exports = {
  candidateSearch
} 