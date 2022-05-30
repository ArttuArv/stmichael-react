import React from 'react'
import { 
  HeroTableWrapper,
  HeroTable,
  HeroTableBody,
  HeroTableRow,
  HeroTableHead, 
} from './HeroElements'

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