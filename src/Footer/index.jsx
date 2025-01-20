import "./Footer.css"

const Footer = () => {
    return (
    <footer className="foot">
            <section className="social-medias">
               <ul>
                    <li> 
                        <img src="/public/imagens/fb.png" alt="" />
                    </li>
                    <li>
                        <img src="/public/imagens/tw.png" alt="" />
                    </li>
                    <li>
                        <img src="/public/imagens/ig.png" alt="" />
                    </li>
               </ul>
            </section>
            <section className="logo">
                <img src="/public/imagens/logo.png" alt="" />
            </section>
            <div className="mini-text">
                Made by Gustavo Edson
            </div>    
    </footer>
    )
}

export default Footer