// Write your JS code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    currencyList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))

    this.setState({currencyList: updatedData, isLoading: false})
  }

  renderCryptoCurrency = () => {
    const {currencyList} = this.state
    return (
      <div className="app-container">
        <h1 className="title">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-img"
        />
        <div className="crypto-details-card">
          <div className="header-details">
            <p className="header-text">Coin Type</p>
            <div className="currency">
              <p className="currency-value-name">USD</p>
              <p className="currency-value-name">EURO</p>
            </div>
          </div>
          <ul className="cryptocurrency-list">
            {currencyList.map(eachItem => (
              <CryptocurrencyItem cryptocurrency={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptoCurrency()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
