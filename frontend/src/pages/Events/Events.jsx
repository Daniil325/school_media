import styles from "./styles.module.css";

export const Events = () => {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.hero_content}>
                    <div>
                        <small>11 сентября</small>
                        <h2>
                            Конкурс проектов <br />
                            <strong>«Вдохновение»</strong>
                        </h2>
                        <p>
                            Конкурс проектов, посвящённых творческой работе в рамках проектной
                            деятельности
                        </p>
                        <button className={styles.btn}>ПОДРОБНЕЕ</button>
                    </div>
                    <img src="0b9d1c5f11f18eaf75218b7ffa1aac396b2780a5 (1).jpg" alt="Конкурс" />
                </div>
            </section>

            <section className={styles.events}>
                <h2>СОБЫТИЯ И МЕРОПРИЯТИЯ</h2>
                <div className={styles.filters}>
                    <button className={styles.filter_btn}>ФОРМАТ +</button>
                    <button className={styles.filter_btn}>ТИП МЕРОПРИЯТИЯ +</button>
                    <button className={styles.filter_btn}>ТЕМАТИКА +</button>
                </div>
                <div className={styles.card_grid}>
                    <div className={styles.card}>
                        <div className={styles.heart}>❤</div>
                        <img src="95a4b538164cc51097691cc809b61a29a83b2bf2.jpg" alt="Мероприятие" />
                        <h4>Твори, выдумывай, изобретай</h4>
                        <p>Онлайн, конкурс, журналистика и медиа</p>
                        <small>12 июля</small>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.heart}>❤</div>
                        <img src="95a4b538164cc51097691cc809b61a29a83b2bf2.jpg" alt="Мероприятие" />
                        <h4>Твори, выдумывай, изобретай</h4>
                        <p>Онлайн, конкурс, журналистика и медиа</p>
                        <small>12 июля</small>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.heart}>❤</div>
                        <img src="95a4b538164cc51097691cc809b61a29a83b2bf2.jpg" alt="Мероприятие" />
                        <h4>Твори, выдумывай, изобретай</h4>
                        <p>Онлайн, конкурс, журналистика и медиа</p>
                        <small>12 июля</small>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.heart}>❤</div>
                        <img src="95a4b538164cc51097691cc809b61a29a83b2bf2.jpg" alt="Мероприятие" />
                        <h4>Твори, выдумывай, изобретай</h4>
                        <p>Онлайн, конкурс, журналистика и медиа</p>
                        <small>12 июля</small>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.heart}>❤</div>
                        <img src="95a4b538164cc51097691cc809b61a29a83b2bf2.jpg" alt="Мероприятие" />
                        <h4>Твори, выдумывай, изобретай</h4>
                        <p>Онлайн, конкурс, журналистика и медиа</p>
                        <small>12 июля</small>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.heart}>❤</div>
                        <img src="95a4b538164cc51097691cc809b61a29a83b2bf2.jpg" alt="Мероприятие" />
                        <h4>Твори, выдумывай, изобретай</h4>
                        <p>Онлайн, конкурс, журналистика и медиа</p>
                        <small>12 июля</small>
                    </div>
                </div>
                <button className={styles.btn}>СМОТРЕТЬ БОЛЬШЕ</button>
            </section>

            <section className="register">
                <h2 className={styles.section_title}>РЕГИСТРИРУЙСЯ ПРЯМО СЕЙЧАС!</h2>
                <a className={styles.btn_main} href="#">
                    ЗАРЕГИСТРИРОВАТЬСЯ
                </a>
                <p>
                    <img src="schoolgirl-desk-with-laptop-memphis-style 1.png" alt="" />
                </p>
            </section>
        </>
    );
};
