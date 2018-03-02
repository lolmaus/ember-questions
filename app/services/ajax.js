import AjaxService from 'ember-ajax/services/ajax'

export default AjaxService.extend({
  host : "https://api.github.com/",

  headers : {
    Accept : 'application/vnd.github.v3+json',
  },

  getGist (id) {
    const url = `gists/${id}`
    return this.request(url)
  },
})
