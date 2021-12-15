import {useFilterState} from '~/containers/Filter'

export {Root as default}

function Root() {
  let selectedFilters = useFilterState()

  return (
    <div>
      Content
      <p>Last word</p>
      {[...Array(100).keys()].map(i => {
        return <p>Any</p>
      })}
    </div>
  )
}
