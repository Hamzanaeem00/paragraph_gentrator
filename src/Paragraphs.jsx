import React, { useState } from 'react'
import text from './data/data'

const Paragraphs = () => {
    const [data , setData ]= useState([])
    const [count, setCount]= useState(0)
    console.log(data);

    const handleSubmit = (e)=> {
        // setData(text)
        e.preventDefault()
        let amount = parseInt(count)
        if(amount <= text.length){
            setData(text.slice(0,amount))
        } 
        if(amount <= 0){
            setData([])
        }
        if(amount > text.length){
            window.confirm(`Total Paragaph is ${text.length}`)
        }
        
    
        
    }
    // console.log(data);
  return (
    <section className='section-center'>
        <h3>
            Generate Paragraph
        </h3>
        <form action="" className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs</label>
        <input type="number" name='amount' id='amount' value={count} 
        onChange= { (e)=> setCount(e.target.value)}/>
        <button type='submit' className='btn'>generate</button>
        </form>
        <article className='lorem-text'>
         {data.map((paragraph, index)=>{
            return(
                <p key={index}>
                    {paragraph}
                </p>
            )
         })}

        </article>


    </section>
  )
}

export default Paragraphs