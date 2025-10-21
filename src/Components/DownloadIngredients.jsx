import jsPDF from 'jspdf';

const DownloadIngredients = ({ title, ingredients }) => {
  
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`Ingredients for: ${title}`, 10, 15);
    doc.setFontSize(12);
    let y = 30;
    if (Array.isArray(ingredients)) {
      ingredients.forEach((item, idx) => {
        let line = '';
        if (typeof item === 'string') {
          line = `${idx + 1}. ${item}`;
        } else if (item && (item.description || item.name)) {
          line = `${idx + 1}. ${(item.quantity ? item.quantity + ' ' : '')}${item.unit ? item.unit + ' ' : ''}${item.description || item.name}`;
        }
        doc.text(line, 10, y);
        y += 10;
        if (y > 270) {
          doc.addPage();
          y = 20;
        }
      });
    }
    doc.save(`${title.replace(/\s+/g, '_')}_ingredients.pdf`);
  };

  return (
    <button onClick={handleDownload} style={{marginTop: '16px', padding: '10px 20px', borderRadius: '8px', background: '#ffa500', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer'}}>
      Download Ingredients (PDF)
    </button>
  );
};

export default DownloadIngredients;
