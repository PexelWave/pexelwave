import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Tailwind
} from "@react-email/components";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  fullname: string;
};

const ContactFormEmail = ({ message, senderEmail, fullname }: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Message From PEXELWAVE Website</Preview>
      <Tailwind>
        <Body className="bg-purple text-light-foreground">
          <Container>
            <Section className="p-4">
              <Heading>New Message From Contact Form</Heading>
              <Text>Sender: {fullname} | {senderEmail}</Text>
              <Hr />
              <Text>{message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
