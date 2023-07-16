import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { TitleContainer } from '../styles'
import { PaymentContainer, PaymentOption, PaymentOptions } from './styles'

interface PaymentProps {
  paymentMethod: number
  handleSelectPaymentMethod: (method: string) => void
}

export const Payment = ({
  paymentMethod,
  handleSelectPaymentMethod,
}: PaymentProps) => {
  return (
    <PaymentContainer>
      <TitleContainer color="purple">
        <span>
          <CurrencyDollar size={22} />
        </span>
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </TitleContainer>
      <PaymentOptions>
        <label htmlFor="credito">
          <input
            type="radio"
            name="payment"
            id="credito"
            checked={paymentMethod === 1}
            onChange={() => handleSelectPaymentMethod('credito')}
          />
          <PaymentOption className={paymentMethod === 1 ? 'active' : ''}>
            <span>
              <CreditCard size={16} />
            </span>
            cartão de crédito
          </PaymentOption>
        </label>

        <label htmlFor="debito">
          <input
            type="radio"
            name="payment"
            id="debito"
            checked={paymentMethod === 2}
            onChange={() => handleSelectPaymentMethod('debito')}
          />
          <PaymentOption className={paymentMethod === 2 ? 'active' : ''}>
            <span>
              <Bank size={16} />
            </span>
            cartão de débito
          </PaymentOption>
        </label>

        <label htmlFor="dinheiro">
          <input
            type="radio"
            name="payment"
            id="dinheiro"
            checked={paymentMethod === 3}
            onChange={() => handleSelectPaymentMethod('dinheiro')}
          />
          <PaymentOption className={paymentMethod === 3 ? 'active' : ''}>
            <span>
              <Money size={16} />
            </span>
            dinheiro
          </PaymentOption>
        </label>
      </PaymentOptions>
    </PaymentContainer>
  )
}
