import React from "react"
import Typing from "react-typing-animation"
import uuid from "uuid/v4"
import { Text } from "../../../Text/Text"

export const TypingList = ({ as, loop, delay, textList }) => (
  <Typing loop={loop}>
    <Text as={as} color="#000" background="#fff">
      {textList.map(text => (
        <React.Fragment key={uuid()}>
          {text}
          <Typing.Delay ms={delay} />
          <Typing.Backspace count={text.length + 1} />
        </React.Fragment>
      ))}
    </Text>
  </Typing>
)
