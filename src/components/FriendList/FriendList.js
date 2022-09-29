import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { FriendListStyled } from './FriendList.styled';

export const FriendList = ({friends}) => {
    return <FriendListStyled>
        {friends.map(friend => {
            return <FriendListItem key={friend.id} friend={friend} />;
    })}
</FriendListStyled>
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
         avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        })
    ).isRequired,
    
};