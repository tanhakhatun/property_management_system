import React from 'react'

export default function Card({property,clickCard,deleteproperty}) {
  return (
    <div className='property-card'>
      <div className='delete-symbol--small' onClick={() => deleteproperty(property.id)}>remove</div>
      <div className='property-title' onClick={() => clickCard(property)}>{property.title}</div>
    </div>
  )
}
