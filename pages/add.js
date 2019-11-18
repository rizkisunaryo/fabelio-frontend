import { useState } from 'react'
import Router from 'next/router'

import { API_URL } from '../src/constants/Url'

const Add = () => {
    const [isDisabled, setDisabled] = useState(false)
    const [url, setUrl] = useState('')
    return <>
        <div style={{ marginBottom: 5 }}>Please add URL: </div>
        <input type='text' style={{ width: 200 }} disabled={isDisabled} onChange={e => setUrl(e.target.value)} />
        <button disabled={isDisabled} style={{ marginLeft: 5 }} onClick={async () => {
            setDisabled(true)
            await fetch(`${API_URL}/urls`, { method: 'POST', body: JSON.stringify({ url }), headers: { 'Content-Type': 'application/json' } })
            Router.push('/')
        }}>Add</button>
    </>
}

export default Add