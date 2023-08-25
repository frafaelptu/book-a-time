import { Button, TextInput } from '@project-design-system-ui/react'
import { Form } from './styles'
import { ArrowRight } from 'phosphor-react'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput size="sm" prefix="dominio.com/" placeholder="seu-usuário" />
      <Button size="md" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
