import { useState } from "react";
import imglg from "../../assets/logo-up.png"

const Header = () => {


    const navs = [
        { navName: "Home" },
        { navName: "Feautures" },
        { navName: "Pricing" },
        { navName: "FAQs" },
        { navName: "About" },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const actitem = (index) => {
        setActiveIndex(index);
    }

    return(
        <>
            <div class="container bg-secondary">
                <header class="d-flex flex-wrap justify-content-center align-items-center py-1 mb-1">
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <img src={imglg} alt="i-l" style={{height: "60px", borderRadius: "50%"}}/>
                        <span class="fs-4">Upland Properties</span>
                    </a>
        
                    <ul class="nav nav-pills">
                        {
                            navs.map((nav,index) => (
                                <li class="nav-item"><a href="#" class={index === activeIndex ? "nav-link active" : "nav-link"  } onClick={() => actitem(index)}>{nav.navName}</a></li>
                            ))
                        }
                    </ul>
                </header>
            </div>
        </>
    )
}

export default Header