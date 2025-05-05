import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignup, setIsSignup] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    let result
    if (isSignup) {
      result = await supabase.auth.signUp({ email, password })
    } else {
      result = await supabase.auth.signInWithPassword({ email, password })
    }
    if (result.error) setError(result.error.message)
    else alert('Success! 🎉')
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded-xl">
      <h2 className="text-2xl font-bold mb-4">{isSignup ? 'Тіркелу' : 'Кіру'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" value={email} onChange={e => setEmail(e.target.value)}
          placeholder="Email" className="w-full p-2 border rounded" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)}
          placeholder="Құпиясөз" className="w-full p-2 border rounded" />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          {isSignup ? 'Тіркелу' : 'Кіру'}
        </button>
        <p className="text-sm text-center">
          {isSignup ? 'Аккаунтыңыз бар ма?' : 'Жаңа қолданушысыз ба?'}{' '}
          <button type="button" onClick={() => setIsSignup(!isSignup)} className="text-blue-600 underline">
            {isSignup ? 'Кіру' : 'Тіркелу'}
          </button>
        </p>
      </form>
    </div>
  )
}
