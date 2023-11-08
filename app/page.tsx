"use client"
import { LinkButton } from './components/LinkButton/LinkButton'
import Layout from './layout'
import { HomeWrapper } from './Home.Style'

export default function Home() {

   return (
    <Layout>
      <HomeWrapper>
        <LinkButton href= "/sizes"> Iniciar pedido</LinkButton>
      </HomeWrapper>
    </Layout>
  )
}
