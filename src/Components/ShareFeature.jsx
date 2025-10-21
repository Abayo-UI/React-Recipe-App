import { FaWhatsapp, FaFacebook } from 'react-icons/fa';

const iconStyle={
    borderRadius: "50%",
    padding: "0px",
    cursor: "pointer",
    display: "inline-block",
}

function handleShareViaWhatsapp(id){
    const url = window.location.origin; //this caters for both "https://react-recipe-app-umber.vercel.app/" || localhost;
    const message = encodeURIComponent(`Check out this Recipe ${url}/recipe-item/${id}`);
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

function handleShareViaFacebook(id){
    const url = window.location.origin; // this caters for both "https://react-recipe-app-umber.vercel.app/" || localhost;
    const message = encodeURIComponent(`Check out this  Recipe ${url}/recipe-item/${id}`);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${message}`;
    window.open(facebookUrl, '_blank');
}


const ShareFeature = ({id}) => {

  return (
    <div className="mb-2" style={{ display: "flex", gap: "10px" }}>
       <FaWhatsapp onClick={() => {handleShareViaWhatsapp(id)}} size={40} style={{...iconStyle, backgroundColor: "#25D366", color: "white"}}/>
       <FaFacebook onClick={() => {handleShareViaFacebook(id)}} size={40} style={{...iconStyle, color: "#1877F2", backgroundColor:"#fff"}}/>
    </div>
  )  
}

export default ShareFeature