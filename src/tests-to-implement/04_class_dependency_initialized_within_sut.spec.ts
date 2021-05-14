import { describe, expect, it } from '@jest/globals'
import { Item } from '../dependencies/Item'
import { PricingService } from '../dependencies/PricingService'
import { ItemPriceAdjusterVersion2 } from '../tests-to-implement/04_class_dependency_initialized_within_sut'

describe('ItemPriceAdjusterVersion2', () => {
  describe('price is less than 100', () => {
    it('marks item price up by the markup percentage', async () => {
       // Arrange
       const item : Item =
       {
       id: "1",
       name: "Bob",
       price: 20,
       description: "Food",
       created: new Date
     };
   
     const pricingService = new PricingService();
     const sut = new ItemPriceAdjusterVersion2();
    //  (sut as any).pricingService = pricingService;
    sut["pricingService"] = pricingService;
     jest.spyOn(pricingService, "getMarkUpPercentage").mockResolvedValue(50);
     // Act
    const actual = await sut.adjustPrice(item);
     // Assert
    expect(actual.price).toBe(30);
    })
  })

  describe('price is greater than 100', () => {
    it('marks item price down by the markdown percentage', async () => {
      // Arrange
      const item : Item =
      {
      id: "1",
      name: "Bob",
      price: 150,
      description: "Food",
      created: new Date
    };
  
    const pricingService = new PricingService();
    const sut = new ItemPriceAdjusterVersion2();
   //  (sut as any).pricingService = pricingService;
   sut["pricingService"] = pricingService;
    jest.spyOn(pricingService, "getMarkDownPercentage").mockResolvedValue(50);
    // Act
   const actual = await sut.adjustPrice(item);
    // Assert
   expect(actual.price).toBe(75);
    })
  })

  describe('price is equal to 100', () => {
    it('will not alter the price', async () => {
       // Arrange
       const item : Item =
       {
       id: "1",
       name: "Bob",
       price: 100,
       description: "Food",
       created: new Date
     };
   
     const pricingService = new PricingService();
     const sut = new ItemPriceAdjusterVersion2();
    sut["pricingService"] = pricingService;
     // Act
    const actual = await sut.adjustPrice(item);
     // Assert
    expect(actual.price).toBe(100);
    })
  })
})
