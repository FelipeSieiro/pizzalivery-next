"use client"
import { useContext, useEffect, useState } from "react"
import {
  FlavourActionWrapper,
  FlavourCard,
  FlavourCardDescription,
  FlavourCardImage,
  FlavourCardPrice,
  FlavourCardTitle,
  FlavourContentWrapper,
} from "./Flavours.styles"
import { Title } from "../components/title/Title"
import Layout from "../layout"
import { Button } from "../components/button/Button"
import OrderContext from "../contexts/OrderContext"
import { useRouter } from "next/navigation"


export default function Flavours() {
  const router = useRouter()
  const { pizzaSize, pizzaFlavour, setPizzaFlavour } = useContext(OrderContext)
  const [flavourId, setflavourId] = useState("")
  const [flavoursOptions, setFlavoursOptions] = useState([])

  const getPizzaFlavoursOptions = async () => {
    // setIsLoading(true)
    try {
      const response = await fetch("http://localhost:8000/pizza/flavours")
      const options = await response.json()
      setFlavoursOptions(options)
    } catch (error) {
      alert(`Deu ruim:  ${error}`)
    } finally {
      // setIsLoading(false)
    }
  }

  const getPizzaFlavour = (id: string) => {
    return flavoursOptions.filter((flavour) => flavour.id === id)
  }

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setflavourId(event.target.id)
  }

  const handleBack = () => {
    router.push("/sizes")
  }

  const handleNext = () => {
    const selectedFlavour = getPizzaFlavour(flavourId)
    setPizzaFlavour(selectedFlavour)
    router.push("/summary")
  }

  useEffect(() => {
    if (!pizzaFlavour) return
    setflavourId(pizzaFlavour[0].id)
  }, [])

  useEffect(() => {
    getPizzaFlavoursOptions()
  }, [])

  function convertToCurrency(arg0: never): import("react").ReactNode {
    throw new Error("Function not implemented.")
  }

  return (
    <Layout>
      <Title tabIndex={0}>Agora escolha o sabor da sua pizza</Title>
      <FlavourContentWrapper>
        {flavoursOptions.map(({ id, image, name, description, price }) => (
          <FlavourCard key={id} selected={id === flavourId ? true : false}>
            <FlavourCardImage src={image} alt={name} />
            <FlavourCardTitle>{name}</FlavourCardTitle>
            <FlavourCardDescription>{description}</FlavourCardDescription>
            <FlavourCardPrice>
              {convertToCurrency(price[pizzaSize[0].slices])}
            </FlavourCardPrice>
            <Button id={id} onClick={handleClick}>
              Selecionar
            </Button>
          </FlavourCard>
        ))}
      </FlavourContentWrapper>
      <FlavourActionWrapper>
        <Button inverse="inverse" onClick={handleBack}>
          Voltar
        </Button>
        <Button onClick={handleNext}>Escolha o sabor</Button>
      </FlavourActionWrapper>
    </Layout>
  )
}
