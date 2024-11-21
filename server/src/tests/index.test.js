import assert from 'node:assert'
import test from 'node:test'
test('DATABASE TESTS', async (t) => {

    const res = await fetch('http://localhost:3030/api/todos', {
        method: 'POST',
        body: JSON.stringify({
            title: 'hello',
            completed: false
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const {success }= await res.json()
    assert.strictEqual( success, true)
}
)