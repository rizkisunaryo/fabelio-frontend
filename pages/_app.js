import App from 'next/app'
import Link from 'next/link'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props

        return (
            <>
                <div style={{display: 'flex'}}>
                    <Link href='/'><a>list</a></Link>
                    <Link href='/add'><a style={{marginLeft: 10}}>add</a></Link>
                </div>
                <hr />
                <Component {...pageProps} />
            </>
        )
    }
}

export default MyApp
