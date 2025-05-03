import { connect } from 'react-redux';

import {
    DEFAULT_HEADER_STATE as SOURCE_DEFAULT_HEADER_STATE,
    HeaderContainer as SourceHeaderContainer,
    mapDispatchToProps as sourceMapDispatchToProps,
    mapStateToProps as sourceMapStateToProps,
} from 'SourceComponent/Header/Header.container';

// TODO: implement DEFAULT_HEADER_STATE
export const DEFAULT_HEADER_STATE = SOURCE_DEFAULT_HEADER_STATE;

/** @namespace ScandipwaDemo/Component/Header/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    ...sourceMapStateToProps(state),
    // TODO extend mapStateToProps
});

/** @namespace ScandipwaDemo/Component/Header/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    ...sourceMapDispatchToProps(dispatch),
    // TODO extend mapDispatchToProps
});

/** @namespace ScandipwaDemo/Component/Header/Container */
export class HeaderContainer extends SourceHeaderContainer {
    __construct(props) {
        super.__construct?.(props);

        this.state = {
            ...this.state,
            isMobileMenuOpen: false,
        };
    }

    toggleMobileMenu = () => {
        this.setState((prevState) => ({
            isMobileMenuOpen: !prevState.isMobileMenuOpen,
        }));
    };

    containerProps() {
        return {
            ...super.containerProps?.(),
            isMobileMenuOpen: this.state.isMobileMenuOpen,
            toggleMobileMenu: this.toggleMobileMenu,
        };
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
