export function generateRandomEmail() {
    const timestamp = Date.now() 
    return `test_${timestamp}@example.com`
}

export function generateUsername() {
    const timestamp = Date.now() 
    return `testUsername${timestamp}`
}