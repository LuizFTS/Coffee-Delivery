import {
  ScreenContainer,
  DataCard,
  CofirmationContainer,
  DataCardWrap,
  DataCardText,
  DataCardCapitalized,
  DataCardIcon,
  DataCardInputText,
} from './styles'

import Success from '../../assets/success.svg'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { Order } from '../../reducers/coffees/reducer'

export const Ordered = () => {
  const [location, setLocation] = useState<Order | null>(null)

  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:delivery-location-1.0.0',
    )

    if (storedStateAsJSON) {
      const locationAsJson = JSON.parse(storedStateAsJSON)
      setLocation(locationAsJson)
    }
  }, [])

  function convertPaymentMethod(pay: number | null) {
    if (pay === 1) {
      return 'Cartão de Crédito'
    } else if (pay === 2) {
      return 'Cartão de Débito'
    } else if (pay === 3) {
      return 'Dinheiro'
    }
  }

  return (
    <ScreenContainer>
      <CofirmationContainer>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <DataCardWrap>
          <DataCard>
            <div>
              <DataCardIcon color="purple">
                <MapPin weight="fill" size={16} />
              </DataCardIcon>
              <div>
                <DataCardText>
                  Entrega em{' '}
                  <b>
                    <DataCardInputText>
                      {location && location.rua}
                    </DataCardInputText>
                    , {location && location.numero}
                  </b>
                  <br />
                  <DataCardCapitalized>
                    {location && location.bairro} -{' '}
                    {location && location.cidade},{' '}
                  </DataCardCapitalized>
                  {location && location.uf}
                </DataCardText>
              </div>
            </div>
            <div>
              <DataCardIcon color="yellow">
                <Timer weight="fill" size={16} />
              </DataCardIcon>
              <div>
                <DataCardText>Previsão de entrega</DataCardText>
                <DataCardText>
                  <b>20 min - 30 min</b>
                </DataCardText>
              </div>
            </div>
            <div>
              <DataCardIcon color="yellow-dark">
                <CurrencyDollar size={16} />
              </DataCardIcon>
              <div>
                <DataCardText>Pagamento na entrega</DataCardText>
                <DataCardText>
                  <b>{convertPaymentMethod(location && location.payment)}</b>
                </DataCardText>
              </div>
            </div>
          </DataCard>
        </DataCardWrap>
      </CofirmationContainer>
      <img src={Success} alt="Estamos chegando!" />
    </ScreenContainer>
  )
}
