import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Row,
  Column,
  Text,
} from "@react-email/components";
import React from "react";



const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const EmailTemplate = ({ userName,address,whatsappNumber,notes,cart,total }) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/craftopus1.png`}
          width="150"
          height="150"
          alt="craftopus"
          style={logo}
        />
        <Text style={paragraph}>Hi Baqlouzo,it's an order from { userName }</Text>
        <Text style={paragraph}>
         7alt twar2 geem 7alt twar2 geem galk order ya wlaaa.
        </Text>
        <Section
          style={{ ...paddingX, paddingTop: "40px", paddingBottom: "40px" }}
          >
          {cart.map((item)=>
          <Row style={{paddingTop:"20px",paddingBottom:"20px", }}>
            <Column>
              <Img
                src={`${baseUrl}${item.imgUrl}`}
                alt={item.title}
                style={{ float: "left" }}
                width="260px"
              />
            </Column>
            <Column style={{ verticalAlign: "top", paddingLeft: "12px" }}>
              <Text style={{ ...paragraph, fontWeight: "500" }}>
              {item.title}
              </Text>
              <Text style={global.text}>Quantity: {item.quantity}</Text>
              <Text style={global.text}>Price: {item.price}</Text>
            </Column>
          </Row>
          )}
        </Section>
        {/* <Section style={btnContainer}>
          <Button style={button} href="https://getkoala.com">
            Get started
          </Button>
        </Section> */}
        <Text style={paragraph}>

          Whatsapp:{whatsappNumber}
          <br />
        Notes: {notes}
        </Text>
        <Hr style={hr} />
        <Text style={footer}> 
          Total:{total} + shipping
        </Text>
        <Text style={footer}> 
          Deposite:{total*0.4}
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
        {address}        </Text>
      </Container>
    </Body>
  </Html>
);

// EmailTemplate.defaultProps = {
//   userFirstname: "User",
// };

export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};

const paddingX = {
  paddingLeft: "40px",
  paddingRight: "40px",
};
