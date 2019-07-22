import React, { useState } from "react"
import styled from "styled-components"
import Text from "../../shared/Text/Text"

const ButtonSt = styled.button`
  background-color: #000;
`

const ContactForm = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const onSubmitHandler = event => {
    event.preventDefault()
    console.log(email, message)
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      name="footer-contact-form"
      data-netlify="true"
    >
      <input
        type="email"
        name="email"
        autoComplete="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <textarea
        value={message}
        name="message"
        onChange={e => setMessage(e.target.value)}
        required
      ></textarea>
      <ButtonSt type="submit">
        <Text>Send</Text>
      </ButtonSt>
    </form>
  )
}

export default ContactForm
