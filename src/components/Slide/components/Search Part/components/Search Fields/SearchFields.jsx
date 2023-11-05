import styles from './SearchFields.module.scss'
import { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { BsGeoAlt } from 'react-icons/bs'
import { PiSuitcaseSimpleThin } from 'react-icons/pi'
import { IoIosArrowDown } from 'react-icons/io'

export const SearchFields = () => {
  const [cityInput, setCityInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (event) => {
    const inputValue = event.target.value;
    setCityInput(inputValue);

    try {
      const response = await fetch(`http://api.geonames.org/postalCodeSearchJSON?placename_startsWith=${inputValue}&maxRows=10`);
      if (response.ok) {
        const data = await response.json();
        const citySuggestions = data.postalCodes.map((city) => `${city.placeName} (${city.postalCode})`);
        setSuggestions(citySuggestions);
      } else {
        console.error('Ошибка при получении данных');
      }
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setCityInput(suggestion);
    setSuggestions([]);
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.headers}>
        <p>What job are you looking for?</p>
        <p>Where?</p>
        <p>Categories</p>
      </div>

      <div className={styles.inputs}>
        <div className={styles.field}>
          <div className={styles.image}>
            {<GoSearch fill='#696969' size={25} />}
          </div>
          <input type="text" placeholder='Job title, keywords, or company' />
        </div>

        <div className={styles.field}>
          <div className={styles.image}>
            {<BsGeoAlt fill='#696969' size={25} />}
          </div>
          <input type="text" placeholder='City or postcode' value={cityInput} onChange={handleInputChange} />
          {suggestions.length > 0 && (
            <ul className={styles.suggestions}>
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.field}>
          <div className={styles.left}>
            <div className={styles.image}>
              {<PiSuitcaseSimpleThin fill='#696969' size={25} />}
            </div>
            <span>All categories</span>
          </div>

          <div className={styles.image}>
            {<IoIosArrowDown fill='#696969' size={25} />}
          </div>
        </div>

        <button className={styles.orange}>
          Find Jobs
        </button>
      </div>
    </div>
  )
}