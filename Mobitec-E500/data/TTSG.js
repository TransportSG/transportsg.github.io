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
     ExpressdestScroll: { // Used for skip/cds/express
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
            spacing: 3,
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
    ExpressdestScroll2: { // Used for skip
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
                    serviceNumber: "@1",
                    top: "TAMPINES AVE 9",
                    topFont: "Mobitec-9:6",
                    bottom: "TAMPINES AVE 4/3/8",
                    bottomFont: "Mobitec-Tower6:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "@1",
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
            destination: "JUR WEST ST 42",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "49",
                    top: "JUR WEST ST 42",
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
    500: {
        front: { // Reserved code for Enviro 500 (New ADL Logo)
                renderType: "TowerSpecialEDS",
                serviceNumber: "",
                top: "ENVIRO 500",
                topFont: "Mobitec-Enviro500 Wording",
                bottom: "Mobitec - 040525",
                bottomFont: "Mobitec-Tower6:4",
                image: "NEW ADL LOGO",
                text: "EDS Version (ADL Enviro 500)"
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
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "77",
                    top: "SKIP BRAS BASAH RD",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "STAMFORD RD",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "77",
                    top: "SKIP RAFFLES BLVD",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "STAMFORD RD",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "STAMFORD RD",
                },
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
            serviceNumber: "78A",
            destination: "TANJONG PENJURU",
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
            serviceNumber: "79T",
            destination: "BOON LAY",
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
            serviceNumber: "96A",
            destination: "KENT RIDGE CRES",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "96A",
                    top: "KENT RIDGE CRES",
                }
            ]
        }
    },
    964: {
        front: {
            renderType: "standardService",
            serviceNumber: "96B",
            destination: "C'WEALTH AVE W.",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "96B",
                    top: "C'WEALTH AVE W.",
                }
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
                    renderType: "ExpressdestScroll",
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
                    renderType: "ExpressdestScroll",
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
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "97",
                    top: "SKIP BAYFRONT AVE",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "CENTRAL BLVD",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "97",
                    top: "SKIP RAFFLES BLVD",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "CENTRAL BLVD",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "CENTRAL BLVD",
                },
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
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "97e",
                    top: "SKIP BAYFRONT AVE",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "CENTRAL BLVD",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "97e",
                    top: "SKIP RAFFLES BLVD",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "CENTRAL BLVD",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "CENTRAL BLVD",
                },
            ]
        }
    },
    981: {
        front: {
            renderType: "standardService",
            serviceNumber: "98",
            destination: "JURONG PIER WAY",
            scrolls: [
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
            serviceNumber: "98A",
            destination: "CORPORATION RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "98A",
                    top: "CORPORATION RD",
                }
            ]
        }
    },
    984: {
        front: {
            renderType: "standardService",
            serviceNumber: "98B",
            destination: "JURONG PIER WAY",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "98B",
                    top: "JURONG PIER RD",
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
            serviceNumber: "106A",
            destination: "C'WEALTH AVE W.",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "106A",
                    top: "C'WEALTH AVE W.",
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
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "106",
                    top: "SKIP TEMASEK AVE",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "SHENTON WAY",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "106",
                    top: "SKIP BAYFRONT AVE",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "SHENTON WAY",
                    bottomFont: "Mobitec-9:6",
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
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "106",
                    top: "SKIP BAYFRONT AVE",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "BUKIT BATOK",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "106",
                    top: "SKIP RAFFLES AVE",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "BUKIT BATOK",
                    bottomFont: "Mobitec-9:6",
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
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Off Service",
                    topFont: "Hanover-Tower16:10",
                    image: "logo",
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
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "167",
                    top: "SKIP FULLERTON RD",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "BUKIT MERAH",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "167",
                    top: "SKIP COLLYER QUAY",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "BUKIT MERAH",
                    bottomFont: "Mobitec-9:6",
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
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "167",
                    top: "SKIP FULLERTON RD",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "SEMBAWANG",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "167",
                    top: "SKIP ESPLANADE DR",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "SEMBAWANG",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "SEMBAWANG",
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
            serviceNumber: "169A",
            destination: "YISHUN AVE 2",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "169A",
                    top: "YISHUN AVE 2",
                }
            ]
        }
    },
    1694: {
        front: {
            renderType: "standardService",
            serviceNumber: "169B",
            destination: "WOODLANDS AVE 8",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "169B",
                    top: "WOODLANDS AVE 8",
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
            serviceNumber: "173A",
            destination: "B.B EAST AVE 4",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "173A",
                    top: "B.B EAST AVE 4",
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
            serviceNumber: "183B",
            destination: "TOH TUCK AVE",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "183B",
                    top: "TOH TUCK AVE",
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
            serviceNumber: "189A",
            destination: "BUKIT BATOK ST 23",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "189A",
                    top: "BT BATOK ST 23",
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
            destination: "CLEMENTI W. ST 2",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "282",
                    top: "CLEMENTI W. ST 2",
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
            destination: "PANDAN LOOP",
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
            destination: "JUR EAST ST 32",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "333",
                    top: "JUR EAST ST 32",
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
            destination: "JUR WEST ST 42",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "334",
                    top: "JUR WEST ST 42",
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
            destination: "JUR WEST ST 41",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "335",
                    top: "JUR WEST ST 41",
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
    4361: {
        front: {
            renderType: "standardService",
            serviceNumber: "S36",
            destination: "HARBOUFRONT",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "S36",
                    top: "SHUTTLE 36",
                    topFont: "Mobitec-9:6",
                    bottom: "Bishan - HarbourFront",
                    bottomFont: "Hanover-6:3",
                },
            ]
        }
    },
    4362: {
        front: {
            renderType: "standardService",
            serviceNumber: "S36",
            destination: "BISHAN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "S36",
                    top: "SHUTTLE 36",
                    topFont: "Mobitec-9:6",
                    bottom: "HarbourFront - Bishan",
                    bottomFont: "Hanover-6:3",
                },
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
    4521: {
        front: {
            renderType: "standardService",
            serviceNumber: "452",
            destination: "JALAN ANAK BUKIT",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "452",
                    top: "JALAN ANAK BUKIT",
                }
            ]
        }
    },
    4522: {
        front: {
            renderType: "standardService",
            serviceNumber: "452",
            destination: "TENGAH",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "452",
                    top: "TENGAH",
                }
            ]
        }
    },
    4531: {
        front: {
            renderType: "standardService",
            serviceNumber: "453",
            destination: "BUKIT BATOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "453",
                    top: "BUKIT BATOK",
                }
            ]
        }
    },
    4532: {
        front: {
            renderType: "standardService",
            serviceNumber: "453",
            destination: "TENGAH",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "453",
                    top: "TENGAH",
                }
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
                {
                    renderType: "ExpressdestScroll",
                    serviceNumber: "651",
                    top: "CITY DIRECT",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "MARINA BLVD",
                    bottomFont: "Mobitec-9:6",
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
                {
                    renderType: "ExpressdestScroll",
                    serviceNumber: "651",
                    top: "CITY DIRECT",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "JURONG WEST AVE 3",
                    bottomFont: "Mobitec-9:6",
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
                {
                    renderType: "ExpressdestScroll",
                    serviceNumber: "653",
                    top: "CITY DIRECT",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "MARINA BLVD",
                    bottomFont: "Mobitec-9:6",
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
                {
                    renderType: "ExpressdestScroll",
                    serviceNumber: "653",
                    top: "CITY DIRECT",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "HILLVIEW AVE",
                    bottomFont: "Mobitec-9:6",
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
                {
                    renderType: "ExpressdestScroll",
                    serviceNumber: "656",
                    top: "CITY DIRECT",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "SHENTON WAY",
                    bottomFont: "Mobitec-9:6",
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
                {
                    renderType: "ExpressdestScroll",
                    serviceNumber: "656",
                    top: "CITY DIRECT",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "CANBERRA RD",
                    bottomFont: "Mobitec-9:6",
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
                {
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "656",
                    top: "SKIP BRAS BASAH RD",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "SHENTON WAY",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "656",
                    top: "SKIP COLLYER QUAY",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "SHENTON WAY",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "ExpressdestScroll",
                    serviceNumber: "656",
                    top: "CITY DIRECT",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "SHENTON WAY",
                    bottomFont: "Mobitec-9:6",
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
                {
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "656",
                    top: "SKIP FULLERTON RD",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "CANBERRA RD",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "656",
                    top: "SKIP ESPLANADE DR",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "CANBERRA RD",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "ExpressdestScroll",
                    serviceNumber: "656",
                    top: "CITY DIRECT",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "CANBERRA RD",
                    bottomFont: "Mobitec-9:6",
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
                {
                    renderType: "ExpressdestScroll",
                    serviceNumber: "657",
                    top: "CITY DIRECT",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "MARINA BLVD",
                    bottomFont: "Mobitec-9:6",
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
                {
                    renderType: "ExpressdestScroll",
                    serviceNumber: "657",
                    top: "CITY DIRECT",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "JUR WEST AVE 1",
                    bottomFont: "Mobitec-9:6",
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
                {
                    renderType: "ExpressdestScroll",
                    serviceNumber: "663",
                    top: "CITY DIRECT",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "SHENTON WAY",
                    bottomFont: "Mobitec-9:6",
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
                {
                    renderType: "ExpressdestScroll",
                    serviceNumber: "663",
                    top: "CITY DIRECT",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "YISHUN AVE 6",
                    bottomFont: "Mobitec-9:6",
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
                {
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "663",
                    top: "SKIP BRAS BASAH RD",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "SHENTON WAY",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "663",
                    top: "SKIP COLLYER QUAY",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "SHENTON WAY",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "ExpressdestScroll",
                    serviceNumber: "663",
                    top: "CITY DIRECT",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "SHENTON WAY",
                    bottomFont: "Mobitec-9:6",
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
                {
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "663",
                    top: "SKIP FULLERTON RD",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "YISHUN AVE 6",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "663",
                    top: "SKIP ESPLANADE DR",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "YISHUN AVE 6",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "ExpressdestScroll",
                    serviceNumber: "663",
                    top: "CITY DIRECT",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "YISHUN AVE 6",
                    bottomFont: "Mobitec-9:6",
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
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Moving People",
                    topFont: "Mobitec-7:4",
                    bottom: "Not Buses     ",
                    bottomFont: "Mobitec-7:4",
                    image: "logo-full",
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
                {
                    renderType: "ExpressdestScroll",
                    serviceNumber: "670",
                    top: "CITY DIRECT",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "MARINA BLVD",
                    bottomFont: "Mobitec-9:6",
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
                {
                    renderType: "ExpressdestScroll",
                    serviceNumber: "670",
                    top: "CITY DIRECT",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "YISHUN AVE 7",
                    bottomFont: "Mobitec-9:6",
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
                {
                    renderType: "ExpressdestScroll",
                    serviceNumber: "674",
                    top: "CITY DIRECT",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "MARINA BLVD",
                    bottomFont: "Mobitec-9:6",
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
                {
                    renderType: "ExpressdestScroll",
                    serviceNumber: "674",
                    top: "CITY DIRECT",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "TENGAH DR",
                    bottomFont: "Mobitec-9:6",
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
            destination: "LENTOR LOOP",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "825",
                    top: "LENTOR LOOP",
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
                    renderType: "ExpressdestScroll",
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
            serviceNumber: "856A",
            destination: "WDL CENTRE RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "856A",
                    top: "W'LANDS CTR RD",
                }
            ]
        }
    },
    8564: {
        front: {
            renderType: "standardService",
            serviceNumber: "856B",
            destination: "CANBERRA RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "856B",
                    top: "CANBERRA RD",
                }
            ]
        }
    },
    8565: {
        front: {
            renderType: "standardService",
            serviceNumber: "856C",
            destination: "ADM RD WEST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "856C",
                    top: "ADM RD WEST",
                }
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
            serviceNumber: "857A",
            destination: "YIO CHU KANG RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "857A",
                    top: "YIO CHU KANG RD",
                }
            ]
        }
    },
    8574: {
        front: {
            renderType: "standardService",
            serviceNumber: "857B",
            destination: "TEMASEK AVE",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "857B",
                    top: "TEMASEK AVE",
                }
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
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "857",
                    top: "SKIP BRAS BASAH RD",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "STAMFORD RD",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "857",
                    top: "SKIP TEMASEK AVE",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "STAMFORD RD",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "STAMFORD RD",
                },
            ]
        }
    },
    8579: {
        front: {
            renderType: "standardService",
            serviceNumber: "857B",
            destination: "STAMFORD RD",
            scrolls: [
                {
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "857B",
                    top: "SKIP BRAS BASAH RD",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "STAMFORD RD",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "ExpressdestScroll2",
                    serviceNumber: "857B",
                    top: "SKIP TEMASEK AVE",
                    topFont: "Mobitec-Tower6:4",
                    bottom: "STAMFORD RD",
                    bottomFont: "Mobitec-9:6",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "857B",
                    top: "STAMFORD RD",
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
            serviceNumber: "858A",
            destination: "YISHUN AVE 2",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "858A",
                    top: "YISHUN AVE 2",
                },
            ]
        }
    },
    8584: {
        front: {
            renderType: "standardService",
            serviceNumber: "858B",
            destination: "JALAN KAYU",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "858B",
                    top: "JALAN KAYU",
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
            destination: "SEMBAWANG DR",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "859A",
                    top: "SEMBAWANG DR",
                }
            ]
        }
    },
    8594: {
        front: {
            renderType: "standardService",
            serviceNumber: "859A",
            destination: "SEMBAWANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "859A",
                    top: "SEMBAWANG",
                }
            ]
        }
    },
    8595: {
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
    8596: {
        front: {
            renderType: "standardService",
            serviceNumber: "859B",
            destination: "SEMBAWANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "859B",
                    top: "SEMBAWANG",
                }
            ]
        }
    },
    8597: {
        front: {
            renderType: "standardService",
            serviceNumber: "859T",
            destination: "YISHUN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "859T",
                    top: "YISHUN",
                }
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
            serviceNumber: "861A",
            destination: "YISHUN RING RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "861A",
                    top: "YISHUN RING RD"
                }
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
            destination: "JUR TOWN HALL",
            destFont: "Mobitec-Tower9:4",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "870",
                    top: "JUR TOWN HALL",
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
            serviceNumber: "871A",
            destination: "BUKIT BATOK EAST AVE 2",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "871A",
                    top: "B.B EAST AVE 2",
                }
            ]
        }
    },
    8721: {
        front: {
            renderType: "standardService",
            serviceNumber: "872",
            destination: "JUR EAST ST 32",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "872",
                    top: "JUR EAST ST 32",
                }
            ]
        }
    },
    8722: {
        front: {
            renderType: "standardService",
            serviceNumber: "872",
            destination: "TENGAH",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "872",
                    top: "TENGAH",
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
            serviceNumber: "882A",
            destination: "MONTREAL LK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "882A",
                    top: "MONTREAL LK"
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
                    top: "YISHUN CTRL 2",
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
            serviceNumber: "883B",
            destination: "SEMBAWANG RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "883B",
                    top: "SEMBAWANG RD",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "883M",
                    top: "SEMBAWANG",
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
                    top: "BT BATOK ST 34",
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
                    renderType: "ExpressdestScroll",
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
                    renderType: "ExpressdestScroll",
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
            serviceNumber: "965A",
            destination: "YISHUN AVE 2",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "965A",
                    top: "YISHUN AVE 2",
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
            destination: "MARINE PDE RD",

            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "MARINE PDE RD",
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
            serviceNumber: "966A",
            destination: "MARINE PDE RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "966A",
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
            serviceNumber: "969A",
            destination: "YISHUN AVE 2",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "969A",
                    top: "YISHUN AVE 2",
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
    9841: {
        front: {
            renderType: "standardService",
            serviceNumber: "984",
            destination: "WOODLANDS RDS",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "984",
                    top: "WOODLANDS RD",
                }
            ]
        }
    },
    9842: {
        front: {
            renderType: "standardService",
            serviceNumber: "984",
            destination: "JURONG TOWN HALL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "984",
                    top: "JUR TOWN HALL",
                }
            ]
        }
    },
    9843: {
        front: {
            renderType: "standardService",
            serviceNumber: "984A",
            destination: "BRICKLAND RDS",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "984A",
                    top: "BRICKLAND RD",
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
    9998: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "BUS SAFETY FOR EVERYONE",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: " BUS SAFETY              ",
                    topFont: "Mobitec-7:5:3",
                    bottom: "    FOR EVERYONE",
                    bottomFont: "Mobitec-6:5",
                    image: "DDBusIcon",
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
    'logo-full': [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
    'DDBusIcon': [ // For hotel ferry and bus safety
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1],
        [1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
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
