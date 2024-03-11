import React from 'react';

const Register: React.FC = () => {
    return (
        <div class="overlay">
            <div class="login">
                <div class="login__inner">
                    <div class="login__header">
                        <div class="login__title">
                            <h1 class="login__heading">Sign in</h1>
                        </div>
                    </div>
                    <div class="login__content">
                        <div class="login__form">
                            <form action="javascript:;" class="form">
                                <div class="form__group">
                                    <svg class="form__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z" /><path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z" /></svg>
                                    <input class="form__input" type="text" name="email" required>
                                        <div class="form__input-after"></div>
                                        <label class="form__label" for="email">Email</label>
                                </div>
                                <div class="form__group">
                                    <svg class="form__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M376 192H188v-48c0-18.1 7.1-35.1 20-48s29.9-20 48-20 35.1 7.1 48 20 20 29.9 20 48c0 7.7 6.3 14 14 14s14-6.3 14-14c0-53.2-43.9-96.7-97.3-96-52.7.7-94.7 44.5-94.7 97.3V192h-24c-22 0-40 18-40 40v192c0 22 18 40 40 40h240c22 0 40-18 40-40V232c0-22-18-40-40-40zM270 316.8v68.8c0 7.5-5.8 14-13.3 14.4-8 .4-14.7-6-14.7-14v-69.2c-11.5-5.6-19.1-17.8-17.9-31.7 1.4-15.5 14.1-27.9 29.6-29 18.7-1.3 34.3 13.5 34.3 31.9 0 12.7-7.3 23.6-18 28.8z" /></svg>
                                    <input class="form__input" type="password" required>
                                        <div class="form__input-after"></div>
                                        <label class="form__label" for="email">Password</label>
                                </div>
                                <div class="form__group">
                                    <button class="form__btn" type="submit">
                                        <span class="form__btn-text">sign in</span>
                                    </button>
                                </div>
                                <div class="form__group">
                                    <p class="form__text">Forgot your password? Reset it from
                                        <a href="#" class="form__link"> here</a>.
                                    </p>
                                    <p class="form__text">Don't have an account yet? Sign up from
                                        <a href="#" class="form__link"> here</a>.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="login__footer">
                        <div class="login__subtitle">
                            <h3 class="login__subheading">Flat UI Login Form. A pen by alexdev.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;