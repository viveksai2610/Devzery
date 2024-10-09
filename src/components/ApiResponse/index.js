const ApiResponse = ({response}) => (
  <div className="api-response">
    <pre>{JSON.stringify(response)}</pre>
  </div>
)
export default ApiResponse
