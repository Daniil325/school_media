import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const Mediacenters = () => {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.hero_content}>
                    <div>
                        <h2>
                            МЕДИАЦЕНТРЫ <br />
                            <strong>АЛТАЙСКОГО КРАЯ</strong>
                        </h2>
                        <p>
                            Конкурс проектов, посвящённых творческой работе в рамках проектной
                            деятельности
                        </p>
                        <button className={styles.btn}>ПОДРОБНЕЕ</button>
                    </div>
                    <img src="55b88f4744efaf995e33be3c607f5b7b8b17051c (1) (1).png" alt="Конкурс" />
                </div>
            </section>

            <section className={styles.events}>
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
                <Link className={styles.btn_main} to="/register">
                    ЗАРЕГИСТРИРОВАТЬСЯ
                </Link>
                <p>
                    <img src="schoolgirl-desk-with-laptop-memphis-style 1.png" alt="" />
                </p>
            </section>
        </>
    );
};
