import React from 'react'
import s from './App.module.css'
import {HW1} from "./HW2/hw01/HW1"
import {HW2} from "./HW2/hw02/HW2";



function App() {
    return (
        <div className={s.App}>
            <HW1/>
            <HW2/>
            {/*<HW3/>*/}
            {/*<HW4/>*/}

            {/*при выполнении дз 5 и более - закомментировать здесь дз 1-4, так как они есть внутри дз 5*/}
            {/*<HW5/>*/}
        </div>
    )
}

export default App
