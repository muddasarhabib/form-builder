import  yup from 'yup';

// Just like before, without the id field
const signupSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required()
});

export default signupSchema;