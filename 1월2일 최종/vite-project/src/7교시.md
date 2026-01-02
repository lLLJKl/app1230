import { useState } from 'react'

const App = () => {
//     const [c, setC] = useState{"name":"", "desc":""}
//     const event = (e) => {
//       console.log(e.target)
//       console.log(e.target.name)
//       console.log(e.target.value)
//    setC({...c, [e.targer.value]:e.targer.value})
//   }
  
   const [name, setName] = useState("")
   const [desc, setDesc] = useState("")
   const event = () => {
    const data ={name, desc}
    console.log(data)
   }
  
  return (
    <>
     {/* <input type='text' value={c.name} 
            name='name' 
            onChange={event} />
     <input type='text' value={c.desc}
            name='desc'
            onChange={event} /> */}
     <input type='text' value={name} 
            onChange={e=>setName(e.target.value)} />
     <input type='text' value={desc} 
            onChange={e=>setDesc(e.target.value)} />
     <button type="button" onClick={event}>합치기</button>
    </>
  )
}

export default App
