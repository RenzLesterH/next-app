import React from "react";
import { Html, Container, Text, Link, Preview, Body } from "@react-email/components";

const WelcomeTemplate = ({name}: {name: string}) => {
  return (
    <Html>
        <Preview>Welcome Mf</Preview>
        <Body>
            <Container>
                <Text>Hello {name}</Text>
                <Link href="https://codewithmosh.com/">https://codewithmosh.com/</Link>
            </Container>
        </Body>
    </Html>
  )
}

export default WelcomeTemplate