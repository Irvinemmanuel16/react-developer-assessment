import { IUser } from '../interfaces';
import styles from '../styles/components/User.module.css';

export default function User(props: { user: IUser }): JSX.Element {
  return (
    <div className={styles.container}>
      <h2>{props.user.name}</h2>
      <h3>{props.user.username}</h3>
      <h4>{props.user.email}</h4>
      <h5>
        {props.user.address.street}, {props.user.address.suite}
        <br />
        {props.user.address.zipcode}, {props.user.address.city}
        <br />
      </h5>
    </div>
  );
}
