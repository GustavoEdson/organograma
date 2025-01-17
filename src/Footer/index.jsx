import "./Footer.css"

const Footer = () => {
    return (
    <footer className="foot">
        <div className="container">
            <div className="social-medias">
                <img src="/public/imagens/fb.png" alt="" />
                <img src="/public/imagens/tw.png" alt="" />
                <img src="/public/imagens/ig.png" alt="" />
            </div>
            <div className="logo">
                <img src="/public/imagens/logo.png" alt="" />
            </div>
            <div className="mini-text">
                Made by Gustavo Edson
            </div>
        </div>
    </footer>
    )
}

export default Footer