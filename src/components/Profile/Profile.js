import PropTypes from 'prop-types';
import { ProfileUser, Description, UserTag, Stats, StatsSpan, Label, Quantity } from './Profile.styled';
export const Profile = ({ user: { username, tag, location, avatar, stats: { followers, views, likes } } }) => {
    return <ProfileUser>
  <Description>
    <img
      src={avatar}
      width="200px"
      alt="User avatar"
      class="avatar"
    />
    <UserTag>{username}</UserTag>
    <UserTag>{tag}</UserTag>
    <UserTag>{location}</UserTag>
  </Description>

  <Stats>
    <StatsSpan>
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </StatsSpan>
    <StatsSpan>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </StatsSpan>
    <StatsSpan>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </StatsSpan>
  </Stats>
</ProfileUser>
}

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }),
    })
}