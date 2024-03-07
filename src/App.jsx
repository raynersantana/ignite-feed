import { useState } from 'react'
import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Siderbar'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/raynersantana.png',
      name: 'Rayner Santana',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Olá!'},
      { type: 'paragraph', content: 'Esse um post teste!'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-03-06 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Olá!'},
      { type: 'paragraph', content: 'Esse um post teste!'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-03-01 20:00:00')
  }
];

export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}