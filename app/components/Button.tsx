import {PropsWithChildren} from 'react'
import {Link} from 'remix'

type PrimaryButtonProps = PropsWithChildren<{
  onClick: () => void
}>

function PrimaryButton({children, onClick}: PrimaryButtonProps) {
  return (
    <button
      className="border border-blue-800 text-blue-800 bg-blue-100 font-semibold text-md px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

type PrimaryLinkProps = PropsWithChildren<{
  to: string
}>

function PrimaryLink({children, to}: PrimaryLinkProps) {
  return (
    <Link
      to={to}
      className="border border-blue-800 text-blue-800 bg-blue-100 font-semibold text-md px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
    >
      {children}
    </Link>
  )
}

export {PrimaryButton, PrimaryLink}
