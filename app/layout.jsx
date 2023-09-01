import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
export const metadata = {
    title :"promptopia",
    description:"Discover & Share Ai Prompts"
}
const RootLayout = ({children}) => {
  return (
<html>
    <body>
        <Provider>
        <div className='main'>
            <div className='gradient'></div>
        </div>
        <main className='app'>
            <Nav/>
            {children}
        </main>
        </Provider>
    </body>
</html>
    )
}

export default RootLayout