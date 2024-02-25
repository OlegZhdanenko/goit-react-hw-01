import clsx from "clsx";
import css from "./FriendListitem.module.css"
export const FriendListItem = ({ friendItem: { avatar, name, isOnline } }) => {
    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
            <p className={clsx(isOnline === "true" ? css.online : css.onlineOff)}>OnLine</p>
            <p className={clsx(isOnline ==="false"? css.offline:css.offlineOff)}>OffLine</p>
        </div>
    )
};