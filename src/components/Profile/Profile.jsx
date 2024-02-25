import css from "./Profile.module.css"
export const Profile = ({name,tag,location,image,stats}) => {
    return (
    <div className={css.container}>
    <div>
    <img className={css.image}
        src={image}
        alt="User avatar"
    />
    <p className={css.name}>{name}</p>
    <p className={css.text}>@p{tag}</p>
    <p className={css.text}>{location}</p>
    </div>

    <ul className={css.list}>
    <li className={css.item}>
        <span className={css.itemText}>Followers</span>
        <span className={css.itemData}>{stats.followers}</span>
    </li>
    <li className={css.item}>
        <span className={css.itemText}>Views</span>
        <span className={css.itemData}>{stats.views}</span>
    </li>
    <li className={css.item}>
        <span className={css.itemText}>Likes</span>
        <span className={css.itemData}>{stats.likes}</span>
    </li>
    </ul>
</div>
    )
};