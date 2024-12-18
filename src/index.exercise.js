import '@reach/dialog/styles.css'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Dialog } from '@reach/dialog';

// 🐨 you'll also need to import the Logo component from './components/logo'
import { Logo } from "components/logo";

function LoginForm({ onSubmit, buttonText }) {
  function handleSubmit(event) {
    event.preventDefault()
    const { username, password } = event.target.elements
    onSubmit({
      username: username.value,
      password: password.value,
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input id='password' type='password' />
      </div>
      <div>
        <button type='submit'>{buttonText}</button>
      </div>
    </form>
  )
}

function App() {
  const [openModal, setOpenModal] = useState('none')

  function login(formData) {
    console.log('login', formData);
  }
  function register(formData) {
    console.log('register', formData);
  }


  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>

        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>
      <Dialog area-label="Login form" isOpen={openModal === 'login'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
          <h3>Login</h3>
          <LoginForm onSubmit={login} buttonText='Login' />
        </div>
      </Dialog>
      <Dialog area-label="Register form" isOpen={openModal === 'register'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
          <h3>Register</h3>
          <LoginForm onSubmit={register} buttonText='Register' />
        </div>
      </Dialog>
    </div>
  )
}
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

// 🐨 use createRoot to render the <App /> to the root element
// createRoot(document.getElementById('root'), <App />)
// 💰 find the root element with: document.getElementById('root')
ReactDOM.render(<App />, document.getElementById('root'))
