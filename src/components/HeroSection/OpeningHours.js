import React from 'react'
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
          <HeroTableRow>
            <HeroTableHead>Ma-To</HeroTableHead>
            <HeroTableHead>12 - 02</HeroTableHead>
          </HeroTableRow>
          <HeroTableRow>
            <HeroTableHead>Pe-La</HeroTableHead>
            <HeroTableHead>12 - 03</HeroTableHead>
          </HeroTableRow>
          <HeroTableRow>
            <HeroTableHead>Su</HeroTableHead>
            <HeroTableHead>12 - 03</HeroTableHead>
          </HeroTableRow>
        </HeroTableBody>
      </HeroTable>
    </HeroTableWrapper>
  )
}

export default OpeningHours