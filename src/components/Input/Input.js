import './Input.scss';

const Input = ({ label, ...rest }) => (
  <div className='field'>
    <label htmlFor={rest.id}>{label}</label>
    <input type="text" {...rest} />
  </div>
);

export default Input;