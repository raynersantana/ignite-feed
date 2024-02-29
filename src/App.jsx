import { useState } from 'react'
import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Siderbar'

import styles from './App.module.css'
import './global.css'

export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Rayner Santana"
            content="lorem ipsum"
          />
          <Post
            author="Isabelle Capistrano"
            content="lorem ipsum"
          />
        </main>
      </div>
    </div>
  )
}