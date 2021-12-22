import {PrimaryLink} from '../components/Button'
import {useFilterState} from '../containers/Filter'

export {Root as default}

function Root() {
  let filterState = useFilterState()

  return (
    <div>
      <PrimaryLink to={'/aasdf'}>Get Started</PrimaryLink>
    </div>
  )
}
