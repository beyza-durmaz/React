import * as yup from 'yup';
import { object, string, number, date, InferType } from 'yup';

let validations = object({
    email: string().email('Geçerli bir email giriniz!').required('Zorunlu alan!'),
    password: string().min(5, 'Parolanız en az 5 karakter olmalıdır!').required('Zorunlu alan!'),
    passwordConfirm: string().oneOf([yup.ref("password")], 'Parolalar eşleşmiyor!').required('Zorunlu alan!'),
});

export default validations;