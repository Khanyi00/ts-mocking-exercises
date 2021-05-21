import { describe, expect, it } from '@jest/globals'
import { InMemoryCache } from '../dependencies/InMemoryCache'
import { Item } from '../dependencies/Item'
import { ItemRepository } from '../dependencies/ItemRepository'
import { ItemProcessor } from "../tests-to-implement/07_use_it_all"
import { PubSub, PubSubChannels } from './06_PubSub'

describe('ItemProcessor', () => {
  describe('processItems', () => {
    it('will not process items if processing is already busy', async () => {
      // Arrange
      const cache = new InMemoryCache();
      const itemRepository = new ItemRepository();
      const sut = new ItemProcessor(cache , itemRepository)
      const items : Item[] = [
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
      ];
      
      jest.spyOn(itemRepository, "getAll").mockResolvedValue(items);
      sut["isProcessing"] = true;
      var processedItems = sut["processedItems"];
      // Act
      await sut.processItems();
      // Assert
      expect(processedItems.length).toBe(0);
    })

    describe('given single unprocessed item', () => {
      it('updates the cache with the item', async () => {
        // Arrange
        const cache = new InMemoryCache();
        const itemRepository = new ItemRepository();
        const sut = new ItemProcessor(cache , itemRepository)
        const cachedItems : Item[] = [];
        const items : Item[] = [
          {
            id: "1",
            name: "Bob",
            price: 20,
            description: "Food",
            created: new Date
          }
        ];
        
        jest.spyOn(itemRepository, "getAll").mockResolvedValue(items);
        jest.spyOn(cache, "update").mockImplementation(item => cachedItems.push(item));
        // Act
        await sut.processItems();
        // Assert
        expect(cachedItems.length).toBe(1);
      })

      it('publishes an item updated message', async () => {
        // Arrange
        const pubSub = PubSub.getInstance()
        const cache = new InMemoryCache();
        const itemRepository = new ItemRepository();
        const sut = new ItemProcessor(cache , itemRepository)
        const items : Item[] = [
          {
            id: "1",
            name: "Bob",
            price: 20,
            description: "Food",
            created: new Date
          }
        ];
        
        jest.spyOn(itemRepository, "getAll").mockResolvedValue(items);
        const actual = jest.spyOn(pubSub, "publish");
        // Act
        await sut.processItems();
        // Assert
        expect(actual).toHaveBeenCalledWith("item:updated", items[0]);
      })

      it('does not process items that have already been processed', async () => {
        // Arrange
        // Act
        // Assert
      })
    })

    describe('given newly added unprocessed items', () => {
      it.skip('processes all newly added items every x seconds', async () => {
        // Arrange
        // Act
        // Assert
      })
    })

    describe('given multiple unprocessed items', () => {
      it.skip('updates the cache with the item', async () => {
        // Arrange
        // Act
        // Assert
      })

      it.skip('publishes an item updated message', async () => {
        // Arrange
        // Act
        // Assert
      })

      it.skip('does not process items that have already been processed', async () => {
        // Arrange
        // Act
        // Assert
      })
    })
  })
})
