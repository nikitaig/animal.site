import Footer from "../components/footer";
import Header from "../components/header";
import Str from "../components/str";
import "../components/style.css";
function Strone() {
    let car = {id:"12", kind:"собаka", kleimo:"987T5R", district:"Приморский", date:"21.11.23", name:"Дмитрий", number:"89438497546", email:"nvsngfqwn3f23n@gmail.com"}
    return (
        <div>
            <Header />






<Str data={car}/>




<div className="foot">
            <Footer/>
            </div>
        </div>
    );
}

export default Strone;