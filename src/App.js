import './App.css';
import React, { useState } from 'react';


function App() {
  const [values, setValues] = useState({
  firstName: '',
  lastName: '',
  email: ''
})
const handleFirstNameInputChange = (event) => {
  event.persist();
  setValues((values) => ({
    ...values,
    firstName: event.target.value
  }))
}
const handleLastNameInputChange = (event) => {
  event.persist();
  setValues((values) => ({
    ...values,
    lastName: event.target.value
  }))
}
const handleEmailInputChange = (event) => {
  event.persist();
  setValues((values) => ({
    ...values,
    email: event.target.value
  }))
}
const handleSubmit = (e) => {
  e.preventDefault();
  if(values.firstName && values.lastName && values.email){
    setValid(true);
  }
  setSubmitted(true)
}
const [submitted, setSubmitted] = useState(false);

const [valid, setValid] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        

<form className="register-form" onSubmit={handleSubmit}>
  <input
    id="first-name"
    class="form-field"
    type="text"
    placeholder="First Name"
    name="firstName"
    value={values.firstName}
    onChange = {handleFirstNameInputChange}
/>
{submitted && !values.firstName &&<span class="first-name-error">Please enter a first name.</span>}
<input
    id="last-name"
    class="form-field"
    type="text"
    placeholder="Last Name"
    name="lastName"
    value={values.lastName}
    onChange = {handleLastNameInputChange}
/>
{submitted && !values.lastName && <span class="last-name-error">Please enter a last name.</span>}
<input
    id="email"
    class="form-field"
    type="text"
    placeholder="Email"
    name="email"
    value={values.email}
    onChange = {handleEmailInputChange}
/>
{submitted && !values.email && <span class="email-error">Please enter a email.</span>}
<input type="submit"></input>
</form>

{(submitted && valid)&& <div class="success-message">Success! Thank you for registering!</div>}
      </header>
    </div>
  );
}

export default App;
