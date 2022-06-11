import React from 'react'
import openingHours from '../../assets/data/openinghours.js'
import { 
  HeroTableWrapper,
  HeroTable,
  HeroTableBody,
  HeroTableRow,
  HeroTableHead, 
} from './HeroElements'



const OpeningHours = () => {
  return (
    <HeroTableWrapper>
      <HeroTable>
        <HeroTableBody>
          {openingHours.map( (item) => (
            <HeroTableRow key = {item.day}>
              <HeroTableHead>{item.day}</HeroTableHead>
              <HeroTableHead>{item.hours}</HeroTableHead>
            </HeroTableRow>
          ))}
        </HeroTableBody>
      </HeroTable>
    </HeroTableWrapper>
  )
}

export default OpeningHours