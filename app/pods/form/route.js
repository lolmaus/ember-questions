import Route from '@ember/routing/route'
import {inject as service} from '@ember/service'

import RSVP from 'rsvp'

export default Route.extend({
  ajax : service(),

  model ({formId}) {
    return RSVP.hash({
      gist : this.ajax.getGist(formId),
    })
  },
})
