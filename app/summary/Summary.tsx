"use client"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Layout } from "../../components/layout/Layout"
import { routes } from "../../routes"
import OrderContext from "../../contexts/OrderContext"
import { Title } from "../../components/title/Title"
import { convertToCurrency } from "../../helpers/convertToCurrency"
import {
  SummaryActionWrapper,
  SummaryAmount,
  SummaryContentWrapper,
  SummaryDescription,
  SummaryDetails,
  SummaryImage,
  SummaryPrice,
  SummaryTitle,
} from "./Summary.style"
import { Button } from "../../components/button/Button"

export default function Summary() {
  const navigate = useNavigate()

  const { pizzaSize, pizzaFlavour, setPizzaOrder } = useContext(OrderContext)
  const [summaryData, setSummaryData] = useState({})
  const [summaryAmount, setSummaryAmount] = useState(0)

  const handleBack = () => {
    navigate(routes.pizzaFlavour)
  }
  const handleNext = () => {
    const payload = {
      item: {
        name: summaryData.name,
        image: summaryData.image,
        size: summaryData.text,
        slices: summaryData.slices,
        value: summaryData.price,
      },
      total: summaryAmount,
    }

    setPizzaOrder(payload)
    navigate(routes.checkout)
  }

  useEffect(() => {
    if (!pizzaFlavour) {
      return navigate(routes.pizzaSize)
    }

    if (!pizzaSize) {
      return navigate(routes.home)
    }

    setSummaryData({
      text: pizzaSize[0].text,
      slices: pizzaSize[0].slices,
      name: pizzaFlavour[0].name,
      price: pizzaFlavour[0].price[pizzaSize[0].slices],
      image: pizzaFlavour[0].image,
    })
  }, [])

  useEffect(() => {
    setSummaryAmount(summaryData.price)
  }, [summaryAmount])

  return (
    <Layout>
      <Title tabIndex={0}>Resumo do pedido</Title>
      <SummaryContentWrapper>
        <SummaryDetails>
          <SummaryImage src={summaryData.image} alt="" />
          <SummaryTitle>{summaryData.name}</SummaryTitle>
          <SummaryDescription>
            {summaryData.text} {`(${summaryData.slices}) pedaços`}
          </SummaryDescription>
          <SummaryPrice>{convertToCurrency(summaryData.price)}</SummaryPrice>
        </SummaryDetails>
        <SummaryAmount>
          <SummaryPrice>{convertToCurrency(summaryAmount)}</SummaryPrice>
        </SummaryAmount>
      </SummaryContentWrapper>
      <SummaryActionWrapper>
        <Button inverse="inverse" onClick={handleBack}>
          Voltar
        </Button>
        <Button onClick={handleNext}>Ir para o pagamento</Button>
      </SummaryActionWrapper>
    </Layout>
  )
}
