import React from 'react'
import { BLh1, BLTable, BLTableRow, BLTableData, BLTableBody, BLTableContainer, BLTableHeader, BLTableWrapper } from './BeerListElements'

const BeerList = ({ whisky }) => {

  return (
    <BLTableContainer>
      <BLh1>Seasonal Products</BLh1>
      <BLTableWrapper>
        <BLTable>
          <BLTableBody>
            <BLTableRow>
              <BLTableHeader>Nimi</BLTableHeader>
              <BLTableHeader>Kuvaus</BLTableHeader>
              <BLTableHeader>Hinta</BLTableHeader>
            </BLTableRow>        
            {whisky.map(whisky => (
              <BLTableRow key={whisky.id}>
                <BLTableData>{whisky.name}</BLTableData>
                <BLTableData>{whisky.about}</BLTableData>
                <BLTableData><b>{Math.floor(whisky.price)} € </b></BLTableData>
              </BLTableRow>
            ))}
          </BLTableBody>
        </BLTable>
      </BLTableWrapper>
    </BLTableContainer>
  )
}

export default BeerList