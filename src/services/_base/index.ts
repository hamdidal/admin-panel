import { API } from '../config'
import HTTPClient from './HTTPClient'

export const Request = new HTTPClient(API)
