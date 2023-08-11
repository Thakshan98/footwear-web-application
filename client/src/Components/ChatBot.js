import React, { Component } from 'react'
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

Kommunicate.init("12c1660e4328d6f352d4424bd488f0d67", {
    automaticChatOpenOnNavigation: true,
    popupWidget: true
  });

export default class ChatBot extends Component {
  render() {
    return (
      <>
        
      </>
    )
  }
}
