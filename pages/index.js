import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Button from '../components/Button/button.js';
import Nav from '../components/Nav/nav.js'

const buttonConfigSmall = {
    clickHandler: () => console.log('click'),
    size: 'small',
    color: 'primary',
    label: 'Small'
};

const buttonConfigMedium = {
  clickHandler: () => console.log('click'),
  size: 'medium',
  color: 'primary',
  label: 'Medium'
}

const buttonConfigLarge = {
  clickHandler: () => console.log('click'),
  size: 'large',
  color: 'primary',
  label: 'Large'
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jonah Ullman - Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url(&quot;https://fonts.googleapis.com/css2?family=Catamaran:wght@400;700&family=Merriweather:wght@400;700&display=swap&quote;);
        </style>
      </Head>
      <header>
        <Nav />
      </header>

      <main>
        <h1>Jonah Ullman</h1>
        <Button {...buttonConfigSmall}/>
        <Button {...buttonConfigMedium}/>
        <Button {...buttonConfigLarge}/>
        <div className="swatch" style={{background: '#A690A4'}}></div>
        <div className="swatch" style={{background: '#75BFCA'}}></div>
        <div className="swatch" style={{background: '#DB6C79'}}></div>
        <div className="swatch" style={{background: '#9C444C'}}></div>
        <div className="swatch" style={{background: '#92374D'}}></div>
        <div className="swatch" style={{background: '#916953'}}></div>
        <div className="swatch" style={{background: '#9D695A'}}></div>
        <div className="swatch" style={{background: '#632B30'}}></div>
      </main>
    </div>
  )
}
