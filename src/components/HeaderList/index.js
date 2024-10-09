import './index.css'

const HeaderList = props => {
  const {headers, setHeaders} = props
  const handleAddHeader = () => {
    setHeaders([...headers, {key: '', value: ''}])
  }

  return (
    <div className="headers-section">
      <h3>Headers</h3>
      {headers.map(header => (
        <div key={header} className="header-item">
          <input type="text" placeholder="Key" value={header.key} />
          <input type="text" placeholder="Value" value={header.value} />
        </div>
      ))}
      <button
        type="button"
        className="btn-add-header"
        onClick={handleAddHeader}
      >
        Add Header
      </button>
    </div>
  )
}

export default HeaderList
