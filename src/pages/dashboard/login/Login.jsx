import { useState } from 'react';
import FormButton from '../../../components/button/FormButton'
import Input from '../../../components/input/Input'
import styles from './Login.module.css'
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie'

const initialForm = {
    user: '',
    pass: ''
};

function Login() {

    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState('');
    const user_admin = import.meta.env.VITE_ADMIN_USER;
    const pass_admin = import.meta.env.VITE_ADMIN_PASS;
    const videos_url = import.meta.env.VITE_ADMIN_URL;

    const cookiesOptions = {sameSite: 'None', secure: true};

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Cookies.set('remote_sid', 'user', cookiesOptions);
        if (form.user === user_admin && form.pass === pass_admin) {
            setError('');
            Cookies.set('user', form.user, cookiesOptions);
            navigate(videos_url)
        } else {
            setError('Credenciales incorrectas');
        };
    };

  return (
    <div className={styles.ctLogin}>
        <h2>LOG-IN</h2>
        <form className={styles.ctForm} onSubmit={handleSubmit}>
            <Input label="user" labelName="Usuario" placeholder="Escribe tu usuario..." onChange={handleChange}/>
            <Input label="pass" labelName="Contraseña" placeholder="Escribe tu contraseña..." type="password" onChange={handleChange}/>
            <span>{error}</span>
            <FormButton text="Acceder"/>
            
        </form>
    </div>
  )
}

export default Login