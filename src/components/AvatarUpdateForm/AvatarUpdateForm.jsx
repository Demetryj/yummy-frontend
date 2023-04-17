import * as React from 'react';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
// import { updateProfile } from 'redux/auth/operations';
import { toggleAvatarUpdate } from '../../redux/modal';
import { passAvatar } from '../../redux/avatar';

// const { BASE_URL } = process.env;

// import { Formik, Form, Field, ErrorMessage } from 'formik';

// import { passAvatar } from '../../redux/avatar';

// export const AvatarUpdateForm = () => {
//   const dispatch = useDispatch();
//   const handleClose = () => dispatch(toggleAvatarUpdate());

//   const initialValues = {
//     path: '',
//   };

//   const onSubmit = (values, { setSubmitting, resetForm }) => {
//     dispatch(passAvatar(values));
//     setSubmitting(false);
//     resetForm();
//     handleClose();
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={onSubmit}>
//       <Form>
//         <Field
//           name="path"
//           type="file"
//           accept="image/png, image/jpeg, image/jpg"
//         />
//         <ErrorMessage component="div" name="path" />
//         <button type="submit">Confirm your choice!</button>
//       </Form>
//     </Formik>
//   );
// };

// /////////////////////////

function AvatarUpdateForm() {
  const [file, setFile] = React.useState(null);

  const dispatch = useDispatch();

  const onFileChange = event => {
    setFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();

    formData.append('avatar', file, file.name);

    dispatch(passAvatar(formData));
    // dispatch(updateProfile(formData));
    dispatch(toggleAvatarUpdate());

    // await axios.post(`${BASE_URL}/users/update`, formData);
  };

  const fileData = () => {
    if (file) {
      return (
        <div>
          <h4>File Details:</h4>
          <p>File Name: {file.name}</p>
          <p>File Type: {file.type}</p>
          <p>Last Modified: {file.lastModified}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };
  return (
    <div>
      <h3>File Upload</h3>
      <div>
        <input type="file" onChange={onFileChange} />
        <button onClick={onFileUpload}>Upload!</button>
      </div>
      {fileData()}
    </div>
  );
}

export default AvatarUpdateForm;
