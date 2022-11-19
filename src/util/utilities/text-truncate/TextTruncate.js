const TextTruncate = ({ text, mobile, desktop }) => {
    if (text && mobile && desktop) {
        const mobileStyle = {
            display: '-webkit-box',
            WebkitLineClamp: mobile,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
        };
        const desktopStyle = {
            display: '-webkit-box',
            WebkitLineClamp: desktop,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
        };
        return (
            <>
                <span className="d-md-none">
                    <span style={mobileStyle}>{text}</span>
                </span>

                <span className="d-none d-md-block">
                    <span style={desktopStyle}>{text}</span>
                </span>
            </>
        );
    }

    return null;
};

export default TextTruncate;
