import useForm from './Hooks/useForm';

function App() {

  const formLogin = () => {

    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  }

  const {handleChange, values,errors,handleSubmit} = useForm(formLogin);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="E-mail"  onChange={handleChange}   />
        {errors.email && <p>{errors.email}</p>}
      <input minLength='8' type="password" name="password" placeholder="password"  onChange={handleChange}   />
        {errors.password && <p>{errors.password}</p>}
      <input type="text" minLength='5' required name="username" placeholder="username"  onChange={handleChange}   />
        {errors.username && <p>{errors.username}</p>}
      <input type="submit" value="Submit" className="submit"  />
      </form>

    </div>
  );
}

export default App;