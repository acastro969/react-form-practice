import Button from '../Button/Button';
import Input from '../Input/Input';
import useForm from '../../hooks/useForm';

const UserForm = ({ submit }) => {
  const initialState = { name: '', lastName: '', email: '' };
  const [formData, handleOnChange, reset] = useForm(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formData);
    reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id='name'
        label='Name'
        name='name'
        value={formData.name}
        onChange={handleOnChange}
      />
      <Input
        id='lastName'
        label='Last name'
        name='lastName'
        value={formData.lastName}
        onChange={handleOnChange}
      />
      <Input
        id='email'
        label='E-Mail Address'
        name='email'
        value={formData.email}
        onChange={handleOnChange}
      />
      <Button>Send</Button>
    </form>
  );
};

export default UserForm;