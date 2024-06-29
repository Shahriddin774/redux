import React from 'react';
import { Post} from "../interface/IF";


interface UserCard {
    user: Post;
}

const UserCard: React.FC<UserCard> = ({ user }) => (
    <div className="useRСard">
        <img className={"imgbatman"} src="https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/7952371/legobatmancover.jpg?quality=90&strip=all&crop=7.8125,0,84.375,100" alt="avatr"/>
        <h2>{user.title}</h2>
        <p>{user.body}</p>
    </div>
);

export default UserCard;


