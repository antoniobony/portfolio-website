import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { SnackbarProvider, enqueueSnackbar } from 'notistack'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 25px;
  color:white;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: gray;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 26px;
  font-weight: 600;
  color: white;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid gray;
  outline: none;
  font-size: 18px;
  color: white;
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid hsla(271, 100%, 50%, 1);;
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid gray;
  outline: none;
  font-size: 18px;
  color: white;
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid hsla(271, 100%, 50%, 1);;
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background-color: hsla(271, 100%, 50%, 1);
  background:linear-gradient(
        225deg,
        hsla(271,100%,50%,1) 0%,
        hsla(294,100%,50%,1) 100%);
  background: -moz-linear-gradient(
        225deg,
        hsla(271,100%,50%,1) 0%,
        hsla(294,100%,50%,1) 100%,
    );

    background:-webkit-linear-gradient(
        225deg,
        hsla(271,100%,50%,1) 0%,
        hsla(294,100%,50%,1) 100%
    );
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  padding: 13px 16px;
  margin-top: 20px;
  border-radius: 12px;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_9szi5g3",
          "template_dfzzf0s",
          form.current,
          "HQXZH-zdhP_mAx9Wv"
        )
        .then(
          (result) => {
            enqueueSnackbar("Message Sent",{
              variant:"success"
              })
            form.current?.reset();
          },

          (error) => {
            enqueueSnackbar(`Failed to send message: ${error.text}`,{
              variant:"error"
              })
          }
        );
    }
  };

  return (
    <Container className="xl:mt-[150px] mt-10" id="Contact">
      <SnackbarProvider/>
      <Wrapper>
        <Title>Contact</Title>
        <Desc style={{ marginBottom: "40px" }}>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle className="mx-auto">Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" required />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage
            placeholder="Message"
            name="message"
            rows={4}
            required
          />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
