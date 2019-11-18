import { useEffect, useState } from 'react'
import lodashget from '@rizkisunaryo/lodashget'
import Link from 'next/link'

import { API_URL } from '../src/constants/Url'

const Index = () => {
    const [urls, setUrls] = useState([])
    const [paging, setPaging] = useState(1)

    const fetchUrls = () => {
        fetch(`${API_URL}/urls?page=${paging}`).then(res => res.json()).then(res => {
            const responseUrls = lodashget(res, 'data.urls', [])
            if (responseUrls.length > 0) {
                setUrls([...urls, ...responseUrls])
                setPaging(paging + 1)
            }
        })
    }

    useEffect(fetchUrls, [])

    return <>
        {urls && urls.map(({ _id, title, url }) => title ? <div key={_id} style={{ marginBottom: 10 }}><div>{title}</div><div><Link href={`/detail/${_id}`}><a>{url}</a></Link></div></div> : null)}
        <button onClick={fetchUrls} style={{ marginTop: 10 }}>Load more</button>
    </>
}

export default Index