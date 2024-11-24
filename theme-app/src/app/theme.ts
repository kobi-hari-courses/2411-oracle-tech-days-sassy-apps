export const THEME_COLORS = ['green', 'red', 'blue', 'brown', 'purple', 'teal'] as const;    
export type ThemeColor = typeof THEME_COLORS[number];


export interface Theme {
    readonly primary: ThemeColor;
    readonly accent: ThemeColor;
    readonly isDark: boolean; 
}

export const THEMES: [string, Theme][] = [
    ['Default', { primary: 'blue', accent: 'red', isDark: false }],
    ['Dark', { primary: 'purple', accent: 'teal', isDark: true }],
    ['Light', { primary: 'brown', accent: 'green', isDark: false }],
    ['Red', { primary: 'red', accent: 'blue', isDark: false }],
    ['Green', { primary: 'green', accent: 'red', isDark: false }],
    ['Blue', { primary: 'blue', accent: 'green', isDark: false }],
    ['Brown', { primary: 'brown', accent: 'purple', isDark: false }],
    ['Purple', { primary: 'purple', accent: 'brown', isDark: false }],
    ['Teal', { primary: 'teal', accent: 'red', isDark: false }],
] as const;

export type ThemeName = typeof THEMES[number][0];