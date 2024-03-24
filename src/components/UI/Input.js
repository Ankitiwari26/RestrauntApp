const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.Input.id}>{props.lable}</label>
      <input {...props.Input} />
    </div>
  );
};
export default Input;
