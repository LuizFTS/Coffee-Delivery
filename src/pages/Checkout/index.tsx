import { useContext, useEffect, useState } from 'react'
import {
  AddressFormContainer,
  TitleContainer,
  CheckoutContainer,
  OrderFormContainer,
  AddressForm,
  ErrorSpan,
  ErrorsContainer,
  OrderCoffeesContainer,
} from './styles'
import { MapPinLine } from '@phosphor-icons/react'

import { CartContext } from '../../contexts/CartContext'
import { SelectedCoffeesContainer } from './SelectedCoffeesContainer'
import { Address } from './Address'
import { Payment } from './Payment'
import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const addressFormValidationSchema = z.object({
  cep: z
    .string()
    .min(8, 'CEP inválido')
    .max(9, 'CEP inválido')
    .transform((value) => value.replace('-', '')),
  rua: z
    .string()
    .min(3, 'Rua inválida')
    .transform((value) => value.toLowerCase()),
  numero: z.string().min(1, 'Número inválido'),
  complemento: z
    .string()
    .optional()
    .transform((value) => value && value.toLowerCase()),
  bairro: z
    .string()
    .min(3, 'Bairro inválido')
    .transform((value) => value.toLowerCase()),
  cidade: z
    .string()
    .min(3, 'Cidade inválida')
    .transform((value) => value.toLowerCase()),
  uf: z
    .string()
    .min(2, 'UF inválida')
    .max(2, 'UF inválida')
    .transform((value) => value.toUpperCase()),
})

type NewAddressFormData = z.infer<typeof addressFormValidationSchema>

export const Checkout = () => {
  const navigate = useNavigate()
  const { coffee, confirmOrder, resetState } = useContext(CartContext)
  const [paymentMethod, setPaymentMethod] = useState<number>(3)

  const newAddressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
  })

  const {
    handleSubmit,
    formState: { errors },
  } = newAddressForm

  useEffect(() => {
    const cartQuantity = coffee.filter((item) => item.cartQuantity > 0)
    if (cartQuantity.length === 0) {
      navigate('/')
    }
  }, [coffee, navigate])

  function handleSubmitForm(data: NewAddressFormData) {
    const { cep, rua, numero, complemento, bairro, cidade, uf } = data

    const newOrder = {
      cep,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      uf,
      payment: paymentMethod,
    }
    confirmOrder(newOrder)
    console.log(newOrder)
    const orderJSON = JSON.stringify(newOrder)
    localStorage.setItem('@coffee-delivery:delivery-location-1.0.0', orderJSON)
    resetState()
    navigate('/ordered')
  }

  function handleSelectPaymentMethod(method: string) {
    if (method === 'dinheiro') {
      setPaymentMethod(3)
    } else if (method === 'credito') {
      setPaymentMethod(1)
    } else if (method === 'debito') {
      setPaymentMethod(2)
    }
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleSubmitForm)}>
      <FormProvider {...newAddressForm}>
        <OrderFormContainer>
          <h2>Complete seu pedido</h2>
          <AddressFormContainer id="addressform">
            <TitleContainer color="yellow">
              <span>
                <MapPinLine size={22} />
              </span>
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </TitleContainer>
            <AddressForm>
              <Address />
            </AddressForm>
            <ErrorsContainer>
              {errors.cep && <ErrorSpan>{errors.cep.message}</ErrorSpan>}
              {errors.rua && <ErrorSpan>{errors.rua.message}</ErrorSpan>}
              {errors.numero && <ErrorSpan>{errors.numero.message}</ErrorSpan>}
              {errors.bairro && <ErrorSpan>{errors.bairro.message}</ErrorSpan>}
              {errors.cidade && <ErrorSpan>{errors.cidade.message}</ErrorSpan>}
              {errors.uf && <ErrorSpan>{errors.uf.message}</ErrorSpan>}
            </ErrorsContainer>
          </AddressFormContainer>
          <Payment
            handleSelectPaymentMethod={handleSelectPaymentMethod}
            paymentMethod={paymentMethod}
          />
        </OrderFormContainer>
        <OrderCoffeesContainer>
          <h2>Cafés selecionados</h2>
          <SelectedCoffeesContainer />
        </OrderCoffeesContainer>
      </FormProvider>
    </CheckoutContainer>
  )
}
