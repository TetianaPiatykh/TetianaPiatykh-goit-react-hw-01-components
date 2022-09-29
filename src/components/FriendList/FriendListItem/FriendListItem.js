import PropTypes from 'prop-types';
import { FriendItemStyled, Span, NameSpan } from './FriendListItem.styled';


export const FriendListItem = ({ friend: { avatar, name, isOnline}}) => {
   return <FriendItemStyled>
        <Span isOnline={isOnline}></Span>
  <img class="avatar" src={avatar} alt={name} width="55" />
        <NameSpan>{name}</NameSpan>
</FriendItemStyled>
};

FriendListItem.propTypes = {
    friend: PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
   }).isRequired,
}