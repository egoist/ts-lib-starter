import { assert, test } from 'vitest'
import { foo } from '../src'

test('simple', () => {
  assert.equal(foo, 'foo')
})
