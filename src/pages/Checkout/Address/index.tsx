import { TextInput } from './styles'
import { useFormContext } from 'react-hook-form'

export const Address = () => {
  const { register } = useFormContext()

  return (
    <>
      <TextInput type="text" placeholder="CEP" {...register('cep')} />
      <TextInput type="text" placeholder="Rua" {...register('rua')} />
      <TextInput type="text" placeholder="Número" {...register('numero')} />
      <TextInput
        type="text"
        placeholder="Complemento"
        {...register('complemento')}
      />
      <TextInput type="text" placeholder="Bairro" {...register('bairro')} />
      <TextInput type="text" placeholder="Cidade" {...register('cidade')} />
      <TextInput type="text" placeholder="UF" {...register('uf')} />
    </>
  )
}
