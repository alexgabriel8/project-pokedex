import { vi } from 'vitest'

const matchMediaMock = {
    true: () => (
        Object.defineProperty(window, 'matchMedia', {
        value: vi.fn().mockImplementation(() => ({
            matches: true,
        }))
        })
    ),

    false: () => (
        Object.defineProperty(window, 'matchMedia', {
        value: vi.fn().mockImplementation(() => ({
            matches: false,
        }))
        })
    )
}

export { matchMediaMock }