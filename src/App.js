import React, {useState} from "react";

function App() {

  const [name, setname] = useState('Player')
  const [gender, setgender] = useState('')
  const [starterPokemon, setstarterPokemon] = useState('')
  const [gsonName, setgsonName] = useState('')
  const [goal, setgoal] = useState('TCEM')

  let answers = 
  [

  ]

  return (
        <>
          
          {/**  Q1 - Name */}
          <div>

            <div className='question'>
              <h2> Now then, what shall I call you? </h2>
            </div>

            <div className='answers'>
              <input  type={'text'}
                      placeholder={'Enter your name here...'} 
                      onChange={ (event) => { setname(event.target.value) }} >
              </input>
            </div>

          </div>

                    {/**  Q2 - Gender */}
          <div>

            <div className='question'>
              <h2> {name} , are you a BOY or a GIRL ? </h2>
            </div>

            <div className='answers' onChange={(event) => setgender(event.target.value)}>
              <input type={'radio'} name={'gender'} value={'boy'} ></input>
              <label> BOY </label>

              <br /> 

              <input type={'radio'} name={'gender'} value={'girl'}></input>
              <label> GIRL </label>

              <h2> {gender} </h2>
            </div>

          </div>

                    {/**  Q3 - Starter pokemon */}
          <div>

            <div className='question'>
              <h2> Here, pick one of these starter Pokemon </h2>
            </div>

            <div className='answers' onChange={(event) => setstarterPokemon(event.target.value)}>
              <input type={'radio'} name={'starter-pokemon'} value={'Bulbasaur'}></input>
                <label> Bulbasaur </label>

                <br /> 

                <input type={'radio'} name={'starter-pokemon'} value={'Charmander'}></input>
                <label> Charmander </label>

                <br /> 

                <input type={'radio'} name={'starter-pokemon'} value={'Squirtle'}></input>
                <label> Squirtle </label>

                <h2> {starterPokemon} </h2>
            </div>

          </div>

                    {/**  Q4 - Grandson name */}
          <div>

            <div className='question'>
              <h2> This is my grandson, what was his name again ? </h2>
            </div>

            <div className='answers'>
              <input type={'text'} placeholder={'Enter your name here...'} onChange={ (event) => setgsonName(event.target.value)}></input>
            </div>

          </div>

                    {/**  Q5 - Goal for the game */}
          <div>

            <div className='question'>
              <h2> Before I let you loose to explore the world of pokemon, what is your goal for this playthrough ? </h2>
            </div>

            <div className='answers'>
              <select onChange={ (event) => setgoal(event.target.value)}>
                <option value={'TCEA'}> To catch 'em all!</option>
                <option value={'Elite Four'}> To beat The Elite Four!</option>
                <option value={'Pikachu'}> To find my very own Pikachu!</option>
              </select>
              
            </div>

          </div>

        
        </>
  );
}

export default App;
