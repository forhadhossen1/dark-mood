
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [darkMoode, setDarkMode] = useState(false);

  useEffect(() => {
    if(darkMoode){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  }, [darkMoode])

  return (
    <>
      <div className='dark:bg-purple-400'>
        <h1 className='text-center font-bold text-4xl '>Black & Whit</h1>

        <div className='flex my-8 gap-2 items-center align-middle'>

          <p className='border rounded-md p-6 bg-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aut, dolores dolorem rem, facilis ducimus reiciendis delectus suscipit fugiat obcaecati necessitatibus sit vitae perferendis odio magni saepe consectetur nulla illo culpa illum neque quibusdam! Voluptatibus iure laudantium aliquam, veritatis nemo accusamus quidem, sint quas, magnam dolorum dignissimos neque illo voluptatem.</p>

          <p className='border rounded-md p-6 bg-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aut, dolores dolorem rem, facilis ducimus reiciendis delectus suscipit fugiat obcaecati necessitatibus sit vitae perferendis odio magni saepe consectetur nulla illo culpa illum neque quibusdam! Voluptatibus iure laudantium aliquam, veritatis nemo accusamus quidem, sint quas, magnam dolorum dignissimos neque illo voluptatem.</p>
        </div>

        <button 
        onClick={() => {
          setDarkMode(!darkMoode)
        }}
        className='p-5 bg-gray-500 rounded-lg dark:bg-gray-300'>
          { !darkMoode ? 'Light' : 'Dark'} Mood </button>
      </div>

      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eos voluptates maiores iste consequuntur minima ipsam id reprehenderit, officiis reiciendis vel, nisi maxime libero ipsa perferendis. Laboriosam aut natus in enim incidunt, consectetur earum inventore, fuga temporibus perspiciatis, ducimus quidem quod? Consectetur illo mollitia voluptatibus voluptate illum impedit autem nobis!</p>
      </div>
    </>
  )
}

export default App
