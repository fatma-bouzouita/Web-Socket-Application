import { useState } from 'react'
import { useEffect } from 'react'
import { socket } from './socket'

export default function ApiReqLoop() {
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const handleMessage = (message) => {
    const payload = { sender: user?.email, message }
    socket.emit('message', payload)
    setMessages(prev => [...prev, payload])
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    handleMessage(message)
  }
  const onConnect = () => {
    console.log('connected')
  }

  socket.on('connect', onConnect);
  socket.on('disconnect', (event) => console.log('disconnected ' + event));
  socket.on('message', (message) => {
    setMessage('')
    setMessages(prev => [...prev, message])
  })

  useEffect(() => {
    fetch('http://localhost:5000/user').then(res => res.json()).then(data => setUser(data))

  }, [user])

  return (
    <div className='flex flex-col gap-20'>
      {
        user &&
        <div>
          <h1 className='font-bold text-3xl flex flex-col gap-10'>User</h1>
          {JSON.stringify(user)}
        </div>
      }
      <div>
        <h1 className='font-bold text-3xl flex flex-col gap-10'>Messages</h1>
        <form onSubmit={handleSubmit} className='mt-5 flex gap-5'>
          <input type="text" className='border rounded-sm h-9' onChange={(e) => setMessage(e.target.value)} value={message} />
          <button type='submit' className='px-5 py-2 bg-green-400 rounded'>Send</button>
        </form>
        <ul>
          {messages?.map((item, index) => (

            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
