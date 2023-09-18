import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import css from './FriendList.module.css';


export const FriendList = ({ friends }) => (
    <ul className={css.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => {
            return (<FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />)
        })}
    </ul>
);

 FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}