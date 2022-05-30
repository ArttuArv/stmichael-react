import React from 'react'
import { 
  FooterContainer,
  FooterWrapper,
  FooterColumn,
  FooterRow,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLogo,
  SocialMediaWrapper,
  SocialMediaIcons,
  SocialMediaIconLink,
  SocialMediaP,
  FooterTableWrapper,
  FooterTable,
  FooterTableBody,
  FooterTableRow,
  FooterTableData,
  FooterTableH3,
} from './FooterElements'
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import Logo from '../../assets/images/Michael-logorigin.png'

const openingHours = [
  {
    day: 'Ma-To',
    hours: '12 - 02',
  },
  {
    day: 'Pe-La',
    hours: '12 - 03',
  },
  {
    day: 'Su',
    hours: '12 - 02',
  },
]


const Footer = () => {

  const onTop = () => {
    window.scrollTo( {
      top: 0,
      behavior: 'smooth',
    } );
  }

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterRow>
          <FooterColumn>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Sisältö</FooterLinkTitle>
                <FooterLink to = 'whisky'>Hanatuotteet</FooterLink>
                <FooterLink to = 'whisky'>Viskit</FooterLink>
                <FooterLink to = 'whisky'>Urheilu</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterColumn>
          <FooterColumn>           
            <FooterTableWrapper>
              <FooterTableH3>Aukioloajat:</FooterTableH3>              
              <FooterTable>
                <FooterTableBody>
                  {openingHours.map( (item) => (
                    <FooterTableRow key = {item.day}>
                      <FooterTableData>{item.day}</FooterTableData>
                      <FooterTableData>{item.hours}</FooterTableData>
                    </FooterTableRow>
                  ))}
                </FooterTableBody>
              </FooterTable>
            </FooterTableWrapper>
          </FooterColumn>
          <FooterColumn> 
            <SocialMediaWrapper>         
              <FooterLogo onClick = {onTop} src = {Logo} alt = {''} />   
              <SocialMediaP>Hallituskatu 13 - 17 90100 Oulu</SocialMediaP>
              <SocialMediaP>puh: 08 311 7473</SocialMediaP>
              <SocialMediaP>stmichael@stmichael.fi</SocialMediaP>        
              <SocialMediaIcons>
                <SocialMediaIconLink href = '//www.facebook.com/irishpubstmichael' target = '_blank' aria-label = 'Facebook'>
                  <FaFacebook />
                </SocialMediaIconLink>
                <SocialMediaIconLink href = '//www.instagram.com/st.michael_oulu' target = '_blank' aria-label = 'Facebook'>
                  <FaInstagram />
                </SocialMediaIconLink>
                <SocialMediaIconLink href = 'mailto:stmichael@stmichael.fi' target = '_blank' aria-label = 'Mail'>
                  <FaEnvelope />
                </SocialMediaIconLink>
              </SocialMediaIcons>
            </SocialMediaWrapper>        
          </FooterColumn>
        </FooterRow>
      </FooterWrapper>
    </FooterContainer>
  )

  // return (
  //   <FooterContainer>      
  //     <FooterWrapper>
  //       <FooterLogo onClick = {onTop} src = {Logo} alt = {''} />
  //       <FooterLinksContainer>          
  //         <FooterLinksWrapper>
  //           <FooterLinkItems>
  //             <FooterLinkTitle>Tekstiä</FooterLinkTitle>
  //               <FooterLink to = '/signin'>Tekstiä</FooterLink>
  //               <FooterLink to = '/signin'>Tekstiä</FooterLink>
  //               <FooterLink to = '/signin'>Tekstiä</FooterLink>
  //               <FooterLink to = '/signin'>Tekstiä</FooterLink>
  //               <FooterLink to = '/signin'>Tekstiä</FooterLink>
  //           </FooterLinkItems>
  //           <FooterLinkItems>
  //             <FooterLinkTitle>Tekstiä</FooterLinkTitle>
  //               <FooterLink to = '/signin'>Tekstiä</FooterLink>
  //               <FooterLink to = '/signin'>Tekstiä</FooterLink>
  //               <FooterLink to = '/signin'>Tekstiä</FooterLink>
  //               <FooterLink to = '/signin'>Tekstiä</FooterLink>
  //               <FooterLink to = '/signin'>Tekstiä</FooterLink>
  //           </FooterLinkItems>
  //         </FooterLinksWrapper>
  //       </FooterLinksContainer>
  //       <SocialMedia>
  //         <SocialMediaWrapper>           
  //           <SocialMediaIcons>
  //             <SocialMediaIconLink href = '//www.facebook.com/irishpubstmichael' target = '_blank' aria-label = 'Facebook'>
  //               <FaFacebook />
  //             </SocialMediaIconLink>
  //             <SocialMediaIconLink href = '//www.instagram.com/st.michael_oulu' target = '_blank' aria-label = 'Facebook'>
  //               <FaInstagram />
  //             </SocialMediaIconLink>
  //             <SocialMediaIconLink href = 'mailto:stmichael@stmichael.fi' target = '_blank' aria-label = 'Mail'>
  //               <FaEnvelope />
  //             </SocialMediaIconLink>
  //           </SocialMediaIcons>
  //         </SocialMediaWrapper>
  //       </SocialMedia>
  //     </FooterWrapper>
  //   </FooterContainer>
  // )
}

export default Footer