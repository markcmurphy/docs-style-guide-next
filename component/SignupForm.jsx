import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField, useFormikContext } from 'formik';
import * as Yup from 'yup';
import styled from '@emotion/styled';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: '❌ ';
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  console.log(
    '🚀 ~ file: SignupForm.jsx ~ line 61 ~ NumberList ~ props',
    props
  );
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <ListItem key={number.toString()} value={number.message} />
  ));
  return <ul>{listItems}</ul>;
}

const SignupForm = () => {
  const [errors, setErrors] = useState([]);
  const [errorDisplay, setErrorDisplay] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  // const [results, setResults] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  return (
    <>
      <h1>Tester!</h1>
      <Formik
        initialValues={{
          file: null,
        }}
        onSubmit={async (values, { setSubmitting }) => {
          async function postData(url, data) {
            let formData = new FormData();
            console.log(
              '🚀 ~ file: SignupForm.jsx ~ line 95 ~ postData ~ selectedFile',
              selectedFile
            );
            formData.append('file', selectedFile);
            const response = await fetch(url, {
              method: 'POST',
              body: formData,
            });
            return response.json();
          }
          const result = await postData('/api/lint', values);
          setErrors(result);
          setSubmitting(false);
        }}
      >
        <Form netlify>
          {/* <MyTextInput
            label="branch"
            name="branch"
            type="text"
            placeholder="new-branch"
          /> */}
          <input type="file" name="file" onChange={changeHandler} />
          {/* {isSelected ? (
            <div>
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
              <p>
                lastModifiedDate:{' '}
                {selectedFile.lastModifiedDate.toLocaleDateString()}
              </p>
            </div>
          ) : (
            <p>Select a file to show details</p>
          )} */}

          {/* <MySelect label="Project" name="projectId">
            <option value="">Select a project</option>
            <option value="cHJqOjIwNjAz">API-Reference</option>
            <option value="cHJqOjI4MDIz">DevDocs</option>
          </MySelect> */}
          <br></br>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {/* <div style={{ display: errors.length ? 'block' : 'none' }}> */}
      <div>
        {/* style={{ display: showInfo ? 'block' : 'none' }} */}
        {errorDisplay}
        <NumberList numbers={errors} />
      </div>
    </>
  );
};

export { SignupForm };
