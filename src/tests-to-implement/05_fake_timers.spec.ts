import { describe, expect, it } from '@jest/globals'
import { generateDayMessage } from '../tests-to-implement/05_fake_timers'

describe('generateDayMessage', () => {
  beforeEach(()=> {
    jest.useFakeTimers("modern");
  });

  afterEach(()=> {
    jest.useRealTimers();
  });

  it('returns a message containing the current time', () => {
    // Arrange
    const testTime = Date.UTC(2021, 4, 14, 13, 33, 25);
    jest.setSystemTime(testTime);
    jest.spyOn(Date.prototype,"toLocaleTimeString").mockImplementation(()=>"This is the current Time");
    // Act
    const actual = generateDayMessage();
    // Assert
    expect(actual).toBe("[THIS IS THE CURRENT TIME]: Today is Friday")
  })

  it('returns a message containing the current time after some time has elapsed', () => {
    // Arrange
    const testTime = Date.UTC(2021, 4, 14, 13, 33, 25);
    jest.setSystemTime(testTime);
    jest.spyOn(Date.prototype,"toLocaleTimeString").mockImplementation(()=>"This is the current Time");
    jest.advanceTimersByTime(86400000)
    // Act
    const actual = generateDayMessage();
    // Assert
    expect(actual).toBe("[THIS IS THE CURRENT TIME]: Today is Saturday")
  })

  it('returns a message containing "Monday" on Mondays', () => {
     // Arrange
     const testTime = Date.UTC(2021, 4, 17, 13, 33, 25);
     jest.setSystemTime(testTime);
     jest.spyOn(Date.prototype,"toLocaleTimeString").mockImplementation(()=>"This is the current Time");
     // Act
     const actual = generateDayMessage();
     // Assert
     expect(actual).toBe("[THIS IS THE CURRENT TIME]: Today is Monday")
  })

  it('returns a message containing "Tuesday" on Tuesdays', () => {
     // Arrange
     const testTime = Date.UTC(2021, 4, 18, 13, 33, 25);
     jest.setSystemTime(testTime);
     jest.spyOn(Date.prototype,"toLocaleTimeString").mockImplementation(()=>"This is the current Time");
     // Act
     const actual = generateDayMessage();
     // Assert
     expect(actual).toBe("[THIS IS THE CURRENT TIME]: Today is Tuesday")
  })

  it('returns a message containing "Wednesday" on Wednesdays', () => {
    // Arrange
    const testTime = Date.UTC(2021, 4, 19, 13, 33, 25);
    jest.setSystemTime(testTime);
    jest.spyOn(Date.prototype,"toLocaleTimeString").mockImplementation(()=>"This is the current Time");
    // Act
    const actual = generateDayMessage();
    // Assert
    expect(actual).toBe("[THIS IS THE CURRENT TIME]: Today is Wednesday")
  })

  it('returns a message containing "Thursday" on Thursdays', () => {
    // Arrange
    const testTime = Date.UTC(2021, 4, 20, 13, 33, 25);
    jest.setSystemTime(testTime);
    jest.spyOn(Date.prototype,"toLocaleTimeString").mockImplementation(()=>"This is the current Time");
    // Act
    const actual = generateDayMessage();
    // Assert
    expect(actual).toBe("[THIS IS THE CURRENT TIME]: Today is Thursday")
  })

  it('returns a message containing "Friday" on Fridays', () => {
    // Arrange
    const testTime = Date.UTC(2021, 4, 21, 13, 33, 25);
    jest.setSystemTime(testTime);
    jest.spyOn(Date.prototype,"toLocaleTimeString").mockImplementation(()=>"This is the current Time");
    // Act
    const actual = generateDayMessage();
    // Assert
    expect(actual).toBe("[THIS IS THE CURRENT TIME]: Today is Friday")
  })

  it('returns a message containing "Saturday" on Saturdays', () => {
    // Arrange
    const testTime = Date.UTC(2021, 4, 22, 13, 33, 25);
    jest.setSystemTime(testTime);
    jest.spyOn(Date.prototype,"toLocaleTimeString").mockImplementation(()=>"This is the current Time");
    // Act
    const actual = generateDayMessage();
    // Assert
    expect(actual).toBe("[THIS IS THE CURRENT TIME]: Today is Saturday")
  })

  it('returns a message containing "Sunday" on Sundays', () => {
    // Arrange
    const testTime = Date.UTC(2021, 4, 23, 13, 33, 25);
    jest.setSystemTime(testTime);
    jest.spyOn(Date.prototype,"toLocaleTimeString").mockImplementation(()=>"This is the current Time");
    // Act
    const actual = generateDayMessage();
    // Assert
    expect(actual).toBe("[THIS IS THE CURRENT TIME]: Today is Sunday")
  })
})
