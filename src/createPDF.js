import jsPDF from 'jspdf'

export default function(data) {
  let doc = new jsPDF()
  doc.text(data.from, 10, 10, 'center')
  var string = doc.output('datauristring', 'hello.pdf');
  var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
  var x = window.open();
  x.document.open();
  x.document.write(iframe);
  x.document.close();
}