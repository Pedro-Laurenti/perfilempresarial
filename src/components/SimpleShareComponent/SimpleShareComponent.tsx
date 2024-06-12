import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook, FaLink } from 'react-icons/fa';

const SimpleShareComponent = ({message}) => {
    const handleShare = (platform) => {
        const url = window.location.href;
        const text = message || "Eu estou participando!"; // Mensagem padrão
        const encodedText = encodeURIComponent(text);
        const encodedUrl = encodeURIComponent(url);
        let shareUrl: string | URL | undefined;

        switch (platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&summary=${encodedText}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`;
                break;
            default:
            return;
        }

        window.open(shareUrl, '_blank');
    };

    return (
        <div>
            <div className="mt-5 flex flex-row gap-5">
                <button onClick={() => handleShare('twitter')} className="bg-sky-500/50 rounded-full flex px-4 py-4 items-center hover:bg-sky-500">
                    <FaTwitter className='h-5 w-5' />
                </button>
                <button onClick={() => handleShare('linkedin')} className="bg-sky-500/50 rounded-full flex px-4 py-4 items-center hover:bg-sky-500">
                    <FaLinkedin className='h-5 w-5' />
                </button>
                <button onClick={() => handleShare('facebook')} className="bg-sky-500/50 rounded-full flex px-4 py-4 items-center hover:bg-sky-500">
                    <FaFacebook className='h-5 w-5' />
                </button>
            </div>
        </div>
    );
};

export default SimpleShareComponent;