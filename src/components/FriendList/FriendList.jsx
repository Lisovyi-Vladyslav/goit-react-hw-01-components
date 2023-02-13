import PropTypes from "prop-types";

import {Name} from './FriendList.styled'

export const FriendList = ({ friends }) => {
 
    return (
        <ul >
             {friends.map(({id, avatar, name, isOnline}) => (
<li key={id}>
  <span></span>
  <img src={avatar} alt="User avatar" width="48" />
  <Name eventIsOnline={isOnline}>{name}</Name >
</li>
    ))}
 
</ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
     avatar: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  })),
  
};
