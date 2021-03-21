import React, { useState } from 'react'
import {One, FormWrapper, Wrapper, CopyWrite, Three, ThreeContentOne, StyledButton, StyledError, ThreeContentTwo, ThreeContentMenu, OneContentOne, OneContentMenu, OneContentTwo,   InputContainer, StyledForm, StyledInput, TextArea, StyledButtonWrapper, CopyWriteWrapper, OneWrapper, ThreeWrapper, StyleLink } from './FooterStyles'
import { Link } from 'react-router-dom'


export type FormTypes = {
   handleSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
   onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
//    name?: string;
//    email?: string;
//    message?: string;
}

const initalState: { [state: string]: any; }  = {
    name: '',
    email: '',
    // message: '',
    };

const Footer: React.FC<FormTypes> = () => {
    const [state, setState] = useState(initalState);
    const [error, setError] = useState('');

    const today = new Date().getFullYear();


    const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submitted!');
        console.log(state);
    
        for (let key in state) {
          if (state[key] === '') {
            setError(`You must provide the ${key}`)
            return
          }
        }
        setError('');
        // const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        // const test = regex.test(state.email);
        // console.log(test);
    
        console.log("Succeeded!!!")
      };

      const handleInput = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputName = event.currentTarget.name;
        const value = event.currentTarget.value;
    
        setState(prev => ({ ...prev, [inputName]: value }));
      };


    return (
          <div>

          
            <Wrapper>
             <One>
               <OneWrapper>
                <OneContentOne>
                    <OneContentMenu>TITLE</OneContentMenu>
                  </OneContentOne>
              
              
                <OneContentTwo>
                      <h2>323 Apples Avenue</h2>
                    <h2>Apples, AP 99315</h2>
                    <h2>info@apples.apples</h2>
                    <h2>123-456-7890</h2>
                </OneContentTwo>
               </OneWrapper>
          
               
             
            </One>




            <InputContainer>
                <FormWrapper>
                    <StyledForm onSubmit={handleSubmit}>
                        <h1>Contact Form</h1>
                        <label htmlFor="name">Name</label>
                        <StyledInput type="text" name="name" onChange={handleInput}/>
                        
                        <label htmlFor="email">Email</label>
                        <StyledInput type="emai" name="email" onChange={handleInput}/>
                        
                        <label htmlFor="message">Message</label>
                        <TextArea name="message" onChange={handleInput}/>
                        {error && (
                        <StyledError>
                        <p>{error}</p>
                        </StyledError>
                            )}
                            <StyledButtonWrapper>
                              <StyledButton type="submit">Submit</StyledButton>
                            </StyledButtonWrapper>
                    </StyledForm>
                </FormWrapper>
            </InputContainer>





            <Three>
              <ThreeWrapper>
                <ThreeContentOne>
                    <ThreeContentMenu>Menu</ThreeContentMenu>
                  </ThreeContentOne>
              
              
                <ThreeContentTwo>
                      <Link to="/"><StyleLink >Home</StyleLink></Link>
                    <Link to="/about"><StyleLink>About</StyleLink></Link>
                    <Link to="/services"><StyleLink>Services</StyleLink></Link>
                    <Link to="/pricing"><StyleLink>Pricing</StyleLink></Link>
                </ThreeContentTwo>
                
              </ThreeWrapper>
             
               
            </Three>
          
            </Wrapper>

            <CopyWriteWrapper>

<CopyWrite>Copyright &copy; {today} Luis Martinez.</CopyWrite>
</CopyWriteWrapper>
            </div>
    )
}

export default  Footer;
