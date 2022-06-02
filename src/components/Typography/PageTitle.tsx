import React from 'react'
function PageTitle({ children, fontSize, className }: any) {
  return <h1 style={{fontSize:fontSize}} className={' mb-8 text-2xl font-semibold text-brand-text-tableHead'+ " " + className}>{children}</h1>
}
export default PageTitle
