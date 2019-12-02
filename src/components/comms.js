import React, { useState } from 'react';
import useEvents from '../hooks/events.js';
import usePostMessage from '../hooks/postmessage.js';

function C() {
  const [sendMessage] = usePostMessage();

  return (
    <button onClick={() => sendMessage('Dope message for you.')}>Click for Message</button>
  )
}

function Comms () {

  const [message, setMessage] = useState();

  const messageHandler = message => {
    setMessage(message);
  }

  const [sayOuch, ouch] = useEvents('ouch');
  const [sayok, ok] = useEvents('cool-ok');

  usePostMessage(messageHandler);

  const sendMessages = e => {
    sayOuch('dont do that');
    sayok('sure, that ok')
  }

  return(
    <>
      <p>Message: { message }</p>
      <p>Wrong: { ouch }</p>
      <p>OK msg: { ok }</p>
      <button onClick={sendMessages}>Send</button>
      <C />
    </>
  )
}

export default Comms;