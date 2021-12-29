import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import '../../styles/ItemForms.css';
const ItemForm = ({ onSubmit, initialValues }) => {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.description) {
      errors.description = 'Required';
    }
    if (!values.price) {
      errors.price = 'Required';
    }
    return errors;
  };
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={validate}
      render={({ handleSubmit }) => (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <table>
              <thead>
                <tr>
                  <td align="center" colSpan={2}>
                    <h3>New Item Form</h3>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <label>Name</label>
                  </td>
                  <td>
                    <Field name="name">
                      {({ input, meta }) => (
                        <div>
                          <input
                            {...input}
                            autoComplete="off"
                            style={
                              meta.touched && meta.error
                                ? { border: '1px dotted red' }
                                : null
                            }
                          />
                        </div>
                      )}
                    </Field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Descripcion</label>
                  </td>
                  <td>
                    <Field name="description">
                      {({ input, meta }) => (
                        <input
                          {...input}
                          autoComplete="off"
                          style={
                            meta.touched && meta.error
                              ? { border: '1px dotted red' }
                              : null
                          }
                        />
                      )}
                    </Field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Price</label>
                  </td>
                  <td>
                    <Field name="price">
                      {({ input, meta }) => (
                        <input
                          {...input}
                          type="number"
                          autoComplete="off"
                          style={
                            meta.touched && meta.error
                              ? { border: '1px dotted red' }
                              : null
                          }
                        />
                      )}
                    </Field>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} align="center">
                    <button type="submit">Create</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      )}
    />
  );
};

export default ItemForm;
