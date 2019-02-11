import React from 'react';
import ReactDOM from 'react-dom';

import { Formik, Form, Field } from 'formik';

class App extends React.Component {
  handleSubmit (e) {
    console.log(e);
  }
  render () {
    return <div>
      <Formik
        initialValues={{ category: '', start: null, end: null, description: '' }}
        onSubmit={this.handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form>
            <Field type="text" name="description" />
          </Form>
        )}
      </Formik>
    </div>;
  }
}

const mainContainer = document.getElementById('main');
ReactDOM.render(<App />, mainContainer);
