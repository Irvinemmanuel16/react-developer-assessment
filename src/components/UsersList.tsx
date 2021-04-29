import { useState, useEffect } from 'react';
import { IUser } from '../interfaces';
import User from './User';
import Loading from './Loading';
import axios from 'axios';

export default function UsersList(): JSX.Element {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(({ data }) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section>
          {users?.map(user => (
            <User key={user.id} user={user} />
          ))}
        </section>
      )}
    </>
  );
}
