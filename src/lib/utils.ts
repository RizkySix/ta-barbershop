
export class HelperFunc {
    static IsMobile() : boolean {
        if (typeof window !== 'undefined') {
            return window.innerWidth <= 768;
          }
          return false;
    }
}