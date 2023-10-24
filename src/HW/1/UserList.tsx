type AddressType = {
  street: string
  city: string
};

type UserType = {
  id: number
  name: string
  age: number
  address: AddressType
};

type UserListPropsType = {
  users: UserType[]
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>
      <ul>
        {props.users.map((u) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
          <li key={u.id} id={`hw01-user-${u.id}`}>
            <strong>{u.name}</strong> (Age: {u.age})<strong> Address:</strong>
            {u.address.street}, {u.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
};
