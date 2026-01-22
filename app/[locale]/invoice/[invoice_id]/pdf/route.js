import { NextResponse } from 'next/server';
import { pdf } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

export async function GET(req, context) {
  try {
  
    const params = await context.params; 
    const invoice_id = params.invoice_id;


    const doc = <MyDocument invoice_id={invoice_id} />;
    const pdfBuffer = await pdf(doc).toBuffer();


    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="invoice-${invoice_id}.pdf"`,
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
