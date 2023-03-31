export const MENUITEMS = [
    {
        title: 'Dashboard',
        icon: 'desktop',
        type: 'sub',
        badgeType: 'primary',
        badgeValue: 'new',
        sidebartitle: 'General',
        active: false,
        children: [
            {path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Default', type: 'link'},
            // {path: `${process.env.PUBLIC_URL}/dashboard/view`, title: 'View', type: 'link' }, 
            //    {title: 'view', icon: 'desktop', type: 'sub', badgeType: 'primary', badgeValue: 'new', sidebartitle: 'General', active: false, children:
            //    [
                {path: `${process.env.PUBLIC_URL}/dashboard/view/index.marketplace`, title: 'Marketplace', type: 'link' },
                {path: `${process.env.PUBLIC_URL}/dashboard/view/index.component`, title: 'items', type: 'link' },
                {path: `${process.env.PUBLIC_URL}/dashboard/view/index.collection`, title: 'collections', type: 'link' },
                {path: `${process.env.PUBLIC_URL}/dashboard/view/index.otheruser`, title: 'Users', type: 'link' },
                {path: `${process.env.PUBLIC_URL}/dashboard/view/index.projects`, title: 'Projects', type: 'link' },
            //     ]},


            //     {title: 'Partner', icon: 'desktop', type: 'sub', badgeType: 'primary', badgeValue: 'new', sidebartitle: 'General', active: false, children:
            //    [
            //     // {path: `${process.env.PUBLIC_URL}/dashboard/partner/viewPartner`, title: 'Partner Detail', type: 'link' },
            //     {path: `${process.env.PUBLIC_URL}/dashboard/partner/singlePartner`, title: 'Partner Detail', type: 'link' },

            //     ]},

            //     {title: 'Category', icon: 'desktop', type: 'sub', badgeType: 'primary', badgeValue: 'new', sidebartitle: 'General', active: false, children:
            //    [
            //     {path: `${process.env.PUBLIC_URL}/dashboard/category/viewCategory`, title: 'Category Detail', type: 'link' },
            //     ]},

            // { path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`, title: 'E-Commerce', type: 'link' },
            // { path: `${process.env.PUBLIC_URL}/dashboard/business`, title: 'Business', type: 'link' },
            // { path: `${process.env.PUBLIC_URL}/dashboard/crm`, title: 'CRM', type: 'link' }
        ]
    },
    {
        title: 'Blog',
        icon: 'pencil-alt',
        type: 'sub',
        active: false,
        sidebartitle: 'Manage Blogs',
        path: `${process.env.PUBLIC_URL}/blog/blogDetail`,
        title: 'Blog Details',
        type: 'link'
    },
    {
        title: 'Partner',
        icon: 'desktop',
        type: 'sub',
        badgeType: 'primary',
        badgeValue: 'new',
        active: false,
        sidebartitle: 'CRM',
        path: `${process.env.PUBLIC_URL}/dashboard/partner/singlePartner`,
        type: 'link'
    },
    {
        title: 'Suggestion',
        icon: 'desktop',
        type: 'sub',
        badgeType: 'primary',
        badgeValue: 'new',
        active: false,
        path: `${process.env.PUBLIC_URL}/dashboard/suggestiondetails`,
        type: 'link'
    },
    {
        title: `Report On Nft's`,
        icon: 'desktop',
        type: 'sub',
        badgeType: 'primary',
        badgeValue: 'new',
        active: false,
        path: `${process.env.PUBLIC_URL}/dashboard/nftreportdetail`,
        type: 'link'
    },
    {
        title: `Report On User's`,
        icon: 'desktop',
        type: 'sub',
        badgeType: 'primary',
        badgeValue: 'new',
        active: false,
        path: `${process.env.PUBLIC_URL}/dashboard/userreportdetail`,
        type: 'link'
    },
    {
        title: 'Category',
        icon: 'desktop',
        type: 'sub',
        badgeType: 'primary',
        badgeValue: 'new',
        sidebartitle: 'Manage Setting',
        active: false,
        path: `${process.env.PUBLIC_URL}/dashboard/category/viewCategory`,
        type: 'link'
    },
    // {{  {
    {
        title: 'Blockchain Network',
        icon: 'desktop',
        type: 'sub',
        badgeType: 'primary',
        badgeValue: 'new',
        active: false,
        path: `${process.env.PUBLIC_URL}/dashBoard/blockchainDetail`,
        type: 'link'
    },
    {
        title: 'Email Setting',
        icon: 'desktop',
        type: 'sub',
        badgeType: 'primary',
        badgeValue: 'new',
        active: false,
        path: `${process.env.PUBLIC_URL}/dashboard/emailsetting`,
        type: 'link'
    },
    {
        title: 'SMS Setting',
        icon: 'desktop',
        type: 'sub',
        badgeType: 'primary',
        badgeValue: 'new',
        active: false,
        path: `${process.env.PUBLIC_URL}/dashboard/smssetting`,
        type: 'link'
    }
    //     title: 'Widgets', icon: 'blackboard', type: 'sub', active: false, children: [
    //         { path: `${process.env.PUBLIC_URL}/general-widget`, title: 'General widget', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/chart-widget`, title: 'Charts widget', type: 'link' }
    //     ]
    // },
    // {
    //     title: 'Base', icon: 'package', type: 'sub', sidebartitle: 'Components', active: false, children: [
    //         { path: `${process.env.PUBLIC_URL}/ui/base/state-color`, title: 'State color', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/base/typography`, title: 'Typography', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/base/helper-classes`, title: 'helper classes', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/base/grid`, title: 'Grid', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/base/tag-pills`, title: 'Tag & pills', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/base/progress`, title: 'Progress', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/base/modal`, title: 'Modal', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/base/alert`, title: 'Alert', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/base/popover`, title: 'Popover', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/base/tooltip`, title: 'Tooltip', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/base/spinners`, title: 'Spinners', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/base/dropdowns`, title: 'Dropdown', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/base/tab-bootstrap`,title: 'Reactstrap Tabs', type: 'link'},
    //         { path: `${process.env.PUBLIC_URL}/ui/base/tab-line` , title: 'Line Tabs', type: 'link'},
    //         { path: `${process.env.PUBLIC_URL}/ui/base/accordian`, title: 'Accordian', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/base/navs`, title: 'Navs', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/base/shadow`, title: 'Shadow', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/base/list`, title: 'List', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Advance', icon: 'support', type: 'sub', active: false, children: [
    //         { path: `${process.env.PUBLIC_URL}/ui/advance/scrollable`, title: 'Scrollable', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/advance/toastr`, title: 'Bootstrap Notify', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/advance/rating`, title: 'Rating', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/advance/dropzone`, title: 'Dropzone', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/advance/tourComponent`, title: 'Tour ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/advance/sweet-alert`, title: 'SweetAlert', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/advance/carousel`, title: 'Carousel', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/advance/ribbons`, title: 'Ribbons', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/advance/pagination`, title: 'Pagination', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/advance/steps`, title: 'Steps', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/advance/breadcrumbs`, title: 'Breadcrumbs', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/advance/range-slider`, title: 'Range Slider', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/advance/imageCropper`, title: 'Image Cropper ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui/advance/stickyNotes`, title: 'Sticky ', type: 'link' },


    //     ]
    // },
    // {
    //     title: 'Icons', icon: 'crown', type: 'sub', active: false, children: [
    //         { path: `${process.env.PUBLIC_URL}/icon/flag-icon`, title: 'Flag Icon', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/icon/font-awesome`, title: 'Fontawesome Icon', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/icon/ico-icon`, title: 'Ico Icon', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/icon/themify-icon`, title: 'Themify Icon', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/icon/whether-icon`, title: 'Whether Icon', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Buttons', icon: 'cloud', type: 'sub', active: false, children: [
    //         { path: `${process.env.PUBLIC_URL}/button/default-button`, title: 'Default Style', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/button/flat-button`, title: 'Flat Style', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/button/edge-button`, title: 'Edge Style', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/button/raised-button`, title: 'Raised Style', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/button/group-button`, title: 'Button-Group', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Forms', icon: 'notepad', type: 'sub', active: false, children: [
    //         {
    //             title: 'Form Controls ', type: 'sub', active: false , children: [
    //                 { path: `${process.env.PUBLIC_URL}/forms/form-validation` , title: 'Form Validation', type: 'link'},
    //                 { path: `${process.env.PUBLIC_URL}/forms/baseInput`,title: 'Basic Input', type: 'link'},
    //                 { path: `${process.env.PUBLIC_URL}/forms/radio-checkbox` , title: 'Checkbox & Radio', type: 'link'},
    //                 { path: `${process.env.PUBLIC_URL}/forms/inputGroup`,title: 'Input Groups', type: 'link'},
    //                 { path: `${process.env.PUBLIC_URL}/forms/megaOptions`,title: 'Mega Option', type: 'link'},

    //             ]
    //         },
    //         {
    //             title: 'Form Widgets', type: 'sub', children: [
    //              { path:`${process.env.PUBLIC_URL}/form-widget/datepicker`,title: 'Datepicker', type: 'link'},
    //              { path:`${process.env.PUBLIC_URL}/form-widget/timepicker`,title: 'Timepicker', type: 'link'},
    //              { path:`${process.env.PUBLIC_URL}/form-widget/typeahead`,title: 'Typeahead', type: 'link'},
    //             ]
    //         },
    //         { path: `${process.env.PUBLIC_URL}/forms/formDefault`, title: 'Form Default', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/forms/formWizard`, title: 'Form Wizard', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Tables', icon: 'harddrives', type: 'sub', active: false, children: [
    //         {
    //             title: 'Reacstrap Table', type: 'sub', children: [
    //                 { path: `${process.env.PUBLIC_URL}/table/basic` ,title: 'Basic Table', type: 'link'},
    //                 { path: `${process.env.PUBLIC_URL}/table/sizing`,title: 'Sizing Table', type: 'link'},
    //                 { path: `${process.env.PUBLIC_URL}/table/border`,title: 'Border Table', type: 'link'},
    //                 { path: `${process.env.PUBLIC_URL}/table/styling`,title: 'Styling Table', type: 'link'},
    //             ]
    //         },
    //         {
    //              path: `${process.env.PUBLIC_URL}/table/datatable`,title: 'Data Tables', type: 'link'
    //         }
    //     ]
    // },
    // {
    //     title: 'Cards', icon: 'credit-card', type: 'sub', active: false, children: [
    //         { path: `${process.env.PUBLIC_URL}/cards/basicCards`, title: 'Basic Card', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/cards/creativeCards`, title: 'Creative Card', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/cards/tabCard`, title: 'Tabbed Card', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/cards/draggingCards`, title: 'Draggable Card', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Timeline', icon: 'panel', type: 'sub',active: false, children: [
    //         { path: `${process.env.PUBLIC_URL}/timelines/timeline1`, title: 'Timeline 1', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/timelines/timeline2`, title: 'Timeline 2', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Charts', icon: 'bar-chart', type: 'sub', active: false, children: [
    //         { path: `${process.env.PUBLIC_URL}/charts/apexCharts`, type: 'link', title: 'Apex Chart' },
    //         { path: `${process.env.PUBLIC_URL}/charts/googleChart`, type: 'link', title: 'Google Chart' },
    //         { path: `${process.env.PUBLIC_URL}/charts/knobChart`, type: 'link', title: 'Knob Chart' },
    //         { path: `${process.env.PUBLIC_URL}/charts/chartJs`, type: 'link', title: 'Chartjs' },
    //         { path: `${process.env.PUBLIC_URL}/charts/chartistComponent`, type: 'link', title: 'Chartist' },
    //     ]
    // },
    // {
    //     title: 'Maps', icon: 'map-alt', type: 'sub', active: false, children: [
    //         { path: '/ui/google-maps', title: 'Google Maps', type: 'link' },
    //         { path: '/ui/leaflet-maps', title: 'Leaflet Maps', type: 'link' }
    //     ]
    // },
    // {
    //     title: 'Editor', icon: 'ruler-pencil', type: 'sub', active: false,children: [
    //         { path: `${process.env.PUBLIC_URL}/editor/ckEditor`, type: 'link', title: 'CK  Editor' },
    //         { path: `${process.env.PUBLIC_URL}/editor/mdeEditor`, type: 'link', title: 'MDE Editor' },
    //         { path: `${process.env.PUBLIC_URL}/editor/acecodeEditor`, type: 'link', title: 'ACE Code Editor' },
    //     ]
    // },
    // {
    //     title: 'Users', icon: 'user', type: 'sub', active: false, sidebartitle: 'Apps',children: [
    //         { path: `${process.env.PUBLIC_URL}/applications/users/user-profile`, title: 'Users Profile', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/applications/users/user-cards`, title: 'Users Cards', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/applications/users/edit-profile`, title: 'Users Edit', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Calendar', icon: 'calendar', type: 'sub', active: false,children: [
    //         { path: `${process.env.PUBLIC_URL}/applications/calendar/basic-calendar`, type: 'link', title: 'Basic Calender', },
    //         { path: `${process.env.PUBLIC_URL}/applications/calendar/draggable-calendar`, type: 'link', title: 'Draggable Calender' },
    //     ]
    // },
    // {
    //     title: 'Gallery', icon: 'gallery', type: 'sub', active: false, children: [
    //         { path: `${process.env.PUBLIC_URL}/applications/gallery/image-gallery`, title: 'Image Gallery', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/applications/gallery/image-with-desc`, title: 'Gallery Grid With Desc', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/applications/gallery/mesonry-gallery`, title: 'Masonry Gallery', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/applications/gallery/mesonry-desc`, title: 'Masonry With Desc', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/applications/gallery/image-hover`, title: 'Hover Efect', type: 'link' },
    //     ]
    // },


    // {
    //     title: 'Ecommerce', icon: 'shopping-cart', type: 'sub', active: false, children: [
    //         { path: `${process.env.PUBLIC_URL}/applications/ecommerce/product`, title: 'Product', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/applications/ecommerce/product-detail/1`, title: 'Product Page', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/applications/ecommerce/product-list`, title: 'Product List', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/applications/ecommerce/payment-details`, title: 'Payment Detail', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/applications/ecommerce/orderhistory`, title: 'Order History', type: 'link' },
    //     ]
    // }, 
    // {
    //     path: `${process.env.PUBLIC_URL}/applications/email-app`, title: 'EMAIL', icon: 'email', type: 'link'
    // },
    // {
    //     path: `${process.env.PUBLIC_URL}/applications/chat-app`, title: 'Chat', icon: 'comments',  active: false, type: 'link'
    // },
    // {
    //     path: `${process.env.PUBLIC_URL}/applications/contact-app`, title: 'Contact', icon: 'pencil-alt',  active: false, type: 'link'
    // },
    // {
    //     path: `${process.env.PUBLIC_URL}/applications/todo-app`, title: 'TO-DO', icon: 'announcement', type: 'link'
    // },
    // {
    //     path: `${process.env.PUBLIC_URL}/applications/todo-firebase-app`, title: 'TO-DO Firebase', icon: 'announcement', type: 'link'
    // },

    // {
    //     path: `${process.env.PUBLIC_URL}/applications/pricing`, title: 'Pricing', icon: 'money', type: 'link'
    // },
    // {
    //     path: `${process.env.PUBLIC_URL}/applications/support-ticket`, title: 'Support Ticket', icon: 'headphone-alt', type: 'link'
    // },
    // {
    //     path: `${process.env.PUBLIC_URL}/pages/sample-page`, title: 'Sample Page', icon: 'file', sidebartitle: 'Pages', active: false, type: 'link'
    // },
    // {
    //     path: `${process.env.PUBLIC_URL}/search/searchpage`, title: 'Search Page', icon: 'search', type: 'link', active: false
    // },
    // {
    //     title: 'Error Page', icon: 'info-alt', type: 'sub', active: false, children: [
    //         { path: `${process.env.PUBLIC_URL}/pages/errors/error400`, title: 'Error 400', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/pages/errors/error401`, title: 'Error 401', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/pages/errors/error403`, title: 'Error 403', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/pages/errors/error404`, title: 'Error 404', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/pages/errors/error500`, title: 'Error 500', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/pages/errors/error503`, title: 'Error 503', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Authentication', icon: 'unlock', type: 'sub', active: false, children: [
    //         { path: `${process.env.PUBLIC_URL}/pages/login`, title: 'Login Page', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/pages/login-image`, title: 'Login With Bg Image', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/pages/login-video`, title: 'Login With Bg Video', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/pages/register`, title: 'Register Simple', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/pages/register-image`, title: 'Register With Bg Image', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/pages/register-video`, title: 'Register With Bg Video', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/pages/unlock-user`, title: 'Unlock-User', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/pages/forget-password`, title: 'Forget Password', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/pages/reset-password`, title: 'Reset Password', type: 'link' },

    //     ]
    // },
    // {
    //     title: 'Coming Soon', type: 'sub', icon: 'video-clapper', active: false, children: [
    //         { path: `${process.env.PUBLIC_URL}/pages/comingsoon`, title: 'Coming Simple', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/pages/comingsoonImg`, title: 'Coming With Bg Image', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/pages/comingsoonVideo`, title: 'Coming With Bg Video', type: 'link' },
    //     ]
    // },
    // {
    //     path: `${process.env.PUBLIC_URL}/pages/maintenance`, title: 'Maintenance', icon: 'settings', type: 'link'
    // }
]
