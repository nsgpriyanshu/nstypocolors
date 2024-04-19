// Importing the necessary functions and constants
import * as nstypocolors from "../src/index";
import { COLORS } from "../src/index";

describe("nstypocolors logging functions", () => {
  let consoleSpy: jest.SpyInstance;

  // Before each test, set up a spy on console.log
  beforeEach(() => {
    consoleSpy = jest
      .spyOn(console, "log")
      .mockImplementation((...args: any[]) => {});
  });

  // After each test, restore the original console.log implementation
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  // Test for bright red
  test("logBrightRed should print a message in bright red", () => {
    const message = "Hello, bright red world!";
    nstypocolors.logBrightRed(message);
    expect(consoleSpy).toHaveBeenCalledWith(
      `${COLORS.brightRed}${message}${COLORS.reset}`,
    );
  });

  // Test for bright green
  test("logBrightGreen should print a message in bright green", () => {
    const message = "Hello, bright green world!";
    nstypocolors.logBrightGreen(message);
    expect(consoleSpy).toHaveBeenCalledWith(
      `${COLORS.brightGreen}${message}${COLORS.reset}`,
    );
  });

  // Test for bright yellow
  test("logBrightYellow should print a message in bright yellow", () => {
    const message = "Hello, bright yellow world!";
    nstypocolors.logBrightYellow(message);
    expect(consoleSpy).toHaveBeenCalledWith(
      `${COLORS.brightYellow}${message}${COLORS.reset}`,
    );
  });

  // Test for bright blue
  test("logBrightBlue should print a message in bright blue", () => {
    const message = "Hello, bright blue world!";
    nstypocolors.logBrightBlue(message);
    expect(consoleSpy).toHaveBeenCalledWith(
      `${COLORS.brightBlue}${message}${COLORS.reset}`,
    );
  });

  // Test for bright magenta
  test("logBrightMagenta should print a message in bright magenta", () => {
    const message = "Hello, bright magenta world!";
    nstypocolors.logBrightMagenta(message);
    expect(consoleSpy).toHaveBeenCalledWith(
      `${COLORS.brightMagenta}${message}${COLORS.reset}`,
    );
  });

  // Test for bright cyan
  test("logBrightCyan should print a message in bright cyan", () => {
    const message = "Hello, bright cyan world!";
    nstypocolors.logBrightCyan(message);
    expect(consoleSpy).toHaveBeenCalledWith(
      `${COLORS.brightCyan}${message}${COLORS.reset}`,
    );
  });

  // Test for bright white
  test("logBrightWhite should print a message in bright white", () => {
    const message = "Hello, bright white world!";
    nstypocolors.logBrightWhite(message);
    expect(consoleSpy).toHaveBeenCalledWith(
      `${COLORS.brightWhite}${message}${COLORS.reset}`,
    );
  });

  // Add other tests as needed
  test("Startup message is logged", () => {
    // Define the type of consoleOutput as an array of strings
    const consoleOutput: string[] = [];

    // Temporarily override the consoleSpy mock implementation to push outputs to consoleOutput
    consoleSpy.mockImplementation((output: any) => consoleOutput.push(output));

    // Import the index file again to trigger the startup message
    require("../src/index");

    // Debug output to inspect the contents of consoleOutput
    console.log("consoleOutput:", consoleOutput);

    // Assert that the startup message is in the consoleOutput array
    expect(consoleOutput).toContain("nstypocolors has started successfully!");
  });
});
