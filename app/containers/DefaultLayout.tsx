import {PropsWithChildren} from 'react'

function DefaultLayout({children}: PropsWithChildren<{}>) {
  return <div className="max-w-xs mx-4 sm:mx-auto pt-14 pb-20">{children}</div>
}

export {DefaultLayout}
