import React from "react";
import styled from "styled-components";
import backgroundImage from "./backgroundImage.jpg"; // Adjust for correct relative path

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background-color:white;
  text-align: center;
  background-image: url(${backgroundImage}); /* Add the background image */
  background-size: cover; /* Make the image cover the entire section */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent the image from repeating */
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: rgb(24, 173, 29);
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.2rem;
  color: #333;

  i {
    font-size: 1.5rem;
    color: rgb(24, 173, 29);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  a {
    text-decoration: none;
    color: rgb(24, 173, 29);
    font-size: 1.5rem;

    &:hover {
      color: rgb(7, 117, 12);
    }
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  width: 100%;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(20, 17, 17, 0.1);
  border-radius: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
`;

const SubmitButton = styled.button`
  background-color:rgb(24, 173, 29);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: rgb(7, 117, 12);
  }
`;

function Contact() {
  return (
    <ContactSection>
      <Title>Contact Us</Title>
      <ContentWrapper>
        {/* Contact Info */}
        <ContactInfo>
          <InfoItem>
            <i className="fas fa-map-marker-alt"></i>
            <span>123 Main Street, Gorakhpur, India</span>
          </InfoItem>
          <InfoItem>
            <i className="fas fa-phone-alt"></i>
            <span>+123 456 7890</span>
          </InfoItem>
          <InfoItem>
            <i className="fas fa-envelope"></i>
            <span>contact@yourwebsite.com</span>
          </InfoItem>
          {/* Social Links */}
          <SocialLinks>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </SocialLinks>
        </ContactInfo>

        {/* Contact Form */}
        <ContactForm>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <TextArea rows="5" placeholder="Your Message" required />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContentWrapper>
    </ContactSection>
  );
}

export default Contact;
