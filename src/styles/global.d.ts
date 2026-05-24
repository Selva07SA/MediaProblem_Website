// Type declarations for importing CSS files in TypeScript
// Allows `import './styles.css'` side-effect imports without errors

declare module '*.css';
declare module '*.scss';
declare module '*.sass';

declare module '*.module.css';
declare module '*.module.scss';

declare const enum CSSModuleExports {
}

export {};
