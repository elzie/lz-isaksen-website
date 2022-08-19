import React from 'react';
import styled from 'styled-components';

const ContactFormContainer = styled.div`
  margin: auto;
  width: 1250px;
  min-height: 500px;
  @media (max-width: 1300px) {
    width: 750px;
  }
`;
const Headline = styled.h1`
  color: #223555;
  font-weight: 400;
  margin: 1rem 0;
`;
const Info = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  justify-content: space-between;
  @media (max-width: 1300px) {
    grid-template-columns: 350px 350px;
  }
  input[type='text'],
  select,
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid rgba(34, 53, 85, 0.5);
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    transition: all 0.2s ease-in-out;
  }
  input,
  label {
    display: block;
  }
  input:focus,
  select:focus {
    background: #eef0f3;
    outline: none;
  }
  select:hover,
  input:hover {
    background: #eef0f3;
    outline: none;
  }
`;
const FullName = styled.div``;
const Email = styled.div``;
const Message = styled.div`
  display: grid;
  grid-template-columns: 1250px;
  justify-content: space-evenly;

  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid rgba(34, 53, 85, 0.5);
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    min-height: 150px;
    max-height: 600px;
    resize: vertical;
    transition: all 0.2s ease-in-out;
    :hover {
      background: #eef0f3;
      outline: none;
    }
    :focus {
      background: #eef0f3;
      outline: none;
    }
    @media (max-width: 1300px) {
      width: 80%;
      margin: auto;
    }
  }

  label {
    display: block;
    @media (max-width: 1300px) {
      width: 80%;
      margin: auto;
    }
  }
  input[type='submit'] {
    background: #eef0f3;
    margin: auto;
    cursor: pointer;
    width: 50%;
    padding: 12px;
    border: 1px solid rgba(34, 53, 85, 0.5);
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    transition: all 0.2s ease-in-out;
    :hover {
      background: #d9dce0;
      outline: none;
    }
    :focus {
      outline: none;
    }
  }
`;

class ContactForm extends React.Component {
  render() {
    return (
      <div>
        <ContactFormContainer>
          <Headline>Skriv til os</Headline>
          <form>
            <Info>
              <div>
                <FullName>
                  <label htmlFor='fname'>Fulde navn:</label>
                  <input
                    type='text'
                    id='fname'
                    name='firstname'
                    placeholder='Dit fulde navn..'
                  />
                </FullName>
                <Email>
                  <label htmlFor='email'>E-mail:</label>
                  <input
                    type='text'
                    id='email'
                    name='email'
                    placeholder='Din E-mail..'
                  />
                </Email>
              </div>
              <div>
                <div>
                  <label htmlFor='phonenr'>Tlf. nr.:</label>
                  <input
                    type='text'
                    id='phonenr'
                    name='phonenr'
                    placeholder='Dit tlf. nummer..'
                  />
                </div>
                <div>
                  {
                    // <label htmlFor='area'>Område/By:</label>
                    // <input
                    //   type='text'
                    //   id='area'
                    //   name='area'
                    //   placeholder='Hvor bor du?'
                    // />
                  }
                  <label htmlFor='area-title'>Vælg emne:</label>
                  <select id='area-title' name='area-title'>
                    <option value='privat'>Privat</option>
                    <option value='erhverv'>Erhverv</option>
                    <option value='inkasso'>Inkasso</option>
                  </select>
                </div>
              </div>
            </Info>
            <Message>
              <label htmlFor='subject'>Skriv en besked</label>
              <textarea
                id='subject'
                name='subject'
                placeholder='Write something..'
                style={{ height: '200px' }}
              ></textarea>

              <input
                type='submit'
                value='Send besked'
                onClick={this.handleSendEmail}
              />
            </Message>
          </form>
        </ContactFormContainer>
      </div>
    );
  }
}

export default ContactForm;
