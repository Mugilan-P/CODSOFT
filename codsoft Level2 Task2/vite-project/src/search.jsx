import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function SearchResults() {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                setLoading(true);
                const response = await axios.get('/api/search', { params: { query } });
                setSearchResults(response.data);
            } catch (error) {
                setError('An error occurred while fetching search results.');
            } finally {
                setLoading(false);
            }
        };

        fetchSearchResults();
    }, [query]);

    return (
        <div style={{
            background: "linear-gradient(90deg, #0062ff, #da61ff)",
            minHeight: "85vh",
            padding: '20px'
        }}>
            <h1>Search Results for "{query}"</h1>
            {loading ? (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : error ? (
                <p>{error}</p>
            ) : searchResults.length > 0 ? (
                <ul>
                    {searchResults.map((result) => (
                        <li key={result.id}>
                            <h4>{result.title}</h4>
                            <p>Company: {result.company}</p>
                            <p>Location: {result.location}</p>
                            <p>Salary: {result.salary}</p>
                            <p>Description: {result.description}</p>
                            <p>Contact: {result.contact}</p>
                            <p>Email: {result.email}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
}

export default SearchResults;