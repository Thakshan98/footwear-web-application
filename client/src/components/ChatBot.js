import React, { Component } from 'react'
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

Kommunicate.init("3965db72f34386a490631d4c0c9e61eb9", {
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
