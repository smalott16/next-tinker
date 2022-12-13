import { useRouter } from 'next/router'

const RouteDisply = () => {
  const router = useRouter()
  return (
    <>
      <div>{`Pathname: ${router.pathname}`}</div>
      <div>{`Query: ${router.query.rcid}`}</div>
    </>
  )
}

export default RouteDisply