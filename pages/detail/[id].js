import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import lodashget from '@rizkisunaryo/lodashget'
import Link from 'next/link'

import { API_URL } from '../../src/constants/Url'

const Detail = () => {
  const { query: { id } } = useRouter()
  const [url, setUrl] = useState({})

  const fetchUrl = () => { fetch(`${API_URL}/urls/${id}`).then(res => res.json()).then(res => setUrl(lodashget(res, 'data.url', {}))) }

  useEffect(fetchUrl, [])
  useEffect(fetchUrl, [id])

  if (!url.title) return <Link href={`/detail/${id}`}><button>Reload</button></Link>
  return <>
    <div style={{ fontWeight: 'bold' }}>{url.title}</div>
    <div>{url.price}</div>
    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10, marginBottom: 10, overflowX: 'scroll' }}>
      {lodashget(url, 'images', []).map(image => <img key={image} src={image} />)}
    </div>
    <div style={{ marginTop: 20 }}>
      {lodashget(url, 'description', '').split('\n').map((smallerDescription, idx) => <div key={idx} style={{ marginTop: 10 }}>{smallerDescription}</div>)}
    </div>
  </>
}

export default Detail
