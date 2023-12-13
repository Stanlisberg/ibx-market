'use client'

import { Provider } from 'react-redux'
import { store }from './store'
import { ReactNode } from 'react'

// function Providers ({ children }) {
//     return (
//         <Provider store={store}>{children}</Provider>
//     )

// }

function Providers ({ children}: {children: React.ReactNode}) {
    return <Provider store={store}>{children}</Provider>
}


export default Providers