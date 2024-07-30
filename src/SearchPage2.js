import React, { useState } from 'react';
import axios from 'axios';
import styles from './SearchPage.module.css';

const SearchPage = () => {
    const originalOptions = {
        where: ['toshkent', 'bog\'dod-rishton-buvayda', 'qo\'qon', 'uchko\'prik'],
        whereTo: ['toshkent', 'bog\'dod-rishton-buvayda', 'qo\'qon', 'uchko\'prik']
    };

    const options = {
        where: originalOptions.where.map(option => option.toUpperCase()),
        whereTo: originalOptions.whereTo.map(option => option.toUpperCase())
    };

    const [formData, setFormData] = useState({
        where: originalOptions.where[0],
        whereTo: originalOptions.whereTo[0]
    });
    const [results, setResults] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value.toLowerCase()
        });
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://taksibot.pythonanywhere.com/search/?where=${formData.where}&whereTo=${formData.whereTo}`);
            const filteredResults = response.data.filter(item => item.request_type === 'pochta_berish');
            setResults(filteredResults);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <div className={styles.searchContainer}>
            <div className={styles.selectContainer}>
                <label className={styles.label}>
                    Where:
                    <select
                        className={styles.select}
                        name="where"
                        value={formData.where}
                        onChange={handleChange}
                    >
                        {originalOptions.where.map((option, index) => (
                            <option key={index} value={option}>
                                {options.where[index]}
                            </option>
                        ))}
                    </select>
                </label>
                <label className={styles.label}>
                    WhereTo:
                    <select
                        className={styles.select}
                        name="whereTo"
                        value={formData.whereTo}
                        onChange={handleChange}
                    >
                        {originalOptions.whereTo.map((option, index) => (
                            <option key={index} value={option}>
                                {options.whereTo[index]}
                            </option>
                        ))}
                    </select>
                </label>
                <button className={styles.button} onClick={handleSearch}>Search</button>
            </div>
            <div className={styles.resultsContainer}>
                {results.length > 0 ? (
                    <ul className={styles.resultsList}>
                        {results.map((item, index) => (
                            <li key={index} className={styles.resultItem}>
                                {/* Customize how you want to display each result */}
                                <div><strong>Where:</strong> {item.where}</div>
                                <div><strong>WhereTo:</strong> {item.whereTo}</div>
                                <div><strong>Phone Number:</strong> {item.phone_number}</div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
