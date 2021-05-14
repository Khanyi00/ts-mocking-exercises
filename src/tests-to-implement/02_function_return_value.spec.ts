import { describe, expect, it } from '@jest/globals'
import { Item } from '../dependencies/Item'
import { getAllItemsOnSale } from '../tests-to-implement/02_function_return_value'
import * as getAllFunctions from "../dependencies/get_all";
 

describe('function mock return value', () => {
  describe('getAllItemsOnSale', () => {
    it('returns only prices under 10', async () => {
      // Arrange
      const items : Item[] =[
        {
        id: "1",
        name: "Bob",
        price: 20,
        description: "Food",
        created: new Date
      },
      {
        id: "2",
        name: "Bob",
        price: 5,
        description: "Juice",
        created: new Date
      }
    ]
  
      jest.spyOn(getAllFunctions, "getAll").mockResolvedValue(items);
      // Act
      const actual = await getAllItemsOnSale();
      // Assert
    expect(actual.length).toBe(1);
    })
  })
})
