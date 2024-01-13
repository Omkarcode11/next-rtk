import Image from 'next/image'
import styles from './page.module.css'
import AddUser from './components/adduser/AddUser'
import ShowUser from './components/showuser/ShowUser'

export default function Home() {
  return (
    <main className={styles.main}>
      <AddUser/>
      <ShowUser user="omkar"/>
    </main>
  )
}
