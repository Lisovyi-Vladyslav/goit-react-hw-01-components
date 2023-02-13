import styled from '@emotion/styled'

const IsOnline = props => {
return props.eventIsOnline ? 'green' : 'red'
}
export const Name = styled.p`
  color: ${IsOnline};
`