export declare const COLOR_CODES: {
    readonly reset: "\u001B[0m";
    readonly red: "\u001B[31m";
    readonly green: "\u001B[32m";
    readonly pink: "\u001B[38;5;213m";
    readonly yellow: "\u001B[33m";
    readonly blue: "\u001B[34m";
    readonly magenta: "\u001B[35m";
    readonly cyan: "\u001B[36m";
    readonly white: "\u001B[37m";
    readonly black: "\u001B[38;5;232m";
    readonly brightRed: "\u001B[91m";
    readonly brightGreen: "\u001B[38;5;40m";
    readonly brightPink: "\u001B[38;5;219m";
    readonly brightYellow: "\u001B[93m";
    readonly brightBlue: "\u001B[94m";
    readonly brightMagenta: "\u001B[95m";
    readonly brightCyan: "\u001B[96m";
    readonly brightWhite: "\u001B[97m";
    readonly pastelRed: "\u001B[38;5;1m";
    readonly pastelPink: "\u001B[38;5;205m";
    readonly pastelBlue: "\u001B[38;5;111m";
    readonly pastelGreen: "\u001B[38;5;157m";
    readonly pastelYellow: "\u001B[38;5;229m";
    readonly pastelOrange: "\u001B[38;5;216m";
    readonly pastelLavender: "\u001B[38;5;141m";
    readonly pastelCoral: "\u001B[38;5;209m";
    readonly pastelMint: "\u001B[38;5;49m";
    readonly backPastelRed: "\u001B[48;5;1m";
    readonly backPastelPink: "\u001B[48;5;205m";
    readonly backPastelBlue: "\u001B[48;5;111m";
    readonly backPastelGreen: "\u001B[48;5;157m";
    readonly backPastelYellow: "\u001B[48;5;229m";
    readonly backPastelOrange: "\u001B[48;5;216m";
    readonly backPastelLavender: "\u001B[48;5;141m";
    readonly backPastelCoral: "\u001B[48;5;209m";
    readonly backPastelMint: "\u001B[48;5;49m";
};
export type ColorKey = keyof typeof COLOR_CODES;
/**
 * Applies a color to a given message.
 * @param message The message to color.
 * @param colorCode The ANSI color code to apply.
 * @returns The colored message.
 */
export declare function applyColor(message: string, colorCode: string): string;
//# sourceMappingURL=color.d.ts.map