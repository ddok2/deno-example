import {
  assertEquals,
  assertMatch,
} from 'https://deno.land/std/testing/asserts.ts'

import createId from './createId.ts'

Deno.test({
  name: 'it returns a ID in uuid v4 format',
  fn: () => {
    const id = createId()

    assertEquals(id.length, 36)
    assertMatch(id, /^[a-f0-9\-]+$/)
  },
})
