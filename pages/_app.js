import { PageProvider } from "../context/PageProvider"



const MyApp = ({ Component, pageProps }) => {
  return (
      <PageProvider>
        <Component {...pageProps} />
      </PageProvider>
  )
}

export default MyApp