import './Home.css'

function Home() {
  return (
    <div className='bg-rose-500 flex justify-center'>
        <div className='container grid grid-cols-2 text-white'>
            <div className='flex flex-col gap-4 py-4 text-center'>
                <h2 className='text-5xl font-bold'>
                    Thichi's Drugstore
                </h2>
                <p className='text-xl'>Search here for your medicines!</p>
                <div className='flex justify-around gap-4'>
                    <button className='hover:scale-105 transition-all rounded bg-white text-rose-500 py-2 px-4'>See products</button>
                </div>
            </div>
            <div className='flex justify-center'>
                <img src="" alt="Insert here some shit" className='w-2/3' />
            </div>
        </div>
    </div>
  )
}

export default Home