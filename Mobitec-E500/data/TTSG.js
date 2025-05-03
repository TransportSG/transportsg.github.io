EDSFormats.TTSG = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
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
            rotateSpeed: 2600,

            font: "Mobitec-Tower6:4",
            spacing: 1
        },

        text: "$serviceNumber+' '+$destination"
        
    },
    StandardServiceOldFont: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
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
            rotateSpeed: 2600,

            font: "Mobitec-6:5",
            spacing: 1
        },

        text: "$destination+' '+$serviceNumber"
    },
    destScroll: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
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
    destScroll2: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "Mobitec-TowerIcons",
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
                right: 0
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
    TowerSpecialEDS2: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
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
    TowerSpecialEDS: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
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
                right: 'width(serviceNumber) - width(image)',
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
    0: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "",
                topFont: "Mobitec-7:6:2",
                text: ""
        }
    },
    22: {
        front: { // Reserved code for MAN A22 Logo
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "NL323F (A22)",
                topFont: "Mobitec-9:6",
                bottom: "Mobitec - 040525",
                bottomFont: "Mobitec-Tower6:4",
                image: "MAN-Logo37",
                text: "EDS Version (MAN A22)"
        }
    },
    24: {
        front: { // Reserved code for MAN A24 Logo
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "NG363F (A24)",
                topFont: "Mobitec-9:6",
                bottom: "Mobitec - 040525",
                bottomFont: "Mobitec-Tower6:4",
                image: "MAN-Logo37",
                text: "EDS Version (MAN A24)"
        }
    },
    95: {
        front: { // Reserved code for MAN A95 Logo
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "ND323F (A95)",
                topFont: "Mobitec-9:6",
                bottom: "Mobitec - 040525",
                bottomFont: "Mobitec-Tower6:4",
                image: "MAN-Logo37",
                text: "EDS Version (MAN A95)"
        }
    },
    111: {
        front: {
            renderType: "standardService",
            serviceNumber: "LCS1",
            destination: "AIRLINE RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "@1",
                    top: "AIRLINE RD",
                    topFont: "Mobitec-9:6",
                    bottom: "LOYANG WAY",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "@1",
                    top: "AIRLINE RD",
                    topFont: "Mobitec-9:6",
                    bottom: "TELOK PAKU RD",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "@1",
                    top: "AIRLINE RD",
                    topFont: "Mobitec-9:6",
                    bottom: "ALPS AVE",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "@1",
                    top: "AIRLINE RD",
                    topFont: "Mobitec-9:6",
                    bottom: "AIRPORT CARGO RD",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "@1",
                    top: "AIRLINE RD",
                    bottom: "(CHANGI AIRFREIGHT CTR)",
                }
            ]
        }
    },
    112: { // Done
        front: {
            renderType: "standardService",
            serviceNumber: "LCS1",
            destination: "TAMPINES AVE 9",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "@2",
                    top: "TAMPINES AVE 9",
                    topFont: "Mobitec-9:6",
                    bottom: "TAMPINES AVE 4/3/8",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "@2",
                    top: "TAMPINES AVE 9",
                    topFont: "Mobitec-9:6",
                    bottom: "TAMPINES AVE 5/6",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "@1",
                    top: "TAMPINES AVE 9",
                }
            ]
        }
    },
    211: {
        front: {
            renderType: "standardService",
            serviceNumber: "LCS2",
            destination: "AIRLINE RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "@2",
                    top: "AIRLINE RD",
                    topFont: "Mobitec-9:6",
                    bottom: "LOYANG WAY",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "@2",
                    top: "AIRLINE RD",
                    topFont: "Mobitec-9:6",
                    bottom: "TELOK PAKU RD",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "@2",
                    top: "AIRLINE RD",
                    topFont: "Mobitec-9:6",
                    bottom: "ALPS AVE",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "@2",
                    top: "AIRLINE RD",
                    topFont: "Mobitec-9:6",
                    bottom: "AIRPORT CARGO RD",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "@2",
                    top: "AIRLINE RD",
                    bottom: "(CHANGI AIRFREIGHT CTR)",
                }
            ]
        }
    },
    212: { // Done
        front: {
            renderType: "standardService",
            serviceNumber: "LCS2",
            destination: "PUNGGOL WAY",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "@2",
                    top: "PUNGGOL WAY",
                    topFont: "Mobitec-9:6",
                    bottom: "PUNGGOL CTRL",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "@2",
                    top: "PUNGGOL WAY",
                    topFont: "Mobitec-9:6",
                    bottom: "PUNGGOL WALK",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "@2",
                    top: "PUNGGOL WAY",
                    topFont: "Mobitec-9:6",
                    bottom: "PUNGGOL FIELD",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "@2",
                    top: "PUNGGOL WAY",
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
                    top: "JALAN ANAK BUKIT",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "41",
                    top: "JURONG EAST",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "49",
                    top: "JURONG WEST ST 42",
                },
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
                    top: "JURONG EAST",
                }
            ]
        }
    },
    501: {
        front: { // Reserved code for Enviro 500 (New ADL Logo)
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "ENVIRO 500",
                topFont: "Mobitec-Enviro500 Wording",
                bottom: "Mobitec - 150324",
                bottomFont: "Mobitec-Tower6:4",
                image: "NEW ADL LOGO",
                text: "EDS Version (ADL E500 New Logo)"
        }
    },
    661: {
        front: {
            renderType: "standardService",
            serviceNumber: "66",
            destination: "UPP BT TIMAH RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "UPP BT TIMAH RD",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "JURONG EAST",
                }
            ]
        }
    },
    771: {
        front: {
            renderType: "standardService",
            serviceNumber: "77",
            destination: "RAFFLES BLVD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "RAFFLES BLVD",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "BUKIT BATOK",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "STAMFORD RD",
                }
            ]
        }
    },
    781: {
        front: {
            renderType: "standardService",
            serviceNumber: "78",
            destination: "CLEMENTI AVE 3",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "CLEMENTI AVE 3",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "JURONG TOWN HALL",
                }
            ]
        }
    },
    783: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "78A TANJONG PENJURU",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "78A",
                    top: "TANJONG PENJURU",
                },
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
                    top: "BOON LAY",
                }
            ]
        }
    },
    792: {
        front: {
            renderType: "standardService",
            serviceNumber: "79",
            destination: "JURONG TOWN HALL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "79",
                    top: "JURONG TOWN HALL",
                }
            ]
        }
    },
    793: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "79T BOON LAY INT",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "79T",
                    top: "BOON LAY",
                },
            ]
        }
    },
    961: {
        front: {
            renderType: "standardService",
            serviceNumber: "96",
            destination: "KENT RIDGE CRES",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "96",
                    top: "KENT RIDGE CRES",
                }
            ]
        }
    },
    962: {
        front: {
            renderType: "standardService",
            serviceNumber: "96",
            destination: "CLEMENTI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "96",
                    top: "CLEMENTI",
                }
            ]
        }
    },
    963: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "96A KENT RIDGE CRESCENT",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "96A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Kent Ridge Cres",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "96A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "(NUS Raffles Hall)",
                    bottomFont: "Mobitec-Tower6:4",
                }
            ]
        }
    },
    964: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "96B CLEMENTI STN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "96B",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Clementi Stn Exit A",
                    bottomFont: "Mobitec-Tower6:4",
                },
            ]
        }
    },  
    971: {
        front: {
            renderType: "standardService",
            serviceNumber: "97",
            destination: "RAFFLES BLVD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "RAFFLES BLVD",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "JURONG EAST",
                }
            ]
        }
    },
    973: {
        front: {
            renderType: "standardService",
            serviceNumber: "97e",
            destination: "RAFFLES BLVD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "EXPRESS",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "RAFFLES BLVD",
                    bottomFont: "Mobitec-9:6",
                },
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
                    top: "EXPRESS",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "JURONG EAST",
                    bottomFont: "Mobitec-9:6",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "CENTRAL BLVD",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "EXPRESS",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "JURONG EAST",
                    bottomFont: "Mobitec-9:6",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "98",
                    top: "JURONG EAST",
                }
            ]
        }
    },
    983: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "98A CORPORATION RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "98A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Corporation Rd",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "98A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "(Corporation Pl)",
                    bottomFont: "Mobitec-Tower6:4",
                }
            ]
        }
    },
    984: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "98B JURONG PIER WAY",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "98B",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Jurong Pier Way",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "98B",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "(Jurong Island Chkpt)",
                    bottomFont: "Mobitec-Tower6:4",
                }
            ]
        }
    },
    988: {
        front: {
            renderType: "standardService",
            serviceNumber: "98M",
            destination: "CORPORATION RD",
            scrolls: [
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
                {
                    renderType: "destScroll",
                    serviceNumber: "98M",
                    top: "JURONG EAST",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "SHENTON WAY",
                },
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
                    top: "BUKIT BATOK",
                }
            ]
        }
    },
    1063: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "106A CLEMENTI STN",
            scrolls: [

                {
                    renderType: "destScroll",
                    serviceNumber: "106A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Clementi Stn Exit B",
                    bottomFont: "Mobitec-Tower6:4",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "Skip",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Marina Bay / Bayfront",
                    bottomFont: "Mobitec-Tower6:4",
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
                    bottom: "Marina Bay",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "Skip",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Raffles Ave",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "BUKIT BATOK",
                }
            ]
        }
    },
    1111: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "Off Service",
            destFont: "Mobitec-7:7",
            scrolls: [
                {
                    renderType: "message",
                    text: "Off Service",
                    font: "Hanover-Tower16:10",
                    spacing: 2
                },
                {
                    renderType: "TowerSpecialEDS",
                    serviceNumber: "",
                    top: "~+",
                    topFont: "Mobitec-Tower16:10",
    
                    text: "Tower Transit Logo"
                },
                {
                    renderType: "message",
                    text: "Off Service",
                    font: "Hanover-Tower16:10",
                    spacing: 2
                },
                {
                    renderType: "TowerSpecialEDS",
                    serviceNumber: "",
                    top: "~+",
                    topFont: "Mobitec-Tower16:10",
    
                    text: "Tower Transit Logo"
                },
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
                    top: "JURONG EAST",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "143",
                    top: "TOA PAYOH",
                }
            ]
        }
    },
    1433: {
        front: {
            renderType: "standardService",
            serviceNumber: "143M",
            destination: "PANDAN GARDENS",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "143M",
                    top: "PANDAN GARDENS",
                }
            ]
        }
    },
    1434: {
        front: {
            renderType: "standardService",
            serviceNumber: "143M",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "143M",
                    top: "JURONG EAST",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "SEMBAWANG",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "169",
                    top: "ANG MO KIO",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "169",
                    top: "WOODLANDS",
                }
            ]
        }
    },
    1693: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "169A OPP YISHUN STN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "169A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Opp Yishun Stn",
                    bottomFont: "Mobitec-Tower6:4",
                }
            ]
        }
    },
    1694: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "169B WOODLANDS AVE 8",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "169B",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Woodlands Ave 8",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "169B",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "(Bef W'lands Ind Pk E3)",
                    bottomFont: "Mobitec-Tower6:4",
                }
            ]
        }
    },
    1711: {
        front: {
            renderType: "standardService",
            serviceNumber: "171",
            destination: "UPP BT TIMAH RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "UPP BT TIMAH RD",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "YISHUN",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "173",
                    top: "CLEMENTI",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "173",
                    top: "BUKIT BATOK",
                }
            ]
        }
    },
    1733: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "173A BT BATOK EAST AVE 4",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "173A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Bukit Batok East Ave 4",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "173A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "(Blk 254)",
                    bottomFont: "Mobitec-Tower6:4",
                }
            ]
        }
    },
    1771: {
        front: {
            renderType: "standardService",
            serviceNumber: "177",
            destination: "JELEBU RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "177",
                    top: "JELEBU RD",
                }
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
                    top: "BUKIT BATOK",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "183",
                    top: "JURONG EAST",
                }
            ]
        }
    },
    1833: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "183B TOH TUCK AVE",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "183B",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Toh Tuck Ave",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "183B",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "(Aft Toh Tuck Link)",
                    bottomFont: "Mobitec-Tower6:4",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "189",
                    top: "BUKIT BATOK",
                }
            ]
        }
    },
    1893: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "189A BUKIT BATOK ST 23",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "189A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Bukit Batok St 23",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "189A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "(Opp Midview Bldg)",
                    bottomFont: "Mobitec-Tower6:4",
                }
            ]
        }
    },
    2222: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "Spare Bus",
            destFont: "Mobitec-7:7",
            scrolls: [
                {
                    renderType: "message",
                    text: "Spare Bus",
                    font: "Hanover-Tower16:10",
                    spacing: 2
                },
            ]
        }
    },
    2821: {
        front: {
            renderType: "standardService",
            serviceNumber: "282",
            destination: "CLEMENTI WEST ST 2",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "282",
                    top: "CLEMENTI WEST ST 2",
                    topFont: "Mobitec-Tower9:4",
                }
            ]
        }
    },
    2822: {
        front: {
            renderType: "standardService",
            serviceNumber: "282",
            destination: "CLEMENTI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "282",
                    top: "CLEMENTI",
                }
            ]
        }
    },
    2841: {
        front: {
            renderType: "standardService",
            serviceNumber: "284",
            destination: "CLEMENTI AVE 4",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "284",
                    top: "CLEMENTI AVE 4",
                }
            ]
        }
    },
    2842: {
        front: {
            renderType: "standardService",
            serviceNumber: "284",
            destination: "CLEMENTI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "284",
                    top: "CLEMENTI",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "285",
                    top: "PANDAN LOOP",
                }
            ]
        }
    },
    2852: {
        front: {
            renderType: "standardService",
            serviceNumber: "285",
            destination: "CLEMENTI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "285",
                    top: "CLEMENTI",
                }
            ]
        }
    },
    3331: {
        front: {
            renderType: "standardService",
            serviceNumber: "333",
            destination: "JURONG EAST ST 32",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "333",
                    top: "JURONG EAST ST 32",
                    topFont: "Mobitec-Tower9:4",
                }
            ]
        }
    },
    3332: {
        front: {
            renderType: "standardService",
            serviceNumber: "333",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "333",
                    top: "JURONG EAST",
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
            destination: "JURONG WEST ST 42",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "334",
                    top: "JURONG WEST ST 42",
                    topFont: "Mobitec-Tower9:4",
                }
            ]
        }
    },
    3342: {
        front: {
            renderType: "standardService",
            serviceNumber: "334",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "334",
                    top: "JURONG EAST",
                }
            ]
        }
    },
    3351: {
        front: {
            renderType: "standardService",
            serviceNumber: "335",
            destination: "JURONG EAST ST 41",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "335",
                    top: "JURONG EAST ST 42",
                    topFont: "Mobitec-Tower9:4",
                }
            ]
        }
    },
    3352: {
        front: {
            renderType: "standardService",
            serviceNumber: "335",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "335",
                    top: "JURONG EAST",
                }
            ]
        }
    },
    4444: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "On Test",
            destFont: "Mobitec-7:7",
            scrolls: [
                {
                    renderType: "message",
                    text: "On Test",
                    font: "Hanover-Tower16:10",
                    spacing: 2
                },
            ]
        }
    },
    5000: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "Route Familiarisation Training",
            destFont: "Mobitec-7:7",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Route Familiarisation ",
                    topFont: "Hanover-7:6:1",
                    bottom: "Training",
                    bottomFont: "Hanover-7:6:1",
                },
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
    5555: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "Training Bus",
            destFont: "Mobitec-7:7",
            scrolls: [
                {
                    renderType: "message",
                    text: "Training  Bus",
                    font: "TTS-16:9",
                    spacing: 2
                },
            ]
        }
    },
    5888: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "EDS VERSION (SMB5888H)",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "World's 1st MAN A95",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "Double Decker Bus",
                    bottomFont: "Mobitec-Tower6:4",
                    image: "MAN-Logo32"
                },
                {
                    renderType: "TowerSpecialEDS",
                    serviceNumber: "",
                    top: "ND323F (A95)",
                    topFont: "Mobitec-9:6",
                    bottom: "Mobitec - 040525 (D)",
                    bottomFont: "Mobitec-Tower6:4",
                    image: "MAN-Logo32",
                    text: "MAN A95"
                }
            ]
        }
    },
    5998: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "BULIM DEPOT CREW BUS",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Bulim Depot",
                    topFont: "Mobitec-Tower9:7",
                    bottom: "Crew Bus",
                    bottomFont: "Hanover-7:4",
                    image: "logo",
                },
            ]
        }
    },
    5999: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "MANDAI DEPOT CREW BUS",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Mandai Depot",
                    topFont: "Mobitec-Tower9:7",
                    bottom: "Crew Bus",
                    bottomFont: "Hanover-7:4",
                    image: "logo",
                },
            ]
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
    6635: { // 663 PM Peak for ref when reverting back post-celebration
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
    6666: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "Tower Transit Logo",
            destFont: "Mobitec-7:4",
            scrolls: [
                {
                    renderType: "TowerSpecialEDS",
                    serviceNumber: "",
                    top: "~+",
                    topFont: "Mobitec-Tower16:10",
    
                    text: "Tower Transit Logo"
                },
                {
                    renderType: "TowerSpecialEDS",
                    serviceNumber: "",
                    top: "~+",
                    topFont: "Mobitec-Tower16:10",
    
                    text: "Tower Transit Logo"
                },
            ]
        }
    },
    6667: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "Welcome page",
            destFont: "Mobitec-7:4",
            scrolls: [

                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "New Destination only format",
                    topFont: "Hanover-7:3",
                    bottom: "w.e.f May 2025",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "New Destination only format",
                    topFont: "Hanover-7:3",
                    bottom: "w.e.f May 2025",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Original format still available",
                    topFont: "Hanover-7:3",
                    bottom: "under TTSG-Original operator",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Original format still available",
                    topFont: "Hanover-7:3",
                    bottom: "under TTSG-Original operator",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "TowerSpecialEDS",
                    serviceNumber: "",
                    top: "~+",
                    topFont: "Mobitec-Tower16:10",
    
                    text: "Tower Transit Logo"
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
    6741: {
        front: {
            renderType: "standardService",
            serviceNumber: "674",
            destination: "MARINA BLVD",
            scrolls: [
                "TENGAH GARDEN AVE",
                "TENGAH BOULEVARD",
                "PLANTATION CRESCENT",
                "ANSON RD",
                "ROBINSON RD",
                {
                    renderType: "destScroll",
                    serviceNumber: "674",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "674",
                    top: "Have a pleasant",
                    topFont: "Hanover-7:3",
                    bottom: "journey!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "674",
                    top: "MARINA BLVD",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "674",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "TENGAH >> CBD",
                    bottomFont: "Mobitec-5:3",
                }
            ]
        }
    },
    6742: {
        front: {
            renderType: "standardService",
            serviceNumber: "674",
            destination: "TENGAH DR",
            scrolls: [
                "CENTRAL BOULEVARD",
                "SHENTON WAY",
                "PLANTATION CRESCENT",
                "TENGAH BOULEVARD",
                "TENGAH GARDEN AVE",
                {
                    renderType: "destScroll",
                    serviceNumber: "674",
                    top: "Welcome on board",
                    topFont: "Hanover-7:3",
                    bottom: "Tower Transit",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "674",
                    top: "Have a safe ride",
                    topFont: "Hanover-7:3",
                    bottom: "home!",
                    bottomFont: "Hanover-7:3",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "674",
                    top: "TENGAH DR"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "674",
                    top: "City Direct",
                    topFont: "Mobitec-Tower10:7",
                    bottom: "CBD >> TENGAH",
                    bottomFont: "Mobitec-5:3",
                }
            ]
        }
    },
    7777: {
        front: {
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "SGUS",
                topFont: "SGBusLogo-Mobitec",
                text: "SG🎔Bus Logo"
        }
    },
    8011: {
        front: {
            renderType: "standardService",
            serviceNumber: "801",
            destination: "YISHUN AVE 1",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "801",
                    top: "YISHUN AVE 1",
                }
            ]
        }
    },
    8012: {
        front: {
            renderType: "standardService",
            serviceNumber: "801",
            destination: "YISHUN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "801",
                    top: "YISHUN",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "825",
                    top: "YIO CHU KANG",
                }
            ]
        }
    },
    8252: {
        front: {
            renderType: "standardService",
            serviceNumber: "825",
            destination: "YIO CHU KANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "825",
                    top: "YIO CHU KANG",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "LOR 1 GEYLANG",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "YISHUN",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "853M",
                    top: "UPP EAST COAST",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "853M",
                    top: "YISHUN",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "854",
                    top: "BEDOK",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "854",
                    top: "YISHUN",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "854e",
                    top: "EXPRESS",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "BEDOK",
                    bottomFont: "Mobitec-9:6",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "855",
                    top: "HARBOURFRONT",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "855",
                    top: "YISHUN",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "856",
                    top: "WOODLANDS",
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
                }
            ]
        }
    },
    8563: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "856A WOODLANDS TRAIN CHECKPOINT",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "856A",
                    top: "ENDS AT",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Woodlands Train Checkpoint",
                    bottomFont: "Hanover-6:3",
                },
            ]
        }
    },
    8564: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "856B CANBERRA RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "856B",
                    top: "ENDS AT",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Canberra Rd",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "856B",
                    top: "ENDS AT",
                    topFont: "Mobitec-7:5:3",
                    bottom: "(Aft Admiral Hill)",
                    bottomFont: "Mobitec-Tower6:4",
                },
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
                    top: "TEMASEK AVE",
                    bottom: "(PROMENADE STN)",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "YISHUN",
                }
            ]
        }
    },
    8573: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "857A YIO CHU KANG RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "857A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Opp Sunrise Gdns",
                    bottomFont: "Mobitec-Tower6:4",
                },
            ]
        }
    },
    8574: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "857B PROMENADE STN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "857B",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Promenade Stn",
                    bottomFont: "Mobitec-Tower6:4",
                },
            ]
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
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "STAMFORD RD",
                }
            ]
        }
    },
    8579: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "857B CITY HALL STN (F1)",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "857B",
                    top: "ENDS AT",
                    topFont: "Mobitec-7:5:3",
                    bottom: "City Hall Stn",
                    bottomFont: "Mobitec-Tower6:4",
                },
            ]
        }
    },
    8581: {
        front: {
            renderType: "standardService",
            serviceNumber: "858",
            destination: "PTB1 BASEMENT",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "858",
                    top: "PTB1 BASEMENT",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "858",
                    top: "WOODLANDS",
                }
            ]
        }
    },
    8583: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "858A OPP YISHUN STN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "858A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Opp Yishun Stn",
                    bottomFont: "Mobitec-Tower6:4",
                },
            ]
        }
    },
    8584: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "858B JALAN KAYU",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "858B",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Jln Kayu",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "858B",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "(Aft Seletar Camp G)",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "858B",
                    top: "JLN KAYU",
                    topFont: "Mobitec-9:6",
                    bottom: "CHANGI AIRPORT",
                    bottomFont: "Mobitec-Tower6:4",
                    image: "ChangiAirportControlTower"
                },
            ]
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
                    top: "YISHUN",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "859",
                    top: "SEMBAWANG",
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
            destination: "SEMBAWANG DR",
            scrolls: [ 
                {
                    renderType: "destScroll",
                    serviceNumber: "859B",
                    top: "SEMBAWANG DR",
                }
            ]
        }
    },
    8595: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "859T YISHUN INT",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "859T",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Yishun Int",
                    bottomFont: "Mobitec-Tower6:4",
                },
            ]
        }
    },
    8611: {
        front: {
            renderType: "standardService",
            serviceNumber: "861",
            destination: "YISHUN RING RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "861",
                    top: "YISHUN RING RD"
                }
            ]
        }
    },
    8612: {
        front: {
            renderType: "standardService",
            serviceNumber: "861",
            destination: "SEMBAWANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "861",
                    top: "SEMBAWANG",
                }
            ]
        }
    },
    8613: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "861A KHATIB STN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "861A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Yishun Ring Rd",
                    bottomFont: "Mobitec-Tower6:4",
                    image: "mrt"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "861A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "(Khatib Stn Exit D)",
                    bottomFont: "Mobitec-Tower6:4",
                    image: "mrt"
                },
            ]
        }
    },
    8614: {
        front: {
            renderType: "standardService",
            serviceNumber: "861B",
            destination: "CANBERRA LINK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "861B",
                    top: "CANBERRA LINK",
                }
            ]
        }
    },
    8615: {
        front: {
            renderType: "standardService",
            serviceNumber: "861M",
            destination: "SEMBAWANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "861M",
                    top: "SEMBAWANG",
                },
            ]
        }
    },
    8701: {
        front: {
            renderType: "standardService",
            serviceNumber: "870",
            destination: "TENGAH",
            scrolls: [
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
                {
                    renderType: "destScroll",
                    serviceNumber: "870",
                    top: "JURONG TOWN HALL",
                    topFont: "Mobitec-Tower9:4",
                }
            ]
        }
    },
    8711: {
        front: {
            renderType: "standardService",
            serviceNumber: "871",
            destination: "UPP BT TIMAH RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "871",
                    top: "UPP BT TIMAH RD",
                }
            ]
        }
    },
    8712: {
        front: {
            renderType: "standardService",
            serviceNumber: "871",
            destination: "TENGAH",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "871",
                    top: "TENGAH",
                }
            ]
        }
    },
    8713: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "871A BUKIT BATOK EAST AVE 2",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "871A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Bukit Batok East Ave 2",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "871A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "(Blk 240)",
                    bottomFont: "Mobitec-Tower6:4",
                }
            ]
        }
    },
    8821: {
        front: {
            renderType: "standardService",
            serviceNumber: "882",
            destination: "SEMBAWANG RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "882",
                    top: "SEMBAWANG RD",
                }
            ]
        }
    },
    8822: {
        front: {
            renderType: "standardService",
            serviceNumber: "882",
            destination: "SEMBAWANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "882",
                    top: "SEMBAWANG",
                }
            ]
        }
    },
    8823: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "882A MONTREAL LINK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "882A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Montreal Link",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "882A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "(Blk 592A)",
                    bottomFont: "Mobitec-Tower6:4",
                },
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
                    top: "YISHUN CTRL 2",
                    bottom: "(YISHUN COMMUNITY HOSP)",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "883",
                    top: "SEMBAWANG",
                }
            ]
        }
    },
    8833: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "883A CANBERRA WAY",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "883A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Canberra Way",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "883A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "(Blk 129A)",
                    bottomFont: "Mobitec-Tower6:4",
                }
            ]
        }
    },
    8834: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "883B SEMBAWANG RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "883B",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Sembawang Rd",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "883B",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "(Opp Blk 590C)",
                    bottomFont: "Mobitec-Tower6:4",
                }
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
            destination: "B.B WEST AVE 9",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "941",
                    top: "B.B WEST AVE 9",
                }
            ]
        }
    },
    9412: {
        front: {
            renderType: "standardService",
            serviceNumber: "941",
            destination: "BUKIT BATOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "941",
                    top: "BUKIT BATOK",
                }
            ]
        }
    },
    9451: {
        front: {
            renderType: "standardService",
            serviceNumber: "945",
            destination: "BT BATOK ST 34",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "945",
                    top: "BT BATOK ST 23",
                }
            ]
        }
    },
    9452: {
        front: {
            renderType: "standardService",
            serviceNumber: "945",
            destination: "BUKIT BATOK",
            scrolls: [

                {
                    renderType: "destScroll",
                    serviceNumber: "945",
                    top: "BUKIT BATOK",
                }
            ]
        }
    },
    9471: {
        front: {
            renderType: "standardService",
            serviceNumber: "947",
            destination: "BUKIT BATOK RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "947",
                    top: "BUKIT BATOK RD",
                }
            ]
        }
    },
    9472: {
        front: {
            renderType: "standardService",
            serviceNumber: "947",
            destination: "BUKIT BATOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "947",
                    top: "BUKIT BATOK",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "963",
                    top: "HARBOURFRONT",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "963",
                    top: "WOODLANDS",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "963e",
                    top: "EXPRESS",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "HARBOURFRONT",
                    bottomFont: "Mobitec-9:6",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "963e",
                    top: "EXPRESS",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "WOODLANDS",
                    bottomFont: "Mobitec-9:6",
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
                    top: "SENGKANG",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "965",
                    top: "WOODLANDS",
                }
            ]
        }
    },
    9653: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "965A OPP YISHUN STN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "965A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Opp Yishun Stn",
                    bottomFont: "Mobitec-Tower6:4",
                    image: "mrt"
                },
            ]
        }
    },
    9654: {
        front: {
            renderType: "standardService",
            serviceNumber: "965T",
            destination: "SENGKANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "965T",
                    top: "SENGKANG",
                }
            ]
        }
    },
    9661: {
        front: {
            renderType: "standardService",
            serviceNumber: "966",
            destination: "MARINE PARADE RD",

            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "MARINE PARADE RD",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "WOODLANDS",
                }
            ]
        }
    },
    9663: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "966A MARINE PDE RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "MARINE PDE RD",
                },
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
                    top: "TAMPINES",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "969",
                    top: "WOODLANDS",
                }
            ]
        }
    },
    9693: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "969A YISHUN STN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "969A",
                    top: "Ends At",
                    topFont: "Mobitec-7:5:3",
                    bottom: "Yishun Stn",
                    bottomFont: "Mobitec-Tower6:4",
                },
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
                    top: "LOR 1 GEYLANG",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "980",
                    top: "SEMBAWANG",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "981",
                    top: "SEMBAWANG",
                }
            ]
        }
    },
    9901: {
        front: {
            renderType: "standardService",
            serviceNumber: "990",
            destination: "JUR GATEWAY RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "990",
                    top: "JUR GATEWAY RD",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "990",
                    top: "BUKIT BATOK",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "992",
                    top: "BUKIT BATOK",
                }
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
            renderType: "standardService",
            serviceNumber: "",
            destination: "Last Bus",
            destFont: "Mobitec-7:4",
            scrolls: [
                {
                    renderType: "message",
                    font: "Mobitec-13:8",
                    text: "Last Bus",
                    spacing: 2
                },
            ]
        }
    },
    2: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "Temporary Route Diversion",
            destFont: "Mobitec-7:4",
            scrolls: [
                {
                    renderType: "message",
                    font: "Mobitec-7:5:3",
                    text: "Temporary Route Diversion",
                    spacing: 1
                },
            ]
        }
    },
    3: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "Bus Full",
            destFont: "Mobitec-7:4",
            scrolls: [
                {
                    renderType: "message",
                    font: "Mobitec-13:8",
                    text: "Bus Full",
                    spacing: 2
                },
            ]
        }
    },
    10: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "Merry Christmas (Calendar)",
            destFont: "Mobitec-7:4",
            scrolls: [
                {
                    renderType: "destScroll2",
                    serviceNumber: "0",
                    top: "Merry Christmas &",
                    topFont: "Hanover-7:3",
                    bottom: "Happy New Year",
                    bottomFont: "Hanover-7:3",
                    image: "calendar-new"
                },
            ]
        }
    },
    11: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "Merry Christmas (Christmas Tree)",
            destFont: "Mobitec-7:4",
            scrolls: [
                {
                    renderType: "destScroll2",
                    serviceNumber: "2",
                    top: "Merry Christmas &",
                    topFont: "Hanover-7:3",
                    bottom: "Happy New Year",
                    bottomFont: "Hanover-7:3",
                    image: "christmas-tree"
                },
            ]
        }
    },
    20: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "蛇年顺利 (Smooth Year of The Snake)",
            destFont: "MobitecChinese-7:4",
            scrolls: [
                {
                    renderType: "destScroll2",
                    serviceNumber: "4",
                    top: "蛇|年|顺|利",
                    topFont: "Mobitec-TowerCNYGreetings",
                    bottom: "0 1 2",
                    bottomFont: "Mobitec-TowerCNYGreetings",
                    image: "cny"
                },
            ]
        }
    },
    21: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "蛇年吉祥 (Auspicious Year of The Snake)",
            destFont: "MobitecChinese-7:4",
            scrolls: [
                {
                    renderType: "destScroll2",
                    serviceNumber: "4",
                    top: "蛇|年|吉|祥",
                    topFont: "Mobitec-TowerCNYGreetings",
                    bottom: "0 1 2",
                    bottomFont: "Mobitec-TowerCNYGreetings",
                    image: "cny"
                },
            ]
        }
    },
    50: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "Happy Kindness Day",
            destFont: "Mobitec-7:4",
            scrolls: [
                {
                    renderType: "destScroll2",
                    serviceNumber: "",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "May 2025",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
            ]
        }
    },
}


EDSImages.TTSG = {
    blank: [
           []
           ],
    towel: [
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0],
        [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    ],
    logo: [
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0],
        [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1],
        [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1],
        [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    ],
    'logo-text': [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
    "calendar-old": [
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
    "calendar-new": [
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    "christmas-tree": [
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1],
        [0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    ],
    "christmas-tree-old": [
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
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    ],
    cny: [ // 福
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0],
        [1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1],
        [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    ],
    "cny-inverted": [ // Inverted 福
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
