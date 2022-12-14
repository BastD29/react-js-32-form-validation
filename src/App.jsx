import React from 'react'
import useForm from './hooks/useForm'

export default function App() {

  const formLogin = () => {
    console.log('Callback function when form is submitted!');
    console.log('Form Values', values);
  }

  const { values, errors, handleChange, handleSubmit } = useForm(formLogin);

  return (
    <div className="App">
      <form 
        style={{ display: 'flex', flexDirection: 'column', width: '200px' }}
        onSubmit={handleSubmit}
      >
        <input 
          type="email" 
          name="email" 
          placeholder="E-mail"   
          onChange={handleChange}
        />
        {errors.mail && <p>{errors.email}</p>}
        <input 
          minLength='8'
          type="password" 
          name="password" 
          placeholder="password"  
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
        <input 
          type="text" 
          name="username" 
          placeholder="username"  
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}
        <input 
          type="submit" 
          value="Submit" 
          className="submit"  
          onChange={handleChange}
        />
      </form>
    </div>
  )
}
