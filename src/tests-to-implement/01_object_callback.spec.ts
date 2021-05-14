import { describe, expect, it } from '@jest/globals'
import { execute } from '../tests-to-implement/01_object_callback'

describe('object mock callback', () => {
  describe('execute', () => {
    it('calls the callback', () => {
      // Arrange
      const payload = {id: "1", amount: 35, callback: jest.fn()}
      // Act
      execute(payload);
      // Assert
      expect(payload.callback.mock.calls.length).toBeGreaterThan(0);
    })

    it('calls the callback once', () => {
      // Arrange
      const payload = {id: "1", amount: 35, callback: jest.fn()}
      // Act
      execute(payload);
      // Assert
      expect(payload.callback.mock.calls.length).toBe(1);
    })

    it('calls the callback with correct value', () => {
      // Arrange
      const payload = {id: "1", amount: 35, callback: jest.fn()}
      // Act
      execute(payload);
      // Assert
      const expected ="350 for 1";
      expect(payload.callback.mock.calls[0][0]).toBe(expected);
    })
  })
})
