import React from 'react';

const BottomFooter = () => {
    const bottomLinks = [
        { id: 1, text: 'Privacy Policy', link: '#' },
        { id: 2, text: 'Terms of Use', link: '#' },
        { id: 3, text: 'Pricing', link: '#' },
    ];

    return (
        <div className="flex items-center justify-between pt-8">
            <div className="flex flex-grow"></div>

            <div className="flex space-x-6">
                {bottomLinks.map(item => (
                    <a
                        className="poppins text-black cursor-pointer hover:text-blue-500"
                        href={item.link}
                        key={item.id}
                    >
                        {item.text}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default BottomFooter;
