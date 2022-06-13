import React, { useState } from 'react'
import { 
  ImageContainer, 
  ImageWrapper, 
  Image, 
  WhiskyListContainer, 
  WhiskyListWrapper, 
  WhiskyListBox,
  WhiskyListH1,
  WhiskyListH2, 
  WhiskyListH3, 
  WhiskyListP, 
  WhiskyListLinksContainer,
  WhiskyListMenu,
  WhiskyListMenuItem,
  WhiskyListNav,
  WhiskyListLink,
  WhiskyListInput,
} from './WhiskyListElements';

const images = [
  require('../../assets/images/kuva1.png'),
  require('../../assets/images/kuva2.png'),
  require('../../assets/images/kuva3.png'),
  require('../../assets/images/kuva4.png'),
]

const tableStyles = {
  borderCollapse: 'collapse',
  width: '100%',
}

const tableWrapper = {
  width: '100%',
  padding: '0 10px',
  maxWidth: '1300px',
  color: '#010606',
}

const buttonStyle = {
  position: 'absolute',
  width: '30px',
  height: '30px',
  right: '6px',
  top: '10px',
  zIndex: '2',
  border: 'none',
  borderRadius: '50%',    
  cursor: 'pointer',
  color: '#F5BD30',
  backgroundColor: '#06260F',
  transform: 'translateX(2px)'
}

const SearchResult = ({ filteredList, length }) => { 
  
  console.log("SearchResult", filteredList);
  
  if (filteredList.length < 40 && filteredList.length > 0) {
    return (  
      <div style = {tableWrapper}>
        <table style = {tableStyles}>
          <tbody>
            <tr>
              <th style = {{textAlign: 'left'}}>Nimi</th>
              <th style = {{textAlign: 'left'}}>Maa</th>
              <th style = {{textAlign: 'right'}}>Hinta (€ / 4 cl)</th>
            </tr>      
            {filteredList.map((whisky, index) => (          
              <tr style = {{borderBottom: '1px dashed black', marginBottom: '20px' }} key = {index}>
                <td style = {{ paddingTop: '10px', paddingBottom: '10px', paddingRight: '10px' }}>{whisky.name}</td>
                <td>{whisky.area}</td>
                <td style = {{ textAlign: 'right'}}>{whisky.price}</td>
              </tr>                          
            ))}
            </tbody>
          </table> 
        </div>   
    )
  }
  else if (filteredList.length === 0) {
    return (
      <>
      </>
    )
  }
  else if (filteredList.lenght === length) {
    return (
      <>
        <WhiskyListP>Haulla ei löydy viskin viskiä.</WhiskyListP>
      </>
    )
  }
  else {
    return (
      <WhiskyListP>Liikaa tuloksia. Rajaa hakua.</WhiskyListP>
    )
  }
}

const WhiskyList = ({ whisky }) => { 
  const [whiskies, setWhiskies ] = useState([])
  const [filter, setFilter] = useState('')

  const originalLength = whisky.length;

  const handleChange = (event) => {
    setFilter(event.target.value);

    const filtered = whisky.map(whiskies => (
      whiskies.whiskies.filter(({ name }) => name.toLowerCase().includes(event.target.value.toLowerCase()))
    ));

    const flattenedArray = filtered.flat();
    setWhiskies(flattenedArray);
  }

  console.log("WhiskyList", whiskies);

  return (
    <div style = {{ padding: '70px 0' }}>
      <WhiskyListContainer style = {{padding: '10px 5px'}}>
        <WhiskyListH2>Viskilista elää viikottain. Pidätämme oikeudet muutoksiin.</WhiskyListH2>
        <WhiskyListH2>Uutuusviskilista löytyy baaritiskiltä. Kysy lisää henkilökunnalta.</WhiskyListH2>
      </WhiskyListContainer>
      <WhiskyListNav>
        <WhiskyListLinksContainer>
          {whisky.map(area => (
            <WhiskyListMenu key = {area.id}>
              <WhiskyListMenuItem>
                <WhiskyListLink 
                to={area.name} 
                spy={true} 
                smooth={true}
                offset = {-100} 
                duration={500}>
                  {area.name}
                </WhiskyListLink>
              </WhiskyListMenuItem>
          </WhiskyListMenu>
          ))}
        </WhiskyListLinksContainer>
      </WhiskyListNav>
      <WhiskyListContainer>
        <WhiskyListWrapper>
          <WhiskyListBox>
            <WhiskyListH2>Haku</WhiskyListH2>
            <div style = {{width: '300px', position: 'relative'}}>
              <WhiskyListInput 
              value = {filter} 
              placeholder = {'Etsi viskejä...'} 
              onChange = {handleChange} />
              <button style = {buttonStyle} onClick = {() => {setFilter(''); setWhiskies([])}}>X</button>
            </div>
            <SearchResult filteredList = {whiskies} length = {originalLength} />
          </WhiskyListBox>
        </WhiskyListWrapper>
      </WhiskyListContainer>
      <div style = {{ paddingBottom: '80px'}}>
        <WhiskyListContainer>
          <WhiskyListWrapper>
            {whisky.map(area => (
              <WhiskyListBox name = {area.name} key={area.id}>
                <WhiskyListH1>{area.name}</WhiskyListH1>
                <div style = {tableWrapper}>
                <table style = {tableStyles}>
                  <tbody>
                    <tr>
                      <th style = {{textAlign: 'left'}}>Nimi</th>
                      <th style = {{textAlign: 'left'}}>Alue</th>
                      <th style = {{textAlign: 'right'}}>Hinta (€ / 4 cl)</th>
                    </tr>      
                    {area.whiskies.map(whisky => (          
                      <tr style = {{borderBottom: '1px dashed black', marginBottom: '20px' }} key = {whisky.id}>
                        <td style = {{ paddingTop: '10px', paddingBottom: '10px', paddingRight: '10px' }}>{whisky.name}</td>
                        <td>{whisky.area}</td>
                        <td style = {{ textAlign: 'right'}}>{whisky.price}</td>
                      </tr>                          
                    ))}
                    </tbody>
                  </table> 
                </div>
              </WhiskyListBox>
            ))}
          </WhiskyListWrapper>
        </WhiskyListContainer>
      </div>
    </div>
  )
}

export default WhiskyList