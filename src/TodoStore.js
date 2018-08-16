import {observable} from 'mobx'

class TodoList {
  @observable todos = []
  @observable filter = ''
  
}