import Head from "next/head"
import Image from "next/image"
import logo from '../../public/logo.svg'
import styles from '../../styles/home.module.scss'

import { Input, TextArea } from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import Link from "next/link"

export default function Signup() {
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image alt="logo" src={logo} />
       
        <div className={styles.login}>
        <h1 className={styles.h1}>Criando sua conta</h1>
          <form>
            <Input type="text" placeholder="Digite seu nome" />
            <Input type="email" placeholder="Digite seu email" />
            <Input type="password" placeholder="Digite sua senha" />
            <Button
              type='submit'
              loading={false}>
              Cadastrar
            </Button>
          </form>

          <Link className={styles.text} href={'/'}>
            Já possui uma conta? Faça Login
            {/* <a className={styles.text}>Não possui uma conta? Cadastre-se</a> */}
          </Link>


        </div>
      </div>
    </>

  )
}
