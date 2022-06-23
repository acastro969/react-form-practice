import { useState } from 'react';
import Container from './components/Container/Container';
import Card from './components/Card/Card';
import UserForm from './components/UserForm/UserForm';

function App() {
  const [users, setUsers] = useState([]);

  const submit = (user) => {
    setUsers([...users, user]);
  }

  return (
    <Container>
      <Card>
        <UserForm submit={submit} />
      </Card>

      {users.length > 0 &&
        <Card>
          <ul>
            {users.map((user) => (
              <li key={user.email}>
                {user.email}
              </li>
            ))}
          </ul>
        </Card>
      }
    </Container>
  );
}

export default App;
