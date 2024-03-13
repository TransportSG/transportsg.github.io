EDSFormats.TTSG = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-Tower16:8",
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
    destScroll: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-Tower16:8",
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
    1: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "World's 1st MAN A95",
            topFont: "Mobitec-Tower6:4",
            bottom: "Double Decker Bus",
            bottomFont: "Mobitec-Tower6:4",
            image: "MAN L0GO"
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
    411: {
        front: {
            renderType: "standardService",
            serviceNumber: "41",
            destination: "JALAN ANAK BUKIT",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "41",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "41",
                    top: "JALAN ANAK BUKIT"
                },
                "TOH GUAN RD",
                "TOH GUAN RD EAST",
                "TOH TUCK RD",
                "BEAUTY WORLD MRT"
            ]
        }
    },
    412: {
        front: {
            renderType: "standardService",
            serviceNumber: "41",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "41",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "41",
                    top: "JURONG EAST"
                },
                "TOH TUCK RD",
                "TOH GUAN RD EAST",
                "TOH GUAN RD"
            ]
        }
    },
    491: {
        front: {
            renderType: "standardService",
            serviceNumber: "49",
            destination: "JURONG WEST ST 42",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "49",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "49",
                    top: "JURONG WEST ST 42"
                }, // sort below
                "JURONG TOWN HALL RD",
                "LAKESIDE MRT",
                "CORPORATION DR",
                "JURONG WEST ST 51",
                "BOON LAY WAY"
            ]
        }
    },
    492: {
        front: {
            renderType: "standardService",
            serviceNumber: "49",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "49",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "49",
                    top: "JURONG EAST"
                }, // incomplete
                "CORPORATION DR",
                "LAKESIDE MRT"
            ]
        }
    },
    661: {
        front: {
            renderType: "standardService",
            serviceNumber: "66",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "JURONG EAST",
                    image: "mrt"
                },
                "BEDOK RESERVOIR RD",
                "MACPHERSON EST / RD",
                "LITTLE INDIA",
                "BUKIT TIMAH RD",
                "BUKIT BATOK CENTRAL"
            ]
        }
    },
    662: {
        front: {
            renderType: "standardService",
            serviceNumber: "66",
            destination: "BEDOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "BEDOK",
                    image: "mrt"
                },
                "BUKIT BATOK CENTRAL",
                "DUNEARN RD",
                "LITTLE INDIA",
                "MACPHERSON RD / EST",
                "BEDOK RESERVOIR RD",
            ]
        }
    },
    771: {
        front: {
            renderType: "standardService",
            serviceNumber: "77",
            destination: "BUKIT BATOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "BUKIT BATOK",
                    image: "mrt"
                },
                "STAMFORD RD",
                "ORCHARD BOULEVARD",
                "HOLLAND RD / VILLAGE",
                "SIXTH AVE",
                "TOH TUCK RD"
            ]
        }
    },
    772: {
        front: {
            renderType: "standardService",
            serviceNumber: "77",
            destination: "MARINA CENTRE",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "MARINA CENTRE",
                    bottom: "(PROMENADE MRT)",
                    image: "mrt"
                },
                "TOH TUCK RD",
                "SIXTH AVE",
                "HOLLAND RD / VILLAGE",
                "ORCHARD RD"
            ]
        }
    },
    781: {
        front: {
            renderType: "standardService",
            serviceNumber: "78",
            destination: "CLEMENTI MRT",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "CLEMENTI MRT",
                    image: "mrt"
                }, // likely incomplete
                "PENJURU RD",
                "TANJONG PENJURU",
                "PANDAN RD / AVE",
                "WEST COAST RD"
            ]
        }
    },
    782: {
        front: {
            renderType: "standardService",
            serviceNumber: "78",
            destination: "JURONG TOWN HALL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "JUR TOWN HALL",
                    bottom: "( JURONG EAST MRT )",
                    image: "mrt"
                }, // ? incomplete
                "WEST COAST RD",
                "PANDAN RD",
                "TANJONG PENJURU",
                "PENJURU RD",
            ]
        }
    },
    789: {
        front: {
            renderType: "standardService",
            serviceNumber: "78",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "JURONG EAST",
                    image: "mrt"
                }, // also dig
                "WEST COAST RD",
                "PANDAN RD",
                "TANJONG PENJURU",
                "PENJURU RD",
            ]
        }
    },
    791: {
        front: {
            renderType: "standardService",
            serviceNumber: "79",
            destination: "BOON LAY",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "79",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "79",
                    top: "BOON LAY",
                    image: "mrt"
                }, // incomplete, dig for 79 scrolls
                "TEBAN GARDENS RD",
            ]
        }
    },
    792: {
        front: {
            renderType: "standardService",
            serviceNumber: "79",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "79",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "79",
                    top: "JURONG EAST",
                    image: "mrt"
                }, // also dig
                "TEBAN GARDENS RD",
            ]
        }
    },
    961: {
        front: {
            renderType: "standardService",
            serviceNumber: "96",
            destination: "CLEMENTI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "96",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "96",
                    top: "CLEMENTI",
                    image: "mrt"
                }, // incomplete
                "KENT RIDGE CRES"
                // "NAT'L UNIVERSITY OF S'PORE",
            ]
        }
    },
    971: {
        front: {
            renderType: "standardService",
            serviceNumber: "97",
            destination: "MARINA CENTRE",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "MARINA CENTRE"
                }, // check
                "AYE",
                "ALEXANDRA RD",
                "HARBOURFRONT",
                "ROBINSON RD",
                "BAYFRON AVE / MBS",
                "SUNTEC CITY"
            ]
        }
    },
    972: {
        front: {
            renderType: "standardService",
            serviceNumber: "97",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "JURONG EAST",
                    image: "mrt"
                }, // incomplete
                "AYE",
            ]
        }
    },
    973: {
        front: {
            renderType: "standardService",
            serviceNumber: "97e",
            destination: "MARINA CENTRE",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "MARINA CENTRE"
                }, // incomplete
                "HARBOURFRONT",
            ]
        }
    },
    974: {
        front: {
            renderType: "standardService",
            serviceNumber: "97e",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "JURONG EAST",
                    image: "mrt"
                }, // incomplete, something about limited stops
                "HARBOURFRONT",
            ]
        }
    },
    981: {
        front: {
            renderType: "standardService",
            serviceNumber: "98",
            destination: "JURONG PIER WAY", // jurong pier way or checkpt?
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "98",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "98",
                    top: "JURONG PIER WAY"
                }, // incomplete
                "LAKESIDE MRT",
            ]
        }
    },
    982: {
        front: {
            renderType: "standardService",
            serviceNumber: "98",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "98",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "98",
                    top: "JURONG EAST",
                    image: "mrt"
                }, // incomplete
                "JURONG EAST AVE 1",
            ]
        }
    },
    983: {
        front: {
            renderType: "standardService",
            serviceNumber: "98M",
            destination: "CORPORATION PL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "98M",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "98M",
                    top: "CORPORATION PL"
                }, // incomplete
                "JURONG WEST AVE 1",
            ]
        }
    },
    1061: {
        front: {
            renderType: "standardService",
            serviceNumber: "106",
            destination: "SHENTON WAY",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "SHENTON WAY",
                    bottom: "(TANJONG PAGAR MRT)",
                    image: "mrt"
                },
                "C'WEALTH AVE WEST",
                "HOLLAND RD / VILLAGE",
                "ORCHARD RD",
                "SUNTEC CITY",
                "BAYFRONT AVE / MBS"
            ]
        }
    },
    1062: {
        front: {
            renderType: "standardService",
            serviceNumber: "106",
            destination: "BUKIT BATOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "BUKIT BATOK",
                    image: "mrt"
                },
                "BAYFRON AVE / MBS",
                "ORCHARD BOULEVARD",
                "HOLLAND RD / VILLAGE",
                "C'WEALTH AVE WEST",
                "TOH TUCK AVE",
            ]
        }
    },
    1431: {
        front: {
            renderType: "standardService",
            serviceNumber: "143",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "143",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "143",
                    top: "JURONG EAST",
                    image: "mrt"
                }, // check
                "THOMSON RD",
                "ORCHARD RD",
                "NEW BRIDGE RD",
                "KAMPONG BAHRU RD",
                "PASIR PANJANG RD",
                "WEST COAST RD",
                "TEBAN GARDENS RD",
                "JURONG TOWN HALL RD",
            ]
        }
    },
    1432: {
        front: {
            renderType: "standardService",
            serviceNumber: "143",
            destination: "TOA PAYOH",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "143",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "143",
                    top: "TOA PAYOH",
                    image: "mrt"
                },
                "TEBAN GARDENS RD",
                "PASIR PANJANG RD",
                "HARBOURFRONT",
                "CHINATOWN",
                "ORCHARD TURN",
            ]
        }
    },
    1433: { // check if this or 7431
        front: {
            renderType: "standardService",
            serviceNumber: "143M",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "143M",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "143M",
                    top: "JURONG EAST",
                    image: "mrt"
                }, // incomplete
                "TEBAN GARDENS RD",
                "PANDAN GARDENS",
            ]
        }
    },
    1671: {
        front: {
            renderType: "standardService",
            serviceNumber: "167",
            destination: "BUKIT MERAH",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "BUKIT MERAH"
                },
                "SEMBAWANG RD",
                "UPPER THOMSON RD",
                "THOMSON RD",
                "ORCHARD RD",
                "SHENTON WAY"
            ]
        }
    },
    1672: {
        front: {
            renderType: "standardService",
            serviceNumber: "167",
            destination: "SEMBAWANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "SEMBAWANG",
                    image: "mrt"
                },
                "CECIL STREET",
                "ORCHARD TURN",
                "THOMSON RD",
                "UPPER THOMSON RD",
                "SEMBAWANG RD"
            ]
        }
    },
    1673: {
         front: {
            renderType: "standardService",
            serviceNumber: "167e",
            destination: "SHENTON WAY",
            scrolls: [
            {
                    renderType: "destScroll",
                    serviceNumber: "167e",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                    },
                    {
                    renderType: "destScroll",
                    serviceNumber: "167e",
                    top: "SHENTON WAY",
                    bottom: "(TANJONG PAGAR MRT)",
                    image: "mrt"
                },
                "SEMBAWANG RD",
                "SPRINGLEAF MRT",
                "ORCHARD RD",
                "BRAS BASAH RD"
            ]
        }
    },
    1674: {
        front: {
            renderType: "standardService",
            serviceNumber: "167e",
            destination: "SEMBAWANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "167e",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "167e",
                    top: "SEMBAWANG",
                    image: "mrt"
                },
                "STAMFORD RD",
                "ORCHARD TURN",
                "SPRINGLEAF MRT",
                "SEMBAWANG RD"
            ]
        }
    },
    1691: {
        front: {
            renderType: "standardService",
            serviceNumber: "169",
            destination: "ANG MO KIO",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "169",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "169",
                    top: "ANG MO KIO",
                    image: "mrt"
                },
                "WOODLANDS AVE 9",
                "ADMIRALTY RD EAST",
                "YISHUN MRT",
                "SEMBAWANG RD",
                "ANG MO KIO AVE 3"
            ]
        }
    },
    1692: {
        front: {
            renderType: "standardService",
            serviceNumber: "169",
            destination: "WOODLANDS",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "169",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "169",
                    top: "WOODLANDS",
                    image: "mrt"
                },
                "ANG MO KIO AVE 3",
                "SEMBAWANG RD",
                "YISHUN MRT",
                "ADMIRALTY RD EAST",
                "WOODLANDS AVE 9"
            ]
        }
    },
    1711: {
        front: {
            renderType: "standardService",
            serviceNumber: "171",
            destination: "BUKIT PANJANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "BUKIT PANJANG",
                    image: "mrt"
                },
                "YISHUN AVE 5",
                "SEMBAWANG RD",
                "MANDAI RD",
                "PETIR RD"
            ]
        }
    },
    1712: {
        front: {
            renderType: "standardService",
            serviceNumber: "171",
            destination: "YISHUN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "YISHUN",
                    image: "mrt"
                },
                "PETIR RD",
                "MANDAI RD",
                "SEMBAWANG RD",
                "YISHUN AVE 5"
            ]
        }
    },
    1731: {
        front: {
            renderType: "standardService",
            serviceNumber: "173",
            destination: "CLEMENTI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "173",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "173",
                    top: "CLEMENTI",
                    image: "mrt"
                },
                "BT BATOK EAST AVE 4",
                "HILLVIEW AVE",
                "HUME AVE",
                "BEAUTY WORLD MRT",
                "TOH TUCK RD / TERRACE"
            ]
        }
    },
    1732: {
        front: {
            renderType: "standardService",
            serviceNumber: "173",
            destination: "BUKIT BATOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "173",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "173",
                    top: "BUKIT BATOK",
                    image: "mrt"
                },
                "TOH TUCK RD / TERRACE",
                "BEAUTY WORLD MRT",
                "HUME AVE",
                "JLN BATU NILAM"
            ]
        }
    },
    1771: {
        front: {
            renderType: "standardService",
            serviceNumber: "177",
            destination: "BUKIT PANJANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "177",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "177",
                    top: "BUKIT PANJANG",
                    image: "mrt"
                }, // incomplete
                "MINDEF",
                "JELEBU RD",
            ]
        }
    },
    1772: {
        front: {
            renderType: "standardService",
            serviceNumber: "177",
            destination: "BUKIT BATOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "177",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "177",
                    top: "BUKIT BATOK",
                    image: "mrt"
                }, // incomplete
                "MINDEF",
                "JELEBU RD",
                "HILLVIEW AVE"
            ]
        }
    },
    1831: {
        front: {
            renderType: "standardService",
            serviceNumber: "183",
            destination: "SCIENCE PARK RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "183",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "183",
                    top: "SCIENCE PARK RD"
                }, // check
                "TOH GUAN RD EAST",
                "CLEMENTI MRT",
                "CLEMENTI RD",
                "PASIR PANJANG RD"
            ]
        }
    },
    1832: {
        front: {
            renderType: "standardService",
            serviceNumber: "183",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "183",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "183",
                    top: "JURONG EAST",
                    image: "mrt"
                }, // incomplete
                "CLEMENTI MRT",
                "TOH GUAN RD EAST"
            ]
        }
    },
    1891: {
        front: {
            renderType: "standardService",
            serviceNumber: "189",
            destination: "CLEMENTI AVE 1",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "189",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "189",
                    top: "CLEMENTI AVE 1"
                },
                "BT BATOK EAST AVE 6",
            ]
        }
    },
    1892: {
        front: {
            renderType: "standardService",
            serviceNumber: "189",
            destination: "BUKIT BATOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "189",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "189",
                    top: "BUKIT BATOK",
                    image: "mrt"
                },
                "BT BATOK EAST AVE 6",
            ]
        }
    },
    2821: {
        front: {
            renderType: "standardService",
            serviceNumber: "282",
            destination: "CLEMENTI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "282",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "282",
                    top: "CLEMENTI",
                    image: "mrt"
                },
                "CLEMENTI AVE 5",
                "CLEMENTI AVE 2",
                "CLEMENTI WEST ST 2",
            ]
        }
    },
    2841: {
        front: {
            renderType: "standardService",
            serviceNumber: "284",
            destination: "CLEMENTI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "284",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "284",
                    top: "CLEMENTI",
                    image: "mrt"
                }, // check
                "CLEMENTI AVE 4",
            ]
        }
    },
    2851: {
        front: {
            renderType: "standardService",
            serviceNumber: "285",
            destination: "CLEMENTI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "285",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "285",
                    top: "CLEMENTI",
                    image: "mrt"
                }, // check
                "CLEMENTI AVE 2",
                "WEST COAST RD",
                "PANDAN LOOP"
            ]
        }
    },
    3331: {
        front: {
            renderType: "standardService",
            serviceNumber: "333",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "333",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "333",
                    top: "JURONG EAST",
                    image: "mrt"
                },
                "TOH GUAN RD",
                "JURONG EAST AVE 1",
                "JURONG EAST ST 32"
            ]
        }
    },
    3341: {
        front: {
            renderType: "standardService",
            serviceNumber: "334",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "334",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "334",
                    top: "JURONG EAST",
                    image: "mrt"
                }, // incomplete
                "JURONG WEST ST 42",
            ]
        }
    },
    3351: {
        front: {
            renderType: "standardService",
            serviceNumber: "335",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "335",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "335",
                    top: "JURONG EAST",
                    image: "mrt"
                }, // incomplete
                "BOON LAY WAY",
            ]
        }
    },
    7001: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "NSL  Bridging  Bus",
            spacing: 2
        }
    },
    7002: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "EWL  Bridging  Bus",
            spacing: 2
        }
    },
    7003: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "NEL  Bridging  Bus",
            spacing: 2
        }
    },
    7004: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "CCL  Bridging  Bus",
            spacing: 2
        }
    },
    7005: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "DTL  Bridging  Bus",
            spacing: 2
        }
    },
    7006: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "TEL  Bridging  Bus",
            spacing: 2
        }
    },
    7007: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "LRT  Shuttle  A",
            spacing: 2
        }
    },
    7008: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "LRT  Shuttle  B",
            spacing: 2
        }
    },
    7009: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "LRT  Bridging  East",
            spacing: 2
        }
    },
    7010: {
        front: {
            renderType: "message",
            font: "Hanover-14:6",
            text: "LRT  Bridging  West",
            spacing: 2
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
            renderType: "standardService",
            serviceNumber: "/870",
            destination: "JURONG TOWN HALL",
            Destfont: "Mobitec-Tower9:4",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "870",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "870",
                    top: "JURONG TOWN HALL",
                    topfont: "Mobitec-Tower9:4",
                    bottom: "(JURONG EAST MRT)",
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
            serviceNumber: "963W",
            destination: "R W S",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "963R",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll2",
                    serviceNumber: "963R",
                    top: "RESORTS WORLD",
                    TopFont: "Mobitec-7:5:3",
                    bottom: "SENTOSA",
                    BottomFont: "Mobitec-7:5:3",
                    image: "SentosaGantry"
                },
                "C'WEALTH AVE WEST",
                "HOLLAND RD / VILLAGE",
                "ORCHARD RD",
                "SUNTEC CITY",
                "BAYFRONT AVE / MBS"
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
            ]
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
    "MAN LOGO": [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0],
        [1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1],
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
