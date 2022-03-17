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
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

function checkFile(file, cb) {
  remark()
    // TODO: fix MD lint rules
    // .use(linterRules)
    .use(validateLinks, {})
    .use(validateExternalLinks, {
      skipLocalhost: true,
      skipUrlPatterns: ['https://github.com', '//s3.amazonaws.com'],
      gotOptions: {
        // baseUrl: 'https://developer-beta.bigcommerce.com',
        baseUrl: 'https://developer.bigcommerce.com',
      },
    })
    .use(writeGood, {
      checks: dateFormat,
      whitelist: ignoreWords,
    })
    .use(writeGood, {
      checks: ellipses,
      whitelist: ignoreWords,
    })
    .use(writeGood, {
      checks: emdash,
      whitelist: ignoreWords,
    })
    .use(writeGood, {
      checks: exclamation,
      whitelist: ignoreWords,
    })
    .use(writeGood, {
      checks: general,
      whitelist: ignoreWords,
    })
    .use(writeGood, {
      checks: firstPerson,
      whitelist: ignoreWords,
    })
    .use(writeGood, {
      checks: writeGoodExtension,
      whitelist: ignoreWords.concat('In order to'),
      // ignore: ignoreWords.concat(['in order to']),
    })
    // TODO: consolidate some writeGood modules
    .use(
      remark2retext,
      retext() // Convert markdown to plain text
        // TODO: configure readability thresholds to make it useful
        // .use(readability, readabilityConfig || {})
        // TODO: configure simplify to be less sensitive
        .use(simplify, {
          ignore: ignoreWords.concat([
            'multiple',
            'render',
            'forward',
            'should',
            'in order to',
          ]),
        })
        .use(writeGoodWordNode, {
          whitelist: ignoreWords.concat(['as']),
          checks: glossery,
        })
        .use(equality, {
          ignore: ignoreWords.concat([
            'just',
            'easy',
            'disable',
            'disabled',
            'host',
          ]),
        })
        .use(syntaxURLS)
        // .use(intensify, {
        //   ignore: ignoreWords.concat([]),
        // })
        .use(repeatedWords)
        .use(indefiniteArticles)
        .use(assuming, {
          ignore: ignoreWords.concat([]),
        })
        // TODO: have spell not check URLS or file names
        .use(spell, {
          dictionary: dictionary,
          ignore: ignoreWords.concat([]),
          ignoreLiteral: true,
        })
    )
    // plugin to enable, disable, and ignore messages.
    .use(control, {
      name: 'quality-docs',
      source: [
        'remark-lint',
        'remark-lint-write-good',
        'retext-readability',
        'retext-simplify',
        'retext-equality',
        'retext-intensify',
        'retext-google-styleguide',
      ],
    })
    .process(file, function (err, results) {
      var filteredMessages = [];
      results.messages.forEach((message) => {
        var hasFatalRuleId = _.includes(fatalRules, message.ruleId);
        var hasFatalSource = _.includes(fatalRules, message.source);
        var hasSuggestedRuleId = _.includes(suggestRules, message.ruleId);
        var hasSuggestedSource = _.includes(suggestRules, message.source);

        if (suggestRules && (hasSuggestedRuleId || hasSuggestedSource)) {
          message.message = message.message.replace(
            /don\’t use “(.*)”/gi,
            (match, word) => {
              return 'Use “' + word + '” sparingly';
            }
          );
          delete message.fatal;
        }

        if (fatalRules && (hasFatalRuleId || hasFatalSource)) {
          message.fatal = true;
        }

        filteredMessages.push(message);
      });
      results.messages = filteredMessages;
      cb(null, results);
    });
}

const SignupForm = () => {
  const [errors, setErrors] = useState([]);
  const [errorDisplay, setErrorDisplay] = useState('');

  return (
    <>
      <h1>Tester!</h1>
      <Formik
        initialValues={{
          branch: '',
          projectId: '',
        }}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(
            '🚀 ~ file: SignupForm.jsx ~ line 112 ~ onSubmit={ ~ values',
            values
          );

          async function postData(url = '', data = {}) {
            const response = await fetch(url, {
              method: 'POST',
              body: JSON.stringify(data),
            });
            return response.json();
          }
          const result = await postData('/api/brokenSlugs', values);
          result.length ? setErrorDisplay('Results:') : setErrorDisplay('No results found!') 
          setErrors(result);
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput
            label="branch"
            name="branch"
            type="text"
            placeholder="new-branch"
          />
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

