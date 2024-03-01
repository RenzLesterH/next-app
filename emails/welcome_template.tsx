import React from "react";
import { Html, Container, Text, Link, Preview, Body, Tailwind } from "@react-email/components";

const WelcomeTemplate = ({name}: {name: string}) => {
  return (
    <Html>
        <Preview>Welcome Mf</Preview>
        <Tailwind>
            <Body className="bg-white">
                <Container>
                    <Text className="font-bold text-3xl">Hello {name}</Text>
                    <Link href="https://codewithmosh.com/">https://codewithmosh.com/</Link>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}

export default WelcomeTemplate;