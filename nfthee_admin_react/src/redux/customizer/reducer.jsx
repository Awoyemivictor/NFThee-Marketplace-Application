import { 
        ADD_COSTOMIZER, 
        ADD_LAYOUT, 
        ADD_SIDEBAR_TYPES, 
        ADD_SIDEBAR_SETTINGS, 
        ADD_COLOR, 
        ADD_MIX_LAYOUT,
        ADD_HEADER_COLOR,
        ADD_BRAND_COLOR,
        ADD_NAV_COLOR,
        ADD_SIDEBAR_BACKGROUND,
    } from "../actionTypes";
import ConfigDB from '../../data/customizer/config';

const initial_state = {
    customizer: ConfigDB.data,
    configData: {},
    layout: '',
    sidebar_types: {},
    settings: '',
    color: {},
    headercolor:{},
    mix_background_layout: '',
};

export default (state = initial_state, action) => {
    switch (action.type) {

        case ADD_COSTOMIZER:
            return { ...state, loading: false, customizer: ConfigDB.data };

        case ADD_LAYOUT:
            state.customizer.settings.layout_type = action.payload
            const layoutUpdate = state.customizer.settings.layout_type;
            return { ...state, loading: true, layout: layoutUpdate };

        case ADD_HEADER_COLOR:
        state.customizer.headercolor.header.color = action.payload
            const headercolorUpdate = state.customizer.headercolor.header.color;
            return { ...state, loading: true, headercolor: headercolorUpdate };

        case ADD_BRAND_COLOR:
        state.customizer.headercolor.brandcolor.onlybrandcolor = action.payload
            const brandcolorUpdate = state.customizer.headercolor.brandcolor.onlybrandcolor;
            return { ...state, loading: true, headercolor: brandcolorUpdate };

        case ADD_NAV_COLOR:     
        state.customizer.headercolor.navcolor.onlynavcolor = action.payload
            const navcolorUpdate = state.customizer.headercolor.navcolor.onlynavcolor;
            return { ...state, loading: true, headercolor: navcolorUpdate };

        case ADD_SIDEBAR_TYPES:
            state.customizer.settings.sidebar = action.payload
            const sidebarTypeUpdate = state.customizer.settings.sidebar;

            return { ...state, loading: true, sidebar_types: sidebarTypeUpdate };

        case ADD_SIDEBAR_SETTINGS:
            state.customizer.settings.sidebar_setting = action.payload
            const settingsUpdate = state.customizer.settings.sidebar_setting;
            return { ...state, loading: true, settings: settingsUpdate };

        case ADD_SIDEBAR_BACKGROUND:
            state.customizer.settings.sidebar_background_setting = action.payload
            const settingsBackgroundUpdate = state.customizer.settings.sidebar_background_setting;
            return { ...state, loading: true, settings: settingsBackgroundUpdate };

        case ADD_COLOR:
            const colors = action.payload;
            state.customizer.color.primary_color = colors.primary_color;
            state.customizer.color.secondary_color = colors.secondary_color;
            state.customizer.color.color = colors.color;
            state.customizer.color.layout_version = colors.layout_version;

            return { ...state, color: colors, loading: true };

        case ADD_MIX_LAYOUT:
            const mix_background_layout = action.payload
            state.customizer.color.mix_background_layout = mix_background_layout;

            return { ...state, mix_background_layout: mix_background_layout, loading: true };


        default: return { ...state };
    }
}
