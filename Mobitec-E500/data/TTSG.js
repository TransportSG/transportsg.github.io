EDSFormats.TTSG = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-Tower16:10",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination",
            font: {
                $$cond: {
                    "$destFont === null": "Mobitec-9:6",
                    "else": "$destFont"
                }
            },
            spacing: 1
        },
        scroll: {
            align: "centre-x,bottom",
            margin: {
                right: 'width(serviceNumber)'
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "Mobitec-Tower6:4",
            spacing: 1
        },

        text: "$destination+' '+$serviceNumber"
        
    },
    StandardServiceOldFont: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "TTS-16:8",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination",
            font: "Mobitec-9:6",
            spacing: 1
        },
        scroll: {
            align: "centre-x,bottom",
            margin: {
                right: 'width(serviceNumber)'
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "Mobitec-6:5",
            spacing: 1
        },

        text: "$destination+' '+$serviceNumber"
    },
    destScroll: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-Tower16:10",
            spacing: 2
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "centre-x,top"
                }
            },
            text: "$top",
            font: {
                $$cond: {
                    "$topFont === null": "Mobitec-9:6",
                    "else": "$topFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)'
            }
        },
        bottom: {
            align: "centre-x,bottom",
            text: {
                $$cond: {
                    "$bottom !== null": "$bottom",
                    "else": "''"
                }
            },
            font: {
                $$cond: {
                    "$bottomFont === null": "Hanover-5:3",
                    "else": "$bottomFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)'
            }
        },
        image: {
            align: "left",
            image: {
                $$cond: {
                    "$image !== null": "$image",
                    "else": "blank"
                }
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
        
    },
    destScrollOldFont: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "TTS-16:8",
            spacing: 2
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "centre-x,top"
                }
            },
            text: "$top",
            font: {
                $$cond: {
                    "$topFont === null": "Mobitec-9:6",
                    "else": "$topFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)'
            }
        },
        bottom: {
            align: "centre-x,bottom",
            text: {
                $$cond: {
                    "$bottom !== null": "$bottom",
                    "else": "''"
                }
            },
            font: {
                $$cond: {
                    "$bottomFont === null": "Hanover-5:3",
                    "else": "$bottomFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)'
            }
        },
        image: {
            align: "left",
            image: {
                $$cond: {
                    "$image !== null": "$image",
                    "else": "blank"
                }
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    logo: {
        logo: {
            align: "centre-x,centre-y",
            image: "$image"
        },

        text: "$text"
    },
    TowerSpecialEDS: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-Tower16:10",
            spacing: 2
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "centre-x,top"
                }
            },
            text: "$top",
            font: {
                $$cond: {
                    "$topFont === null": "Mobitec-9:6",
                    "else": "$topFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)'
            }
        },
        bottom: {
            align: "centre-x,bottom",
            text: {
                $$cond: {
                    "$bottom !== null": "$bottom",
                    "else": "''"
                }
            },
            font: {
                $$cond: {
                    "$bottomFont === null": "Hanover-5:3",
                    "else": "$bottomFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)'
            }
        },
        image: {
            align: "left",
            image: {
                $$cond: {
                    "$image !== null": "$image",
                    "else": "blank"
                }
            }
        },

        text: "$text"
        
    },
    full: {
        __dynamic__: (matrix, data) => {
            matrixPrimitives.setStrokeColour(null);
            matrixPrimitives.fillRectangle(matrix, 0, 0, matrix.width, matrix.height);
    },
    text: "All LED Lit"
    },
    message: {
        display: {
            align: "centre-x,centre-y",
            text: "$text",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$text"
},
}
EDSData.TTSG = {
    
    1: {
      front: {
        renderType: "standardService",
        serviceNumber: "000",
        destination: "EDS TEST",
        scrolls: [
            {
                renderType: "destScroll",
                serviceNumber: "00",
                top: "Welcome Aboard",
                topFont: "Mobitec-7:6:2",
                bottom: "Tower Transit!",
                bottomFont: "Mobitec-7:5:1",
                image: "logo"
            },
            {
                renderType: "destScroll",
                serviceNumber: "000",
                top: "Welcome Aboard",
                topFont: "Mobitec-7:5:1",
                bottom: "Tower Transit!",
                bottomFont: "Mobitec-7:5:1",
                image: "logo"
            },
            {
                renderType: "destScroll",
                serviceNumber: "00",
                top: "Happy & Prosperous",
                topFont: "Hanover-7:3",
                bottom: "Lunar New Year!",
                bottomFont: "Hanover-7:3",
                image: "cny"
            },
            {
                renderType: "destScroll",
                serviceNumber: "00",
                top: "Happy Kindness Day!",
                topFont: "Hanover-7:3",
                bottom: "24 May 2019",
                bottomFont: "Hanover-7:3",
                image: "heart"
            },
        ]
      }
    },
    1111: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "OFF SERVICE",
            scrolls: [
                {
                    renderType: "message",
                    text: "Off Service",
                    font: "TTS-16:9",
                    spacing: 3
                },
                {
                    renderType: "logo",
                    image: "logo-full",
                    text: ""
                }
            ]
        }
    },
    1112: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "SGUS",
                topFont: "SGBusLogo-Mobitec",
                text: "SG🎔Bus Logo"
        }
    },
    6666: {
        front: {
            renderType: "logo",
            image: "logo-full",
            text: "Tower Transit Logo",
            destination: "",
            scrolls: [
                {
                    renderType: "message",
                    text: "",
                    font: "TTS-16:9",
                    spacing: 3
                },
                {
                    renderType: "logo",
                    image: "logo-full",
                    text: "TOWER TRANSIT LOGO"
                }
            ]
        }
    },
    22: {
        front: { // Reserved code for MAN A22 Logo
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "NL323F (A22)",
                topFont: "Mobitec-9:6",
                bottom: "Mobitec - 270424",
                bottomFont: "Mobitec-Tower6:4",
                image: "MAN-Logo37",
                text: "MAN A22"
        }
    },
    24: {
        front: { // Reserved code for MAN A24 Logo
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "NG363F (A24)",
                topFont: "Mobitec-9:6",
                bottom: "Mobitec - 270424",
                bottomFont: "Mobitec-Tower6:4",
                image: "MAN-Logo37",
                text: "MAN A24"
        }
    },
    95: {
        front: { // Reserved code for MAN A25 Logo
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "ND323F (A95)",
                topFont: "Mobitec-9:6",
                bottom: "Mobitec - 270424",
                bottomFont: "Mobitec-Tower6:4",
                image: "MAN-Logo37",
                text: "MAN A95"
        }
    },
    101: {
        front: {
            renderType: "standardService",
            serviceNumber: "N1",
            destination: "YISHUN RING RD",
            scrolls: [
                "NEWTON RD",
                "TOA PAYOH CENTRAL",
                "BISHAN ST 11",
                "ANG MO KIO AVE 3",
                "ANG MO KIO AVE 4",
                {
                    renderType: "destScroll",
                    serviceNumber: "N1",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "N1",
                    top: "Have a safe ride",
                    topFont: "Hanover-7:3",
                    bottom: "home!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "N1",
                    top: "YISHUN RING RD",
                    bottom: "( KHATIB STN )",
                    image: "mrt"
                }
            ]
        }
    },
    102: {
        front: {
            renderType: "standardService",
            serviceNumber: "N2",
            destination: "YISHUN RING RD",
            scrolls: [
                "WOODLANDS CENTRE RD",
                "MARSILING RD",
                "WOODLANDS AVE 7",
                "ADMIRALTY DR",
                "CANBERRA RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "N2",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "N2",
                    top: "Have a safe ride",
                    topFont: "Hanover-7:3",
                    bottom: "home!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "N2",
                    top: "SEMBAWANG DR",
                    bottom: "( SEMBAWANG STN )",
                    image: "mrt"
                }
            ]
        }
    },
    311: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "E31",
                top: "CCL EXPRESS BUS",
                topFont: "Mobitec-9:6",
                bottom: "Kent Ridge - Harbourfront",
                bottomFont: "Mobitec-Tower6:4",
                text: "E31 Harbourfront"
        }
    },
    312: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "E31",
                top: "CCL EXPRESS BUS",
                topFont: "Mobitec-9:6",
                bottom: "Harbourfront - Kent Ridge",
                bottomFont: "Mobitec-Tower6:4",
                text: "E31 Kent Ridge"
        }
    },
    411: {
        front: {
            renderType: "standardService",
            serviceNumber: "41",
            destination: "BEAUTY WORLD MRT",
            scrolls: [
                "TOH GUAN RD",
                "TOH GUAN RD EAST",
                "TOH TUCK RD",
                "JALAN ANAK BUKIT",
                {
                    renderType: "destScroll",
                    serviceNumber: "41",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "41",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "41",
                    top: "BEAUTY WORLD",
                    image: "mrt"
                }
            ]
        }
    },
    412: {
        front: {
            renderType: "standardService",
            serviceNumber: "41",
            destination: "JURONG EAST",
            scrolls: [
                "TOH GUAN RD",
                "TOH GUAN RD EAST",
                "TOH TUCK RD",
                "JALAN ANAK BUKIT",
                {
                    renderType: "destScroll",
                    serviceNumber: "41",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "41",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "41",
                    top: "JURONG EAST",
                    image: "mrt"
                }
            ]
        }
    },
    419: {
        front: {
            renderType: "standardService",
            serviceNumber: "41",
            destination: "JURONG WEST AVE 1",
            scrolls: [
                "TOH GUAN RD",
                "TOH GUAN RD EAST",
                "TOH TUCK RD",
                "BEAUTY WORLD MRT",
                {
                    renderType: "destScroll",
                    serviceNumber: "49",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "49",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "49",
                    top: "JURONG WEST ST 42",
                }
            ]
        }
    },
    491: {
        front: {
            renderType: "standardService",
            serviceNumber: "49",
            destination: "JURONG WEST ST 42",
            scrolls: [
                "JALAN AHMAD IBRAHIM",
                "CORPORATION DR",
                "LAKESIDE MRT",
                "JURONG WEST ST 51",
                {
                    renderType: "destScroll",
                    serviceNumber: "49",
                    top: "JURONG WEST ST 42",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "49",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "49",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                }
            ]
        }
    },
    492: {
        front: {
            renderType: "standardService",
            serviceNumber: "49",
            destination: "JURONG EAST",
            scrolls: [
                "JURONG WEST ST 51",
                "LAKESIDE MRT",
                "CORPORATION DR",
                "JALAN AHMAD IBRAHIM",
                {
                    renderType: "destScroll",
                    serviceNumber: "49",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "49",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "49",
                    top: "JURONG EAST",
                    image: "mrt"
                }
            ]
        }
    },
    500: {
        front: {
            renderType: "standardService",
            serviceNumber: "0500",
            destination: "PULAU TEKONG",
            scrolls: [
                "JURONG TOWN HALL RD",
                "P I E",
                "UPP CHANGI RD NORTH",
                "LOYANG AVE",
                "SAF FERRY TERMINAL",
                {
                    renderType: "destScroll",
                    serviceNumber: "0500",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "0500",
                    top: "Singapore's First",
                    topFont: "Hanover-7:3",
                    bottom: "amphibious bus route!",
                    bottomFont: "Hanover-7:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "0500",
                    top: "PULAU TEKONG",
                }
            ]
        }
    },
    501: {
        front: { // Reserved code for Enviro 500 (Old ADL Logo)
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "ENVIRO 500",
                topFont: "Mobitec-Enviro500 Wording",
                bottom: "Mobitec - 150324",
                bottomFont: "Mobitec-Tower6:4",
                image: "NEW ADL LOGO",
                text: "Enviro 500 (New Logo)"
        }
    },
    502: { // Reserved code for Enviro 500 (New ADL Logo)
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "ENVIRO 500",
                topFont: "Mobitec-Enviro500 Wording",
                bottom: "Mobitec - 170921",
                bottomFont: "Mobitec-Tower6:4",
                image: "OLD ADL LOGO",
                text: "Enviro 500 (Old Logo)"
        }
    },
    521: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "S52",
                top: "TEL SHUTTLE",
                topFont: "Mobitec-9:6",
                bottom: "Outram Park > Caldecott",
                bottomFont: "Mobitec-Tower6:4",
                text: "S52 Caldecott"
        }
    },
    522: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "S52",
                top: "TEL SHUTTLE",
                topFont: "Mobitec-9:6",
                bottom: "Caldecott > Outram Park",
                bottomFont: "Mobitec-Tower6:4",
                text: "S52 Outram Park"
        }
    },
    661: {
        front: {
            renderType: "standardService",
            serviceNumber: "66",
            destination: "BEAUTY WORLD",
            scrolls: [
                "JURONG TOWN HALL RD",
                "BUKIT BATOK WEST AVE 8",
                "BUKIT BATOK WEST AVE 6",
                "JALAN JURONG KECHIL",
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "BEAUTY WORLD",
                    image: "mrt"
                }
            ]
        }
    },
    662: {
        front: {
            renderType: "standardService",
            serviceNumber: "66",
            destination: "JURONG EAST",
            scrolls: [
                "JALAN JURONG KECHIL",
                "BUKIT BATOK WEST AVE 6",
                "BUKIT BATOK WEST AVE 8",
                "JURONG TOWN HALL RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "JURONG EAST",
                    image: "mrt"
                }
            ]
        }
    },
    665: {
        front: {
            renderType: "standardService",
            serviceNumber: "66",
            destination: "BEDOK",
            scrolls: [
                "BUKIT BATOK CENTRAL",
                "DUNEARN RD",
                "LITTLE INDIA",
                "MACPHERSON RD / EST",
                "BEDOK RESERVOIR RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "BEDOK",
                    image: "mrt"
                }
            ]
        }
    },
    666: {
        front: {
            renderType: "standardService",
            serviceNumber: "66",
            destination: "JURONG EAST",
            scrolls: [
                "BEDOK RESERVOIR RD",
                "MACPHERSON EST / RD",
                "LITTLE INDIA",
                "BUKIT TIMAH RD",
                "BUKIT BATOK CENTRAL",
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "JURONG EAST",
                    image: "mrt"
                }
            ]
        }
    },
    667: {
        front: { 
                renderType: "TowerSpecialEDS",
                serviceNumber: "66A",
                top: "Ends At",
                topFont: "Mobitec-7:5:3",
                bottom: "Little India Stn Exit A",
                bottomFont: "Mobitec-Tower6:4",
                image: "mrt",
                text: "66A LITTLE INDIA MRT"
        }
    },
    668: {
        front: { 
                renderType: "TowerSpecialEDS",
                serviceNumber: "66A",
                top: "Ends At",
                topFont: "Mobitec-7:5:3",
                bottom: "Tekka Ctr",
                bottomFont: "Mobitec-Tower6:4",
                text: "66B TEKKA CTR"
        }
    },   
    669: {
        front: { 
                renderType: "TowerSpecialEDS",
                serviceNumber: "66C",
                top: "Ends At",
                topFont: "Mobitec-7:5:3",
                bottom: "Opp Beauty World Stn",
                bottomFont: "Hanover-5:3",
                image: "mrt",
                text: "66C BEAUTY WORLD MRT"
        }
    },     
    771: {
        front: {
            renderType: "standardService",
            serviceNumber: "77",
            destination: "MARINA CENTRE",
            scrolls: [
                "TOH TUCK RD",
                "SIXTH AVE",
                "HOLLAND VILLAGE / RD",
                "ORCHARD RD",
                "BRAS BASAH RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "MARINA CENTRE",
                    bottom: "( PROMENADE STN )",
                    image: "mrt"
                }
            ]
        }
    },
    772: {
        front: {
            renderType: "standardService",
            serviceNumber: "77",
            destination: "BUKIT BATOK",
            scrolls: [
                "STAMFORD RD",
                "ORCHARD BOULEVARD",
                "HOLLAND RD / VILLAGE",
                "SIXTH AVE",
                "TOH TUCK RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "BUKIT BATOK",
                    image: "mrt"
                }
            ]
        }
    },
    779: {
        front: {
            renderType: "standardService",
            serviceNumber: "77",
            destination: "STAMFORD RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "Skip",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Suntec / Marina Centre",
                    bottomFont: "Mobitec-Tower6:4",
                },
                "TOH TUCK RD",
                "SIXTH AVE",
                "HOLLAND VILLAGE / RD",
                "ORCHARD RD",
                "BRAS BASAH RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "STAMFORD RD",
                    bottom: "( CITY HALL STN )",
                    image: "mrt"
                }
            ]
        }
    },
    781: {
        front: {
            renderType: "standardService",
            serviceNumber: "78",
            destination: "CLEMENTI MRT",
            scrolls: [
                "PENJURU RD",
                "TANJONG PENJURU",
                "PANDAN RD / AVE",
                "WEST COAST RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "CLEMENTI MRT",
                    image: "mrt"
                }
            ]
        }
    },
    782: {
        front: {
            renderType: "standardService",
            serviceNumber: "78",
            destination: "JURONG TOWN HALL",
            scrolls: [
                "WEST COAST RD",
                "PANDAN RD",
                "TANJONG PENJURU",
                "PENJURU RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "JURONG TOWN HALL",
                    topFont: "Mobitec-Tower9:4",
                    bottom: "( JURONG EAST STN )",
                    image: "mrt"
                }
            ]
        }
    },
    783: {
        front: {
            renderType: "standardService",
            serviceNumber: "78A",
            destination: "Ends At",
            destFont: "Mobitec-7:5:3",
            scrolls: [
                "Tanjong Penjuru",
                "(Opp CLP Intl)",
            ]
        }
    },
    789: {
        front: {
            renderType: "standardService",
            serviceNumber: "78",
            destination: "JURONG EAST MRT",
            scrolls: [
                "WEST COAST RD",
                "PANDAN RD",
                "TANJONG PENJURU",
                "PENJURU RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "JURONG EAST",
                    image: "mrt"
                }
            ]
        }
    },
    791: {
        front: {
            renderType: "standardService",
            serviceNumber: "79",
            destination: "JURONG EAST MRT",
            scrolls: [
                "QUALITY RD",
                "THIRD CHIN BEE RD",
                "JURONG PORT RD",
                "TEBAN GARDENS RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "79",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "79",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "79",
                    top: "JURONG EAST",
                    bottom: "( BS 28301 - BLK 131 )",
                    image: "mrt"
                }
            ]
        }
    },
    792: {
        front: {
            renderType: "standardService",
            serviceNumber: "79",
            destination: "BOON LAY",
            scrolls: [
                "TEBAN GARDENS RD",
                "JURONG PORT RD",
                "THIRD CHIN BEE RD",
                "QUALITY RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "79",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "79",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "79",
                    top: "BOON LAY",
                    image: "mrt"
                }
            ]
        }
    },
    793: {
        front: {
            renderType: "standardService",
            serviceNumber: "79A",
            destination: "Ends At",
            destFont: "Mobitec-7:5:3",
            scrolls: [
                "Jurong Town Hall Rd",
                "(Jurong East Lib)",
            ]
        }
    },
    961: {
        front: {
            renderType: "standardService",
            serviceNumber: "96",
            destination: "CLEMENTI",
            scrolls: [
                "CLEMENTI RD",
                "NAT'L UNIVERSITY OF S'PORE",
                "KENT RIDGE CRESCENT",
                {
                    renderType: "destScroll",
                    serviceNumber: "96",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "96",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "96",
                    top: "CLEMENTI",
                    image: "mrt"
                }
            ]
        }
    },
    963: {
        front: {
            renderType: "standardService",
            serviceNumber: "96A",
            destination: "Ends At",
            destFont: "Mobitec-7:5:3",
            scrolls: [
                "Kent Ridge Cres",
                "(NUS Raffles Hall)",
            ]
        }
    },
    964: {
        front: {
            renderType: "destScroll",
            serviceNumber: "96B",
            top: "Ends At",
            topFont: "Mobitec-7:5:3",
            bottom: "Clementi Stn Exit A",
            bottomFont: "Mobitec-Tower6:4",
            image: "mrt"
        }
    },
    969: {
        front: { 
                renderType: "TowerSpecialEDS",
                serviceNumber: "96B",
                top: "Ends At",
                topFont: "Mobitec-7:5:3",
                bottom: "Clementi Stn Exit A",
                bottomFont: "Mobitec-Tower6:4",
                image: "mrt",
                text: "96B CLEMENTI MRT"
        }
    },     
    971: {
        front: {
            renderType: "standardService",
            serviceNumber: "97",
            destination: "MARINA CENTRE",
            scrolls: [
                "A Y E",
                "ALEXANDRA RD",
                "HARBOURFRONT",
                "ROBINSON RD",
                "BAYFRONT AVE / MBS",
                "SUNTEC CITY",
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "MARINA CENTRE",
                    bottom: "( PROMENADE STN )",
                    image: "mrt"
                }
            ]
        }
    },
    972: {
        front: {
            renderType: "standardService",
            serviceNumber: "97",
            destination: "JURONG EAST",
            scrolls: [
                "SUNTEC CITY",
                "BAYFRONT AVE / MBS",
                "SHENTON WAY",
                "HARBOURFRONT",
                "ALEXANDRA RD",
                "A Y E",
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "JURONG EAST",
                    image: "mrt"
                }
            ]
        }
    },
    973: {
        front: {
            renderType: "standardService",
            serviceNumber: "97e",
            destination: "MARINA CENTRE",
            scrolls: [
                "A Y E",
                "ALEXANDRA RD",
                "HARBOURFRONT",
                "ROBINSON RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "LIMITED STOPS",
                    topFont: "Mobitec-9:6",
                    bottom: "EXPRESS SERVICE",
                    bottomFont: "Mobitec-6:5",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "MARINA CENTRE",
                    bottom: "( PROMENADE STN )",
                    image: "mrt"
                }
            ]
        }
    },
    974: {
        front: {
            renderType: "standardService",
            serviceNumber: "97e",
            destination: "JURONG EAST",
            scrolls: [
                "SUNTEC CITY",
                "BAYFRONT AVE / MBS",
                "SHENTON WAY",
                "HARBOURFRONT",
                "ALEXANDRA RD",
                "A Y E",
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "LIMITED STOPS",
                    topFont: "Mobitec-9:6",
                    bottom: "EXPRESS SERVICE",
                    bottomFont: "Mobitec-6:5",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "JURONG EAST",
                    image: "mrt"
                }
            ]
        }
    },   
    978: {
        front: {
            renderType: "standardService",
            serviceNumber: "97",
            destination: "CENTRAL BLVD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "Skip",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Marina Centre / Suntec",
                    bottomFont: "Mobitec-Tower6:4",
                },
                "AYE",
                "ALEXANDRA RD",
                "HARBOURFRONT",
                "ROBINSON RD",,
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "CENTRAL BLVD",
                    image: "mrt"
                }
            ]
        }
    },
    979: {
        front: {
            renderType: "standardService",
            serviceNumber: "97e",
            destination: "CENTRAL BLVD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "Skip",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Marina Centre / Suntec",
                    bottomFont: "Mobitec-Tower6:4",
                },
                "AYE",
                "ALEXANDRA RD",
                "HARBOURFRONT",
                "ROBINSON RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "LIMITED STOPS",
                    topFont: "Mobitec-9:6",
                    bottom: "EXPRESS SERVICE",
                    bottomFont: "Mobitec-6:5",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "CENTRAL BLVD",
                    image: "mrt"
                }
            ]
        }
    },
    981: {
        front: {
            renderType: "standardService",
            serviceNumber: "98",
            destination: "JURONG PIER WAY",
            scrolls: [
                "JURONG EAST AVE 1",
                'JURONG WEST AVE 1',
                "LAKESIDE MRT",
                "CORPORATION DR",
                "JURONG PORT RD",
                "JALAN BUROH",
                {
                    renderType: "destScroll",
                    serviceNumber: "98",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "98",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "98",
                    top: "JURONG PIER WAY",
                    bottom: "(JURONG ISLAND CHECKPOINT)",

                }
            ]
        }
    },
    982: {
        front: {
            renderType: "standardService",
            serviceNumber: "98",
            destination: "JURONG EAST",
            scrolls: [
                "JALAN BUROH",
                "JURONG PORT RD",
                "CORPORATION DR",
                "LAKESIDE MRT",
                "JURONG WEST AVE 1",
                "JURONG EAST AVE 1",
                {
                    renderType: "destScroll",
                    serviceNumber: "98",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "98",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "98",
                    top: "JURONG EAST",
                    image: "mrt"
                }
            ]
        }
    },
    983: {
        front: {
            renderType: "standardService",
            serviceNumber: "98A",
            destination: "Ends At",
            destFont: "Mobitec-7:5:3",
            scrolls: [
                "Corporation Rd",
                "(Corporation Pl)",
            ]
        }
    },
    984: {
        front: {
            renderType: "standardService",
            serviceNumber: "98B",
            destination: "Ends At",
            destFont: "Mobitec-7:5:3",
            scrolls: [
                "Jurong Pier Way",
                "(Jurong Island Chkpt)",
            ]
        }
    },
    988: {
        front: {
            renderType: "standardService",
            serviceNumber: "98M",
            destination: "CORPORATION RD",
            scrolls: [
                "JURONG EAST AVE 1",
                'JURONG WEST AVE 1',
                "LAKESIDE MRT",
                "CORPORATION DR",
                {
                    renderType: "destScroll",
                    serviceNumber: "98M",
                    top: "SKIPS JURONG ISLAND",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "& JURONG PORT RD",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "98M",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "98M",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "98M",
                    top: "CORPORATION RD",
                }
            ]
        }
    },
    989: {
        front: {
            renderType: "standardService",
            serviceNumber: "98M",
            destination: "JURONG EAST",
            scrolls: [
                "CORPORATION DR",
                "LAKESIDE MRT",
                "JURONG WEST AVE 1",
                "JURONG EAST AVE 1",
                {
                    renderType: "destScroll",
                    serviceNumber: "98M",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "98M",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "98M",
                    top: "JURONG EAST",
                    image: "mrt"
                }
            ]
        }
    },
    1061: {
        front: {
            renderType: "standardService",
            serviceNumber: "106",
            destination: "SHENTON WAY",
            scrolls: [
                "C'WEALTH AVE WEST",
                "HOLLAND VILLAGE / RD",
                "ORCHARD RD",
                "BRAS BASAH RD",
                "BAYFRONT AVE / MBS",
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "Hop on this bus to",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "MBS & Lau Pa Sat",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "Enjoy the vibrant city view",
                    topFont: "Hanover-7:3",
                    bottom: "through this route",
                    bottomFont: "Hanover-7:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "SHENTON WAY",
                }
            ]
        }
    },
    1062: {
        front: {
            renderType: "standardService",
            serviceNumber: "106",
            destination: "BUKIT BATOK",
            scrolls: [
                "ROBINSON RD",
                "CENTRAL BOULEVARD",
                "BAYFRONT AVE / MBS",
                "ORCHARD BOULEVARD",
                "HOLLAND RD / VILLAGE",
                "C'WEALTH AVE WEST",
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "Hop on this bus to",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "Lau Pa Sat & MBS",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "Enjoy the vibrant city view",
                    topFont: "Hanover-7:3",
                    bottom: "through this route",
                    bottomFont: "Hanover-7:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "BUKIT BATOK",
                    image: "mrt"
                }
            ]
        }
    },
    1063: {
        front: {
            renderType: "destScroll",
            serviceNumber: "106A",
            top: "Ends At",
            topFont: "Mobitec-7:5:3",
            bottom: "Clementi Stn Exit B",
            bottomFont: "Mobitec-Tower6:4",
        }
    },
    1068: {
        front: {
            renderType: "standardService",
            serviceNumber: "106",
            destination: "SHENTON WAY",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "Skip",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Marina Centre / Suntec",
                    bottomFont: "Mobitec-Tower6:4",
                },
                "C'WEALTH AVE WEST",
                "HOLLAND VILLAGE / RD",
                "ORCHARD RD",
                "BRAS BASAH RD",
                "CITY HALL MRT",
                "SOUTH BRIDGE RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "SHENTON WAY"
                }
            ]
        }
    },
    1069: {
        front: {
            renderType: "standardService",
            serviceNumber: "106",
            destination: "BUKIT BATOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "Skip",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Marina Centre / Suntec",
                    bottomFont: "Mobitec-Tower6:4",
                },
                "ROBINSON RD",
                "CENTRAL BOULEVARD",
                "CLARKE QUAY",
                "ORCHARD BOULEVARD",
                "HOLLAND RD / VILLAGE",
                "C'WEALTH AVE WEST",
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "BUKIT BATOK",
                    image: "mrt"

                }
            ]
        }
    },
    1431: {
        front: {
            renderType: "standardService",
            serviceNumber: "143",
            destination: "JURONG EAST",
            scrolls: [
                "ORCHARD RD",
                "CHINATOWN",
                "HARBOURFRONT",
                "WEST COAST RD",
                "TEBAN GARDENS RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "143",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "143",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "143",
                    top: "JURONG EAST",
                    image: "mrt"
                }
            ]
        }
    },
    1432: {
        front: {
            renderType: "standardService",
            serviceNumber: "143",
            destination: "TOA PAYOH",
            scrolls: [
                "ORCHARD RD",
                "CHINATOWN",
                "HARBOURFRONT",
                "WEST COAST RD",
                "TEBAN GARDENS RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "143",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "143",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "143",
                    top: "TOA PAYOH",
                    image: "mrt"
                }
            ]
        }
    },
    1433: {
        front: {
            renderType: "standardService",
            serviceNumber: "143M",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "143M",
                    top: "LOOPS AT",
                    topFont: "Mobitec-9:6",
                    bottom: "PANDAN GARDENS",
                    bottomFont: "Mobitec-Tower6:4",
                },
                "JURONG TOWN HALL RD",
                "TEBAN GARDENS RD",
                "PANDAN GARDENS",
                {
                    renderType: "destScroll",
                    serviceNumber: "143M",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "143M",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "143M",
                    top: "JURONG EAST",
                    image: "mrt"
                }
            ]
        }
    },
    1671: {
        front: {
            renderType: "standardService",
            serviceNumber: "167",
            destination: "BUKIT MERAH",
            scrolls: [
                "SEMBAWANG RD",
                "UPPER THOMSON RD",
                "THOMSON RD",
                "ORCHARD RD",
                "SHENTON WAY",
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "Hop on this bus to",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "Lau Pa Sat & Merlion",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "Enjoy the vibrant city view",
                    topFont: "Hanover-7:3",
                    bottom: "through this route",
                    bottomFont: "Hanover-7:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "BUKIT MERAH",
                }
            ]
        }
    },
    1672: {
        front: {
            renderType: "standardService",
            serviceNumber: "167",
            destination: "SEMBAWANG",
            scrolls: [
                "CECIL ST",
                "ORCHARD TURN",
                "THOMSON RD",
                "UPPER THOMSON RD",
                "SEMBAWANG RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "Hop on this bus to",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "Lau Pa Sat & Merlion",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "Enjoy the vibrant city view",
                    topFont: "Hanover-7:3",
                    bottom: "through this route",
                    bottomFont: "Hanover-7:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "SEMBAWANG",
                    image: "mrt"
                }
            ]
        }
    },
    1673: {
        front: {
            renderType: "standardService",
            serviceNumber: "167e",
            destination: "SHENTON WAY",
            scrolls: [
                "SEMBAWANG RD",
                "SPRINGLEAF MRT",
                "NEWTON MRT",
                "ORCHARD RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "167e",
                    top: "LIMITED STOPS",
                    topFont: "Mobitec-9:6",
                    bottom: "EXPRESS SERVICE",
                    bottomFont: "Mobitec-6:5",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "167e",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "167e",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "167e",
                    top: "SHENTON WAY"
                }
            ]
        }
    },
    1674: {
        front: {
            renderType: "standardService",
            serviceNumber: "167e",
            destination: "SEMBAWANG",
            scrolls: [
                "STAMFORD RD",
                "ORCHARD TURN",
                "NEWTON MRT",
                "SPRINGLEAF MRT",
                "SEMBAWANG RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "167e",
                    top: "LIMITED STOPS",
                    topFont: "Mobitec-9:6",
                    bottom: "EXPRESS SERVICE",
                    bottomFont: "Mobitec-6:5",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "167e",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "167e",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "167e",
                    top: "SEMBAWANG",
                    image: "mrt"
                }
            ]
        }
    },
    1678: {
        front: {
            renderType: "standardService",
            serviceNumber: "167",
            destination: "BUKIT MERAH",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "Skip",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Esplanade Dr",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "Skip",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Collyer Quay",
                    bottomFont: "Mobitec-Tower6:4",
                },
                "SEMBAWANG RD",
                "UPPER THOMSON RD",
                "THOMSON RD",
                "ORCHARD RD",
                "SHENTON WAY",,
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "BUKIT MERAH",
                }
            ]
        }
    },
    1679: {
        front: {
            renderType: "standardService",
            serviceNumber: "167",
            destination: "SEMBAWANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "Skip",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Fullerton Rd",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "Skip",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Esplanade Dr",
                    bottomFont: "Mobitec-Tower6:4",
                },
                "SEMBAWANG RD",
                "UPPER THOMSON RD",
                "THOMSON RD",
                "ORCHARD RD",
                "SHENTON WAY",,
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "SEMBAWANG",
                    image: "mrt"
                }
            ]
        }
    },
    1691: {
        front: {
            renderType: "standardService",
            serviceNumber: "169",
            destination: "ANG MO KIO",
            scrolls: [
                "WOODLANDS AVE 9",
                "ADMIRALTY RD EAST",
                "YISHUN MRT",
                "SEMBAWANG RD",
                "ANG MO KIO AVE 3",
                {
                    renderType: "destScroll",
                    serviceNumber: "169",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "169",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "169",
                    top: "ANG MO KIO",
                    image: "mrt"
                }
            ]
        }
    },
    1692: {
        front: {
            renderType: "standardService",
            serviceNumber: "169",
            destination: "WOODLANDS",
            scrolls: [
                "ANG MO KIO AVE 3",
                "SEMBAWANG RD",
                "YISHUN MRT",
                "ADMIRALTY RD EAST",
                "WOODLANDS AVE 9",
                {
                    renderType: "destScroll",
                    serviceNumber: "169",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "169",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "169",
                    top: "WOODLANDS",
                    image: "mrt"
                }
            ]
        }
    },
    1693: {
        front: {
            renderType: "destScroll",
            serviceNumber: "169A",
            top: "Ends At",
            topFont: "Mobitec-7:5:3",
            bottom: "Opp Yishun Stn",
            bottomFont: "Mobitec-Tower6:4",
            image: "mrt"
        }
    },
    1694: {
        front: {
            renderType: "standardService",
            serviceNumber: "169B",
            destination: "Ends At",
            destFont: "Mobitec-7:5:3",
            scrolls: [
                "Woodlands Ave 8",
                "(Bef W'lands Ind Pk E3)",
            ]
        }
    },
    1711: {
        front: {
            renderType: "standardService",
            serviceNumber: "171",
            destination: "BUKIT PANJANG",
            scrolls: [
                "YISHUN AVE 5",
                "SEMBAWANG RD",
                "MANDAI RD",
                "PETIR RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "BUKIT PANJANG",
                    image: "mrt"
                }
            ]
        }
    },
    1711: {
        front: {
            renderType: "standardService",
            serviceNumber: "171",
            destination: "BUKIT PANJANG",
            scrolls: [
                "YISHUN AVE 5",
                "SEMBAWANG RD",
                "MANDAI RD",
                "PETIR RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "BUKIT PANJANG",
                    image: "mrt"
                }
            ]
        }
    },
    1712: {
        front: {
            renderType: "standardService",
            serviceNumber: "171",
            destination: "YISHUN",
            scrolls: [
                "PETIR RD",
                "MANDAI RD",
                "SEMBAWANG RD",
                "YISHUN AVE 5",
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "YISHUN",
                    image: "mrt"
                }
            ]
        }
    },
    1713: {
        front: {
            renderType: "standardService",
            serviceNumber: "171",
            destination: "MARINA CENTRE",
            scrolls: [
                "MANDAI RD",
                "PETIR RD",
                "UPPER BUKIT TIMAH RD",
                "DUNEARN RD",
                "ORCHARD / BRAS BASAH RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "MARINA CENTRE",
                    bottom: "( PROMENADE STN )",
                    image: "mrt"
                }
            ]
        }
    },
    1714: {
        front: {
            renderType: "standardService",
            serviceNumber: "171",
            destination: "YISHUN",
            scrolls: [
                "ORCHARD TURN",
                "BUKIT TIMAH RD",
                "UPPER BUKIT TIMAH RD",
                "PETIR RD",
                "MANDAI RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "YISHUN",
                    image: "mrt"
                }
            ]
        }
    },
    1731: {
        front: {
            renderType: "standardService",
            serviceNumber: "173",
            destination: "CLEMENTI",
            scrolls: [
                "BUKIT BATOK EAST AVE 4",
                "HILLVIEW AVE",
                "HUME AVE",
                "BEAUTY WORLD MRT",
                "TOH TUCK RD / TERRACE",
                {
                    renderType: "destScroll",
                    serviceNumber: "173",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "173",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "173",
                    top: "CLEMENTI",
                    image: "mrt"
                }
            ]
        }
    },
    1732: {
        front: {
            renderType: "standardService",
            serviceNumber: "173",
            destination: "BUKIT BATOK",
            scrolls: [
                "TOH TUCK TERRACE / RD",
                "BEAUTY WORLD MRT",
                "HUME AVE",
                "JLN BATU NILAM",
                "BUKIT BATOK EAST AVE 4",
                {
                    renderType: "destScroll",
                    serviceNumber: "173",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "173",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "173",
                    top: "BUKIT BATOK",
                    image: "mrt"
                }
            ]
        }
    },
    1733: {
        front: {
            renderType: "standardService",
            serviceNumber: "173A",
            destination: "Ends At",
            destFont: "Mobitec-7:5:3",
            scrolls: [
                "Bukit Batok East Ave 4",
                "(Blk 254)",
            ]
        }
    },
    1771: {
        front: {
            renderType: "standardService",
            serviceNumber: "177",
            destination: "BUKIT PANJANG",
            scrolls: [
                "BUKIT BATOK EAST AVE 4",
                "HILLVIEW AVE",
                "M I N D E F",
                "UPPER BUKIT TIMAH RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "1773",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "177",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "177",
                    top: "BUKIT PANJANG",
                    image: "mrt"
                }
            ]
        }
    },
    1732: {
        front: {
            renderType: "standardService",
            serviceNumber: "177",
            destination: "BUKIT BATOK",
            scrolls: [
                "JELEBU RD",
                "UPPER BUKIT TIMAH RD",
                "M I N D E F",
                "HILLVIEW AVE",
                "BUKIT BATOK EAST AVE 4",
                {
                    renderType: "destScroll",
                    serviceNumber: "177",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "177",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "177",
                    top: "BUKIT BATOK",
                    image: "mrt"
                }
            ]
        }
    },
    1831: {
        front: {
            renderType: "standardService",
            serviceNumber: "183",
            destination: "SCIENCE PARK RD",
            scrolls: [
                "TOH GUAN RD EAST",
                "CLEMENTI MRT",
                "CLEMENTI RD",
                "PASIR PANJANG RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "183",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "183",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "183",
                    top: "SCIENCE PARK RD",

                }
            ]
        }
    },
    1832: {
        front: {
            renderType: "standardService",
            serviceNumber: "183",
            destination: "JURONG EAST",
            scrolls: [
                "TOH GUAN RD EAST",
                "CLEMENTI MRT",
                "CLEMENTI RD",
                "PASIR PANJANG RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "183",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "183",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "183",
                    top: "JURONG EAST",
                    image: "mrt"
                }
            ]
        }
    },
    1833: {
        front: {
            renderType: "standardService",
            serviceNumber: "183B",
            destination: "Ends At",
            destFont: "Mobitec-7:5:3",
            scrolls: [
                "Toh Tuck Ave",
                "(Aft Toh Tuck Link)",
            ]
        }
    },
    1842: {
        front: {
            renderType: "standardService",
            serviceNumber: "963",
            destination: "HARBOURFRONT",
            scrolls: [
                "BUKIT PANJANG RD",
                "HILLVIEW AVE",
                "BUKIT BATOK EAST AVE 3",
                "AYE",
                "ALEXANDRA RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "963",
                    top: "HARBOURFRONT",
                    image: "mrt"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963",
                    top: "Hello Uncle",
                    topFont: "Mobitec-7:7",
                    bottom: "Is this bus going to Hillview?",
                    bottomFont: "Hanover-7:3",
                }
            ]
        }
    },
    1891: {
        front: {
            renderType: "standardService",
            serviceNumber: "189",
            destination: "CLEMENTI AVE 1",
            scrolls: [
                "BUKIT BATOK EAST AVE 6",                    
                "BUKIT BATOK ST 23",
                "CLEMENTI AVE 6",
                "CLEMENTI MRT",
                {
                    renderType: "destScroll",
                    serviceNumber: "189",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "189",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "183",
                    top: "CLEMENTI AVE 1",

                }
            ]
        }
    },
    1892: {
        front: {
            renderType: "standardService",
            serviceNumber: "189",
            destination: "BUKIT BATOK",
            scrolls: [
                "CLEMENTI MRT",
                "CLEMENTI AVE 6",
                "BUKIT BATOK ST 23",
                "BUKIT BATOK EAST AVE 6",
                {
                    renderType: "destScroll",
                    serviceNumber: "189",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "189",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "189",
                    top: "BUKIT BATOK",
                    image: "mrt"
                }
            ]
        }
    },
    1893: {
        front: {
            renderType: "standardService",
            serviceNumber: "189A",
            destination: "Ends At",
            destFont: "Mobitec-7:5:3",
            scrolls: [
                "Bukit Batok St 23",
                "(Opp Midview Bldg)",
            ]
        }
    },
    2821: {
        front: {
            renderType: "standardService",
            serviceNumber: "282",
            destination: "CLEMENTI",
            scrolls: [
                "CLEMENTI AVE 5",
                "CLEMENTI AVE 2",
                "CLEMENTI WEST ST 2",,
                {
                    renderType: "destScroll",
                    serviceNumber: "282",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "282",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "282",
                    top: "CLEMENTI",
                    image: "mrt"
                }
            ]
        }
    },
    2841: {
        front: {
            renderType: "standardService",
            serviceNumber: "284",
            destination: "CLEMENTI",
            scrolls: [
                "CLEMENTI AVE 4",
                {
                    renderType: "destScroll",
                    serviceNumber: "284",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "284",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "284",
                    top: "CLEMENTI",
                    image: "mrt"
                }
            ]
        }
    },
    2851: {
        front: {
            renderType: "standardService",
            serviceNumber: "285",
            destination: "CLEMENTI",
            scrolls: [
                "CLEMENTI AVE 2",
                "WEST COAST RD",
                "PANDAN LOOP",
                {
                    renderType: "destScroll",
                    serviceNumber: "285",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "285",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "285",
                    top: "CLEMENTI",
                    image: "mrt"
                }
            ]
        }
    },
    3331: {
        front: {
            renderType: "standardService",
            serviceNumber: "333",
            destination: "JURONG EAST",
            scrolls: [
                "TOH GUAN RD", 
                "JURONG EAST AVE 1",
                "JURONG EAST ST 32",
                {
                    renderType: "destScroll",
                    serviceNumber: "333",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "333",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "333",
                    top: "JURONG EAST",
                    image: "mrt"
                }
            ]
        }
    },
    3333: {
        front: {
            renderType: "full",
            text: "All LED Lit",
        }
    },
    3341: {
        front: {
            renderType: "standardService",
            serviceNumber: "334",
            destination: "JURONG EAST",
            scrolls: [
                "JURONG EAST AVE 1", 
                "JURONG WEST AVE 1",
                "JURONG EAST ST 42",
                {
                    renderType: "destScroll",
                    serviceNumber: "334",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "334",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "334",
                    top: "JURONG EAST",
                    image: "mrt"
                }
            ]
        }
    },
    3351: {
        front: {
            renderType: "standardService",
            serviceNumber: "335",
            destination: "JURONG EAST",
            scrolls: [
                "JURONG TOWN HALL RD",
                "BOON LAY WAY",
                "JURONG WEST ST 51",
                "JURONG WEST ST 52",
                "JURONG WEST ST 41",
                {
                    renderType: "destScroll",
                    serviceNumber: "335",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "335",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "335",
                    top: "JURONG EAST",
                    image: "mrt"
                }
            ]
        }
    },
    4953: {
        front: {
            renderType: "standardService",
            serviceNumber: "000",
            destination: "SERANGOON RD",
            scrolls: [
                "KIM TIAN RD",
                "TIONG BAHRU MRT",
                "REDHILL MRT",
                "TANGLIN / ORCHARD RD",
                "SELEGIE RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Please do not",
                    topFont: "Hanover-7:3",
                    bottom: "the cat",
                    bottomFont: "Hanover-7:3",
                    image: "the-cat"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "SERANGOON RD",
                    bottom: "( LITTLE INDIA MRT )",
                    image: "mrt"
                }
            ]
        }
    },
    5001: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "NSL  Bridging  Bus",
            spacing: 2
        }
    },
    5002: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "EWL  Bridging  Bus",
            spacing: 2
        }
    },
    5003: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "NEL  Bridging  Bus",
            spacing: 2
        }
    },
    5004: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "CCL  Bridging  Bus",
            spacing: 2
        }
    },
    5005: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "DTL  Bridging  Bus",
            spacing: 2
        }
    },
    5006: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "TEL  Bridging  Bus",
            spacing: 2
        }
    },
    5007: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "LRT  Bridging  A",
            spacing: 2
        }
    },
    5008: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "LRT  Bridging  B",
            spacing: 2
        }
    },
    5009: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "LRT  Bridging  East",
            spacing: 2
        }
    },
    5010: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "LRT  Bridging  West",
            spacing: 2
        }
    },
    5100: {
        front: {
                renderType: "destScroll",
                serviceNumber: "",
                top: "TT Black 01",
                topFont: "Mobitec-Tower16:9",
                image: "logo"
        }
    },
    5101: {
        front: {
                renderType: "destScroll",
                serviceNumber: "",
                top: "TT Black 02",
                topFont: "Mobitec-Tower16:9",
                image: "logo"
        }
    },
    5102: {
        front: {
                renderType: "destScroll",
                serviceNumber: "",
                top: "TT Black 03",
                topFont: "Mobitec-Tower16:9",
                image: "logo"
        }
    },
    5103: {
        front: {
                renderType: "destScroll",
                serviceNumber: "",
                top: "TT Black 04",
                topFont: "Mobitec-Tower16:9",
                image: "logo"
        }
    },
    5104: {
        front: {
                renderType: "destScroll",
                serviceNumber: "",
                top: "TT Blue 01",
                topFont: "Mobitec-Tower16:9",
                image: "logo"
        }
    },
    5105: {
        front: {
                renderType: "destScroll",
                serviceNumber: "",
                top: "TT Blue 02",
                topFont: "Mobitec-Tower16:9",
                image: "logo"
        }
    },
    5106: {
        front: {
                renderType: "destScroll",
                serviceNumber: "",
                top: "TT Blue 03",
                topFont: "Mobitec-Tower16:9",
                image: "logo"
        }
    },
    5107: {
        front: {
                renderType: "destScroll",
                serviceNumber: "",
                top: "TT Blue 04",
                topFont: "Mobitec-Tower16:9",
                image: "logo"
        }
    },
    5108: {
        front: {
                renderType: "destScroll",
                serviceNumber: "",
                top: "TT Brown 01",
                topFont: "Mobitec-Tower16:9",
                image: "logo"
        }
    },
    5109: {
        front: {
                renderType: "destScroll",
                serviceNumber: "",
                top: "TT Brown 02",
                topFont: "Mobitec-Tower16:9",
                image: "logo"
        }
    },
    5110: {
        front: {
                renderType: "destScroll",
                serviceNumber: "",
                top: "TT Brown 03",
                topFont: "Mobitec-Tower16:9",
                image: "logo"
        }
    },
    5111: {
        front: {
                renderType: "destScroll",
                serviceNumber: "",
                top: "TT Brown 04",
                topFont: "Mobitec-Tower16:9",
                image: "logo"
        }
    },
    5112: {
        front: {
                renderType: "destScroll",
                serviceNumber: "",
                top: "TT Green 01",
                topFont: "Mobitec-Tower16:9",
                image: "logo"
        }
    },
    5113: {
        front: {
                renderType: "destScroll",
                serviceNumber: "",
                top: "TT Green 02",
                topFont: "Mobitec-Tower16:9",
                image: "logo"
        }
    },
    5114: {
        front: {
                renderType: "destScroll",
                serviceNumber: "",
                top: "TT Green 03",
                topFont: "Mobitec-Tower16:9",
                image: "logo"
        }
    },
    5115: {
        front: {
                renderType: "destScroll",
                serviceNumber: "",
                top: "TT Green 04",
                topFont: "Mobitec-Tower16:9",
                image: "logo"
        }
    },
    5200: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  0  1",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 01"
        }
    },
    5201: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  0  2",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 02"
        }
    },
    5202: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  0  3",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 03"
        }
    },
    5203: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  0  4",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 04"
        }
    },
    5204: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  0  5",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 05"
        }
    },
    5205: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  0  6",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 06"
        }
    },
    5206: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  0  7",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 07"

        }
    },
    5207: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  0  8",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 08"
        }
    },
    5208: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  0  9",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 09"
        }
    },
    5209: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  1  0",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 10"
        }
    },
    5210: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  1  1",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 11"
        }
    },
    5211: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  1  2",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 12"
        }
    },
    5212: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  1  3",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 13"
        }
    },
    5213: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  1  4",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 14"
        }
    },
    5214: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  1  5",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 15"
        }
    },
    5215: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  1  6",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 16"
        }
    },
    5216: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  1  7",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 17"
        }
    },
    5217: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  1  8",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 18"
        }
    },
    5218: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  1  9",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 19"
        }
    },
    5219: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  2  0",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 20"
        }
    },
    5220: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  2  1",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 21"
        }
    },
    5221: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  2  2",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 22"
        }
    },
    5222: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  2  3",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 23"
        }
    },
    5223: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  2  4",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 24"
        }
    },
    5224: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  2  5",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 25"
        }
    },
    5225: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "~  $  $  2  6",
                topFont: "Mobitec-Tower16:10",
                topSpacing: "5",
                text: "TT 26"
        }
    },
    5300: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "%1",
                top: "Crew  Bus",
                topFont: "Hanover-14:6",
                image: "logo",
                text: "Crew Bus B1"
        }
    },
    5301: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "%2",
                top: "Crew  Bus",
                topFont: "Hanover-14:6",
                image: "logo",
                text: "Crew Bus B2"
        }
    },
    5302: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "%3",
                top: "Crew  Bus",
                topFont: "Hanover-14:6",
                image: "logo",
                text: "Crew Bus B3"
        }
    },
    5303: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "%4",
                top: "Crew  Bus",
                topFont: "Hanover-14:6",
                image: "logo",
                text: "Crew Bus B4"
        }
    },
    5304: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "%5",
                top: "Crew  Bus",
                topFont: "Hanover-14:6",
                image: "logo",
                text: "Crew Bus B5"
        }
    },
    5305: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "%6",
                top: "Crew  Bus",
                topFont: "Hanover-14:6",
                image: "logo",
                text: "Crew Bus B6"
        }
    },
    5306: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "%7",
                top: "Crew  Bus",
                topFont: "Hanover-14:6",
                image: "logo",
                text: "Crew Bus B7"
        }
    },
    5307: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "%8",
                top: "Crew  Bus",
                topFont: "Hanover-14:6",
                image: "logo",
                text: "Crew Bus B8"
        }
    },
    5308: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "%9",
                top: "Crew  Bus",
                topFont: "Hanover-14:6",
                image: "logo",
                text: "Crew Bus B9"
        }
    },
    5400: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "Bulim - TTS",
            topFont: "Hanover-7:4",
            bottom: "Hotel Ferry",
            bottomFont: "Hanover-7:4",
            image: "logo"
        }
    },
    5401: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "Mandai - TTS",
            topFont: "Hanover-7:4",
            bottom: "Hotel Ferry",
            bottomFont: "Hanover-7:4",
            image: "logo"
        }
    },
    5402: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "TTS - Hotel Ferry",
            topFont: "Hanover-7:4",
            bottom: "Employee Shuttle",
            bottomFont: "Hanover-7:4",
            image: "logo"
        }
    },
    5888: {
        front: {
                renderType: "destScroll",
                serviceNumber: "",
                top: "World's 1st MAN A95",
                topFont: "Mobitec-Tower6:4",
                bottom: "Double Decker Bus",
                bottomFont: "Mobitec-Tower6:4",
                image: "MAN-Logo32"
        }
    },
    6511: {
        front: {
            renderType: "standardService",
            serviceNumber: "651",
            destination: "MARINA BLVD",
            scrolls: [
                "JURONG WEST AVE 5",
                "JURONG WEST ST 75/64",
                "JURONG WEST ST 81/61",
                "ANSON RD",
                "ROBINSON RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "651",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "651",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "651",
                    top: "MARINA BLVD",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "651",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "JURONG WEST >> CBD",
                    bottomFont: "Mobitec-5:3",
                }
            ]
        }
    },
    6512: {
        front: {
            renderType: "standardService",
            serviceNumber: "651",
            destination: "JURONG WEST AVE 3",
            destFont: "Mobitec-7:5:3",
            scrolls: [
                "CENTRAL BOULEVARD",
                "SHENTON WAY",
                "JURONG WEST ST 61/81",
                "JURONG WEST ST 64/75",
                "JURONG WEST AVE 5",
                {
                    renderType: "destScroll",
                    serviceNumber: "651",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "651",
                    top: "Have a safe ride",
                    topFont: "Hanover-7:3",
                    bottom: "home!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "651",
                    top: "JURONG WEST AVE 3",
                    topFont: "Mobitec-7:5:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "651",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "CBD >> JURONG WEST",
                    bottomFont: "Mobitec-5:3",
                }
            ]
        }
    },
    6531: {
        front: {
            renderType: "standardService",
            serviceNumber: "653",
            destination: "MARINA BLVD",
            scrolls: [
                "HILLVIEW AVE",
                "BUKIT BATOK EAST AVE 2",
                "BUKIT BATOK EAST AVE 3",
                "ROBINSON RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "653",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "653",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "653",
                    top: "MARINA BLVD",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "653",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "HILLVIEW >> BT BATOK >> CBD",
                    bottomFont: "Mobitec-5:3",
                }
            ]
        }
    },
    6532: {
        front: {
            renderType: "standardService",
            serviceNumber: "653",
            destination: "HILLVIEW AVE",
            scrolls: [
                "CENTRAL BOULEVARD",
                "SHENTON WAY",
                "BUKIT BATOK EAST AVE 3",
                "BUKIT BATOK EAST AVE 2",
                "HUME AVE",
                {
                    renderType: "destScroll",
                    serviceNumber: "653",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "653",
                    top: "Have a safe ride",
                    topFont: "Hanover-7:3",
                    bottom: "home!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "653",
                    top: "HILLVIEW AVE",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "653",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "CBD >> BT BATOK >> HILLVIEW",
                    bottomFont: "Mobitec-5:3",
                }
            ]
        }
    },
    6561: {
        front: {
            renderType: "standardService",
            serviceNumber: "656",
            destination: "SHENTON WAY",
            scrolls: [
                "ADMIRALTY LINK",
                "SEMBAWANG DR",
                "DHOBY GHAUT MRT",
                "BRAS BASAH RD",
                "COLLYER QUAY",
                {
                    renderType: "destScroll",
                    serviceNumber: "656",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "656",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "656",
                    top: "SHENTON WAY",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "656",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "SEMBAWANG >> CBD",
                    bottomFont: "Mobitec-5:3",
                }
            ]
        }
    },
    6562: {
        front: {
            renderType: "standardService",
            serviceNumber: "656",
            destination: "CANBERRA RD",
            scrolls: [
                "ROBINSON RD",
                "STAMFORD RD",
                "DHOBY GHAUT MRT",
                "SEMBAWANG RD",
                "ADMIRALTY LINK",
                {
                    renderType: "destScroll",
                    serviceNumber: "656",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "656",
                    top: "Have a safe ride",
                    topFont: "Hanover-7:3",
                    bottom: "home!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "656",
                    top: "CANBERRA RD",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "656",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "SEMBAWANG >> SEMBAWANG",
                    bottomFont: "Mobitec-5:3",
                }
            ]
        }
    },
    6568: {
        front: {
            renderType: "standardService",
            serviceNumber: "656",
            destination: "SHENTON WAY",
            scrolls: [
                "ADMIRALTY LINK",
                "SEMBAWANG DR",
                "DHOBY GHAUT MRT",
                "NORTH BRIDGE RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "656",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "656",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "656",
                    top: "SHENTON WAY",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "656",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "SEMBAWANG >> CBD",
                    bottomFont: "Mobitec-5:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "656",
                    top: "Skip",
                    topFont: "Mobitec-7:5:2",
                    bottom: "Bras Basah Rd",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "656",
                    top: "Skip",
                    topFont: "Mobitec-7:5:2",
                    bottom: "Collyer Quay",
                    bottomFont: "Mobitec-Tower6:4",
                },
            ]
        }
    },
    6569: {
        front: {
            renderType: "standardService",
            serviceNumber: "656",
            destination: "CANBERRA RD",
            scrolls: [
                "ROBINSON RD",
                "STAMFORD RD",
                "DHOBY GHAUT MRT",
                "SEMBAWANG RD",
                "ADMIRALTY LINK",
                {
                    renderType: "destScroll",
                    serviceNumber: "656",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "656",
                    top: "Have a safe ride",
                    topFont: "Hanover-7:3",
                    bottom: "home!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "656",
                    top: "CANBERRA RD",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "656",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "CBD >> SEMBAWANG",
                    bottomFont: "Mobitec-5:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "656",
                    top: "Skip",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Fullerton Rd",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "656",
                    top: "Skip",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Esplanade Dr",
                    bottomFont: "Mobitec-Tower6:4",
                },
            ]
        }
    },
    6571: {
        front: {
            renderType: "standardService",
            serviceNumber: "657",
            destination: "MARINA BLVD",
            scrolls: [
                "JURONG EAST AVE 1",
                "TOH GUAN RD",
                "ROBINSON RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "657",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "657",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "657",
                    top: "MARINA BLVD",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "657",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "JURONG WEST/EAST >> CBD",
                    bottomFont: "Mobitec-5:3",
                }
            ]
        }
    },
    6572: {
        front: {
            renderType: "standardService",
            serviceNumber: "657",
            destination: "JURONG WEST AVE 1",
            destFont: "Mobitec-7:5:3",
            scrolls: [
                "CENTRAL BOULEVARD",
                "SHENTON WAY",
                "TOH GUAN RD",
                'JURONG EAST AVE 1',
                {
                    renderType: "destScroll",
                    serviceNumber: "657",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "657",
                    top: "Have a safe ride",
                    topFont: "Hanover-7:3",
                    bottom: "home!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "657",
                    top: "JURONG WEST AVE 1",
                    topFont: "Mobitec-7:5:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "657",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "CBD >> JURONG EAST/WEST",
                    bottomFont: "Mobitec-5:3",
                }
            ]
        }
    },
    6631: {
        front: {
            renderType: "standardService",
            serviceNumber: "663",
            destination: "SHENTON WAY",
            scrolls: [
                "YISHUN AVE 6 / RING RD",
                "YISHUN CTRL / AVE 2",
                "DHOBY GHAUT MRT",
                "BRAS BASAH RD",
                "COLLYER QUAY",
                {
                    renderType: "destScroll",
                    serviceNumber: "663",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "663",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "663",
                    top: "SHENTON WAY",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "663",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "YISHUN >> CBD",
                    bottomFont: "Mobitec-5:3",
                }
            ]
        }
    },
    6632: {
        front: {
            renderType: "standardService",
            serviceNumber: "663",
            destination: "YISHUN AVE 6",
            scrolls: [
                "ROBINSON RD",
                "STAMFORD RD",
                "DHOBY GHAUT MRT",
                "YISHUN AVE 2 / CTRL",
                "YISHUN AVE 11 / RING RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "663",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "663",
                    top: "Have a safe ride",
                    topFont: "Hanover-7:3",
                    bottom: "home!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "663",
                    top: "YISHUN AVE 6",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "663",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "CBD >> YISHUN",
                    bottomFont: "Mobitec-5:3",
                }
            ]
        }
    },
    6638: {
        front: {
            renderType: "standardService",
            serviceNumber: "663",
            destination: "SHENTON WAY",
            scrolls: [
                "YISHUN AVE 6 / RING RD",
                "YISHUN CTRL / AVE 2",
                "DHOBY GHAUT MRT",
                "NORTH BRIDGE RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "663",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "663",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "663",
                    top: "SHENTON WAY",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "663",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "YISHUN >> CBD",
                    bottomFont: "Mobitec-5:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "663",
                    top: "Skip",
                    topFont: "Mobitec-7:5:2",
                    bottom: "Bras Basah Rd",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "663",
                    top: "Skip",
                    topFont: "Mobitec-7:5:2",
                    bottom: "Collyer Quay",
                    bottomFont: "Mobitec-Tower6:4",
                },
            ]
        }
    },
    6639: {
        front: {
            renderType: "standardService",
            serviceNumber: "663",
            destination: "YISHUN AVE 6",
            scrolls: [
                "ROBINSON RD",
                "STAMFORD RD",
                "DHOBY GHAUT MRT",
                "YISHUN AVE 2 / CTRL",
                "YISHUN AVE 11 / RING RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "663",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "663",
                    top: "Have a safe ride",
                    topFont: "Hanover-7:3",
                    bottom: "home!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "663",
                    top: "YISHUN AVE 6",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "663",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "CBD >> YISHUN",
                    bottomFont: "Mobitec-5:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "663",
                    top: "Skip",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Fullerton Rd",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "663",
                    top: "Skip",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Esplanade Dr",
                    bottomFont: "Mobitec-Tower6:4",
                },
            ]
        }
    },
    6651: {
        front: {
            renderType: "standardService",
            serviceNumber: "665",
            destination: "SHENTON WAY",
            scrolls: [
                "MARSILING LANE / RISE",
                "WOODLANDS AVE 5 / 4 / 1",
                "DHOBY GHAUT MRT",
                "BRAS BASAH RD",
                "COLLYER QUAY",
                {
                    renderType: "destScroll",
                    serviceNumber: "665",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "665",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "665",
                    top: "SHENTON WAY",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "665",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "MARSILING/W'LANDS >> CBD",
                    bottomFont: "Mobitec-5:3",
                }
            ]
        }
    },
    6652: {
        front: {
            renderType: "standardService",
            serviceNumber: "665",
            destination: "MARSILING DRIVE",
            scrolls: [
                "ROBINSON RD",
                "STAMFORD RD",
                "DHOBY GHAUT MRT",
                "WOODLANDS AVE 1 / 4 / 5",
                "MARSILING RISE / LANE",
                {
                    renderType: "destScroll",
                    serviceNumber: "665",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "665",
                    top: "Have a safe ride",
                    topFont: "Hanover-7:3",
                    bottom: "home!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "665",
                    top: "MARSILING DRIVE",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "665",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "CBD >> W'LANDS/MARSILING",
                    bottomFont: "Mobitec-5:3",
                }
            ]
        }
    },
    6658: {
        front: {
            renderType: "standardService",
            serviceNumber: "665",
            destination: "SHENTON WAY",
            scrolls: [
                "MARSILING LANE / RISE",
                "WOODLANDS AVE 5 / 4 / 1",
                "DHOBY GHAUT MRT",
                "NORTH BRIDGE RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "665",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "665",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "665",
                    top: "SHENTON WAY",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "665",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "MARSILING/W'LANDS >> CBD",
                    bottomFont: "Mobitec-5:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "665",
                    top: "Skip",
                    topFont: "Mobitec-7:5:2",
                    bottom: "Bras Basah Rd",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "665",
                    top: "Skip",
                    topFont: "Mobitec-7:5:2",
                    bottom: "Collyer Quay",
                    bottomFont: "Mobitec-Tower6:4",
                },
            ]
        }
    },
    6659: {
        front: {
            renderType: "standardService",
            serviceNumber: "665",
            destination: "MARSILING DRIVE",
            scrolls: [
                "ROBINSON RD",
                "STAMFORD RD",
                "DHOBY GHAUT MRT",
                "WOODLANDS AVE 1 / 4 / 5",
                "MARSILING RISE / LANE",
                {
                    renderType: "destScroll",
                    serviceNumber: "665",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "665",
                    top: "Have a safe ride",
                    topFont: "Hanover-7:3",
                    bottom: "home!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "665",
                    top: "MARSILING DRIVE",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "665",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "CBD >> W'LANDS/MARSILING",
                    bottomFont: "Mobitec-5:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "665",
                    top: "Skip",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Fullerton Rd",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "665",
                    top: "Skip",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Esplanade Dr",
                    bottomFont: "Mobitec-Tower6:4",
                },
            ]
        }
    },
    6701: {
        front: {
            renderType: "standardService",
            serviceNumber: "670",
            destination: "MARINA BLVD",
            scrolls: [
                "YISHUN AVE 6",
                "YISHUN AVE 9",
                "YISHUN RING RD",
                "ANSON RD",
                "ROBINSON RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "670",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "670",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "670",
                    top: "MARINA BLVD",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "670",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "YISHUN >> CBD",
                    bottomFont: "Mobitec-5:3",
                }
            ]
        }
    },
    6702: {
        front: {
            renderType: "standardService",
            serviceNumber: "670",
            destination: "YISHUN AVE 7",
            scrolls: [
                "CENTRAL BOULEVARD",
                "SHENTON WAY",
                "YISHUN RING RD",
                "YISHUN AVE 9",
                "YISHUN AVE 6",
                {
                    renderType: "destScroll",
                    serviceNumber: "670",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "670",
                    top: "Have a safe ride",
                    topFont: "Hanover-7:3",
                    bottom: "home!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "670",
                    top: "YISHUN AVE 7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "670",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "CBD >> YISHUN",
                    bottomFont: "Mobitec-5:3",
                }
            ]
        }
    },
    7098: {
        front: {
            renderType: "standardService",
            serviceNumber: "160",
            destination: "JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "160",
                    top: "JB SENTRAL",
                    bottom: "( JB SENTRAL KTM )",
                    image: "ktm"
                },
                "BUKIT BATOK RD",
                "WOODLANDS RD",
                "KRANJI MRT",
                "WOODLANDS CENTRE RD"
            ]
        }
    },
    8011: {
        front: {
            renderType: "standardService",
            serviceNumber: "801",
            destination: "YISHUN",
            scrolls: [
                "YISHUN CENTRAL",
                "YISHUN AVE 9",
                "YISHUN AVE 6",
                "YISHUN ST 42",
                "YISHUN AVE 1",
                {
                    renderType: "destScroll",
                    serviceNumber: "801",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "801",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "801",
                    top: "YISHUN",
                    image: "mrt"
                }
            ]
        }
    },
    8251: {
        front: {
            renderType: "standardService",
            serviceNumber: "825",
            destination: "YIO CHU KANG",
            scrolls: [
                "ANG MO KIO AVE 6",
                "LENTOR MRT",
                "LENTOR RD",
                "LENTOR LOOP",
                {
                    renderType: "destScroll",
                    serviceNumber: "825",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "825",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "825",
                    top: "YIO CHU KANG",
                    image: "mrt"
                }
            ]
        }
    },
    8531: {
        front: {
            renderType: "standardService",
            serviceNumber: "853",
            destination: "LOR 1 GEYLANG",
            scrolls: [
                "YISHUN AVE 2",
                "ANG MO KIO AVE 6",
                "SERANGOON CENTRAL",
                "UPPER SERANGOON RD",
                "GEYLANG BAHRU",
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "LOR 1 GEYLANG",
                    bottom: "( KALLANG STN )",
                    image: "mrt"
                }
            ]
        }
    },
    8532: {
        front: {
            renderType: "standardService",
            serviceNumber: "853",
            destination: "YISHUN",
            scrolls: [
                "GEYLANG BAHRU",
                "UPPER SERANGOON RD",
                "SERANGOON CENTRAL",
                "ANG MO KIO AVE 6",
                "YISHUN AVE 2",
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "YISHUN",
                    image: "mrt"
                }
            ]
        }
    },
    8533: {
        front: {
            renderType: "standardService",
            serviceNumber: "853M",
            destination: "UPP EAST COAST",
            destFont: "Mobitec-7:5:3",
            scrolls: [
                "ANG MO KIO AVE 6",
                "SERANGOON CENTRAL",
                "SIMS AVE",
                "TANJONG KATONG RD",
                "MARINE PARADE RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "853M",
                    top: "UPP EAST COAST",
                    topFont: "Mobitec-7:5:3"

                }
            ]
        }
    },
    8534: {
        front: {
            renderType: "standardService",
            serviceNumber: "853M",
            destination: "YISHUN",
            scrolls: [
                "MARINE PARADE RD",
                "TANJONG KATONG RD",
                "GEYLANG RD",
                "SERANGOON CENTRAL",
                "ANG MO KIO AVE 6",
                {
                    renderType: "destScroll",
                    serviceNumber: "853M",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "853M",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "853M",
                    top: "YISHUN",
                    image: "mrt"
                }
            ]
        }
    },
    8541: {
        front: {
            renderType: "standardService",
            serviceNumber: "854",
            destination: "BEDOK",
            scrolls: [
                "YISHUN AVE 2",
                "YIO CHU KANG RD",
                "HOUGANG AVE 3",
                "JLN EUNOS",
                "NEW UPPER CHANGI RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "854",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "854",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "854",
                    top: "BEDOK",
                    image: "mrt"
                }
            ]
        }
    },
    8542: {
        front: {
            renderType: "standardService",
            serviceNumber: "854",
            destination: "YISHUN",
            scrolls: [
                "NEW UPPER CHANGI RD",
                "EUNOS LINK",
                "HOUGANG AVE 3",
                "YIO CHU KANG RD",
                "YISHUN AVE 2",
                {
                    renderType: "destScroll",
                    serviceNumber: "854",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "854",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "854",
                    top: "YISHUN",
                    image: "mrt"
                }
            ]
        }
    },
    8543: {
        front: {
            renderType: "standardService",
            serviceNumber: "854e",
            destination: "BEDOK",
            scrolls: [
                "YISHUN AVE 2",
                "YIO CHU KANG RD",
                "HOUGANG AVE 3",
                "EUNOS LINK",
                {
                    renderType: "destScroll",
                    serviceNumber: "854e",
                    top: "LIMITED STOPS",
                    topFont: "Mobitec-9:6",
                    bottom: "EXPRESS SERVICE",
                    bottomFont: "Mobitec-6:5",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "854e",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "854e",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "854e",
                    top: "BEDOK",
                    image: "mrt"
                }
            ]
        }
    },
    8551: {
        front: {
            renderType: "standardService",
            serviceNumber: "855",
            destination: "HARBOURFRONT",
            scrolls: [
                "YISHUN AVE 2",
                "UPPER THOMSON RD",
                "ADAM RD",
                "QUEENSWAY",
                "JALAN BUKIT MERAH",
                {
                    renderType: "destScroll",
                    serviceNumber: "855",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "855",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "855",
                    top: "HARBOURFRONT",
                    image: "mrt"
                }
            ]
        }
    },
    8552: {
        front: {
            renderType: "standardService",
            serviceNumber: "855",
            destination: "YISHUN",
            scrolls: [
                "JALAN BUKIT MERAH",
                "QUEENSWAY",
                "FARRER RD",
                "UPPER THOMSON RD",
                "YISHUN AVE 2",
                {
                    renderType: "destScroll",
                    serviceNumber: "855",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "855",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "855",
                    top: "YISHUN",
                    image: "mrt"
                }
            ]
        }
    },
    8561: {
        front: {
            renderType: "standardService",
            serviceNumber: "856",
            destination: "WOODLANDS",
            scrolls: [
                "CANBERRA RD",
                "ADMIRALTY RD WEST",
                "SENOKO DR",
                "WOODLANDS NORTH MRT",
                "MARSILING ESTATE",
                {
                    renderType: "destScroll",
                    serviceNumber: "856",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "856",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "856",
                    top: "WOODLANDS",
                    image: "mrt"
                }
            ]
        }
    },
    8562: {
        front: {
            renderType: "standardService",
            serviceNumber: "856",
            destination: "YISHUN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "856",
                    top: "YISHUN",
                    topFont: "Mobitec-9:6",
                    bottom: "WOODLANDS TRAIN CHKPT",
                    bottomFont: "Mobitec-5:3",
                },
                "WOODLANDS NORTH MRT",
                "SENOKO RD",
                "ADMIRALTY RD WEST",
                "CANBERRA RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "856",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "856",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "856",
                    top: "YISHUN",
                    image: "mrt"
                }
            ]
        }
    },
    8563: {
        front: {
            renderType: "destScroll",
            serviceNumber: "856A",
            top: "ENDS AT",
            topFont: "Mobitec-7:5:3",
            bottom: "WDL TRAIN CHKPT",
            bottomFont: "Mobitec-Tower6:4",
            image: "ktm"
        }
    },
    8564: {
        front: {
            renderType: "standardService",
            serviceNumber: "856B",
            destination: "Ends At",
            destFont: "Mobitec-7:5:3",
            scrolls: [
                "Canberra Rd",
                "(Aft Admiral Hill)",
            ]
        }
    },
    8571: {
        front: {
            renderType: "standardService",
            serviceNumber: "857",
            destination: "TEMASEK AVE",
            scrolls: [
                "YIO CHU KANG RD",
                "BENDEMEER RD",
                "LITTLE INDIA",
                "BENCOOLEN ST",
                "BRAS BASAH RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "TEMASEK AVE",
                    bottom: "( PROMENADE STN )",
                    image: "mrt"
                }
            ]
        }
    },
    8572: {
        front: {
            renderType: "standardService",
            serviceNumber: "857",
            destination: "YISHUN",
            scrolls: [
                "STAMFORD RD",
                "SELEGIE RD",
                "BOON KENG MRT",
                "SERANGOON RD",
                "YIO CHU KANG RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "YISHUN",
                    image: "mrt"
                }
            ]
        }
    },
    8573: {
        front: {
            renderType: "destScroll",
            serviceNumber: "857A",
            top: "Ends At",
            topFont: "Mobitec-7:5:3",
            bottom: "Opp Sunrise Gdns",
            bottomFont: "Mobitec-Tower6:4",
        }
    },
    8574: {
        front: {
            renderType: "destScroll",
            serviceNumber: "857B",
            top: "Ends At",
            topFont: "Mobitec-7:5:3",
            bottom: "Promenade Stn",
            bottomFont: "Mobitec-Tower6:4",
            image: "mrt"
        }
    },
    8578: {
        front: {
            renderType: "standardService",
            serviceNumber: "857",
            destination: "STAMFORD RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "Skip",
                    topFont: "Mobitec-7:5:2",
                    bottom: "Bras Basah Rd",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "Skip",
                    topFont: "Mobitec-7:5:2",
                    bottom: "Marina Centre / Suntec",
                    bottomFont: "Mobitec-Tower6:4",
                },
                "YIO CHU KANG RD",
                "BENDEMEER RD",
                "LITTLE INDIA",
                "BENCOOLEN ST",
                "BRAS BASAH RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "STAMFORD RD",
                    bottom: "( CITY HALL STN )",
                    image: "mrt"
                }
            ]
        }
    },
    8579: {
        front: {
            renderType: "destScroll",
            serviceNumber: "857B",
            top: "ENDS AT",
            topFont: "Mobitec-7:5:3",
            bottom: "CITY HALL STN",
            bottomFont: "Mobitec-Tower6:4",
            image: "mrt"
        }
    },
    8581: {
        front: {
            renderType: "standardService",
            serviceNumber: "858",
            destination: "CHANGI AIRPORT",
            scrolls: [
                "WOODLANDS AVE 9",
                "SEMBAWANG WAY",
                "YISHUN MRT",
                "JALAN KAYU",
                "T P E",
                {
                    renderType: "destScroll",
                    serviceNumber: "858",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "858",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "858",
                    top: "CHANGI AIRPORT",
                    bottom: "( PTB 3, 1, 2 )",
                    image: "ChangiAirportControlTower"
                }
            ]
        }
    },
    8582: {
        front: {
            renderType: "standardService",
            serviceNumber: "858",
            destination: "WOODLANDS",
            scrolls: [
                "TPE",
                "JALAN KAYU",
                "YISHUN MRT",
                "SEMBAWANG WAY",
                "WOODLANDS AVE 9",
                {
                    renderType: "destScroll",
                    serviceNumber: "858",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "858",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "WOODLANDS",
                    image: "mrt"
                }
            ]
        }
    },
    8583: {
        front: {
            renderType: "destScroll",
            serviceNumber: "858A",
            top: "Ends At",
            topFont: "Mobitec-7:5:3",
            bottom: "Opp Yishun Stn",
            bottomFont: "Mobitec-Tower6:4",
        }
    },
    8584: {
        front: {
            renderType: "standardService",
            serviceNumber: "858B",
            destination: "Ends At",
            destFont: "Mobitec-7:5:3",
            scrolls: [
                "Jln Kayu",
                "(Aft Seletar Camp G)",
                {
                    renderType: "destScroll",
                    serviceNumber: "858B",
                    top: "JLN KAYU",
                    topFont: "Mobitec-9:6",
                    bottom: "CHANGI AIRPORT",
                    bottomFont: "Mobitec-Tower6:4",
                    image: "ChangiAirportControlTower"
                }
            ]
        }
    },
    8591: {
        front: {
            renderType: "standardService",
            serviceNumber: "859",
            destination: "YISHUN",
            scrolls: [
                "CANBERRA RD",
                "ADMIRALTY LINK",
                "SEMBAWANG CRES",
                "SEMBAWANG RD",
                "YISHUN AVE 5",
                {
                    renderType: "destScroll",
                    serviceNumber: "859",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "859",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "859",
                    top: "YISHUN",
                    image: "mrt"
                }
            ]
        }
    },
    8592: {
        front: {
            renderType: "standardService",
            serviceNumber: "859",
            destination: "SEMBAWANG",
            scrolls: [
                "CANBERRA RD",
                "ADMIRALTY LINK",
                "SEMBAWANG CRES",
                "SEMBAWANG RD",
                "YISHUN AVE 5",
                {
                    renderType: "destScroll",
                    serviceNumber: "859",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "859",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "859",
                    top: "SEMBAWANG",
                    image: "mrt"
                }
            ]
        }
    },
    8593: {
        front: {
            renderType: "standardService",
            serviceNumber: "859A",
            destination: "SEMBAWANG",
            scrolls: [
                "CANBERRA RD",
                "ADMIRALTY LINK",
                "ADMIRALTY DR",
                "SEMBWAWANG CRES",
                {
                    renderType: "destScroll",
                    serviceNumber: "859A",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "859A",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "859A",
                    top: "SEMBAWANG",
                    image: "mrt"
                }
            ]
        }
    },
    8594: {
        front: {
            renderType: "standardService",
            serviceNumber: "859B",
            destination: "SEMBAWANG",
            scrolls: [
                "SEMBAWANG CRES",
                "ADMIRALTY DR",
                "ADMIRALTY LINK",
                "CANBERRA RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "859B",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "859B",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "859B",
                    top: "SEMBAWANG",
                    image: "mrt"
                }
            ]
        }
    },
    8595: {
        front: {
            renderType: "destScroll",
            serviceNumber: "859T",
            top: "Ends At",
            topFont: "Mobitec-7:5:3",
            bottom: "Yishun Int",
            bottomFont: "Mobitec-Tower6:4",
            image: "mrt"
        }
    },
    8701: {
        front: {
            renderType: "standardService",
            serviceNumber: "870",
            destination: "TENGAH",
            scrolls: [
                "BUKIT BATOK AVE 1",
                "BT BATOK WEST AVE 6",
                "BT BATOK WEST AVE 3",
                "PLANTATION CRESCENT",
                {
                    renderType: "destScroll",
                    serviceNumber: "870",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "870",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "870",
                    top: "TENGAH",
                }
            ]
        }
    },
    8702: {
        front: {
            renderType: "standardService",
            serviceNumber: "870",
            destination: "JURONG TOWN HALL",
            destFont: "Mobitec-Tower9:4",
            scrolls: [
                "BUKIT BATOK RD",
                "BT BATOK WEST AVE 3",
                "BT BATOK WEST AVE 6",
                "BUKIT BATOK AVE 1",
                "JURONG EAST CENTRAL",
                {
                    renderType: "destScroll",
                    serviceNumber: "870",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "870",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "870",
                    top: "JURONG TOWN HALL",
                    topFont: "Mobitec-Tower9:4",
                    bottom: "( JURONG EAST STN )",
                    image: "mrt"
                }
            ]
        }
    },
    8703: {
        front: {
            renderType: "standardService",
            serviceNumber: "870A",
            destination: "Ends At",
            destFont: "Mobitec-7:5:3",
            scrolls: [
                "Tengah Boulevard",
                "(Blk 231B)",
            ]
        }
    },
    8821: {
        front: {
            renderType: "standardService",
            serviceNumber: "882",
            destination: "SEMBAWANG",
            scrolls: [
                "WELLINGTON CIRCLE",
                "MONTREAL DR",
                "MONTREAL LINK",
                "SEMBAWANG RD",
                "SEMBAWANG PARK",
                {
                    renderType: "destScroll",
                    serviceNumber: "882",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "882",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "882",
                    top: "SEMBAWANG",
                    image: "mrt"
                }
            ]
        }
    },
    8822: {
        front: {
            renderType: "standardService",
            serviceNumber: "882A",
            destination: "Ends At",
            destFont: "Mobitec-7:5:3",
            scrolls: [
                "Montreal Link",
                "(Blk 592A)",
            ]
        }
    },
    8830: {
        front: {
            renderType: "standardService",
            serviceNumber: "963",
            destination: "HILLVIEW",
            scrolls: [
                "HILLVIEW RD",
                "HILLVIEW AVE",
                "HILLVIEW MRT",
                "HILLVIEW RISE",
                "HILLVIEW CRESCENT",
                "HILLVIEW DRIVE",
                "HILLVIEW TERRACE",
                {
                    renderType: "destScroll",
                    serviceNumber: "963",
                    top: "HILLVIEW",
                    image: "mrt"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963",
                    top: "HELLO UNCLE",
                    topFont: "Mobitec-9:6",
                    bottom: "DOES THIS BUS GO TO HILLVIEW",
                    bottomFont: "Hanover-5:3",
                }
            ]
        }
    },
    8831: {
        front: {
            renderType: "standardService",
            serviceNumber: "883",
            destination: "YISHUN CTRL 2",
            scrolls: [
                "CANBERRA WAY",
                "CANBERRA ST",
                "CANBERRA MRT",
                "YISHUN AVE 2",
                "YISHUN MRT",
                {
                    renderType: "destScroll",
                    serviceNumber: "883",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "883",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "883",
                    top: "YISHUN CTRL 2",
                    bottom: "( YISHUN COMMUNITY HOSP )",
                }
            ]
        }
    },
    8832: {
        front: {
            renderType: "standardService",
            serviceNumber: "883",
            destination: "SEMBAWANG",
            scrolls: [
                "YISHUN MRT",
                "YISHUN AVE 2",
                "CANBERRA MRT",
                "CANBERRA ST",
                "CANBERRA WAY",
                {
                    renderType: "destScroll",
                    serviceNumber: "883",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "883",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "883",
                    top: "SEMBAWANG",
                    image: "mrt"
                }
            ]
        }
    },
    8833: {
        front: {
            renderType: "standardService",
            serviceNumber: "883A",
            destination: "Ends At",
            destFont: "Mobitec-7:5:3",
            scrolls: [
                "Canberra Way",
                "(Blk 129A)",
            ]
        }
    },
    8834: {
        front: {
            renderType: "standardService",
            serviceNumber: "883B",
            destination: "Ends At",
            destFont: "Mobitec-7:5:3",
            scrolls: [
                "Sembawang Rd",
                "(Opp Blk 590C)",
            ]
        }
    },
    8835: {
        front: {
            renderType: "standardService",
            serviceNumber: "883M",
            destination: "YISHUN AVE 5",
            scrolls: [
                "CANBERRA WAY",
                "CANBERRA ST",
                "CANBERRA MRT",
                "YISHUN AVE 7",
                "YISHUN AVE 5",
                {
                    renderType: "destScroll",
                    serviceNumber: "883M",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "883M",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "883M",
                    top: "YISHUN AVE 5",
                }
            ]
        }
    },
    8836: {
        front: {
            renderType: "standardService",
            serviceNumber: "883M",
            destination: "SEMBAWANG",
            scrolls: [
                "YISHUN MRT",
                "YISHUN AVE 2",
                "CANBERRA MRT",
                "CANBERRA ST",
                "CANBERRA WAY",
                {
                    renderType: "destScroll",
                    serviceNumber: "883M",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "883M",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "883M",
                    top: "SEMBAWANG",
                    image: "mrt"
                }
            ]
        }
    },
    9411: {
        front: {
            renderType: "standardService",
            serviceNumber: "941",
            destination: "BUKIT BATOK",
            scrolls: [
                "BUKIT BATOK AVE 1",
                "BT BATOK WEST AVE 6",
                "BT BATOK WEST AVE 8",
                "BT BATOK WEST AVE 9",
                {
                    renderType: "destScroll",
                    serviceNumber: "941",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "941",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "941",
                    top: "BUKIT BATOK",
                    image: "mrt"
                }
            ]
        }
    },
    9441: {
        front: {
            renderType: "standardService",
            serviceNumber: "944",
            destination: "BUKIT BATOK",
            scrolls: [
                "BT BATOK WEST AVE 6",
                "BT BATOK WEST AVE 8",
                "BUKIT BATOK RD",,
                {
                    renderType: "destScroll",
                    serviceNumber: "944",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "944",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "944",
                    top: "BUKIT BATOK",
                    image: "mrt"
                }
            ]
        }
    },
    9451: {
        front: {
            renderType: "standardService",
            serviceNumber: "945",
            destination: "BUKIT BATOK",
            scrolls: [
                "BT BATOK EAST AVE 5",
                "BUKIT BATOK STREET 52",
                "BUKIT GOMBAK MRT",
                "BT BATOK WEST AVE 7",
                "BUKIT BATOK STREET 34",
                {
                    renderType: "destScroll",
                    serviceNumber: "945",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "945",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "945",
                    top: "BUKIT BATOK",
                    image: "mrt"
                }
            ]
        }
    },
    9471: {
        front: {
            renderType: "standardService",
            serviceNumber: "947",
            destination: "BUKIT BATOK",
            scrolls: [
                "BT BATOK WEST AVE 2",
                "BT BATOK WEST AVE 4",
                {
                    renderType: "destScroll",
                    serviceNumber: "947",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "947",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "947",
                    top: "BUKIT BATOK",
                    image: "mrt"
                }
            ]
        }
    },
    9631: {
        front: {
            renderType: "standardService",
            serviceNumber: "963",
            destination: "HARBOURFRONT",
            scrolls: [
                "BUKIT PANJANG RD",
                "HILLVIEW AVE",
                "BT BATOK EAST AVE 4",
                "A Y E",
                "ALEXANDRA RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "963",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963",
                    top: "HARBOURFRONT",
                    image: "mrt"
                }
            ]
        }
    },
    9632: {
        front: {
            renderType: "standardService",
            serviceNumber: "963",
            destination: "WOODLANDS",
            scrolls: [
                "ALEXANDRA RD",
                "A Y E",
                "BT BATOK EAST AVE 4",
                "HILLVIEW AVE",
                "BT PANJANG RD",,
                {
                    renderType: "destScroll",
                    serviceNumber: "963",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963",
                    top: "WOODLANDS",
                    image: "mrt"
                }
            ]
        }
    },
    9633: {
        front: {
            renderType: "standardService",
            serviceNumber: "963e",
            destination: "HARBOURFRONT",
            scrolls: [
                "WOODLANDS AVE 3",
                "BUKIT PANJANG RD",
                "HILLVIEW AVE",
                "BT BATOK EAST AVE 3",
                " A Y E",
                {
                    renderType: "destScroll",
                    serviceNumber: "963e",
                    top: "LIMITED STOPS",
                    topFont: "Mobitec-9:6",
                    bottom: "EXPRESS SERVICE",
                    bottomFont: "Mobitec-6:5",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963e",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963e",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963e",
                    top: "HARBOURFRONT",
                    image: "mrt"
                }
            ]
        }
    },
    9634: {
        front: {
            renderType: "standardService",
            serviceNumber: "963e",
            destination: "WOODLANDS",
            scrolls: [
                "A Y E",
                "BT BATOK EAST AVE 3",
                "HILLVIEW AVE",
                "BUKIT PANJANG RD",
                "WOODLANDS AVE 3",
                {
                    renderType: "destScroll",
                    serviceNumber: "963e",
                    top: "LIMITED STOPS",
                    topFont: "Mobitec-9:6",
                    bottom: "EXPRESS SERVICE",
                    bottomFont: "Mobitec-6:5",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963e",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963e",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963e",
                    top: "WOODLANDS",
                    image: "mrt"
                }
            ]
        }
    },
    9635: {
        front: {
            renderType: "standardService",
            serviceNumber: "963R",
            destination: "R W S",
            scrolls: [
                "WOODLANDS AVE 3",
                "BUKIT PANJANG RD",
                "HILLVIEW AVE",
                "BT BATOK EAST AVE 3",
                "A Y E",
                {
                    renderType: "destScroll",
                    serviceNumber: "963R",
                    top: "LIMITED STOPS",
                    topFont: "Mobitec-9:6",
                    bottom: "EXPRESS SERVICE",
                    bottomFont: "Mobitec-6:5",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963R",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963R",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963R",
                    top: "RESORTS WORLD",
                    topFont: "Mobitec-7:5:2",
                    bottom: "SENTOSA",
                    bottomFont: "Mobitec-7:5:2",
                    image: "SentosaGantry"
                }
            ]
        }
    },
    9634: {
        front: {
            renderType: "standardService",
            serviceNumber: "963e",
            destination: "WOODLANDS",
            scrolls: [
                "A Y E",
                "BT BATOK EAST AVE 3",
                "HILLVIEW AVE",
                "BUKIT PANJANG RD",
                "WOODLANDS AVE 3",
                {
                    renderType: "destScroll",
                    serviceNumber: "963R",
                    top: "LIMITED STOPS",
                    topFont: "Mobitec-9:6",
                    bottom: "EXPRESS SERVICE",
                    bottomFont: "Mobitec-6:5",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963R",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963R",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963R",
                    top: "WOODLANDS",
                    image: "mrt"
                }
            ]
        }
    },
    9651: {
        front: {
            renderType: "standardService",
            serviceNumber: "965",
            destination: "SENGKANG",
            scrolls: [
                "WOODLANDS AVE 7",
                "GAMBAS AVE",
                "YISHUN MRT",
                "YISHUN MRT",
                "COMPASSVALE RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "965",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "965",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "965",
                    top: "SENGKANG",
                    image: "mrt"
                }
            ]
        }
    },
    9652: {
        front: {
            renderType: "standardService",
            serviceNumber: "965",
            destination: "WOODLANDS",
            scrolls: [
                "COMPASSVALE RD",
                "YISHUN MRT",
                "YISHUN AVE 7",
                "GAMBAS AVE",
                "WOODLANDS AVE 7",
                {
                    renderType: "destScroll",
                    serviceNumber: "965",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "965",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "965",
                    top: "WOODLANDS",
                    image: "mrt"
                }
            ]
        }
    },
    9653: {
        front: {
            renderType: "destScroll",
            serviceNumber: "965A",
            top: "Ends At",
            topFont: "Mobitec-7:5:3",
            bottom: "Opp Yishun Stn",
            bottomFont: "Mobitec-Tower6:4",
            image: "mrt"
        }
    },
    9654: {
        front: {
            renderType: "destScroll",
            serviceNumber: "965T",
            top: "Ends At",
            topFont: "Mobitec-7:5:3",
            bottom: "Sengkang Int",
            bottomFont: "Mobitec-Tower6:4",
            image: "mrt"
        }
    },
    9659: {
        front: {
            renderType: "standardService",
            serviceNumber: "965",
            destination: "WDL TEMP INT",
            scrolls: [
                "COMPASSVALE RD",
                "YISHUN MRT",
                "YISHUN AVE 7",
                "GAMBAS AVE",
                "WOODLANDS AVE 7",
                {
                    renderType: "destScroll",
                    serviceNumber: "965",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "965",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "965",
                    top: "WOODLANDS",
                    bottom: "TEMP INTERCHANGE",
                    image: "mrt"
                }
            ]
        }
    },
    9661: {
        front: {
            renderType: "standardService",
            serviceNumber: "966",
            destination: "MARINE PARADE",
            scrolls: [
                "WOODLANDS AVE 3",
                "PENDING RD",
                "JALAN KOLAM AYER",
                "JALAN TOA PAYOH",
                "JALAN EUNOS",
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "MARINE PARADE",
                }
            ]
        }
    },
    9662: {
        front: {
            renderType: "standardService",
            serviceNumber: "966",
            destination: "WOODLANDS",
            scrolls: [
                "MARINE PARADE RD",
                "JALAN EUNOS",
                "JALAN KOLAM AYER",
                "JALAN TOA PAYOH",
                "PENDING RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "WOODLANDS",
                    image: "mrt"
                }
            ]
        }
    },
    9663: {
        front: {
            renderType: "standardService",
            serviceNumber: "966A",
            destination: "Ends At",
            destFont: "Mobitec-7:5:3",
            scrolls: [
                "Marine Parade Rd",
                "(Opp Parkway Parade)",
            ]
        }
    },
    9691: {
        front: {
            renderType: "standardService",
            serviceNumber: "966",
            destination: "TAMPINES",
            scrolls: [
                "WOODLANDS AVE 7",
                "GAMBAS AVE",
                "YISHUN MRT",
                "T P E",
                "TAMPINES CONCOURSE",
                {
                    renderType: "destScroll",
                    serviceNumber: "969",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "969",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "969",
                    top: "TAMPINES",
                    image: "mrt"
                }
            ]
        }
    },
    9692: {
        front: {
            renderType: "standardService",
            serviceNumber: "969",
            destination: "WOODLANDS",
            scrolls: [
                "TAMPINES CONCOURSE",
                "T P E",
                "YISHUN MRT",
                "GAMBAS AVE",
                "WOODLANDS AVE 7",
                {
                    renderType: "destScroll",
                    serviceNumber: "969",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "969",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "969",
                    top: "WOODLANDS",
                    image: "mrt"
                }
            ]
        }
    },
    9693: {
        front: {
            renderType: "destScroll",
            serviceNumber: "969A",
            top: "Ends At",
            topFont: "Mobitec-7:5:3",
            bottom: "Yishun Stn",
            bottomFont: "Mobitec-Tower6:4",
            image: "mrt"
        }
    },
    9741: {
        front: {
            renderType: "standardService",
            serviceNumber: "974",
            destination: "BUKIT PANJANG",
            scrolls: [
                "UPP JURONG RD",
                "JURONG WEST ST 63",
                "JLN BOON LAY",
                "CHOA CHU KANG MRT",
                "CHOA CHU KANG WAY",
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "BUKIT PANJANG",
                    image: "mrt"
                }
            ]
        }
    },
    9742: {
        front: {
            renderType: "standardService",
            serviceNumber: "974",
            destination: "JOO KOON",
            scrolls: [
                "CHOA CHU KANG WAY",
                "CHOA CHU KANG MRT",
                "JLN BOON LAY",
                "JURONG WEST ST 63",
                "UPP JURONG RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "JOO KOON",
                    image: "mrt"
                }
            ]
        }
    },
    9743: {
        front: {
            renderType: "standardService",
            serviceNumber: "974A",
            destination: "Ends At",
            destFont: "Mobitec-7:5:3",
            scrolls: [
                "Choa Chu Kang Ave 4",
                "(Choa Chu Kang Stn)",
                "(Lot 1 Shopper's Mall)",
            ]
        }
    },
    9747: {
        front: {
            renderType: "StandardServiceOldFont",
            serviceNumber: "974",
            destination: "BUKIT PANJANG",
            scrolls: [
                "UPP JURONG RD",
                "JURONG WEST ST 63",
                "JLN BOON LAY",
                "CHOA CHU KANG MRT",
                "CHOA CHU KANG WAY",
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "BUKIT PANJANG",
                    image: "mrt"
                }
            ]
        }
    },
    9748: {
        front: {
            renderType: "StandardServiceOldFont",
            serviceNumber: "974",
            destination: "JOO KOON",
            scrolls: [
                "CHOA CHU KANG WAY",
                "CHOA CHU KANG MRT",
                "JLN BOON LAY",
                "JURONG WEST ST 63",
                "UPP JURONG RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "JOO KOON",
                    image: "mrt"
                }
            ]
        }
    },
    9749: {
        front: {
            renderType: "destScrollOldFont",
            serviceNumber: "974A",
            serviceFont: "TTS-16:8",
            top: "ENDS AT",
            topFont: "Mobitec-7:7",
            bottom: "LOT 1 SHOPPERS MALL",
            bottomFont: "Hanover-6:3",
            image: "mrt"
        }
    },
    9801: {
        front: {
            renderType: "standardService",
            serviceNumber: "980",
            destination: "LOR 1 GEYLANG",
            scrolls: [
                "SEMBAWANG RD",
                "UPPER THOMSON RD",
                "THOMSON RD",
                "LITTLE INDIA",
                "BEACH RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "980",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "980",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "980",
                    top: "LOR 1 GEYLANG",
                    bottom: "( KALLANG STN )",
                    image: "mrt"
                }
            ]
        }
    },
    9802: {
        front: {
            renderType: "standardService",
            serviceNumber: "980",
            destination: "SEMBAWANG",
            scrolls: [
                "BEACH RD",
                "LITTLE INDIA",
                "THOMSON RD",
                "UPPER THOMSON RD",
                "SEMBAWANG RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "980",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "980",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "980",
                    top: "SEMBAWANG",
                    image: "mrt"
                }
            ]
        }
    },
    9811: {
        front: {
            renderType: "standardService",
            serviceNumber: "981",
            destination: "SENOKO LOOP",
            scrolls: [
                "CANBERRA RD",
                "ADMIRALTY RD WEST",
                "SENOKO DR",
                "SENOKO RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "981",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "981",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "981",
                    top: "SENOKO LOOP",
                }
            ]
        }
    },
    9812: {
        front: {
            renderType: "standardService",
            serviceNumber: "981",
            destination: "SEMBAWANG",
            scrolls: [
                "SENOKO RD",
                "SENOKO LOOP",
                "SENOKO DR",
                "ADMIRALTY RD WEST",
                "CANBERRA RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "981",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "981",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "981",
                    top: "SEMBAWANG",
                    image: "mrt"
                }
            ]
        }
    },
    9901: {
        front: {
            renderType: "standardService",
            serviceNumber: "990",
            destination: "JURONG EAST MRT",
            scrolls: [
                "BT BATOK EAST AVE 3",
                "BT BATOK EAST AVE 6",
                "TOH GUAN RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "990",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "990",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "990",
                    top: "JURONG EAST",
                    bottom: "( BEF JURONG EAST STN )",
                    image: "mrt"
                }
            ]
        }
    },
    9902: {
        front: {
            renderType: "standardService",
            serviceNumber: "990",
            destination: "BUKIT BATOK",
            scrolls: [
                "TOH GUAN RD",
                "BUKIT BATOK EAST AVE 6",
                "BUKIT BATOK EAST AVE 3",
                {
                    renderType: "destScroll",
                    serviceNumber: "990",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "990",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "990",
                    top: "BUKIT BATOK",
                    image: "mrt"
                }
            ]
        }
    },
    9921: {
        front: {
            renderType: "standardService",
            serviceNumber: "992",
            destination: "TENGAH",
            scrolls: [
                "BUKIT BATOK WEST AVE 6",
                "BUKIT BATOK WEST AVE 8",
                "BUKIT BATOK RD",
                "PLANTATION CRESCENT",
                "TENGAH BOULEVARD",
                {
                    renderType: "destScroll",
                    serviceNumber: "992",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "992",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "992",
                    top: "TENGAH",
                }
            ]
        }
    },
    9921: {
        front: {
            renderType: "standardService",
            serviceNumber: "992",
            destination: "TENGAH",
            scrolls: [
                "BUKIT BATOK WEST AVE 6",
                "BUKIT BATOK WEST AVE 8",
                "BUKIT BATOK RD",
                "PLANTATION CRESCENT",
                "TENGAH BOULEVARD",
                {
                    renderType: "destScroll",
                    serviceNumber: "992",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "992",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "992",
                    top: "TENGAH",
                }
            ]
        }
    },
    9922: {
        front: {
            renderType: "standardService",
            serviceNumber: "992",
            destination: "BUKIT BATOK",
            scrolls: [
                "PLANTATION CRESCENT",
                "BUKIT BATOK RD",
                "BUKIT BATOK WEST AVE 8",
                "BUKIT BATOK WEST AVE 6",
                {
                    renderType: "destScroll",
                    serviceNumber: "992",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "992",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "992",
                    top: "BUKIT BATOK",
                    image: "mrt"
                }
            ]
        }
    },
    9923: {
        front: {
            renderType: "standardService",
            serviceNumber: "992A",
            destination: "Ends At",
            destFont: "Mobitec-7:5:3",
            scrolls: [
                "Tengah Boulevard",
                "(Blk 132B)",
            ]
        }
    },
    9999: {
        front: {
            renderType: "TowerSpecialEDS",
            serviceNumber: "!",
            serviceFont: "Mobitec-Tower16:10",
            top: "Bus Under",
            topFont: "Mobitec-7:4",
            bottom: "Repair",
            bottomFont: "Mobitec-7:4",
            image: "warning",
            text: "Bus Under Repair",
        }
    },
}


