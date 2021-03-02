//import { formatTimestamp } from "@shlack/utils";

import { formatTimestamp } from '../src'

describe('formatTimestamp() tests', function () {
  let x = 5
  test('01-01-2020', () => {
    expect(formatTimestamp(new Date('01-01-2020'))).toBe(
      'Jan 01, 2020 00:01:00 AM'
    )
  })
})
