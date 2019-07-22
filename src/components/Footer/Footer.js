import React from "react"
import styled from "styled-components"
import ContactForm from "./ContactForm/ContactForm"

const FooterSt = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 2em;
`

const Footer = () => (
  <FooterSt>
    <ContactForm />
  </FooterSt>
)

export default Footer
