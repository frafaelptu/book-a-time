import { Box, styled } from '@project-design-system-ui/react'

export const Container = styled(Box, {
  margin: '$6 auto 0',
  padding: 0,
  display: 'grid',
  maxWidth: '100%',
  position: 'relative',

  width: 540,
  gridTemplateColumns: '1fr',
})
