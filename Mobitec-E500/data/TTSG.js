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

            font: "Mobitec-Tower6:4",
            spacing: 1
        },

        text: "$destination+' '+$serviceNumber"
    },
    standardServiceThinDest: {
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
                    "$topFont === null": "Mobitec-Tower9:4",
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
            renderType: "message",
            font: "SGBusLogo-Mobitec",
            text: "SGUS",
            spacing: 1
        }
    },
    6666: {
        front: {
            renderType: "logo",
            image: "logo-full",
            text: "TOWER TRANSIT LOGO",
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
    6666: {
        front: {
            renderType: "logo",
            image: "logo-full",
            text: "TOWER TRANSIT LOGO",
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
        front: { //Reserved for MAN A22
                renderType: "destScroll",
                serviceNumber: "",
                top: "NL323F (A22)",
                topFont: "Mobitec-9:6",
                bottom: "Mobitec - 150324",
                bottomFont: "Mobitec-Tower6:4",
                image: "MAN-Logo37"
        }
    },
    24: {
        front: { //Reserved for MAN A22
                renderType: "destScroll",
                serviceNumber: "",
                top: "NG363F (A24)",
                topFont: "Mobitec-9:6",
                bottom: "Mobitec - 150324",
                bottomFont: "Mobitec-Tower6:4",
                image: "MAN-Logo37"
        }
    },
    95: {
        front: { //Reserved for MAN A22
                renderType: "destScroll",
                serviceNumber: "",
                top: "ND323F (A95)",
                topFont: "Mobitec-9:6",
                bottom: "Mobitec - 150324",
                bottomFont: "Mobitec-Tower6:4",
                image: "MAN-Logo37"
        }
    },
    311: {
        front: {
            renderType: "standardService",
            serviceNumber: "E31",
            destination: "CCL EXPRESS BUS",
            scrolls: [
                "Kent Ridge - Harbourfront"
            ]
        }
    },
    312: {
        front: {
            renderType: "standardService",
            serviceNumber: "E31",
            destination: "CCL EXPRESS BUS",
            scrolls: [
                "Harbourfront - Kent Ridge"
            ]
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
    501: {
        front: { //NEW ADL LOGO
                renderType: "destScroll",
                serviceNumber: "",
                top: "ENVIRO 500",
                topFont: "Mobitec-Enviro500 Wording",
                bottom: "Mobitec - 150324",
                bottomFont: "Mobitec-Tower6:4",
                image: "NEW ADL LOGO"
        }
    },
    502: {
        front: { //OLD ADL LOGO
                renderType: "destScroll",
                serviceNumber: "",
                top: "ENVIRO 500",
                topFont: "Mobitec-Enviro500 Wording",
                bottom: "Mobitec - 170921",
                bottomFont: "Mobitec-Tower6:4",
                image: "OLD ADL LOGO"
        }
    },
    521: {
        front: {
            renderType: "standardService",
            serviceNumber: "S52",
            destination: "TEL SHUTTLE",
            scrolls: [
                "Outram Park > Caldecott"
            ]
        }
    },
    522: {
        front: {
            renderType: "standardService",
            serviceNumber: "S52",
            destination: "TEL SHUTTLE",
            scrolls: [
                "Caldecott > Outram Park"
            ]
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
    668: {
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
    669: {
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
                "PENJURU",
                "PENJURU",
                "PENJURU",
                "PENJURU",
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
                "PENJURU",
                "PENJURU",
                "PENJURU",
                "PENJURU",
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
    984: {
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
                "TEBAN GARDEN RD",
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
                "YISHUN AVE 5",
                "MANDAI RD",
                "BUKIT PANJANG MRT",
                "BUKIT TIMAH RD",
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
                "DUNEARN RD",
                "BUKIT PANJANG MRT",
                "MANDAI RD",
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
                "TOH TUCK RD / TERRACE",
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
            text: "LRT  Shuttle  A",
            spacing: 2
        }
    },
    5008: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "LRT  Shuttle  B",
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
    7099: {
        front: {
            renderType: "standardService",
            serviceNumber: "$41",
            destination: "MALL OF MENDINI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "$41",
                    top: "MALL OF MENDINI",
                    bottom: "( LEGOLAND MALAYSIA )",
                    image: "SentosaGantry"
                },
                "TAMAN TASEK",
                "BUKIT INDAH",
            ]
        }
    },
    7501: {
        front: {
            renderType: "standardService",
            serviceNumber: "N1",
            destination: "YISHUN RING RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "N1",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "N1",
                    top: "YISHUN RING RD",
                    bottom: "( KHATIB STN )",
                    image: "mrt"
                },
                "NEWTON RD",
                "TOA PAYOH CENTRAL",
                "BISHAN ST 11",
                "ANG MO KIO AVE 3",
                "ANG MO KIO AVE 4"
            ]
        }
    },
    7502: {
        front: {
            renderType: "standardService",
            serviceNumber: "N2",
            destination: "SEMBAWANG DR",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "N2",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "N2",
                    top: "SEMBAWANG DR",
                    bottom: "( KHATIB STN )",
                    image: "mrt"
                },
                "WOODLANDS CENTRE RD",
                "MARSILING RD",
                "WOODLANDS AVE 7",
                "ADMIRALTY DR",
                "CANBERRA RD"
            ]
        }
    },
    8000: {
        front: {
                renderType: "destScroll",
                serviceNumber: "%1",
                top: "Crew  Bus",
                topFont: "Hanover-14:6",
                image: "logo"
        }
    },
    8011: {
        front: {
            renderType: "standardService",
            serviceNumber: "801",
            destination: "YISHUN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "801",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "801",
                    top: "YISHUN",
                    image: "mrt"
                },
                "YISHUN CENTRAL",
                "YISHUN AVE 9",
                "YISHUN AVE 6",
                "YISHUN ST 42",
                "YISHUN AVE 1"
            ]
        }
    },
    8251: {
        front: {
            renderType: "standardService",
            serviceNumber: "825",
            destination: "YIO CHU KANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "825",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "825",
                    top: "YIO CHU KANG",
                    image: "mrt"
                },
                "ANG MO KIO AVE 6",
                "LENTOR MRT",
                "LENTOR RD",
                "LENTOR LOOP"
            ]
        }
    },
    8531: {
        front: {
            renderType: "standardService",
            serviceNumber: "853",
            destination: "LOR 1 GEYLANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "LOR 1 GEYLANG",
                    bottom: "( KALLANG STN )",
                    image: "mrt"
                },
                "YISHUN AVE 2",
                "ANG MO KIO AVE 6",
                "SERANGOON CENTRAL",
                "UPPER SERANGOON RD",
                "GEYLANG BAHRU"
            ]
        }
    },
    8532: {
        front: {
            renderType: "standardService",
            serviceNumber: "853",
            destination: "YISHUN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "YISHUN",
                    image: "mrt"
                },
                "GEYLANG BAHRU",
                "UPPER SERANGOON RD",
                "SERANGOON CENTRAL",
                "ANG MO KIO AVE 6",
                "YISHUN AVE 2"
            ]
        }
    },
    8533: {
        front: {
            renderType: "standardService",
            serviceNumber: "853M",
            destination: "UPP EAST COAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "853M",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "853M",
                    top: "UPP EAST COAST"
                },
                "ANG MO KIO AVE 6",
                "SERANGOON CENTRAL",
                "SIMS AVE",
                "TANJONG KATONG RD",
                "MARINE PARADE RD"
            ]
        }
    },
    8534: {
        front: {
            renderType: "standardService",
            serviceNumber: "853M",
            destination: "YISHUN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "853M",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "853M",
                    top: "YISHUN",
                    image: "mrt"
                },
                "MARINE PARADE RD",
                "TANJONG KATONG RD",
                "GEYLANG RD",
                "SERANGOON CENTRAL",
                "ANG MO KIO AVE 6"
            ]
        }
    },
    8541: {
        front: {
            renderType: "standardService",
            serviceNumber: "854",
            destination: "BEDOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "854",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "854",
                    top: "BEDOK",
                    image: "mrt"
                },
                "YISHUN AVE 2",
                "YIO CHU KANG RD",
                "HOUGANG AVE 3",
                "JLN EUNOS",
                "NEW UPPER CHANGI RD"
            ]
        }
    },
    8542: {
        front: {
            renderType: "standardService",
            serviceNumber: "854",
            destination: "YISHUN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "854",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "854",
                    top: "YISHUN",
                    image: "mrt"
                },
                "NEW UPPER CHANGI RD",
                "EUNOS LINK",
                "HOUGANG AVE 3",
                "YIO CHU KANG RD",
                "YISHUN AVE 2"
            ]
        }
    },
    8551: {
        front: {
            renderType: "standardService",
            serviceNumber: "855",
            destination: "HARBOURFRONT",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "855",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "855",
                    top: "HARBOURFRONT",
                    image: "mrt"
                },
                "YISHUN AVE 2",
                "UPPER THOMSON RD",
                "ADAM RD",
                "QUEENSWAY",
                "JALAN BUKIT MERAH"
            ]
        }
    },
    8552: {
        front: {
            renderType: "standardService",
            serviceNumber: "855",
            destination: "YISHUN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "855",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "855",
                    top: "YISHUN",
                    image: "mrt"
                },
                "JALAN BUKIT MERAH",
                "QUEENSWAY",
                "FARRER RD",
                "UPPER THOMSON RD",
                "YISHUN AVE 2"
            ]
        }
    },
    8561: {
        front: {
            renderType: "standardService",
            serviceNumber: "856",
            destination: "WOODLANDS",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "856",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "856",
                    top: "WOODLANDS",
                    image: "mrt"
                },
                "CANBERRA RD",
                "ADMIRALTY RD WEST",
                "SENOKO DR",
                "WOODLANDS NORTH MRT",
                "MARSILING ESTATE"
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
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "856",
                    top: "YISHUN",
                    image: "mrt"
                },
                "WOODLANDS TRAIN CHKPT",
                "WOODLANDS NORTH MRT",
                "SENOKO RD",
                "ADMIRALTY RD WEST",
                "CANBERRA"
            ]
        }
    },
    8571: {
        front: {
            renderType: "standardService",
            serviceNumber: "857",
            destination: "TEMASEK AVE",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "TEMASEK AVE",
                    bottom: "( PROMENADE STN )",
                    image: "mrt"
                },
                "YIO CHU KANG RD",
                "BENDEMEER RD",
                "LITTLE INDIA",
                "BENCOOLEN ST",
                "BRAS BASAH RD"
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
    8572: {
        front: {
            renderType: "standardService",
            serviceNumber: "857",
            destination: "YISHUN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "YISHUN",
                    image: "mrt"
                },
                "STAMFORD RD",
                "SELEGIE RD",
                "BOON KENG MRT",
                "SERANGOON RD",
                "YIO CHU KANG RD"
            ]
        }
    },
    8573: {
        front: {
            renderType: "destScroll",
            serviceNumber: "857A",
            top: "ENDS AT",
            topFont: "Mobitec-7:5:3",
            bottom: "OPP SUNRISE GDNS",
            bottomFont: "Mobitec-Tower6:4",
        }
    },
    8574: {
        front: {
            renderType: "destScroll",
            serviceNumber: "857B",
            top: "ENDS AT",
            topFont: "Mobitec-7:5:3",
            bottom: "PROMENADE STN",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "858",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "858",
                    top: "CHANGI AIRPORT",
                    bottom: "( PTB 3, 1, 2)",
                    image: "ChangiAirportControlTower"
                },
                "WOODLANDS AVE 9",
                "SEMBAWANG WAY",
                "YISHUN MRT",
                "JALAN KAYU",
                "T P E"
            ]
        }
    },
    8582: {
        front: {
            renderType: "standardService",
            serviceNumber: "858",
            destination: "WOODLANDS",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "858",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "858",
                    top: "WOODLANDS",
                    image: "mrt"
                },
                "TPE",
                "JALAN KAYU",
                "YISHUN MRT",
                "SEMBAWANG WAY",
                "WOODLANDS AVE 9"
            ]
        }
    },
    8583: {
        front: {
            renderType: "destScroll",
            serviceNumber: "858A",
            top: "ENDS AT",
            topFont: "Mobitec-7:5:3",
            bottom: "OPP YISHUN STN",
            bottomFont: "Mobitec-Tower6:4",
            image: "mrt"
        }
    },
    8591: {
        front: {
            renderType: "standardService",
            serviceNumber: "859",
            destination: "YISHUN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "859",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "859",
                    top: "YISHUN",
                    image: "mrt"
                },
                "CANBERRA RD",
                "ADMIRALTY LINK",
                "SEMBAWANG CRES",
                "SEMBAWANG RD",
                "YISHUN AVE 5"
            ]
        }
    },
    8592: {
        front: {
            renderType: "standardService",
            serviceNumber: "859",
            destination: "SEMBAWANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "859",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "859",
                    top: "SEMBAWANG",
                    image: "mrt"
                },
                "YISHUN AVE 5",
                "SEMBAWANG RD",
                "SEMBAWANG CRES",
                "ADMIRALTY LINK",
                "CANBERRA RD"
            ]
        }
    },
    8593: {
        front: {
            renderType: "standardService",
            serviceNumber: "859A",
            destination: "SEMBAWANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "859A",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "859A",
                    top: "SEMBAWANG",
                    image: "mrt"
                },
                "CANBERRA RD",
                "ADMIRALTY LINK",
                "ADMIRALTY DR",
                "SEMBWAWANG CRES"
            ]
        }
    },
    8702: {
        front: {
            renderType: "standardServiceThinDest",
            serviceNumber: "870",
            destination: "JURONG TOWN HALL",
            Destinationfont: "Mobitec-Tower9:4",
            scrolls: [
                "WEST COAST RD",
                "PANDAN RD",
                "TANJONG PENJURU",
                "PENJURU RD",
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
    8594: {
        front: {
            renderType: "standardService",
            serviceNumber: "859B",
            destination: "SEMBAWANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "859B",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "859B",
                    top: "SEMBAWANG",
                    image: "mrt"
                },
                "SEMBAWANG CRES",
                "ADMIRALTY DR",
                "ADMIRALTY LINK",
                "CANBERRA RD"
            ]
        }
    },
    8821: {
        front: {
            renderType: "standardService",
            serviceNumber: "882",
            destination: "SEMBAWANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "882",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "882",
                    top: "SEMBAWANG",
                    image: "mrt"
                },
                "WELLINGTON CIRCLE",
                "MONTREAL DR",
                "MONTREAL LINK",
                "SEMBAWANG RD",
                "SEMBAWANG PARK"
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
                {
                    renderType: "destScroll",
                    serviceNumber: "883",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "883",
                    top: "YISHUN CTRL 2",
                    bottom: "(KHOO TECK PUAT HOSPITAL)",
                },
                "CANBERRA WAY",
                "CANBERRA ST",
                "CANBERRA MRT",
                "YISHUN AVE 2",
                "YISHUN MRT"
            ]
        }
    },
    8832: {
        front: {
            renderType: "standardService",
            serviceNumber: "883",
            destination: "SEMBAWANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "883",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "883",
                    top: "SEMBAWANG",
                    image: "mrt"
                },
                "YISHUN MRT",
                "YISHUN AVE 2",
                "CANBERRA MRT",
                "CANBERRA ST",
                "CANBERRA WAY"
            ]
        }
    },
    9411: {
        front: {
            renderType: "standardService",
            serviceNumber: "941",
            destination: "BUKIT BATOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "941",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "941",
                    top: "BUKIT BATOK",
                    image: "mrt"
                },
                "BT BATOK WEST AVE 3",
                "BT BATOK WEST AVE 6",
                "BT BATOK ST 11",
                "BT BATOK WEST AVE 8",
            ]
        }
    },
    9451: {
        front: {
            renderType: "standardService",
            serviceNumber: "945",
            destination: "BUKIT BATOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "945",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "945",
                    top: "BUKIT BATOK",
                    image: "mrt"
                },
                "BT BATOK EAST AVE 3",
                "BT BATOK ST 52",
                "BT GOMBAK MRT",
                "BT BATOK WEST AVE 7",
                "BT BATOK ST 34"
            ]
        }
    },
    9471: {
        front: {
            renderType: "standardService",
            serviceNumber: "947",
            destination: "BUKIT BATOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "947",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "947",
                    top: "BUKIT BATOK",
                    image: "mrt"
                }, // incomplete
                "BT BATOK WEST AVE 2",
                "BT BATOK WEST AVE 4"
            ]
        }
    },
    9631: {
        front: {
            renderType: "standardService",
            serviceNumber: "963",
            destination: "HARBOURFRONT",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "963",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963",
                    top: "HARBOURFRONT",
                    image: "mrt"
                },
                "BUKIT PANJANG RD",
                "HILLVIEW AVE",
                "BT BATOK EAST AVE 4",
                "AYE",
                "ALEXANDRA RD"
            ]
        }
    },
   9632: {
        front: {
            renderType: "standardService",
            serviceNumber: "963",
            destination: "WOODLANDS",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "963",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963",
                    top: "WOODLANDS",
                    image: "mrt"
                },
                "ALEXANDRA RD",
                "AYE",
                "BT BATOK EAST AVE 4",
                "HILLVIEW AVE",
                "BT PANJANG RD",
            ]
        }
    },
    9633: {
        front: {
            renderType: "standardService",
            serviceNumber: "963e",
            destination: "HARBOURFRONT",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "963e",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963e",
                    top: "HARBOURFRONT",
                    image: "mrt"
                },
                "WOODLANDS AVE 3",
                "BUKIT PANJANG RD",
                "HILLVIEW AVE",
                "BT BATOK EAST AVE 3",
                " A Y E"
            ]
        }
    },
   9634: {
        front: {
            renderType: "standardService",
            serviceNumber: "963e",
            destination: "WOODLANDS",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "963e",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "963e",
                    top: "WOODLANDS",
                    image: "mrt"
                },
                "A Y E",
                "BT BATOK EAST AVE 3",
                "HILLVIEW AVE",
                "BUKIT PANJANG RD",
                "WOODLANDS AVE 3"
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
    9651: {
        front: {
            renderType: "standardService",
            serviceNumber: "965",
            destination: "SENGKANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "965",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "965",
                    top: "SENGKANG",
                    image: "mrt"
                },
                "WOODLANDS AVE 7",
                "GAMBAS AVE",
                "YISHUN MRT",
                "YISHUN MRT",
                "COMPASSVALE RD"
            ]
        }
    },
   9652: {
        front: {
            renderType: "standardService",
            serviceNumber: "965",
            destination: "WOODLANDS",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "965",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "965",
                    top: "WOODLANDS",
                    image: "mrt"
                },
                "COMPASSVALE RD",
                "YISHUN MRT",
                "YISHUN AVE 7",
                "GAMBAS AVE",
                "WOODLANDS AVE 7"
            ]
        }
    },
    9659: {
        front: {
            renderType: "standardService",
            serviceNumber: "965",
            destination: "WDL TEMP INT",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "965",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "965",
                    top: "WOODLANDS",
                    bottom: "TEMP INTERCHANGE",
                    image: "mrt"
                },
                "COMPASSVALE RD",
                "YISHUN MRT",
                "YISHUN AVE 7",
                "GAMBAS AVE",
                "WOODLANDS AVE 7"
            ]
        }
    },
    9661: {
        front: {
            renderType: "standardService",
            serviceNumber: "966",
            destination: "MARINE PARADE",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "MARINE PARADE"
                },
                "WOODLANDS AVE 3",
                "PENDING RD",
                "JALAN KOLAM AYER",
                "JALAN TOA PAYOH",
                "JALAN EUNOS"
            ]
        }
    },
    9662: {
        front: {
            renderType: "standardService",
            serviceNumber: "966",
            destination: "WOODLANDS",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "WOODLANDS",
                    image: "mrt"
                },
                "MARINE PARADE RD",
                "JALAN EUNOS",
                "JALAN KOLAM AYER",
                "JALAN TOA PAYOH",
                "PENDING RD"
            ]
        }
    },
    9691: {
        front: {
            renderType: "standardService",
            serviceNumber: "969",
            destination: "TAMPINES",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "969",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "969",
                    top: "TAMPINES",
                    image: "mrt"
                },
                "WOODLANDS AVE 7",
                "GAMBAS AVE",
                "YISHUN MRT",
                "T P E",
                "TAMPINES CONCOURSE"
            ]
        }
    },
    9692: {
        front: {
            renderType: "standardService",
            serviceNumber: "969",
            destination: "WOODLANDS",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "969",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "969",
                    top: "WOODLANDS",
                    image: "mrt"
                },
                "TAMPINES CONCOURSE",
                "T P E",
                "YISHUN MRT",
                "GAMBAS AVE",
                "WOODLANDS AVE 7"
            ]
        }
    },
    9801: {
        front: {
            renderType: "standardService",
            serviceNumber: "980",
            destination: "LOR 1 GEYLANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "980",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "980",
                    top: "LOR 1 GEYLANG",
                    bottom: "( KALLANG STN )",
                    image: "mrt"
                },
                "SEMBAWANG RD",
                "UPPER THOMSON RD",
                "THOMSON RD",
                "LITTLE INDIA",
                "BEACH RD"
            ]
        }
    },
    9802: {
        front: {
            renderType: "standardService",
            serviceNumber: "980",
            destination: "SEMBAWANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "980",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "980",
                    top: "SEMBAWANG",
                    image: "mrt"
                },
                "BEACH RD",
                "LITTLE INDIA",
                "THOMSON RD",
                "UPPER THOMSON RD",
                "SEMBAWANG RD"
            ]
        }
    },
    9811: {
        front: {
            renderType: "standardService",
            serviceNumber: "981",
            destination: "SENOKO LOOP",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "981",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "981",
                    top: "SENOKO LOOP"
                },
                "CANBERRA RD",
                "ADMIRALTY RD WEST",
                "SENOKO DR",
                "SENOKO RD"
            ]
        }
    },
    9812: {
        front: {
            renderType: "standardService",
            serviceNumber: "981",
            destination: "SEMBAWANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "981",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "981",
                    top: "SEMBAWANG",
                    image: "mrt"
                },
                "SENOKO RD",
                "SENOKO LOOP",
                "SENOKO DR",
                "ADMIRALTY RD WEST",
                "CANBERRA RD"
            ]
        }
    },
    9741: {
        front: {
            renderType: "standardService",
            serviceNumber: "974",
            destination: "JOO KOON",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "JOO KOON",
                    image: "mrt"
                },
                "CHOA CHU KANG WAY",
                "CHOA CHU KANG MRT",
                "JLN BOON LAY",
                "JURONG WEST ST 63",
                "UPP JURONG RD"
            ]
        }
    },
    9742: {
        front: {
            renderType: "standardService",
            serviceNumber: "974",
            destination: "BUKIT PANJANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "BUKIT PANJANG",
                    image: "mrt"
                },
                "UPP JURONG RD",
                "JURONG WEST ST 63",
                "JLN BOON LAY",
                "CHOA CHU KANG MRT",
                "CHOA CHU KANG WAY"
            ],
        }
    },
    9748: { //Retain for history
        front: {
            renderType: "StandardServiceOldFont",
            serviceNumber: "974",
            destination: "JOO KOON",
            scrolls: [
                {
                    renderType: "destScrollOldFont",
                    serviceNumber: "974",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScrollOldFont",
                    serviceNumber: "974",
                    top: "JOO KOON",
                    image: "mrt"
                },
                "CHOA CHU KANG WAY",
                "CHOA CHU KANG MRT",
                "JLN BOON LAY",
                "JURONG WEST ST 63",
                "UPP JURONG RD"
            ]
        }
    },
    9749: { //Retain for history
        front: {
            renderType: "StandardServiceOldFont",
            serviceNumber: "974",
            serviceNumberfont: "StandardServiceOldFont",
            destination: "BUKIT PANJANG",
            scrolls: [
                {
                    renderType: "destScrollOldFont",
                    serviceNumber: "974",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScrollOldFont",
                    serviceNumber: "974",
                    top: "BUKIT PANJANG",
                    image: "mrt"
                },
                "UPP JURONG RD",
                "JURONG WEST ST 63",
                "JLN BOON LAY",
                "CHOA CHU KANG MRT",
                "CHOA CHU KANG WAY"
            ],
        }
    },
    9743: {
        front: {
            renderType: "destScroll",
            serviceNumber: "974A",
            top: "ENDS AT",
            topFont: "Mobitec-7:7",
            bottom: "LOT 1 SHOPPERS MALL",
            bottomFont: "Hanover-6:3",
            image: "mrt"
            
            
        }
    }
}

EDSExtras.TTSG = {
    1: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "Last  Bus",
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
            font: "Hanover-14:6",
            text: "Bus  Full",
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
    "SentosaGantry": [
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
