import {useState} from 'react'
import axios from 'axios'
import './App.css'
import TestCaseForm from './components/TestCaseForm'
import ApiResponse from './components/ApiResponse'

const App = () => {
  const [responseData, setResponseData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchApiData = async () => {
    setLoading(true)
    setError(null)

    try {
      const usersResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      )
      const userId = usersResponse.data[0].id

      const postResponse = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          title: 'Sample Post Title',
          body: 'This is a sample post body.',
          userId,
        },
      )

      const postId = postResponse.data.id

      const commentsResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
      )

      setResponseData({
        users: usersResponse.data,
        post: postResponse.data,
        comments: commentsResponse.data,
      })
    } catch (err) {
      setError('Failed to fetch data. Please try again.')
    }

    setLoading(false)
  }

  return (
    <div className="app">
      <h1 className="title">Devzery</h1>

      <TestCaseForm />

      <div className="actions">
        <button
          type="button"
          className="btn-fetch"
          onClick={fetchApiData}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Fetch API Data'}
        </button>
        {error && <div className="error-message">{error}</div>}
        {responseData && <ApiResponse response={responseData} />}
      </div>
    </div>
  )
}

export default App
