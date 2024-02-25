import { FriendListItem } from "../FriendListItem/FriendListItem"
import css from "./FriendList.module.css"

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.list}>
            {friends.map((friend) => {
                return(  <li key={friend.id} className={css.item}>
                    <FriendListItem friendItem={friend} />
                </li>)
            }
            )}
    
        </ul>)
};
