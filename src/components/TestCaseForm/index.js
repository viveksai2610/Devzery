import {useState} from 'react'
import HeaderList from '../HeaderList'

const TestCaseForm = () => {
  const [apiSequence, setApiSequence] = useState(['Add Product To Cart API'])
  const [headers, setHeaders] = useState(['Content-Type'])

  return (
    <div className="test-case-form">
      <div className="header">
        <h2>New Test Case</h2>
        <button type="button" className="btn-add">
          Add
        </button>
        <button type="button" className="btn-cancel">
          cancel
        </button>
      </div>

      <div className="form-section">
        <input
          type="text"
          placeholder="Test Case Title"
          className="input-field"
        />
        <h3>Priority</h3>
        <select className="priority-dropdown">
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="api-sequence">
        <h3>Add API Sequence</h3>
        {apiSequence.map(eachApi => (
          <div key={eachApi}>
            <select className="api-dropdown">
              <option>{eachApi}</option>
            </select>
          </div>
        ))}
      </div>
      <HeaderList headers={headers} setHeaders={setHeaders} />
    </div>
  )
}
export default TestCaseForm
