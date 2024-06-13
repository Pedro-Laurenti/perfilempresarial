import YouTube from 'react-youtube';

const YouTubePage = () => {
    const opts = {
        height: '590',
        width: '1040',
        playerVars: {
            autoplay: 1
        }
    };

    const onReady = (event) => {
        event.target.pauseVideo();
    };

    return (
        <div>
            <div className="flex flex-col my-5 items-center w-full">
                <YouTube videoId="3mvJhAAhp7M" opts={opts} onReady={onReady} />
            </div>
        </div>
    );
};

export default YouTubePage;