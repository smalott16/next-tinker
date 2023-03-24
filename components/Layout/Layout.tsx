 
interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return(
    <>
      <div>Header</div>
        {children}
      <div>Footer</div>
    </>
  )
}

export default Layout