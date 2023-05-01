import { Title } from "./styled";

export const User = ({ name, username, address, email }) => {
  const link = `mailto:${email}`;

  return (
    <li>
      <Title width="100px" dark>
        {name} ({username})
      </Title>
      <p>
        Address: {address.city}, {address.street}
      </p>
      <a href={link}>{email}</a>
    </li>
  );
};
