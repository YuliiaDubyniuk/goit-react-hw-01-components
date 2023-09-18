import { Status } from './FriendListItem.styled';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => (
    <li className={css.item}>
        <Status stat={isOnline} />
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
);

