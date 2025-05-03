import CookieIcon from '@mui/icons-material/Cookie';

import Link from 'Component/Link';
import {
    CookiePopupComponent as SourceCookiePopupComponent,
} from 'SourceComponent/CookiePopup/CookiePopup.component';

import './CookiePopup.override.style';

/** @namespace ScandipwaDemo/Component/CookiePopup/Component */
export class CookiePopupComponent extends SourceCookiePopupComponent {
    renderCookieHeader() {
        return (
            <div block="CookiePopup" elem="Header">
                <CookieIcon style={ { fontSize: '20px', color: '#f3ad61' } } />
                <span>{ __('Cookie Settings') }</span>
            </div>
        );
    }

    renderCookieText() {
        const { cookieText } = this.props;

        return (
            <p block="CookiePopup" elem="Text">
                { cookieText }
            </p>
        );
    }

    renderCookiePolicyButton() {
        const { cookieLink } = this.props;

        if (!cookieLink) {
            return null;
        }

        return (
            <Link
              block="CookiePopup"
              elem="PolicyButton"
              to={ cookieLink }
            >
                { __('Cookie Policy') }
            </Link>
        );
    }

    renderCookieAcceptButton() {
        return (
            <div
              block="CookiePopup"
              elem="AcceptButton"
              onClick={ this.acceptCookies }
              onKeyDown={ this.acceptCookies }
              role="button"
              tabIndex={ 0 }
            >
                { __('Accept All') }
            </div>
        );
    }

    renderCookieActions() {
        return (
            <div block="CookiePopup" elem="Actions">
                { this.renderCookiePolicyButton() }
                { this.renderCookieAcceptButton() }
            </div>
        );
    }

    render() {
        const { cookieText } = this.props;
        const { isAccepted } = this.state;

        if (!cookieText || isAccepted) {
            return null;
        }

        return (
            <div block="CookiePopup">
                { this.renderCookieHeader() }
                { this.renderCookieText() }
                { this.renderCookieActions() }
            </div>
        );
    }
}

export default CookiePopupComponent;
