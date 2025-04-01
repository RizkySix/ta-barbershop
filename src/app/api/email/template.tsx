import { EmailAdminData } from "./param";

export const EmailTemplateBooker = (data: EmailAdminData) => {
  return `
    <div style="max-width: 600px; margin: 40px auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <h2 style="font-size: 24px; font-weight: bold; color: #337ab7; margin-bottom: 10px;">Master Silver Class Booking Success</h2>
      <p style="font-size: 16px; color: #333; margin-bottom: 20px;">Congratulations! Hi ${data.name} your booking for the Master Silver Class on ${data.date} has been successful.</p>
      <p style="font-size: 14px; color: #666; margin-bottom: 20px;">Our admin will contact you soon to confirm the details. In the meantime, please feel free to reach out to us if you have any questions.</p>
      <p style="font-size: 14px; color: #666; margin-bottom: 20px;">Thanks for joining us! We're excited to have you on board. 😊</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
        <th style="background-color: #f0f0f0; padding: 10px; border: 1px solid #ddd;">Name</th>
        <td style="padding: 10px; border: 1px solid #ddd;">${data.name}</td>
      </tr>
      <tr>
        <th style="background-color: #f0f0f0; padding: 10px; border: 1px solid #ddd;">Email</th>
        <td style="padding: 10px; border: 1px solid #ddd;">${data.email}</td>
      </tr>
      <tr>
        <th style="background-color: #f0f0f0; padding: 10px; border: 1px solid #ddd;">Number of Person</th>
        <td style="padding: 10px; border: 1px solid #ddd;">${data.person}</td>
      </tr>
      <tr>
        <th style="background-color: #f0f0f0; padding: 10px; border: 1px solid #ddd;">Preferred Date</th>
        <td style="padding: 10px; border: 1px solid #ddd;">${data.date}</td>
      </tr>
      <tr>
        <th style="background-color: #f0f0f0; padding: 10px; border: 1px solid #ddd;">Session Time</th>
        <td style="padding: 10px; border: 1px solid #ddd;">${data.time}</td>
      </tr>
      <tr>
        <th style="background-color: #f0f0f0; padding: 10px; border: 1px solid #ddd;">Hotel</th>
        <td style="padding: 10px; border: 1px solid #ddd;">${data.hotel == '' ? 'Not provide' : data.hotel}</td>
      </tr>
      <tr>
        <th style="background-color: #f0f0f0; padding: 10px; border: 1px solid #ddd;">Note</th>
        <td style="padding: 10px; border: 1px solid #ddd;">${data.sortMessage == '' ? 'No note' : data.sortMessage}</td>
      </tr>
      <tr>
        <th style="background-color: #f0f0f0; padding: 10px; border: 1px solid #ddd;">Transport Needed</th>
        <td style="padding: 10px; border: 1px solid #ddd;">${data.transport}</td>
      </tr>
      </table>
      <p style="font-size: 12px; color: #999; margin-bottom: 20px;">If you have any questions or concerns, please don't hesitate to contact us at [support email].</p>
      <p style="font-size: 12px; color: #999; margin-bottom: 20px;">Best regards,</p>
      <p style="font-size: 12px; color: #999; margin-bottom: 20px;">The Master Silver Class Team</p>
    </div>
  `;
};

export const EmailTemplateAdmin = (data: EmailAdminData) => {
  return `
  <div style="max-width: 600px; margin: 40px auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <h2 style="font-size: 24px; font-weight: bold; color: #337ab7; margin-bottom: 10px;">Booking Request for Silver Class</h2>
    <p style="font-size: 16px; color: #333; margin-bottom: 20px;">Dear Team,</p>
    <p style="font-size: 16px; color: #333; margin-bottom: 20px;">${data.name} would like to book a spot in the Silver Class. Here are the details:</p>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr>
        <th style="background-color: #f0f0f0; padding: 10px; border: 1px solid #ddd;">Name</th>
        <td style="padding: 10px; border: 1px solid #ddd;">${data.name}</td>
      </tr>
      <tr>
        <th style="background-color: #f0f0f0; padding: 10px; border: 1px solid #ddd;">Email</th>
        <td style="padding: 10px; border: 1px solid #ddd;">${data.email}</td>
      </tr>
      <tr>
        <th style="background-color: #f0f0f0; padding: 10px; border: 1px solid #ddd;">Number of Person</th>
        <td style="padding: 10px; border: 1px solid #ddd;">${data.person}</td>
      </tr>
      <tr>
        <th style="background-color: #f0f0f0; padding: 10px; border: 1px solid #ddd;">Preferred Date</th>
        <td style="padding: 10px; border: 1px solid #ddd;">${data.date}</td>
      </tr>
      <tr>
        <th style="background-color: #f0f0f0; padding: 10px; border: 1px solid #ddd;">Session Time</th>
        <td style="padding: 10px; border: 1px solid #ddd;">${data.time}</td>
      </tr>
      <tr>
        <th style="background-color: #f0f0f0; padding: 10px; border: 1px solid #ddd;">Hotel</th>
        <td style="padding: 10px; border: 1px solid #ddd;">${data.hotel == '' ? 'Not provide' : data.hotel}</td>
      </tr>
      <tr>
        <th style="background-color: #f0f0f0; padding: 10px; border: 1px solid #ddd;">Note</th>
        <td style="padding: 10px; border: 1px solid #ddd;">${data.sortMessage == '' ? 'No note' : data.sortMessage}</td>
      </tr>
      <tr>
        <th style="background-color: #f0f0f0; padding: 10px; border: 1px solid #ddd;">Transport Needed</th>
        <td style="padding: 10px; border: 1px solid #ddd;">${data.transport}</td>
      </tr>
    </table>
    <p style="font-size: 16px; color: #333; margin-bottom: 20px;">Please send a confirmation email to ${data.email} soon!. Thank you!</p>
  </div>
`;
};
