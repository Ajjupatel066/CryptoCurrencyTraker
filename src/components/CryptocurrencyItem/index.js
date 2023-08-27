// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrency} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptocurrency

  return (
    <li className="currency-item">
      <div className="crypto-name-logo-container">
        <img src={currencyLogo} className="currency-logo" alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="values">
        <p className="currency-value">{euroValue}</p>
        <p className="currency-value">{usdValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
