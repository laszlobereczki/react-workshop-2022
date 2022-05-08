import React, {useState} from 'react';
import Amount from "./Amount";
import './Converter.css'

const BTC_EXCHR = 995
const ETH_EXCHR = 1.2


export default function Converter(props) {

    const [cryptoName, setCryptoName] = useState('BTC');
    const [exchangeRate, setExchangeRate] = useState(BTC_EXCHR);
    const [euroValue, setEuroValue] = useState(0);

    function convert(euroValue) {
        return (euroValue * exchangeRate).toFixed(2);
    }

    return (
        <div style={{...{display: 'flex'}}}>
            <p style={{...{display: 'inline', margin: '0'}}}>Euro value: </p>
            <input defaultValue={0} type='number' label='Euros'
                   onChange={(e) => setEuroValue(Number(e.target.value))}/>
            <p style={{...{display: 'inline'}}}> | </p>
            <select
                name="crypto"
                id="crypto"
                style={{...{display: 'inline'}}}
                onChange=
                    {e => {
                        setCryptoName(e.currentTarget.value);
                        switch (e.currentTarget.value) {
                            case 'BTC':
                                setExchangeRate(BTC_EXCHR);
                                break;
                            case 'ETH':
                                setExchangeRate(ETH_EXCHR);
                                break;
                        }
                    }
                    }
            >
                <option value="BTC">BTC</option>
                <option value="ETH">Ethereum</option>
            </select>
            <Amount style={{...{display: 'inline'}}} value={convert(euroValue)} message={cryptoName}/>
        </div>
    );
}