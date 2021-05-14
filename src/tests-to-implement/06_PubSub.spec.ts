import { describe, expect, it } from '@jest/globals'
import { PubSub } from '../tests-to-implement/06_PubSub'

describe('PubSub', () => {
  describe('subscribe', () => {
    it('calls subscription callback when publish occurs on channel', async () => {
      // Arrange
      const sut = PubSub.getInstance();
      const callBack = jest.fn();
      const payload ="message";
      // Act
      sut.subscribe("Channel1", callBack);
      sut.publish("Channel1",payload );
      // Assert
      expect(callBack).toHaveBeenCalledWith(payload);
    })

    it.skip('calls all subscription callbacks when publish occurs on channel', async () => {
      // Arrange
      // Act
      // Assert
    })
  })
})
