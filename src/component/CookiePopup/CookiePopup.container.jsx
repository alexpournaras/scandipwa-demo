import { connect } from 'react-redux';

import {
    CookiePopupContainer as SourceCookiePopupContainer,
    mapDispatchToProps as sourceMapDispatchToProps,
    mapStateToProps as sourceMapStateToProps,
} from 'SourceComponent/CookiePopup/CookiePopup.container';

/** @namespace ScandipwaDemo/Component/CookiePopup/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    ...sourceMapStateToProps(state),
    // TODO extend mapStateToProps
});

/** @namespace ScandipwaDemo/Component/CookiePopup/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    ...sourceMapDispatchToProps(dispatch),
    // TODO extend mapDispatchToProps
});

/** @namespace ScandipwaDemo/Component/CookiePopup/Container */
export class CookiePopupContainer extends SourceCookiePopupContainer {
    // TODO implement logic
}

export default connect(mapStateToProps, mapDispatchToProps)(CookiePopupContainer);
