import PropTypes from "prop-types";
import { Conteiner, Description, Stats, Item } from "components/Profile/Profile.styled"

export const Profile = ({user}) => {
  
  const { username, tag, location, avatar, stats } = user;
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
                    <span>{stats.followers}</span>
    </Item>
    <Item>
      <span>Views </span>
                    <span>{stats.views}</span>
    </Item>
    <Item>
      <span>Likes </span>
                    <span>{stats.likes}</span>
    </Item>
  </Stats>
</Conteiner>
    
  );
};
Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
 stats: PropTypes.exact({
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  }),   
  }),
};
