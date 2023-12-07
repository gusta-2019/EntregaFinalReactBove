// CheckoutForm.jsx

import styles from './CheckoutForm.module.css'
import { useState } from "react"


export default function CheckoutForm({onConfirm}) {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState({})

    const validateName = () => {
        if (!/^[a-zA-Z ]+$/.test(name)) {
          setErrors((prevErrors) => ({ ...prevErrors, name: 'El nombre debe contener solo letras y espacios.' }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, name: null }));
        }
      };
    
      const validatePhone = () => {
        if (!/^\d+$/.test(phone)) {
          setErrors((prevErrors) => ({ ...prevErrors, phone: 'El teléfono debe contener solo números.' }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, phone: null }));
        }
      };
    
      const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setErrors((prevErrors) => ({ ...prevErrors, email: 'Ingrese un correo electrónico válido.' }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, email: null }));
        }
      };

    const handleConfirm = (event) => {
        event.preventDefault()

        validateName();
    validatePhone();
    validateEmail();

    // Si hay errores, no continuamos con la confirmación
    if (Object.values(errors).some((error) => error !== null)) {
      return;
    }

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

  return (
    <div className={styles.Container}>
        <form onSubmit={handleConfirm} className={styles.Form}>
            <label className={styles.Label}>
                Nombre
                <input 
                    className = {styles.Input}
                    type = "text" 
                    value = {name}
                    onChange={({ target }) => setName(target.value)}
                    onBlur={validateName}
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
            </label>
            <label className={styles.Label}>
                Telefono
                <input 
                    className = {styles.Input}
                    type = "text" 
                    value = {phone}
                    onChange={({ target }) => setPhone(target.value)}
                    onBlur={validatePhone}
                />
                {errors.phone && <span className={styles.error}>{errors.phone}</span>}
            </label>
            <label className={styles.Label}>
                Email
                <input 
                    className = {styles.Input}
                    type = "email" 
                    value = {email}
                    onChange={({ target }) => setEmail(target.value)}
                    onBlur={validateEmail}
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
            </label>
            <div className={styles.Label}>
                <button type='submit' className={styles.Button}>Crear Orden</button>
            </div>
        </form>
    </div>
  )
}
