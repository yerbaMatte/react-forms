import { useState } from 'react';

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler: React.FocusEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName('');
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className='error-text'>Name must not be empty</p>
        )}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
