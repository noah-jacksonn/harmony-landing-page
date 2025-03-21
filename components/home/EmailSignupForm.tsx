'use client'

import { useState } from 'react'

/**
 * Email signup form component using Mailchimp
 * Styled to match Harmony design language with improved visibility
 */
export default function EmailSignupForm() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevent the default form submission
    setIsSubmitting(true)
    setIsError(false)
    
    try {
      // Format the data for Mailchimp
      const formData = new FormData()
      formData.append('EMAIL', email)
      formData.append('b_f8fdaa0c5611b58823ebfb1e3_313637ac16', '') // The bot protection field
      
      // Convert to URL encoded string for fetch
      const urlEncodedData = new URLSearchParams(formData as any).toString()
      
      // Make the request to Mailchimp
      const response = await fetch(
        'https://gmail.us4.list-manage.com/subscribe/post-json?u=f8fdaa0c5611b58823ebfb1e3&id=313637ac16&c=?', 
        {
          method: 'POST',
          body: urlEncodedData,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          mode: 'no-cors', // This is important for cross-origin requests
        }
      )

      // Since no-cors mode doesn't allow us to read the response,
      // we'll just assume success if no error is thrown
      setMessage('Thanks for signing up! We\'ll notify you when we launch.')
      setEmail('')
    } catch (error) {
      console.error('Error submitting form:', error)
      setMessage('Something went wrong. Please try again.')
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full rounded-xl p-4 shadow-md">
      <div className="flex items-center justify-center mb-4 relative">
        <h3 className="text-xl font-light text-white">Get notified at launch</h3>
        
        {/* Custom curved arrow - positioned to the right side */}
        <div className="absolute -right-2 -bottom-3 sm:right-14">
          <svg 
            width="40" 
            height="30" 
            viewBox="0 0 40 30" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white opacity-90 animate-bounce"
          >
            <path 
              d="M10 2C15 2 30 2 30 12V24" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round"
            />
            <path 
              d="M23 17L30 24L37 17" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      
      <form
        className="flex flex-col sm:flex-row gap-3"
        onSubmit={handleSubmit}
      >
        <div className="flex-grow">
          <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="w-full px-4 py-2 rounded-full font-light bg-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/50"
          />
        </div>
        
        {/* Hidden input to prevent bot signups */}
        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
          <input 
            type="text" 
            name="b_f8fdaa0c5611b58823ebfb1e3_313637ac16" 
            tabIndex={-1} 
            value="" 
            readOnly 
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="whitespace-nowrap bg-harmony-blue text-white font-light px-4 py-2 rounded-full hover:bg-blue-800 transition-colors duration-200 shadow-md"
        >
          {isSubmitting ? 'Submitting...' : 'Sign Up'}
        </button>
      </form>
      
      {message && (
        <p className={`mt-2 text-sm ${isError ? 'text-red-600' : 'text-white'} p-2 rounded text-center`}>
          {message}
        </p>
      )}
    </div>
  )
} 