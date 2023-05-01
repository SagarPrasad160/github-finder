import React from "react";

function UserItem({ user }) {
  return (
    <div className="avatar flex items-center justify-center">
      <div className="w-24 rounded-full">
        <img src={`${user.avatar_url}`} alt={`Avatar of ${user.login}`} />
      </div>
      <div className="ml-2 truncate">
        {" "}
        <a href={user.html_url}>{user.login}</a>
      </div>
    </div>
  );
}

export default UserItem;
