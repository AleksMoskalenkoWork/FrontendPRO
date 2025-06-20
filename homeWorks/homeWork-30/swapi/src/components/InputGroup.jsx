import Input from './core/Input';
import Button from './core/Button';

function InputGroup() {
  return (
    <>
      <div className="input-group_wrapper">
        <h1>Try it now!</h1>
        <span className="input-group_addon">https://www.swapi.tech/api/</span>
        <Input
          type="text"
          placeholder="...try people/1/, or select from below."
          className="input-group_field"
        ></Input>
        <Button value="request" className="input-group_button"></Button>
      </div>
    </>
  );
}

export default InputGroup;
