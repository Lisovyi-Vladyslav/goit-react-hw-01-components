import PropTypes from "prop-types";
import { Conteiner, Description, Stats, Item } from "components/Profile/Profile.styled"

export const Profile = ({username, tag, location, avatar, likes, views, followers}) => {
  

    return (
      <Conteiner>
     <Description>
    <img
      src={avatar}
      alt="User avatar"
    
      width="50"
    />
          <p>{username}</p>
          <p>@{tag}</p>
                <p>{location}</p>
      </Description>
        <Stats>
    <Item>
      <span>Followers </span>
                    <span>{followers}</span>
    </Item>
    <Item>
      <span>Views </span>
                    <span>{views}</span>
    </Item>
    <Item>
      <span>Likes </span>
                    <span>{likes}</span>
    </Item>
  </Stats>
</Conteiner>
    
  );
};
Profile.propTypes = {
 
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
    
 
};
