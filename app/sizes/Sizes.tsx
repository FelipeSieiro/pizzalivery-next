"use client"
import { useContext, useEffect, useState } from "react"

import { RadioCard, SizeActionWrapper, SizeContentWrapper } from "./Sizes.style"
import OrderContext from "../contexts/OrderContext"
import Layout from "../layout"
import { Title } from "../components/title/Title"
import { Button } from "../components/button/Button"


export default function Sizes() {
  const navigate = useNavigate()
  const { pizzaSize, setPizzaSize } = useContext(OrderContext)

  const [sizeId, setSizeId] = useState("")
  const [pizzaSizeOptions, setPizzaSizeOptions] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getPizzaSizeOptions = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("http://localhost:8000/pizza/sizes")
      const options = await response.json()
      setPizzaSizeOptions(options)
    } catch (error) {
      alert(`Deu ruim:  ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  const getPizzaSize = (id: string) => {
    return pizzaSizeOptions.filter((option) => option.id === id)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSizeId(event.target.value)
  }

  const handleBack = () => {
    navigate(routes.home)
  }

  const handleNext = () => {
    const selectedSize = getPizzaSize(sizeId)
    setPizzaSize(selectedSize)
    navigate(routes.pizzaFlavour)
  }

  useEffect(() => {
    if (!pizzaSize) return

    setSizeId(pizzaSize[0].id)
  }, [])

  useEffect(() => {
    getPizzaSizeOptions()
  }, [])

  return (
    <Layout>
      <Title tabIndex={0}>Escolha o tamanho da sua pizza</Title>
      {isLoading ? (
        <SizeContentWrapper>
          <Title>Carregando</Title>
        </SizeContentWrapper>
      ) : (
        <SizeContentWrapper>
          {pizzaSizeOptions.map(({ id, size, slices, flavours, text }) => (
            <RadioCard key={id}>
              <input
                type="radio"
                id={id}
                name="sizes"
                onChange={handleChange}
                value={id}
                checked={sizeId === id}
              />
              <label htmlFor={id}>
                {text} - {flavours} sabores
                <span>
                  Pizza com {slices} pedaços e {size}cm
                </span>
              </label>
            </RadioCard>
          ))}
        </SizeContentWrapper>
      )}
      <SizeActionWrapper>
        <Button inverse="inverse" onClick={handleBack}>
          Voltar
        </Button>
        <Button onClick={handleNext}>Escolha o sabor</Button>
      </SizeActionWrapper>
    </Layout>
  )
}
