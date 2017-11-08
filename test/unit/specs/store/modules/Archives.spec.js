import { actions } from '../../../../../src/renderer/store/modules/Archives' // todo use @ 
import archives from '../../../../../src/renderer/API/DB'

// See renderer/API, and note the __mocks__ folder.
// You can mock any module by making a __mocks__ folder next to it
// and putting a file of the same name inside.
// In this case I want to mock DB.js, so I made __mocks__/DB.js
jest.mock('../../../../../src/renderer/API/DB')

describe('actions', () => {
  let commit
  let mutationHandler
  let commitCount = 0
  let payload

  beforeEach(() => {
    commit = (handler, _payload) => {
      mutationHandler = handler
      commitCount += 1
      payload = _payload
    }
  })

  describe('LOAD', () => {
    beforeEach(() => {
      archives.__setMockResponse('Some fake data')
    })

    it('loads some archives and commits the result', () => {
      actions.LOAD({ commit })

      expect(commitCount).toBe(1)
      expect(mutationHandler).toEqual('SET')
      expect(payload).toEqual({ data: 'Some fake data' })
    })
  })
})

