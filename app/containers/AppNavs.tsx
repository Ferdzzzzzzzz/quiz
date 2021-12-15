import {DoubleArrowLeftIcon, DoubleArrowRightIcon} from '@radix-ui/react-icons'
import {Link} from 'remix'

function AppNavs() {
  return (
    <div className="fixed w-full bottom-0 flex justify-between px-10 py-1 border-t bg-white/70 backdrop-blur-sm z-10">
      <Link
        to="/"
        className="focus:outline-none focus:ring focus:ring-blue-200 rounded"
      >
        <DoubleArrowLeftIcon className="w-10 h-10 text-stone-500" />
      </Link>
      <Link
        to="/"
        className="focus:outline-none focus:ring focus:ring-blue-200 rounded"
      >
        <DoubleArrowRightIcon className="w-10 h-10 text-stone-500" />
      </Link>
    </div>
  )
}

export {AppNavs}
