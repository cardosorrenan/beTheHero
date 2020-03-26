const connection = require('../database/connection')
const crypto = require('crypto')

/* 
 * Query params: named params sent on routes > request.query
 * Route params: params used to identify resources > request.params
 * Request body: used for create and update resources > request.body
 * Headers: save all context of request (ex: auth) > request.headers
*/

module.exports = {

  async index(request, response){
    const ongs = await connection('ongs').select('*');
    return response.json(ongs)
  },

  async create(request, response){
    const { name, email, whatsapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString('HEX')
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })
    return response.json({ id })
  }

}