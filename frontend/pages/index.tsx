import Head from "next/head"
import Image from "next/image"
import logo from '../public/logo.svg'
import styles from '../styles/home.module.scss'

import {Input, TextArea} from '../components/ui/Input'
import Button from '../components/ui/Button'

export default function Home() {
  return (
    <>
    <Head>
      <title>Login Page</title>
    </Head>
    <div className={styles.containerCenter}>
        <Image alt="logo" src={logo} />

        <div className={styles.login}>
          <form>
            <Input type="text" placeholder="Digite seu nome"/>
            <Input type="password" placeholder="Digite sua senha"/>
            <Button 
            type='submit'
            loading={false}>
              Acessar 
            </Button>
          </form>

          <a className={styles.text} href="">Não possui uma conta? Cadastre-se</a>
        </div>
    </div>
    </>

  )
}
