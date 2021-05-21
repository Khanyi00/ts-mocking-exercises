import { describe, expect, it } from '@jest/globals'
import { PubSub } from '../tests-to-implement/06_PubSub'

describe('PubSub', () => {
  describe('subscribe', () => {
    it.skip('calls subscription callback when publish occurs on channel', async () => {
      // Arrange
      const sut = PubSub.getInstance();
      let myPromiseResolve: Function;
      const  myPromise = new Promise((resolve, reject)=>{ myPromiseResolve = resolve});
      const callBack = jest.fn().mockImplementation(()=> myPromiseResolve());
      const payload ="message";
      // Act
      sut.subscribe("Channel1", callBack);
      sut.publish("Channel1", payload );
      // Assert
      await myPromise;
      expect(callBack).toHaveBeenCalledWith(payload);
    })

    it('calls all subscription callbacks when publish occurs on channel', async () => {
      // Arrange
      const sut = PubSub.getInstance();
      let myFirstPromiseResolve: Function;
      let mySecondPromiseResolve: Function;
      const  myFirstPromise = new Promise((resolve, reject)=>{ myFirstPromiseResolve = resolve});
      const  mySecondPromise = new Promise((resolve, reject)=>{ mySecondPromiseResolve = resolve});
      const firstCallBack = jest.fn().mockImplementation(()=> myFirstPromiseResolve());
      const secondCallBack = jest.fn().mockImplementation(()=> mySecondPromiseResolve());
      const payload ="message";
      // Act
      sut.subscribe("Channel1", firstCallBack);
      sut.subscribe("Channel1", secondCallBack);
      sut.publish("Channel1", payload );
      // Assert
      await myFirstPromise;
      await mySecondPromise;
      expect(firstCallBack).toHaveBeenCalledWith(payload);
      expect(secondCallBack).toHaveBeenCalledWith(payload);
    })
  })
})
