import styles from "./styles.module.css";

export const Register = () => {
    return (
        <>
            <section className={styles.register_form}>
                <div className={styles.container}>
                    <h2>РЕГИСТРАЦИЯ</h2>
                    <div className={styles.role_buttons}>
                        <button className={styles.role}>Хочу участвовать в мероприятиях</button>
                        <button className={styles.role}>Хочу организовывать мероприятия</button>
                        <button className={styles.role}>Хочу рассказывать о медиачентре</button>
                    </div>

                    <form className={styles.form_box}>
                        <h3>ФОРМА ДЛЯ ЗАПОЛНЕНИЯ</h3>
                        <div className="grid">
                            <input type="text" placeholder="Фамилия" />
                            <input type="text" placeholder="Полное имя школы" />
                            <input type="text" placeholder="Имя" />
                            <input type="text" placeholder="Название медиачентра" />
                            <input type="text" placeholder="Отчество" />
                        </div>

                        <h4>Интересы</h4>
                        <div className={styles.interests}>
                            <button type="button" className={styles.tag}>
                                Журналистика и медиа
                            </button>
                            <button type="button" className={styles.tag}>
                                Математика и IT
                            </button>
                            <button type="button" className={styles.tag}>
                                Химия и биология
                            </button>
                            <button type="button" className={styles.tag}>
                                История и общество
                            </button>
                            <button type="button" className={styles.tag}>
                                Спорт и здоровье
                            </button>
                        </div>

                        <button type="submit" className={styles.btn}>
                            ЗАРЕГИСТРИРОВАТЬСЯ
                        </button>

                        <label className={styles.consent}>
                            <input type="checkbox" />Я ознакомился с Политикой в отношении обработки
                            персональных данных и даю своё
                            <a href="#">Согласие</a> на обработку персональных данных
                        </label>
                    </form>
                </div>
            </section>
        </>
    );
};
