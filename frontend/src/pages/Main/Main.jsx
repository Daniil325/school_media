import styles from './styles.module.css';
import { Link } from "react-router-dom";

export const Main = () => {
    return (
        <>
            <section class={styles.hero}>
                <div className={styles.hero_container}>
                    <div>
                        <h1>Все школьные события на одной платформе</h1>
                        <p>
                            Находи конкурсы, фестивали и мастер-классы по интересам. Фильтруй,
                            сохраняй, участвуй!
                        </p>
                        <Link className={styles.btn_main} to="/register">
                            ЗАРЕГИСТРИРОВАТЬСЯ
                        </Link>
                    </div>

                    <div>
                        <img
                            className={styles.hero_img}
                            src="1ed312d26e57087bc012f70ce71d4abe23af3231.png"
                            alt=""
                        />
                    </div>
                </div>
            </section>

            <section class={styles.paper}>
                <div className={styles.paper_wrapper}>
                    <div>
                        <h2 class={styles.section_title}>ЧТО ТАКОЕ АГРЕГАТОР ШКОЛЬНЫХ МЕДИА?</h2>
                        <p>
                            Здесь собраны самые интересные события, конкурсы и проекты для
                            школьников Алтайского края. Поучаствовать в творческом конкурсе?
                            Представить свои первые шаги в науке? Обогнать всех на спортивном
                            соревновании?
                        </p>
                        <p>
                            В агрегаторе школьных медиа вы легко найдете подходящие активности —
                            просто выберите интересующее направление в фильтрах и участвуйте!
                        </p>

                        <a class={styles.btn_main} href="#">
                            к мероприятиям
                        </a>
                    </div>

                    <div>
                        <img src="Group 59.png" alt="" />
                    </div>
                </div>
            </section>

            <section class={styles.join}>
                <h2 class={styles.section_title}>ПРИСОЕДИНЯЙСЯ К НАМ</h2>
                <div class={styles.cards}>
                    <div class={styles.card}>
                        <p>
                            <img src="266ad6e81c13e9b4f55dc4c95f0fa59beaa9d2b8.png" alt="" />
                        </p>
                        <p className={styles.card_title}>Медиа Класс</p>
                        <p className={styles.card_text}>
                            Мы всегда в курсе всех событий. Пишем репортажи, проводим интервью и
                            организуем...
                        </p>
                    </div>
                    <div class={styles.card}>
                        <p>
                            <img src="aea928c0690eaaab89b6abe7cf9df1b23cfaa515.png" alt="" />
                        </p>

                        <p className={styles.card_title}>ОбъективPRO</p>
                        <p className={styles.card_text}>
                            Мы — школьный медиацентр «ОБЪЕКТИВ PRO», где ребята создают интересные
                            истории, снимают видео, пишут статьи и делают классные фотографии.
                            Рассказываем обо всём, что происходит в школе.
                        </p>
                    </div>
                    <div class={styles.card}>
                        <p>
                            <img src="22b99c378e17ee81e846370d27b6645fa3476552.png" alt="" />
                        </p>
                        <p className={styles.card_title}>А-класс</p>
                        <p className={styles.card_text}>
                            Активные, позитивные и любознательные! Читай наши новости, чтобы быть в
                            курсе...
                        </p>
                    </div>
                </div>
            </section>

            <section class="register">
                <h2 class={styles.section_title}>РЕГИСТРИРУЙСЯ ПРЯМО СЕЙЧАС!</h2>
                <a class={styles.btn_main} href="#">
                    ЗАРЕГИСТРИРОВАТЬСЯ
                </a>
                <p>
                    <img src="schoolgirl-desk-with-laptop-memphis-style 1.png" alt="" />
                </p>

            </section>

            <section class={styles.map}>
                <h2 class={styles.section_title}>Медиацентры Алтайского края</h2>
                <img src="b155668bfa5f2742b2636db9e48308df839c1cff.png" class={styles.map_img} alt="Карта медиацентров" />
            </section>
        </>
    );
};