EDSExtras.TTSG = {
    1: {
        front: {
            renderType: "message",
            font: "Mobitec-13:8",
            text: "Last Bus",
            spacing: 2
        }
    },
    2: {
        front: {
            renderType: "message",
            font: "Mobitec-7:5:3",
            text: "Temporary Route Diversion",
            spacing: 1
        }
    },
    3: {
        front: {
            renderType: "message",
            font: "Mobitec-13:8",
            text: "Bus Full",
            spacing: 2
        },
    },
}


EDSImages.TTSG = {
    blank: [[]],
    logo: [
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
        [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0],
        [1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
        [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    'logo-full': [
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    'the-cat': [ //Please Do not the cat
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    ],
    mrt: [
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1],
        [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    ktm: [
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    ChangiAirportControlTower: [
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
        [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    ],
    SentosaGantry: [
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    ],
    "MAN-Logo37": [ // Logo for non 5888 MAN Bus
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
    ],
    "MAN-Logo32": [ //Logo for 5888
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0],
        [1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1],
    ],
    "OLD ADL LOGO": [ //OLD ADL Logo
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
        [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    "NEW ADL LOGO": [ //New ADL Logo
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    ],
    heart: [
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],

    calendar: [
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    christmas: [
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    ],
    cny: [
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
        [1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1],
        [0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    candle: [
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]
    ],

    f1: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1]
    ],
    warning: [
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    'hari-raya': [
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    ],
}
