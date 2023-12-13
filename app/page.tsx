import Home from '@/components/Home'
import { Provider } from 'react-redux'
import { store }from '../redux/store'

export default function Page() {
  return (
    <div>
      <Home />
    </div>
  )
}
