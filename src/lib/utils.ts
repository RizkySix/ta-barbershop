
import {format, parseISO} from "date-fns"

export class HelperFunc {
    static IsMobile() : boolean {
        if (typeof window !== 'undefined') {
            return window.innerWidth <= 768;
          }
          return false;
    }

    static FormatBeautifullDate(
        dateString: string,
        withTime: boolean = false
      ): string {
        try {
          const date = parseISO(dateString); // Pastikan dateString adalah ISO 8601
          let formattedDate = format(date, "EEEE, MMMM d, yyyy");
    
          // Jika withTime true, tambahkan format jam dan menit
          if (withTime) {
            const formattedTime = format(date, "HH:mm"); // Format 24 jam (misal: 14:30)
            formattedDate += ` at ${formattedTime}`; // Gabungkan tanggal dan waktu
          }
    
        return formattedDate;
        } catch (error) {
          console.error("Error parsing date:", error);
          return "Invalid date";
        }
      }
}