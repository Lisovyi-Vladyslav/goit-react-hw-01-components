import React from 'react'

import {Name} from './FriendListItem.styled'

export default function FriendListItem({avatar, name, isOnline}) {
  return (
    <li>
  <span></span>
  <img src={avatar} alt="User avatar" width="48" />
  <Name eventIsOnline={isOnline}>{name}</Name >
</li>
  )
}
