const Footer = ({ portafolio }) => {
    return (
        <footer className="bg-gray-800 flex items-center justify-center py-7">
            <h2>
                {'< '} 
                Desarrollado por {''} 
                <a  href={portafolio} target="_blank" rel="noreferrer"
                    className="font-bold">
                    Axel Castillo
                </a>
                {' />'}
            </h2>
        </footer>
    )   
}

export default Footer;
