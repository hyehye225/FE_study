import Card from "./UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  const userList = props.userList;
  return (
    <Card className={classes.users}>
      <ul>
        {userList.map((user) => {
          return (
            <li key={user.name}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
