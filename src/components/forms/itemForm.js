import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import '../../styles/ItemForms.css';
const ItemForm = ({ onSubmit, initialValues }) => {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
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
                      {({ input }) => <input {...input} autoComplete="off" />}
                    </Field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Descripcion</label>
                  </td>
                  <td>
                    <Field name="description">
                      {({ input }) => <input {...input} autoComplete="off" />}
                    </Field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Price</label>
                  </td>
                  <td>
                    <Field name="price">
                      {({ input }) => (
                        <input {...input} type="number" autoComplete="off" />
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
