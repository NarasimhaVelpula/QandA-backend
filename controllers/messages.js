const axios = require('axios')
const Users = require('../models/User')
const Questions = require('../models/Questions')

const sendMessage = async (data) => {
  const headers = {
    'Authorization': "Bearer EAAIJncZCPfnoBAIL7ShB6rwE1HLVIgODjdgf7rNGyJ5BjTTTqLNYIUdhywVBbg73GQV63jnVoUqhhzDD7qcv25RZB94Yuc14bJ3lqL21s558fHRaZAUuT7KwdrIhZAA4D4iuF7ZAOVARw7ALND48nQpcfP9ZCOTEx1blYxlG80kZBIoz7HtfK0jBaQKxUWDa1zzdCmoEZAEgZBgZDZD",
    "Content-Type": "application/json"
  }
  try {
    let result = await axios.post('https://graph.facebook.com/v13.0/110516435077052/messages', data, { headers: headers })
    if (result.data) {
      let message_data = result.data
      console.log(message_data)
      return message_data.messages.id
    }
  }
  catch (err) {
    console.log(err)
  }
}

const handleGetMessage = async (req, res) => {
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];
  if (mode && token) {
    // Check the mode and token sent are correct
    if (mode === "subscribe" && token === "hello") {
      // Respond with 200 OK and challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      const payload = JSON.parse(challenge)
      for (let entry of payload.entry) {
        //console.log(entry)
        //const { id: conversationId, changes: { value: { contacts: { profile: { name }, wa_id: mobileNumber } }, messages: { messages }, statuses: { statuses } } } = entry
        const { id: conversationId, changes } = entry
        for (let change of changes) {
          //console.log(change.value.contacts)
          const { value: { contacts, messages, statuses } } = change
          for (let contact of contacts) {
            var { profile: { name }, wa_id: mobileNumber } = contact

          }
          // console.log(conversationId, name, mobileNumber, messages, statuses)
          if (messages) {
            for (let message of messages) {
              let { id: messageId, type, text, interactive, button } = message
              let requiredUser = await Users.findOne({ whatsappId: conversationId })
              if (requiredUser) {
                requiredUser.whatsappProfileName = name
                requiredUser.whatsappPhoneNumber = mobileNumber
              }
              else {
                var questions = await Questions.find({})
                let firstQuestion = questions[0]
                requiredUser = new Users({
                  whatsappProfileName: name,
                  whatsappPhoneNumber: mobileNumber,
                  whatsappId: conversationId,
                  questions: [firstQuestion]
                })
              }
              requiredUser.save()
              if (type === "text") {
                const data = {
                  "messaging_product": "whatsapp",
                  "to": mobileNumber,
                  "type": "template",
                  "template": {
                    "name": "about",
                    "language": {
                      "code": "en"
                    }
                  }
                }

                sendMessage(data)


              }

              if (type === "button") {
                const { payload, text } = button
                if (text === "Subscribe For Free") {
                  //console.log(requiredUser)
                  const currentQuestions = requiredUser.questions.filter(question => question.userAnswer === "")
                  const currentQuestion = currentQuestions[0]
                  const options = currentQuestion.incorrectAnswers
                  options.push(currentQuestion.correctAnswer)
                  options.sort()
                  const data = {
                    "messaging_product": "whatsapp",
                    "to": mobileNumber,
                    "type": "interactive",
                    "interactive": {
                      "type": "list",
                      "header": {
                        "type": "text",
                        "text": "Question-1"
                      },
                      "body": {
                        "text": currentQuestion.question
                      },
                      "footer": {
                        "text": "Enjoy Learning"
                      },
                      "action": {
                        "button": "View Options",
                        "sections": [
                          {
                            "title": "Options",
                            "rows": [
                              {
                                "id": "option-1",
                                "title": options[0]
                              },
                              {
                                "id": "option-2",
                                "title": options[1]
                              },
                              {
                                "id": "option-3",
                                "title": options[2]
                              },
                              {
                                "id": "option-4",
                                "title": options[3]
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                  requiredUser.status = "Subscribed"
                  response_id = await sendMessage(data)
                  currentQuestion.messageId = response_id
                  requiredUser.save()

                }
                else {
                  const data = {
                    "messaging_product": "whatsapp",
                    "recipient_type": "individual",
                    "to": "919949911067",
                    "type": "text",
                    "text": {
                      "preview_url": false,
                      "body": "Thankyou for showing interest in Our application, Please ping something here to tryagain..."
                    }
                  }
                  requiredUser.status = "Unsubscribed"
                  sendMessage(data)
                  requiredUser.save()
                }
              }

              if (type === "interactive") {
                const { list_reply: { title: ans } } = interactive
                requiredQuestion = requiredUser.questions.findOne(question => question.messageId = messageId)

                if (ans) {
                  requiredQuestion.userAnswer = ans
                  requiredUser.currentQuestion = requiredUser.currentQuestion + 1
                  var questions = await Questions.find({})
                  var currentQuestion = questions[requiredUser.currentQuestion]
                  const options = currentQuestion.incorrectAnswers
                  options.push(currentQuestion.correctAnswer)
                  options.sort()
                  const data = {
                    "messaging_product": "whatsapp",
                    "to": mobileNumber,
                    "type": "interactive",
                    "interactive": {
                      "type": "list",
                      "header": {
                        "type": "text",
                        "text": "Question-1"
                      },
                      "body": {
                        "text": currentQuestion.question
                      },
                      "footer": {
                        "text": "Enjoy Learning"
                      },
                      "action": {
                        "button": "View Options",
                        "sections": [
                          {
                            "title": "Options",
                            "rows": [
                              {
                                "id": "option-1",
                                "title": options[0]
                              },
                              {
                                "id": "option-2",
                                "title": options[1]
                              },
                              {
                                "id": "option-3",
                                "title": options[2]
                              },
                              {
                                "id": "option-4",
                                "title": options[3]
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                  response_id = await sendMessage(data)
                  currentQuestion.messageId = response_id
                  requiredUser.save()
                }

              }

            }
          }
        }

      }

      res.sendStatus(200)
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
  else {
    res.sendStatus(400)
  }
}

module.exports = { handleGetMessage }