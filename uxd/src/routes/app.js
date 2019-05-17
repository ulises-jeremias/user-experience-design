import React from 'react'
import { Switch } from 'react-router-dom'

import AppContainer from 'src/containers/App'
import HomePage from 'src/containers/Home'
import AffectedAreasPage from 'src/containers/AffectedAreas'
import EvacuationSectorsPage from 'src/containers/EvacuationSectors'
import { PropsRoute } from 'src/components/PropsRoute'

const AppRoutes = props => {
  return (
    <AppContainer {...props}>
      <Switch>
        <PropsRoute exact path='/' component={HomePage} {...props} />
        <PropsRoute path='/affected-areas' component={AffectedAreasPage} {...props} />
        <PropsRoute path='/evacuation-sectors' component={EvacuationSectorsPage} {...props} />
      </Switch>
    </AppContainer>
  )
}

export default AppRoutes
