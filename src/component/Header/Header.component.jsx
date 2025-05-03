import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import Link from 'Component/Link';
import Menu from 'Component/Menu';
import {
    CartOverlay as SourceCartOverlay,
    HeaderComponent as SourceHeaderComponent,
    MyAccountOverlay as SourceMyAccountOverlay,
} from 'SourceComponent/Header/Header.component';

import './Header.override.style';

// TODO: implement CartOverlay
export const CartOverlay = SourceCartOverlay;

// TODO: implement MyAccountOverlay
export const MyAccountOverlay = SourceMyAccountOverlay;

/** @namespace ScandipwaDemo/Component/Header/Component */
export class HeaderComponent extends SourceHeaderComponent {
    renderMap = {
        ...super.renderMap,
        logo: this.renderLogo.bind(this),
    };

    renderBurgerMenuButton() {
        const { isMobile } = this.props.device;
        const { isMobileMenuOpen, toggleMobileMenu } = this.props;

        if (!isMobile) {
            return null;
        }

        const renderIcon = () => {
            if (isMobileMenuOpen) {
                return <CloseIcon style={ { fontSize: '28px' } } />;
            }

            return <MenuIcon style={ { fontSize: '28px' } } />;
        };

        return (
            <button
              block="Header"
              elem="BurgerButton"
              onClick={ toggleMobileMenu }
              aria-label={ __('Toggle Menu') }
            >
                { renderIcon() }
            </button>
        );
    }

    renderLogo(isVisible = false) {
        const { isLoading } = this.props;

        if (isLoading) {
            return null;
        }

        return (
            <div block="Header" elem="MenuLogoWrapper">
                { this.renderBurgerMenuButton() }
                <Link
                  to="/"
                  aria-label={ __('Go to homepage by clicking on ScandiPWA logo') }
                  aria-hidden={ !isVisible }
                  tabIndex={ isVisible ? 0 : -1 }
                  block="Header"
                  elem="LogoWrapper"
                  mods={ { isVisible } }
                  key="logo"
                >
                    { this.renderLogoImage() }
                </Link>
            </div>
        );
    }

    renderMobileMenuOverlay() {
        const { isMobileMenuOpen } = this.props;
        const { device: { isMobile } } = this.props;

        if (!isMobile || !isMobileMenuOpen) {
            return null;
        }

        return (
            <div block="Header" elem="MobileMenuOverlay">
                <Menu />
            </div>
        );
    }

    render() {
        return (
            <>
                { super.render() }
                { this.renderMobileMenuOverlay() }
            </>
        );
    }
}

export default HeaderComponent;
