document.addEventListener('DOMContentLoaded', () => {
    const headerNav = document.querySelector('.head-nav');
    const footer = document.querySelector('.footer-container');
    const footerNav = document.querySelector('.footer-nav');
    const footerSocial = document.querySelector('.footer-social');

    const updateLayout = () => {
        const width = window.innerWidth;

        if (width <= 480) {
            // For small screens
            headerNav.style.flexDirection = 'column';
            headerNav.style.alignItems = 'center';

            footer.style.flexDirection = 'column';
            footer.style.alignItems = 'center';
            footerNav.style.flexDirection = 'column';
            footerNav.style.textAlign = 'center';
            footerSocial.style.marginTop = '20px';
        } else if (width <= 768) {
            // For medium screens
            headerNav.style.flexDirection = 'column';
            headerNav.style.alignItems = 'flex-start';

            footer.style.flexDirection = 'column';
            footer.style.alignItems = 'flex-start';
            footerNav.style.flexDirection = 'column';
            footerNav.style.textAlign = 'left';
            footerSocial.style.marginTop = '20px';
        } else {
            // For large screens
            headerNav.style.flexDirection = 'row';
            headerNav.style.alignItems = 'center';

            footer.style.flexDirection = 'row';
            footer.style.alignItems = 'flex-start';
            footerNav.style.flexDirection = 'row';
            footerNav.style.textAlign = 'left';
            footerSocial.style.marginTop = '0';
        }
    };

    // Initial call to set up the layout
    updateLayout();

    // Update layout on window resize
    window.addEventListener('resize', updateLayout);
});
