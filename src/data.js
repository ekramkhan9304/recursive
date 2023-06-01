export const data = [
    {
        isFolder: true,
        name: "public",
        children: [
            {
                isFolder: false,
                name: "public details",
            },
            {
                isFolder: false,
                name: "user details",
            },
            {
                isFolder: false,
                name: "publics",
            },
        ],
    },
    {
        isFolder: true,
        name: "src",
        children: [
            {
                isFolder: true,
                name: "components",
                children: [
                    {
                        isFolder: true,
                        name: "home",
                        children: [
                            {
                                isFolder: false,
                                name: "Home.js",
                            },
                            {
                                isFolder: false,
                                name: "about",
                                children: [
                                    {
                                        name: "about details",
                                    },
                                    {
                                        name: "contact details"
                                    }
                                ]

                            },
                        ],
                    },
                ],
            },
            {
                isFolder: false,
                name: "App.js",
            },
        ],
    },
    {
        isFolder: true,
        name: "Home",
    },
    {
        isFolder: true,
        name: "About",
    },
    {
        isFolder: true,
        name: "Contact",
    }

];