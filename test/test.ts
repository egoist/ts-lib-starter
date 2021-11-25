import { test } from 'uvu'
import assert from 'uvu/assert'
import { foo } from '../dist'

test('simple', () => {
  assert.equal(foo, 'foo')
})

test.run()
