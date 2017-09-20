import {SearchRequest} from '../property/models/models';

export namespace Store {
  export type PropertyState = {
    request: SearchRequest
  }


  export type All = {
    property?: PropertyState
  }
}