import React, { Component } from 'react'
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin'

Kommunicate.init('1e2c79ba92a9bfdcc1881c5bd3e731634', {
  automaticChatOpenOnNavigation: true,
  popupWidget: true,
})

export default class ChatBot extends Component {
  render() {
    return <></>
  }
}
