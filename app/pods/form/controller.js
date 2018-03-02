import Controller from '@ember/controller'

import {and, getBy} from 'ember-awesome-macros'
import {join} from 'ember-awesome-macros/array'
import computed from 'ember-macro-helpers/computed'
import raw from 'ember-macro-helpers/raw'
import reads from 'ember-macro-helpers/reads'

export default Controller.extend({
  gist         : reads('model.gist'),
  files        : reads('gist.files'),
  questionsTxt : reads('files.questions.content'),

  questionsArr : computed('questionsTxt', questionsTxt => {
    return questionsTxt
      .split("\n")
      .map(line => line.split(",").map(q => q.trim()))
  }),

  answersArr : computed(() => []),

  answersTxt : join('answersArr', raw("-")),

  answerFile : and('answersTxt', getBy('files', 'answersTxt')),

  answer : and('answerFile', getBy('answerFile', raw('content'))),

  actions : {
    answer (lineIndex, questionIndex) {
      this.answersArr.arrayContentWillChange(lineIndex)
      this.answersArr[lineIndex] = questionIndex + 1
      this.answersArr.arrayContentDidChange(lineIndex)
    },
  },
})
