import { LogoContainer, TitleContainer, DescriptionContainer } from './styles'
 
export function Logo() {
  return(
    <LogoContainer>
			<TitleContainer>wishbox</TitleContainer>
			<DescriptionContainer className='ml-2'>dream, share, connect</DescriptionContainer>
		</LogoContainer>
  )
}