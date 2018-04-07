import { Servie, ServieOptions } from './base'

/**
 * HTTP response class options.
 */
export interface ResponseOptions extends ServieOptions {
  status?: number
  statusText?: string
}

/**
 * The HTTP response class.
 */
export class Response extends Servie implements ResponseOptions {

  status: number | undefined
  statusText: string | undefined

  constructor (options: ResponseOptions = {}) {
    super(options)

    this.status = options.status
    this.statusText = options.statusText
  }

  toJSON () {
    return {
      status: this.status,
      statusText: this.statusText,
      body: this.body.toJSON(),
      headers: this.headers.toJSON(),
      trailers: this.trailers.toJSON(),
      started: this.started,
      finished: this.finished,
      bytesTransferred: this.bytesTransferred
    }
  }
}
