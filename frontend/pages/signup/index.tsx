import Head from "next/head"
import Image from "next/image"
import logo from '../../public/logo.svg'
import styles from '../../styles/home.module.scss'

import { Input, TextArea } from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import Link from "next/link"
import { FormEvent, useState } from "react"

export default function Signup() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignUp(event:FormEvent) {

     event.preventDefault();

     if(name===''||email===''||password===''){
       alert('Preencha todos os campos');
       return
     }
     setLoading(true);

  }

  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image alt="logo" src={logo} />
       
        <div className={styles.login}>
        <h1 className={styles.h1}>Criando sua conta</h1>
          <form onSubmit={handleSignUp}>
            <Input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Digite seu nome" value={name}/>
            <Input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Digite seu email" value={email}/>
            <Input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Digite sua senha" value={password}/>
            <Button
              type='submit'
              loading={loading}>
              Cadastrar
            </Button>
          </form>

          <Link className={styles.text} href={'/'}>
            Já possui uma conta? Faça Login
          </Link>


        </div>
      </div>
    </>

  )
}
