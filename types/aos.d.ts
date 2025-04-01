declare module 'aos' {
    interface AosOptions {
      offset?: number;
      delay?: number;
      duration?: number;
      easing?: string;
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: string;
    }
  
    declare class AOS {
      static init(options?: AosOptions): void;
      static refresh(): void;
      static refreshHard(): void;
    }
  
    export default AOS;
  }
  