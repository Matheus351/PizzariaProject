import Head from "next/head"
import Image from "next/image"
import logo from '../public/logo.svg'
import styles from '../styles/home.module.scss'
import { FormEvent, useContext, useState } from "react"
import { Input, TextArea } from '../components/ui/Input'
import Button from '../components/ui/Button'
import Link from "next/link"
import { AuthContext } from "@/contexts/AuthContext"

export default function Home() {

  const {signIn} = useContext(AuthContext);
  
  const [email ,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);



  async function handleLogin(event:FormEvent) {
    event.preventDefault();
    const data = {
      email,
      password
    }

     await signIn(data);
  }

  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image alt="logo" src={logo} />

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Digite seu nome" value={email}/>
            <Input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Digite sua senha" value={password}/>
            <Button
              type='submit'
              loading={false}>
              Acessar
            </Button>
          </form>

          <Link className={styles.text} href={'/signup'}>
                 Não possui uma conta? Cadastre-se
            {/* <a className={styles.text}>Não possui uma conta? Cadastre-se</a> */}
          </Link>


        </div>
      </div>
    </>

  )
}
