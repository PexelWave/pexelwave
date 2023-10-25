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
    service: string;
    fullName: string;
    companyName: string;
    contactNumber: string;
    message: string;
    senderEmail: string;
  };
  
  const QuotationFormEmail = ({ service, fullName, companyName, message, senderEmail, contactNumber,}: ContactFormEmailProps) => {
    return (
      <Html>
        <Head />
        <Preview>Quotation Request From {fullName}</Preview>
        <Tailwind>
          <Body className="bg-purple text-light-foreground">
            <Container>
              <Section className="p-4">
                <Heading>{service} Quotation Request</Heading>
                <Text>Sender: {fullName} | {senderEmail} | {companyName} | {contactNumber}</Text>
                <Hr />
                <Text>{message}</Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  
  export default QuotationFormEmail;
  