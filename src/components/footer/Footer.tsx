function Footer() {

    const data = new Date().getFullYear()

  return (
    <div className="flex justify-center bg-rose-500 text-white">
        <div className="container flex flex-col items-center py-4">
            <p className="text-xl font-bold">Farmácia Thichi | Copyright": {data}</p>
        </div>
    </div>
  )
}

export default Footer