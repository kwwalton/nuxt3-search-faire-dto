import { IncomingMessage, ServerResponse } from 'http'
import chairResponse from '~/constants/chair-response'

export default async (req: IncomingMessage, res: ServerResponse) => {
  return chairResponse

  // return {
  //   status: 200,
  //   body: {
  //     chairs: []
  //   }
  // }
}
