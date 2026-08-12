import { Booking } from '../types';

export const generateBookingPDF = async (booking: Booking) => {
  const content = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Manaar Travels Voucher - ${booking.reference}</title>
      <style>
        body { font-family: 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 40px; color: #0B192C; }
        .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #D4AF37; padding-bottom: 20px; }
        .logo { font-size: 24px; font-weight: bold; color: #0B192C; }
        .logo span { color: #D4AF37; }
        .tagline { font-size: 11px; color: #64748B; font-style: italic; }
        .badge { background: #0B192C; color: #D4AF37; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: bold; }
        .title { font-size: 20px; margin-top: 30px; font-weight: bold; color: #0B192C; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; }
        .box { background: #F8FAFC; padding: 15px; border-radius: 8px; border: 1px solid #E2E8F0; }
        .label { font-size: 11px; color: #64748B; text-transform: uppercase; font-weight: bold; }
        .val { font-size: 15px; font-weight: bold; margin-top: 4px; color: #0B192C; }
        .table { width: 100%; border-collapse: collapse; margin-top: 30px; }
        .table th { background: #0B192C; color: #FFF; text-align: left; padding: 10px; font-size: 12px; }
        .table td { padding: 12px 10px; border-bottom: 1px solid #E2E8F0; font-size: 13px; }
        .footer { margin-top: 50px; border-top: 1px solid #CBD5E1; padding-top: 15px; font-size: 11px; color: #64748B; text-align: center; }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <div class="logo">MANAAR <span>TRAVELS & TOURS</span></div>
          <div class="tagline">"Your Journey, Our Pride. Your Peace, Our Promise."</div>
        </div>
        <div class="badge">${booking.status.toUpperCase()}</div>
      </div>

      <div class="title">OFFICIAL TRAVEL VOUCHER & INVOICE</div>

      <div class="grid">
        <div class="box">
          <div class="label">BOOKING REFERENCE</div>
          <div class="val" style="color: #D4AF37;">${booking.reference}</div>
        </div>
        <div class="box">
          <div class="label">DATE OF ISSUANCE</div>
          <div class="val">${new Date(booking.createdAt).toLocaleDateString()}</div>
        </div>
        <div class="box">
          <div class="label">PASSENGER / CUSTOMER</div>
          <div class="val">${booking.customerName}</div>
          <div style="font-size: 12px; color: #475569;">${booking.customerEmail} | ${booking.customerPhone}</div>
        </div>
        <div class="box">
          <div class="label">SERVICE CATEGORY</div>
          <div class="val">${booking.serviceType.toUpperCase()} BOOKING</div>
        </div>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>Description / Details</th>
            <th>Qty</th>
            <th>Amount (${booking.currency})</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>${booking.itemDetails?.title || booking.serviceType.toUpperCase()}</strong><br/>
              <span style="font-size: 11px; color: #64748B;">${booking.itemDetails?.subtitle || 'Manaar Travels & Tours Services'}</span>
            </td>
            <td>1</td>
            <td>₦${booking.amount.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      <div style="text-align: right; margin-top: 20px;">
        <div style="font-size: 13px; color: #64748B;">Subtotal: ₦${booking.amount.toLocaleString()}</div>
        <div style="font-size: 18px; font-weight: bold; color: #0B192C; margin-top: 4px;">Total Paid: ₦${booking.amount.toLocaleString()}</div>
      </div>

      <div class="footer">
        <strong>Manaar Travels & Tours Limited</strong> | Maktab-Manaar Avenue, Igbe, Ikorodu, Lagos State, Nigeria<br/>
        Phone / WhatsApp: 0906 694 7477 | Email: manaarttravelsng@gmail.com
      </div>
    </body>
    </html>
  `;

  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  }
};
