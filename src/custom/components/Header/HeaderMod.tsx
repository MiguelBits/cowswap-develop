// import { Trans } from '@lingui/macro'
import useScrollPosition from '@react-hook/window-scroll'
// import { CHAIN_INFO } from 'constants/chains'
// import { SupportedChainId } from '@src/constants/chains'
// import useActiveWeb3React from 'hooks/useActiveWeb3React'
// import useTheme from 'hooks/useTheme'
import { darken } from 'polished'
import { NavLink } from 'react-router-dom'
import { Text } from 'rebass'
// import { useShowClaimPopup, useToggleSelfClaimModal } from 'state/application/hooks'
// import { useUserHasAvailableClaim } from 'state/claim/hooks'
// import { useUserHasSubmittedClaim } from 'state/transactions/hooks'
// import { useDarkModeManager } from 'state/user/hooks'
// import { useNativeCurrencyBalances } from 'state/wallet/hooks'
import styled from 'styled-components/macro'

// import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
// import { ExternalLink, ThemedText } from '../../theme'
// import ClaimModal from '../claim/ClaimModal'
// import { CardNoise } from '../earn/styled'
// import Menu from '../Menu'
import Row, { RowFixed } from 'components/Row'
// import { Dots } from '../swap/styleds'
// import Web3Status from '../Web3Status'
// import HolidayOrnament from './HolidayOrnament'
// import NetworkSelector from './NetworkSelector'

// MOD imports
import { PropsWithChildren } from 'react'

export const HeaderFrame = styled.div<{ showBackground: boolean }>`
  display: grid;
  grid-template-columns: 1fr 120px;
  //align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  border-bottom: ${({ theme }) => theme.header.border};
  padding: 1rem;
  z-index: 2;
  /*position: relative;
  /!* Background slide effect on scroll. *!/
  background-image: ${({ theme }) => `linear-gradient(to bottom, transparent 50%, ${theme.bg0} 50% )}}`};
  background-position: ${({ showBackground }) => (showBackground ? '0 -100%' : '0 0')};
  background-size: 100% 200%;
  box-shadow: 0px 0px 0px 1px ${({ theme, showBackground }) => (showBackground ? theme.bg2 : 'transparent;')};
  transition: background-position 0.1s, box-shadow 0.1s;
  background-blend-mode: hard-light;*/

  ${({ theme }) => theme.mediaWidth.upToLarge`
    grid-template-columns: 48px 1fr 1fr;
  `};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    /*padding:  1rem;*/
    grid-template-columns: 1fr 1fr;
    position: relative;
  `};

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding: 0.5rem 1rem;
    /*grid-template-columns: 36px 1fr;*/
  `};
`

export const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: row;
    justify-content: space-between;
    justify-self: center;
    max-width: 960px;
    padding: 1rem;
    z-index: 99;
    height: 72px;
    border-radius: 12px 12px 0 0;
  `};
`

export const HeaderElement = styled.div`
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-left: 0.5em;
  }

  /* addresses safari's lack of support for "gap" */
  & > *:not(:first-child) {
    margin-left: 8px;
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: row-reverse;
    align-items: center;
  `};

  ${({ theme }) => theme.mediaWidth.upToVerySmall`
    width: 115px;
  `};
`

export const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.mediaWidth.upToSmall`
      display: none;
    `};
`

export const HeaderRow = styled(RowFixed)`
  ${({ theme }) => theme.mediaWidth.upToMedium`
   width: 100%;
  `};
`

export const HeaderLinks = styled(Row)`
  justify-content: center;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    display: none;
  `};
  /* justify-self: center;
  background-color: ${({ theme }) => theme.bg0};
  width: fit-content;
  padding: 2px;
  border-radius: 16px;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  overflow: auto;
  align-items: center;
  ${({ theme }) => theme.mediaWidth.upToLarge`
    justify-self: start;  
    `};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    justify-self: center;
  `};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: row;
    justify-content: space-between;
    justify-self: center;
    z-index: 99;
    position: fixed;
    bottom: 0; right: 50%;
    transform: translate(50%,-50%);
    margin: 0 auto;
    background-color: ${({ theme }) => theme.bg0};
    border: 1px solid ${({ theme }) => theme.bg2};
    box-shadow: 0px 6px 10px rgb(0 0 0 / 2%);
  `}; */
`

export const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg3)};
  white-space: nowrap;
  width: 100%;
  cursor: pointer;

  :focus {
    border: 1px solid blue;
  }
`

export const UNIAmount = styled(AccountElement)`
  color: white;
  padding: 4px 8px;
  height: 36px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.bg3};
  background: radial-gradient(174.47% 188.91% at 1.84% 0%, #ff007a 0%, #2172e5 100%), #edeef2;
`

