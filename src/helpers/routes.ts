import {useState, useEffect} from 'react'
import {useLocation, useHistory} from 'react-router-dom'

export interface CheckState {
  isMarket: boolean;
  isOffer: boolean;
  isRules: boolean;
}

const checkState: CheckState = {
  isMarket: false,
  isOffer: false,
  isRules: false
}

const market = ['/', '/market', '/product', '/profile']

export const useRouteCheck = (): CheckState => {
  const [check, setCheck] = useState<CheckState>(checkState)
  const location = useLocation()
  
  useEffect(() => {
    const {pathname} = location
    const state: CheckState = {
      isMarket: market.includes(pathname),
      isOffer: pathname === '/offer',
      isRules: pathname === '/rules'
    }
    setCheck(state)
  }, [location])
  return check
}

const hideScroll = (open: boolean) =>
  document.body.style.overflowY = open ? 'hidden' : 'auto'

export const useOpen = (): [boolean, (_: boolean) => void] => {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    hideScroll(open)
  }, [open])
  return [open, setOpen]
}

export const useToBid = (bidId: string) => {
  const history = useHistory()
  
  return () => {
    history.push(`/bid/${bidId}`)
  }
}

export const useToProfile = () => {
  const history = useHistory()
  
  return () => {
    history.push(`/profile`)
  }
}


export const useToAcquire = (bidId: string) => {
  const history = useHistory()

  return () => {
    history.push(`/acquire/${bidId}`)
  }
}

export const useToMarket = () => {
  const history = useHistory()
  
  return () => {
    history.push(`/`)
  }
}
