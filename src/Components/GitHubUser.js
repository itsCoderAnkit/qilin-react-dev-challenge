import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubUser = ({ username }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    //taking my username as an example
    username="itsCoderAnkit"
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response.data)
        setUser(response.data);
      } catch (error) {
        setError('Error fetching user data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) {
    return <p>Loading user information...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <div>
      <img src={user.avatar_url} alt={user.login} />
      <h2>{user.login}</h2>
      <h3>Repositories</h3>
      <ul>
        <li key={user.id}>
            <a href={user.repos_url}>{user.login}</a>
        </li>
      </ul>
    </div>
  );
};

export default GitHubUser;
