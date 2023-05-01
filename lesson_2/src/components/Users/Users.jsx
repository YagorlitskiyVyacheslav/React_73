import { User } from "./User/User";
import users from "./data.json";

export const Users = () => {
  return (
    <ul>
      {users.map(({ id, name, username, address, email }) => (
        <User
          key={id}
          name={name}
          username={username}
          address={address}
          email={email}
        />
      ))}
    </ul>
  );
};
