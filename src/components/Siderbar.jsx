import styles from './Sidebar.module.css'
import { PencilLine } from '@phosphor-icons/react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className={styles.cover} />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/raynersantana.png" />
                <strong>Rayner Santana</strong>
                <span>Web Developer</span>

                <footer>
                    <a href="#">
                        <PencilLine size={20} />
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
    )
}