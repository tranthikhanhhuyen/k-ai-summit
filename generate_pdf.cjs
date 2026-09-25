const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('public/assets/K-AI_Summit_Agenda.pdf'));

doc.fontSize(24).fillColor('#071A35').text('K-AI GLOBAL VALUE CHAIN', { align: 'center' });
doc.fontSize(16).fillColor('#0B5CFF').text('SUMMIT 2026 AGENDA', { align: 'center' });
doc.moveDown();
doc.fontSize(12).fillColor('#64748B').text('23 October 2026 | Saigon Innovation Hub', { align: 'center' });
doc.moveDown(2);

doc.fontSize(14).fillColor('#071A35').text('09:00 - 09:30 : Opening Ceremony');
doc.fontSize(12).fillColor('#64748B').text('Welcome remarks from KOSME and Tech Valley.');
doc.moveDown();

doc.fontSize(14).fillColor('#071A35').text('09:30 - 10:30 : Keynote - The Future of B2B Tech');
doc.fontSize(12).fillColor('#64748B').text('Korean tech innovators sharing the roadmap for 2026.');
doc.moveDown();

doc.fontSize(14).fillColor('#071A35').text('10:30 - 12:00 : AI & Smart Manufacturing Panel');
doc.fontSize(12).fillColor('#64748B').text('Discussion on automation and smart factory scaling.');
doc.moveDown();

doc.fontSize(14).fillColor('#071A35').text('13:30 - 16:30 : 1:1 Business Matching');
doc.fontSize(12).fillColor('#64748B').text('Private consultation sessions with Top 10 Korean AI startups.');
doc.moveDown();

doc.end();
console.log("PDF created");
