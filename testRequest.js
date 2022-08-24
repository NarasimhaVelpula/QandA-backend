const axios = require('axios')

async function sendMessage() {
  const data = {
    "messaging_product": "whatsapp",
    "to": "919949911067",
    "type": "template",
    "template": {
      "name": "about",
      "language": {
        "code": "en"
      }
    }
  }

  const headers = {
    'Authorization': "Bearer EAAIJncZCPfnoBAElQntaqvdTn1tJ1UqaPZBRas75tofGfSAoRmxOzHK8KDSo29lDL1DZAgAucy6BhGui66RLN3xKDEctsTsBVUBRD71esUbbnqf20nMzQERPGZCSeiiJZAf8YCkscxylym7NG6kRabLfNfhFa8OVJTy5dGbM0nHffkEIf8CBPOmXZBnnBzLZC9k0jShrNlFfAZDZD",
    "Content-Type": "application/json"
  }
  try {
    let result = await axios.post('https://graph.facebook.com/v13.0/110516435077052/messages', data, { headers: headers })
    console.log(result)
  }
  catch (err) {
    console.log(err)
  }

}


sendMessage()
