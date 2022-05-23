import React, { useState, useEffect } from 'react';
import axios from 'axios';

const tHeadStyles = {
  backgroundColor: '#F5BD30',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  textAlign: 'center',
  borderBottom: '1px solid #ddd',
}

const tBodyStyles = {
  borderBottom: '1px solid #ddd',
  borderTop: '1px solid #ddd',
}
const trStyles = {
  borderBottom: '1px solid #ddd',
  borderTop: '1px solid #ddd',
}

const tableStyles = {
  width: '100%',
  borderCollapse: 'collapse',
  borderSpacing: 0,
  border: '1px solid #ddd',
  marginBottom: '20px',
  marginTop: '20px',
  fontSize: '1.2rem',
  fontFamily: 'Roboto',
  fontWeight: '300',
  color: '#333',
  textAlign: 'center',
  backgroundColor: '#fff',
  boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)',
  borderRadius: '5px',
  overflow: 'hidden',
};

const SigninPage = () => {
  const [whisky, setWhisky] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/whisky')
      .then(response => {
        setWhisky(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <>
        <h1>Viskilista</h1>
        <h2>Lista elää viikottain. Kysy lisää henkilökunnalta.</h2>
      </>
      <div >
        <table style={tableStyles}>
          <tbody style = {tBodyStyles}>          
              {whisky.map(whisky => (
                <tr styles = {trStyles} key={whisky.id}>
                  <th style = {tHeadStyles}>
                    {whisky.name}
                  </th>
                  <th style = {tHeadStyles}>
                    {whisky.about}
                  </th>
                  <th style = {tHeadStyles}>
                    {whisky.country}
                  </th>
                  <th style = {tHeadStyles}>
                    {Math.floor(whisky.price)}
                  </th>
                  <th style = {tHeadStyles}>
                    {Math.floor(whisky.price) * 2}
                  </th>
                </tr>
              ))}          
          </tbody>
        </table>
      </div>
    </>
  )
}

export default SigninPage