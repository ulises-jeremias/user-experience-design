import React from 'react'
import { Switch } from 'react-router-dom'

import AppContainer from 'src/containers/App'
import HomePage from 'src/containers/Home'
import AffectedAreasPage from 'src/containers/AffectedAreas'
import ContactsPage from 'src/containers/Contacts'
import EvacuationSectorsPage from 'src/containers/EvacuationSectors'
import ArticlesPage from 'src/containers/Articles'
import { PropsRoute } from 'src/components/PropsRoute'

const AppRoutes = props => {
  return (
    <AppContainer {...props}>
      <Switch>
        <PropsRoute exact path='/' component={HomePage} {...props} />
        <PropsRoute path='/affected-areas' component={AffectedAreasPage} {...props} />
        <PropsRoute path='/contacts' component={ContactsPage} {...props} />
        <PropsRoute path='/evacuation-sectors' component={EvacuationSectorsPage} {...props} />
        <PropsRoute path='/articles' component={ArticlesPage} {...props} />
      </Switch>
    </AppContainer>
  )
}

export default AppRoutes
