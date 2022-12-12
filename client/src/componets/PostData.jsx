import Button from 'react-bootstrap/Button';
import { useState } from 'react'; 

function FormData() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [score, setScore] = useState('');

    
  const handleSubmit = (e) => {
    e.preventDefault();
    const update = {name, age, score};
    console.log(update)
    fetch('http://localhost:3000/scoreboard', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(update)
    })
    .then(() => {
      console.log('new item added');
    })
  };
  return (
    <div className="form-container">
      <h1>Submit your New Menu Items Here!</h1>
    <form className="signup-form" onSubmit={handleSubmit}>
        <input type="text"
          required 
          placeholder="name" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
          name="name"
          />
        <input type="text" 
          required 
          placeholder="age" 
          value={age} 
          onChange={(e) => setAge(e.target.value)}
          name="age" 
          />
        <input type="number" 
          required 
          placeholder='score' 
          value={score}
          onChange={(e) => setScore(e.target.value)} 
          name='score'/>
<Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </form>
</div>

  );
}


export default FormData;

