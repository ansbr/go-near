import {
  BackButton,
  Balance,
  BalanceButtons,
  BalanceDetails,
  BalanceMoneyIcon,
  BalanceInvertIcon,
  BalanceTitle,
  BalanceValue,
  BidButton,
  ClaimButton,
  Container,
  Main,
  Question,
  Rules,
  Text,
  Title,
  Competitors,
  CompetitorsFounded,
  CompetitorsTitle,
  FoundedName,
  WillButton,
  WillPrefix,
  WillTime,
  Claimed,
  ClaimedBy,
  ClaimedDateTime,
  ClaimedDot,
  ClaimedIcon,
  ClaimedName,
  Table
} from './layout'
import {useToMarket, useProductType} from 'helpers/routes'
import {useTopScroll} from 'helpers/hooks'
import {useToProfile} from 'helpers/routes'

export const Product = () => {
  useTopScroll()
  const toMarket = useToMarket()
  const toProfile = useToProfile()
  const type = useProductType()

  return (
    <Container>
      <BackButton onClick={toMarket} />
      <Main>
        <Title>Narn.near</Title>
        <Balance>
          <BalanceTitle>Bid Balance:</BalanceTitle>
          <BalanceMoneyIcon />
          <BalanceValue>3.50</BalanceValue>
        </Balance>
        <BalanceDetails>You will possess all bid balance in case <br /> of successful claim</BalanceDetails>
        {type === 'two' && (
          <Claimed>
            <ClaimedIcon />
            <ClaimedBy>Claimed by</ClaimedBy>
            <ClaimedName>onsails.near</ClaimedName>
            <ClaimedDot />
            <ClaimedDateTime>04.10.21 at 8:35 PM</ClaimedDateTime>
          </Claimed>
        )}
        <BalanceButtons type={type}>
          {type === 'one' && (
            <ClaimButton>Claim for <BalanceInvertIcon /> 15.426380</ClaimButton>
          )}
          {type === 'two' && (
            <WillButton big>
              <WillPrefix>Will be claimed after</WillPrefix>
              <WillTime>06:10:47</WillTime>
            </WillButton>
          )}
          <BidButton big>Bid <BalanceMoneyIcon /> 8.839357</BidButton>
        </BalanceButtons>
        <Question>What do the buttons mean?</Question>
        <Text>When you believe the bid is underestimated and will be claimed for higher price, choose «Bet» option. You will receive rewards for each bet on top of yours, or for successful claim — up to 50%. <br /><br /> When you want to claim the bid, choose «Claim» option. If no one overbid you in the next 72 hours, the bid will be yours.</Text>
        <Rules to="/rules">Read the full rules</Rules>
      </Main>
      <Competitors>
        <CompetitorsTitle>Competitors</CompetitorsTitle>
        <CompetitorsFounded>Founded by: <FoundedName onClick={toProfile}>luozhiwei.near</FoundedName></CompetitorsFounded>
        <Table />
      </Competitors>
    </Container>
  )
}
