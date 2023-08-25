import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Brand from '../Form/Brand';

const MainFooter = () => {
    // footer links 
    const FooterLinks = [
        { id: 1, text: 'About Online Food', link: '#' },
        { id: 2, text: 'Read our blog', link: '#' },
        { id: 3, text: 'Sign up to deliver', link: '#' },
        { id: 4, text: 'Add your restaurant', link: '#' },
        { id: 5, text: 'Get Help', link: '#' },
        { id: 6, text: 'Ask any question', link: '#' },
        { id: 7, text: 'Order Now', link: '#' },
        { id: 8, text: 'Contact', link: '#' },
        { id: 9, text: 'Facebook', link: '#' },
        { id: 10, text: 'Instagram', link: '#' },
        { id: 11, text: 'Twitter', link: '#' },
        { id: 12, text: 'Youtube', link: '#' },
    ];

    const chunkedLinks = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    const linkRows = chunkedLinks(FooterLinks, 3);

    return (
        <div className="flex pb-8">
            {/* logo  */}
            <div className="flex items-center pr-4">
                <div className="border-r-2 border-gray-400 h-12 mr-4"></div> {/* Separating line */}
                <Brand />
            </div>
            {/* footer links  */}
            <div className="flex space-x-12">
                {linkRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex flex-col space-y-2">
                        {row.map(item => (
                            <a className="text-black poppins text-lg" href={item.link} key={item.id}>
                                {item.text}
                            </a>
                        ))}
                    </div>
                ))}
                <div className="flex flex-col space-y-2">
                    <a href="#" className="text-black poppins text-lg">
                        <FaFacebook />
                    </a>
                    <a href="#" className="text-black poppins text-lg">
                        <FaInstagram />
                    </a>
                    <a href="#" className="text-black poppins text-lg">
                        <FaTwitter />
                    </a>
                    <a href="#" className="text-black poppins text-lg">
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MainFooter;