export const UNIWrapper = styled.span`
  width: fit-content;
  position: relative;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 0.9;
  }
`

export const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`

export const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
  // margin-right: 12px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    justify-self: center;
  `};
  :hover {
    cursor: pointer;
  }
`

/* export const UniIcon = styled.div`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }

  position: relative;
` */

const activeClassName = 'ACTIVE'

export const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: left;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text2};
  font-size: 1rem;
  width: fit-content;
  margin: 0 12px;
  font-weight: 500;
  /* padding: 8px 12px;
  word-break: break-word;
  overflow: hidden;
  white-space: nowrap; */
  &.${activeClassName} {
    border-radius: 12px;
    font-weight: 600;
    /* justify-content: center; */
    color: ${({ theme }) => theme.text1};
    /* background-color: ${({ theme }) => theme.bg1}; */
  }

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.text1)};
  }
`

/* const StyledExternalLink = styled(ExternalLink).attrs({
  activeClassName,
})<{ isActive?: boolean }>`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: left;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text2};
  font-size: 1rem;
  width: fit-content;
  margin: 0 12px;
  font-weight: 500;

  &.${activeClassName} {
    border-radius: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.text1};
  }

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.text1)};
    text-decoration: none;
  }
` */

export const StyledMenuButton = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({ theme }) => theme.bg3};
  margin-left: 8px;
  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    margin-top: 2px;
  }
  > * {
    stroke: ${({ theme }) => theme.text1};
  }
`

export default function Header({ children }: PropsWithChildren<void>) {
  /* const { account, chainId } = useActiveWeb3React()

  const userEthBalance = useNativeCurrencyBalances(account ? [account] : [])?.[account ?? '']
  const [darkMode] = useDarkModeManager()
  const { white, black } = useTheme()

  const toggleClaimModal = useToggleSelfClaimModal()

  const availableClaim: boolean = useUserHasAvailableClaim(account)

  const { claimTxn } = useUserHasSubmittedClaim(account ?? undefined)

  const showClaimPopup = useShowClaimPopup() */

  const scrollY = useScrollPosition()

  /* const {
    infoLink,
    nativeCurrency: { symbol: nativeCurrencySymbol },
  } = CHAIN_INFO[chainId ? chainId : SupportedChainId.MAINNET] */

  return (
    <HeaderFrame showBackground={scrollY > 45}>
      {children}
      {/*
      <ClaimModal />
      <Title href=".">
        <UniIcon>
          <Logo fill={darkMode ? white : black} width="24px" height="100%" title="logo" />
          <HolidayOrnament />
        </UniIcon>
      </Title>
      <HeaderLinks>
        <StyledNavLink id={`swap-nav-link`} to={'/swap'}>
          <Trans>Swap</Trans>
        </StyledNavLink>
        <StyledNavLink
          id={`pool-nav-link`}
          to={'/pool'}
          isActive={(match, { pathname }) =>
            Boolean(match) ||
            pathname.startsWith('/add') ||
            pathname.startsWith('/remove') ||
            pathname.startsWith('/increase') ||
            pathname.startsWith('/find')
          }
        >
          <Trans>Pool</Trans>
        </StyledNavLink>
        {(!chainId || chainId === SupportedChainId.MAINNET) && (
          <StyledNavLink id={`vote-nav-link`} to={'/vote'}>
            <Trans>Vote</Trans>
          </StyledNavLink>
        )}
        <StyledExternalLink id={`charts-nav-link`} href={infoLink}>
          <Trans>Charts</Trans>
          <sup>↗</sup>
        </StyledExternalLink>
      </HeaderLinks>

      <HeaderControls>
        <HeaderElement>
          <NetworkSelector />
        </HeaderElement>
        <HeaderElement>
          {availableClaim && !showClaimPopup && (
            <UNIWrapper onClick={toggleClaimModal}>
              <UNIAmount active={!!account && !availableClaim} style={{ pointerEvents: 'auto' }}>
                <ThemedText.White padding="0 2px">
                  {claimTxn && !claimTxn?.receipt ? (
                    <Dots>
                      <Trans>Claiming UNI</Trans>
                    </Dots>
                  ) : (
                    <Trans>Claim UNI</Trans>
                  )}
                </ThemedText.White>
              </UNIAmount>
              <CardNoise />
            </UNIWrapper>
          )}
          <AccountElement active={!!account}>
            {account && userEthBalance ? (
              <BalanceText style={{ flexShrink: 0, userSelect: 'none' }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                <Trans>
                  {userEthBalance?.toSignificant(3)} {nativeCurrencySymbol}
                </Trans>
              </BalanceText>
            ) : null}
            <Web3Status />
          </AccountElement>
        </HeaderElement>
        <HeaderElement>
          <Menu />
        </HeaderElement>
      </HeaderControls>
      */}
    </HeaderFrame>
  )
}