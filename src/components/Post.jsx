import styles from './Post.module.css'
import { Comment } from './Comment'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/raynersantana.png' />
                    <div className={styles.authorInfo}>
                        <strong>Rayner Santana</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time dateTime='2024-02-18 18:15:00'>Publicado há 1h</time>
            </header>
            
            <div className={styles.content}>
                <p>Olá!</p>
                <p>Esse um post teste!</p>
                <a href='#'>Acesse aqui o projeto!</a>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário' />

                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}