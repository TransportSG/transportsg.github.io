EDSFormats['SMRT (PostSLBP)'] = {
    'gas-temp-kindness': {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8:Bold",
            spacing: 2
        },

        leftFlower: {
            align: "left",
            image: "gas-temp-flower"
        },
        displayText: {
            $$group: {
                centreTopText: {
                    align: "centre-x,top",
                    text: "$top",
                    font: "Hanover-7:3",
                    spacing: 1
                },
                centreBottomText: {
                    align: "centre-x,bottom",
                    text: "$bottom",
                    font: "Hanover-7:3",
                    spacing: 1
                }
            },
            align: "left",
            margin: {
                left: "width(leftFlower) + len(2)"
            }
        },
        rightFlower: {
            align: "left",
            margin: {
                left: "width(leftFlower) + width(displayText) + len(4)"
            },
            image: "gas-temp-flower"
        },
        text: "Kindness is Greater; Be Greater"
    },
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination.text+' via'",
            font: "$destination.font",
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

            font: "$scrollFont",
            spacing: 1
        },

        text: "$serviceNumber+' '+$destination.text"
    },
    standardService2: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination.text",
            font: "$destination.font",
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

            font: "$scrollFont",
            spacing: 1
        },

        text: "$serviceNumber+' '+$destination.text"
    },
    SLBPdestScroll: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: {
                $$cond: {
                    "$spacing === null" : 1,
                    "else": "$spacing"
                }
            }
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "centre-x,top"
                }
            },
            text: "$top",
            font: "$topFont",
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
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
                    "$bottomFont !== null": "$bottomFont",
                    "else": "Mobitec-6:5"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
            }
        },

        text: "$serviceNumber+' '+$top+' '+$bottom"
    },
    SLBPstandardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 1
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination.text+' via'",
            font: "$destination.font",
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

            font: "$scrollFont",
            spacing: 1
        },

        text: "$serviceNumber+' '+$destination.text"
    },
    SpecialMRTShuttle: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination.text",
            font: "$destination.font",
            spacing: 1
        },
        scroll: {
            align: "centre-x,bottom",
            margin: {
                right: 'width+(serviceNumber)'
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 2600,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$serviceNumber+' '+$destination.text"
    },
    destScroll: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: {
                $$cond: {
                    "$spacing === null" : 2,
                    "else": "$spacing"
                }
            }
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "centre-x,top"
                }
            },
            text: "$top",
            font: "$topFont",
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
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
                    "$bottomFont !== null": "$bottomFont",
                    "else": "Mobitec-6:5"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
            }
        },

        text: "$serviceNumber+' '+$top+' '+$bottom"
    },
    destScrollWithImage: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: "$spacing"
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
    TwoLineMessage: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination.text",
            font: "$destination.font",
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

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination.text+' '+$serviceNumber"
    },
    logo: {
        logo: {
            align: "centre-x,centre-y",
            image: "$image"
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

EDSData['SMRT (PostSLBP)'] = {
    1: {
        front: {
            renderType: "message",
            text: "CHARTERED",
            font: "Mobitec-16:8",
            spacing: 2
        }
    },
    2: {
        front: {
            renderType: "message",
            text: "SOON LEE DEPOT",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    3: {
        front: {
            renderType: "message",
            text: "KRANJI DEPOT",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    4: {
        front: {
            renderType: "message",
            text: "SMRT BUSES",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    5: {
        front: {
            renderType: "message",
            text: "OFF SERVICE",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    6: {
        front: {
            renderType: "message",
            text: "WOODLANDS DEPOT",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    7: {
        front: {
            renderType: "message",
            text: "OUT OF SERVICE",
            font: "Mobitec-13:7",
            spacing: 2
        }
    },
    8: {
        front: {
            renderType: "message",
            text: "OFF SERVICE",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    9: {
        front: {
            renderType: "message",
            text: "ON DRIVING TEST",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    10: {
        front: {
            renderType: "message",
            text: "FERRY SERVICE",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    11: {
        front: {
            renderType: "message",
            text: "MRT SHUTTLE",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    12: {
        front: {
            renderType: "full",
            text: "All LED Lit",
        }
    },
    13: {
        front: {
            renderType: "message",
            text: "TRAINING BUS",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    14: {
        front: {
            renderType: "message",
            text: "MoBi 240419",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    16: {
        front: {
            renderType: "message",
            text: "PULAU TEKONG",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    18: {
        front: {
            renderType: "message",
            text: "LRT SHUTTLE A",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    19: {
        front: {
            renderType: "message",
            text: "LRT SHUTTLE B",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    21: {
        front: {
            renderType: "message",
            text: "WT 1",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    22: {
        front: {
            renderType: "message",
            text: "WT 2",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    23: {
        front: {
            renderType: "message",
            text: "WT 3",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    24: {
        front: {
            renderType: "message",
            text: "WT 4",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    25: {
        front: {
            renderType: "message",
            text: "WT 5",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    26: {
        front: {
            renderType: "message",
            text: "WT 6",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    27: {
        front: {
            renderType: "message",
            text: "WT 7",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    28: {
        front: {
            renderType: "message",
            text: "WT 8",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    29: {
        front: {
            renderType: "message",
            text: "WT 9",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    30: {
        front: {
            renderType: "message",
            text: "WT 10",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    31: {
        front: {
            renderType: "message",
            text: "WT 11",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    32: {
        front: {
            renderType: "message",
            text: "WT 12",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    33: {
        front: {
            renderType: "message",
            text: "WT 13",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    34: {
        front: {
            renderType: "message",
            text: "WT 14",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    35: {
        front: {
            renderType: "message",
            text: "WT 15",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    36: {
        front: {
            renderType: "message",
            text: "WT 16",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    37: {
        front: {
            renderType: "message",
            text: "WT 17",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    38: {
        front: {
            renderType: "message",
            text: "WT 18",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    39: {
        front: {
            renderType: "message",
            text: "WT 19",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    40: {
        front: {
            renderType: "message",
            text: "WT 20",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    41: {
        front: {
            renderType: "message",
            text: "WT 21",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    42: {
        front: {
            renderType: "message",
            text: "LRT A",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    43: {
        front: {
            renderType: "message",
            text: "LRT B",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    44: {
        front: {
            renderType: "message",
            text: "WT 22",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    45: {
        front: {
            renderType: "message",
            text: "WT 23",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    66: {
        front: {
            renderType: "message",
            text: "BULIM  DEPOT",
            font: "Mobitec-13:8",
            spacing: 1
        }
    },
    67: {
        front: {
            renderType: "message",
            text: "WT 24",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    68: {
        front: {
            renderType: "message",
            text: "WT 25",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    69: {
        front: {
            renderType: "message",
            text: "WT 26",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    70: {
        front: {
            renderType: "message",
            text: "WT 27",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    72: {
        front: {
            renderType: "message",
            text: "HAPPY MAY DAY",
            font: "Mobitec-13:8",
            spacing: 1
        }
    },
    105: {
        front: {
            renderType: "destScroll",
            top: "BUKIT PANJANG XMAS",
            topFont: "Mobitec-7:7",

            bottom: "BUS CHARTERING",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    106: {
        front: {
            renderType: "message",
            text: "NGEE ANN POLY",
            font: "Mobitec-13:8",
            spacing: 1
        }
    },
    113: {
        front: {
            renderType: "message",
            text: "AIRSHOW SHUTTLE",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },

    117: {
        front: {
            renderType: "logo",
            image: "logo",
            text: "SMRT LOGO"
        }
    },
    9117: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: { 
                text: "SMRT LOGO",
                font: "Mobitec-7:4"
            },
            scrolls: [
                {
                    renderType: "message",
                    font: "Mobitec-13:7",
                    text: "SELAMAT HARI RAYA",
                    spacing: 1
                },
                {
                    renderType: "destScroll",
                    top: "Data w.e.f Sep '24 (With data for",
                    topFont: "Mobitec-7:4",
        
                    bottom: "Jurong West package routes)",
                    bottomFont: "Mobitec-7:4",
        
                    serviceNumber: ""
                },
                {
                    renderType: "logo",
                    image: "logo",
                    text: "SMRT LOGO"
                },
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    118: {
        front: {
            renderType: "message",
            text: "SMRT FLY OUR FLAG",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    119: {
        front: {
            renderType: "message",
            text: "SMRT",
            font: "Mobitec-13:8",
            spacing: 1
        }
    },
    141: {
        front: {
            renderType: "destScroll",
            top: "FREE SMRT CHINATOWN",
            topFont: "Mobitec-7:7",

            bottom: "SHUTTLE BUS SERVICE",
            bottomFont: "Mobitec-7:7",
            serviceNumber: ""
        }
    },
    142: {
        front: {
            renderType: "message",
            text: "THANK YOU EXSA WINNERS",
            font: "Mobitec-7:5:3",
            spacing: 1
        }
    },
    150: {
        front: {
            renderType: "message",
            text: "FREE SHUTTLE",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    151: {
        front: {
            renderType: "message",
            text: "FREE BRIDGING BUS",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    152: {
        front: {
            renderType: "message",
            text: "LRT BRIDGING A",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    153: {
        front: {
            renderType: "message",
            text: "LRT BRIDGING B",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    155: {
        front: {
            renderType: "message",
            text: "FREE SHUTTLE BUS",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    166: {
        front: {
            renderType: "destScroll",
            top: "MERRY CHRISTMAS",
            topFont: "Mobitec-7:7",

            bottom: "HAPPY NEW YEAR",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    167: {
        front: {
            renderType: "message",
            font: "Mobitec-13:7",
            text: "GONG XI FA CAI",
            spacing: 1
        }
    },
    168: {
        front: {
            renderType: "message",
            font: "Mobitec-13:7",
            text: "SELAMAT HARI RAYA",
            spacing: 1
        }
    },
    169: {
        front: {
            renderType: "destScroll",
            top: "HAPPY",
            topFont: "Mobitec-7:7",

            bottom: "DEEPAVALI",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    170: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "HAPPY NATIONAL DAY S'PORE",
                font: "Mobitec-7:4"
            },
            scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "",
                    top: "HAPPY NATIONAL DAY",
                    bottom: "SINGAPORE !",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4",
                    image: "SingaporeFlag"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    171: {
        front: {
            renderType: "message",
            font: "Mobitec-13:7",
            text: "YOUR RIDE, OUR PRIDE",
            spacing: 1
        }
    },
    199: {
        front: {
            renderType: "message",
            text: "ON TEST",
            font: "Mobitec-13:8",
            spacing: 1
        }
    },
    1101: {
        front: {
            renderType: "standardService",
            serviceNumber: "110",
            destination: {
                text: "CHANGI AIRPORT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "110",
                    top: "CHANGI",
                    bottom: "AIRPORT",
                    topFont: "Mobitec-7:5:3",
                    bottomFont: "Mobitec-7:5:3"
                },
                "COMPASSVALE DR",
                "ANCHORVALE DR",
                "ANCHORVALE RD",
                "ANCHORVALE ST",
                {
                    text: "T P E",
                    font: "Mobitec-7:7"
                },
                "AIRPORT BOULEVARD",
                "PTB 3,1,2,4"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1109: {
        front: {
            renderType: "standardService",
            serviceNumber: "110",
            destination: {
                text: "COMPASSVALE INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "110",
                    top: "COMPASSVALE",
                    bottom: "INTERCHANGE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "PTB 3,1,2,4",
                "AIRPORT BOULEVARD",
                "TPE",
                "ANCHORVALE ST",
                "ANCHORVALE RD",
                "ANCHORVALE DR",
                "COMPASSVALE DR"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1102: {
        front: {
            renderType: "standardService",
            serviceNumber: "110",
            destination: {
                text: "BUANGKOK INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "110",
                    top: "BUANGKOK",
                    bottom: "INTERCHANGE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "PTB 3,1,2,4",
                "AIRPORT BOULEVARD",
                "TPE",
                "ANCHORVALE ST",
                "ANCHORVALE RD",
                "ANCHORVALE DR",
                "COMPASSVALE DR"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1721: {
        front: {
            renderType: "standardService",
            serviceNumber: "172",
            destination: {
                text: "BOON LAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "172",
                    top: "BOON LAY",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CHOA CHU KANG DRIVE",
                "CHOA CHU KANG AVE 1,3",
                "BRICKLAND ROAD",
                "CHOA CHU KANG RD",
                "JALAN BAHAR"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1722: {
        front: {
            renderType: "standardService",
            serviceNumber: "172",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "172",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "JLN BOON LAY",
                "JALAN BAHAR",
                "CHOA CHU KANG RD",
                "BRICKLAND RD",
                "CHOA CHU KANG AVE 3,1"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1761: {
        front: {
            renderType: "standardService",
            serviceNumber: "176",
            destination: {
                text: "BUKIT MERAH",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "176",
                    top: "BUKIT MERAH",
                    topFont: "Mobitec-13:7"
                },
                "UPP BUKIT TIMAH RD",
                {
                    text: "HILLVIEW AVENUE",
                    font: "Mobitec-7:7"
                },
                "BT BATOK CTR / MRT",
                "JURONG TOWN HALL",
                "WEST COAST HIGHWAY",
                "TELOK BLANGAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1762: {
        front: {
            renderType: "standardService",
            serviceNumber: "176",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "176",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "TELOK BLANGAH RD",
                "WEST COAST HIGHWAY",
                "JURONG TOWN HALL",
                "BT BATOK CTR/ MRT",
                {
                    text: "HILLVIEW AVENUE",
                    font: "Mobitec-7:7"
                },
                "UPP BUKIT TIMAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1781: {
        front: {
            renderType: "standardService",
            serviceNumber: "178",
            destination: {
                text: "BOON LAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "178",
                    top: "BOON LAY",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS CENTRE RD",
                "UPP BT TIMAH",
                "BUKIT BATOK",
                "JURONG TOWN HALL",
                "CORPORATION RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1782: {
        front: {
            renderType: "standardService",
            serviceNumber: "178",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "178",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CORPORATION RD",
                "JURONG TOWN HALL",
                "BUKIT BATOK",
                "UPP BUKIT TIMAH",
                {
                    text: "WDL TRAIN CHECKPOINT",
                    font: "Mobitec-7:4"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1783: {
        front: {
            renderType: "destScroll",
            serviceNumber: "178A",
            top: "ENDS AT",
            bottom: "KRANJI MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    1791: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "179",
            destination: {
                text: "BOON LAY INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "JURONG WEST ST 63",
                "PIONEER RD NTH",
                "LIEN YING CHOW DR",
                "NANYANG DR"
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    1792: {
        front: {
            renderType: "standardService",
            serviceNumber: "179A",
            destination: {
                text: "BOON LAY - NTU",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "SLBPdestScroll",
                    serviceNumber: "179A",
                    top: "BOON LAY INT - NTU",
                    topFont: "Mobitec-7:5:1",
                    bottom: "(LOOP)",
                    bottomFont: "Mobitec-7:5:1",
                },
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1801: {
        front: {
            renderType: "standardService",
            serviceNumber: "180",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "180",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "BOON LAY WAY",
                {
                    text: "JURONG TOWN HALL",
                    font: "Mobitec-7:5:3"
                },
                "BUKIT BATOK RD",
                {
                    text: "CHOA CHU KANG RD",
                    font: "Mobitec-7:5:3"
                },
                "PETIR RD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    1802: {
        front: {
            renderType: "standardService",
            serviceNumber: "180",
            destination: {
                text: "BOON LAY",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "180",
                    top: "BOON LAY",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "BT PANJANG RD",
                {
                    text: "CHOA CHU KANG RD",
                    font: "Mobitec-7:5:3"
                },
                "BUKIT BATOK RD",
                {
                    text: "JURONG TOWN HALL",
                    font: "Mobitec-7:5:3"
                },
                "BOON LAY WAY"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    1811: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "181",
            destination: {
                text: "BOON LAY INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "JURONG WEST ST 64",
                "JURONG WEST ST 75",
                "JURONG WEST AVE 5",
                "JURONG WEST AVE 3",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    1812: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "181M",
            destination: {
                text: "BOON LAY INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "JURONG WEST ST 64",
                "JURONG WEST ST 75",
                "JURONG WEST AVE 5",
                "JURONG WEST AVE 3",
                "JURONG WEST ST 23"
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    1821: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "182",
            destination: {
                text: "TUAS STH AVE 4",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "UPP JURONG RD",
                "JLN AHMAD IBRAHIM",
                "TUAS CHECKPOINT",
                "TUAS WEST DR",
                "TUAS STH AVE 3, 9",
                "TUAS STH AVE 8, 5"
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    1822: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "182",
            destination: {
                text: "JOO KOON INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "TUAS STH AVE 3",
                "TUAS WEST DR",
                "TUAS CHECKPOINT",
                "JLN AHMAD IBRAHIM",
                "UPP JURONG RD"
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    1823: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "182M",
            destination: {
                text: "TUAS STH AVE 4",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "UPP JURONG RD",
                "JLN AHMAD IBRAHIM",
                "TUAS WEST DR",
                "TUAS STH AVE 3, 9",
                "TUAS STH AVE 8, 5"
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    1824: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "182M",
            destination: {
                text: "JOO KOON INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "TUAS STH AVE 3",
                "TUAS WEST DR",
                "TUAS CHECKPOINT",
                "JLN AHMAD IBRAHIM",
                "UPP JURONG RD"
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    1803: {
        front: {
            renderType: "destScroll",
            serviceNumber: "180A",
            top: "ENDS AT",
            bottom: "BT PANJANG ROAD",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    1841: {
        front: {
            renderType: "standardService",
            serviceNumber: "184",
            destination: {
                text: "CLEMENTI",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "184",
                    top: "CLEMENTI MRT",
                    topFont: "Mobitec-13:8"
                },
                "BT PANJANG RD",
                "CASHEW ROAD",
                "UPP BT TIMAH RD",
                "JLN ANAK BUKIT",
                "CLEMENTI ROAD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    1842: {
        front: {
            renderType: "standardService",
            serviceNumber: "184",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "184",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "CLEMENTI ROAD",
                {
                    text: "UPP BUKIT TIMAH RD",
                    font: "Mobitec-7:5:3"
                },
                "CASHEW ROAD",
                {
                    text: "BUKIT PANJANG RD",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    1851: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "185",
            destination: {
                text: "BUONA VISTA TER",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "PIONEER RD NTH",
                "JURONG WEST AVE 5, 3",
                "JURONG WEST ST 23",
                "JURONG WEST AVE 1",
                "JURONG EAST AVE 1",
                "CLEMENTI AVE 6",
                "C'WEALTH AVE WEST",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    1852: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "185",
            destination: {
                text: "SOON LEE DEPOT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "C'WEALTH AVE WEST",
                "CLEMENTI AVE 6",
                "JURONG EAST AVE 1",
                "JURONG WEST AVE 1",
                "JURONG WEST ST 23" ,
                "JURONG WEST AVE 3, 5",
                "PIONEER RD NTH",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    1871: {
        front: {
            renderType: "standardService",
            serviceNumber: "187",
            destination: {
                text: "BOON LAY",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "187",
                    top: "BOON LAY",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 3",
                "BUKIT PANJANG RD",
                "BUKIT BATOK WEST",
                "BUKIT BATOK CTR,MRT",
                {
                    text: "JURONG EAST",
                    font: "Mobitec-7:7"
                },
                {
                    text: "BOON LAY WAY",
                    font: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1872: {
        front: {
            renderType: "standardService",
            serviceNumber: "187",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "187",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "BOON LAY WAY",
                "JURONG EAST",
                {
                    text: "BT BATOK CTR,MRT",
                    font: "Mobitec-7:5:3"
                },
                "BT BATOK WEST",
                {
                    text: "BT PANJANG RD",
                    font: "Mobitec-7:5:3"
                },
                {
                    text: "WOODLANDS AVE 3",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    1881: {
        front: {
            renderType: "standardService",
            serviceNumber: "188",
            destination: {
                text: "HARBOURFRONT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "188",
                    top: "HARBOURFRONT",
                    topFont: "Mobitec-13:7"
                },
                "CHOA CHU KANG WAY",
                "B.B. WEST AVE 4,2",
                "B.B. WEST AVE 3,6",
                "TOH GUAN ROAD",
                "BOON LAY WAY",
                "AYE, CLEMENTI RD",
                "PASIR PANJANG RD",
                "HAW PAR VILLA",
                "TELOK BLANGAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1882: {
        front: {
            renderType: "standardService",
            serviceNumber: "188",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "188",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "TELOK BLANGAH RD",
                "HAW PAR VILLA",
                "PASIR PANJANG RD",
                "CLEMENTI RD, AYE",
                "BOON LAY WAY",
                "TOH GUAN ROAD",
                "B.B. WEST AVE 6,3",
                "B.B. WEST AVE 2,4",
                "CHOA CHU KANG WAY"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1883: {
        front: {
            renderType: "destScroll",
            serviceNumber: "188A",
            top: "ENDS AT",
            bottom: "ITE COLLEGE WEST",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    1884: {
        front: {
            renderType: "standardService",
            serviceNumber: "188e",
            destination: {
                text: "HARBOURFRONT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "188e",
                    top: "HARBOURFRONT",
                    topFont: "Mobitec-13:7"
                },
                "CHOA CHU KANG WAY",
                {
                    text: "B. B. WEST AVE 7",
                    font: "Mobitec-7:7"
                },
                "B. B. WEST AVE 4",
                "B. B. WEST AVE 2",
                "B. B. WEST AVE 3",
                "B. B. WEST AVE 6",
                {
                    text: "TOH GUAN ROAD",
                    font: "Mobitec-7:7"
                },
                {
                    text: "CLEMENTI ROAD",
                    font: "Mobitec-7:7"
                },
                "PASIR PANJANG RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1885: {
        front: {
            renderType: "standardService",
            serviceNumber: "188R",
            destination: {
                text: "R W S",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "188R",
                    top: "RESORTS WORLD",
                    bottom: "SENTOSA",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "C. C. K WAY",
                "B.B WEST AVE 7",
                "B.B WEST AVE 4",
                "B.B WEST AVE 2",
                "B.B WEST AVE 3",
                "B.B WEST AVE 6",
                "B. BATOK AVE 1",
                {
                    text: "JURONG EAST CTRL",
                    font: "Mobitec-7:5:3"
                },
                "TOH GUAN ROAD",
                {
                    text: "TELOK BLANGAH ROAD",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    1886: {
        front: {
            renderType: "standardService",
            serviceNumber: "188R",
            destination: {
                text: "C. C. K INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "188R",
                    top: "CHOA CHU KANG",
                    bottom: "INTERCHANGE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "TELOK BLANGAH RD",
                    font: "Mobitec-7:5:3"
                },
                "TOH GUAN ROAD",
                "B. BATOK AVE 1",
                "B.B WEST AVE 6",
                "B.B WEST AVE 3",
                "B.B WEST AVE 2",
                "B.B WEST AVE 4",
                "B.B WEST AVE 7",
                "C. C. K WAY"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    1901: {
        front: {
            renderType: "standardService",
            serviceNumber: "190",
            destination: {
                text: "KAMPONG BAHRU TER",
                font: "Mobitec-7:4"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "190",
                    top: "KAMPONG BAHRU",
                    bottom: "TERMINAL",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "BT PANJANG RD",
                "STEVENS ROAD",
                "ORCHARD ROAD",
                "HILL STREET",
                "CHINATOWN"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1902: {
        front: {
            renderType: "standardService",
            serviceNumber: "190",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "190",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "HILL STREET",
                "SOMERSET ROAD",
                "SCOTTS ROAD",
                "STEVENS ROAD",
                "BUKIT PANJANG RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1903: {
        front: {
            renderType: "destScroll",
            serviceNumber: "190A",
            top: "ENDS AT",
            bottom: "DHOBY GHAUT MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    1921: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "192",
            destination: {
                text: "TUAS TER",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "JURONG WEST ST 62",
                "UPP JURONG RD",
                "TUAS AVE 3, 1, 12",
                "TUAS WEST DR"
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    1922: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "192",
            destination: {
                text: "BOON LAY INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "TUAS WEST DR",
                "TUAS AVE 12, 1, 3",
                "UPP JURONG RD",
                "JURONG WEST ST 62",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    1931: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "193",
            destination: {
                text: "TUAS TER",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "JURONG WEST AVE 4",
                "PIONEER RD NTH",
                "LOK YANG WAY",
                "SIXTH LOK YANG RD",
                "TUAS AVE 5, 2, 4, 9",
                "TUAS WEST DR",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    1932: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "193",
            destination: {
                text: "BOON LAY INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "TUAS WEST DR",
                "TUAS AVE 9, 4, 2, 5",
                "SIXTH LOK YANG RD",
                "LOK YANG WAY",
                "PIONEER RD NTH"
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    1941: {
        front: {
            renderType: "standardService",
            serviceNumber: "194",
            destination: {
                text: "BOON LAY INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "SLBPdestScroll",
                    serviceNumber: "194",
                    top: "BOON LAY INT - JLN",
                    topFont: "Mobitec-7:5:1",
                    bottom: "AHMAD IBRAHIM (LOOP)",
                    bottomFont: "Mobitec-7:5:1",
                },
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1991: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "199",
            destination: {
                text: "BOON LAY INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "JLN BOON LAY",
                "JLN BAHAR",
                "NANYANG AVE",
                "NANYANG CRES",
                "NANYANG DR"
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    2401: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "240",
            destination: {
                text: "BOON LAY INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "BOON LAY DR",
                "BOON LAY PLACE",
                "KANG CHING RD",
                "CORPORATION DR",
                "JLN AHMAD IBRAHIM",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    2402: {
        front: {
            renderType: "SLBPdestScroll",
            serviceNumber: "240A",
            top: "ENDS AT",
            topFont: "Mobitec-7:5:1",
            bottom: "LAKESIDE MRT",
            bottomFont: "Mobitec-7:5:1"
        }
    },
    2403: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "240M",
            destination: {
                text: "LAKESIDE MRT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "BOON LAY DR",
                "BOON LAY PLACE",
                "JURONG WEST ST 64",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    2411: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "241",
            destination: {
                text: "BOON LAY INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "JURONG WEST ST 63",
                "PIONEER RD NTH",
                "JURONG WEST ST 91",
                "JURONG WEST ST 92",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    2421: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "242",
            destination: {
                text: "BOON LAY INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
   
                "JLN BOON LAY",
                "JURONG WEST AVE 4",
                "JURONG WEST ST 71",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    2431: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "243G",
            destination: {
                text: "BOON LAY INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "JURONG WEST ST 64",
                "JURONG WEST ST 75",
                "JURONG WEST ST 81",
                "JURONG WEST AVE 4",
                "JURONG WEST ST 62",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    2432: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "243W",
            destination: {
                text: "BOON LAY INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "JURONG WEST ST 61",
                "JURONG WEST AVE 5",
                "JURONG WEST ST 82",
                "JURONG WEST ST 75",
                "JURONG WEST ST 64",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    2461: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "246",
            destination: {
                text: "BOON LAY INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "CHIN BEE DR",
                "QUALITY RD",
                "JLN TUKANG",
                "CORPORATION DR",
                "TAH CHING RD", 
                "BOON LAY PLACE, DR",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    2471: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "247",
            destination: {
                text: "TUAS TER",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "TUAS LINK 4",
                "TUAS AVE 7, 8",
                "TUAS CRES",
                "TUAS STH AVE 5,4,7",
                "TUAS STH AVE 3,9,8",
                "TUAS BAY LINK",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    2481: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "248",
            destination: {
                text: "TUAS TER",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "TUAS AVE 20",
                "TUAS CRESCENT",
                "TUAS STH AVE 5, 12",
                "TUAS STH AVE 14, 10",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    2482: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "248M",
            destination: {
                text: "TUAS TER",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "TUAS AVE 20",
                "TUAS CRESCENT",
                "TUAS STH AVE 5, 12",
                "TUAS STH WAY",
                "TUAS STH AVE 14, 9, 10",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    2491: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "249",
            destination: {
                text: "BOON LAY INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "JLN BOON LAY",
                "JURONG PIER RD",
                "JLN BUROH",
                "TG KLING RD",
                "JLN SAMULUN",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    2492: {
        front: {
            renderType: "SLBPdestScroll",
            serviceNumber: "249A",
            top: "ENDS AT",
            topFont: "Mobitec-7:5:1",
            bottom: "JURONG SHIPYARD",
            bottomFont: "Mobitec-7:5:1"
        }
    },
    2511: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "251",
            destination: {
                text: "BOON LAY INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "BOON LAY WAY",
                "PIONEER RD NTH",
                "PIONEER RD",
                "SHIPYARD RD"
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    2521: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "252",
            destination: {
                text: "BOON LAY INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "ENTERPRISE RD",
                "INTERNATIONAL RD",
                "JOO KOON CIRCLE",
                "JOO KOON RD",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    2531: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "253",
            destination: {
                text: "JOO KOON INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "BENOI RD",
                "BENOI SECTOR",
                "PIONEER RD",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    2541: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "254",
            destination: {
                text: "JOO KOON INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "PIONEER RD",
                "TUAS RD",
                "TUAS AVE 20, 11",
                "TUAS BASIN LK",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    2551: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "255",
            destination: {
                text: "JOO KOON INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "GUL CIRCLE",
                "GUL CRES",
                "GUL AVE, WAY",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    2571: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "257",
            destination: {
                text: "JOO KOON INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "BENOI RD",
                "PIONEER RD",
                "GUL RD",
                "PIONEER SECTOR LN",
                "PIONEER SECTOR 3",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    2581: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "258",
            destination: {
                text: "JOO KOON INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "JLN AHMAD IBRAHIM",
                "PIONEER RD NTH",
                "JURONG WEST ST 61",
                "JURONG WEST ST 81",
                "JURONG WEST ST 64",
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    2582: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "258M",
            destination: {
                text: "JOO KOON INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "JLN AHMAD IBRAHIM",
                "PIONEER RD NTH",
                "JUR WEST ST 63, 61",
                "JUR WEST ST 71, 81",
                {
                    renderType: "destScroll",
                    serviceNumber: "258M",
                    spacing: "1",
                    top: "JOO KOON INT via",
                    topFont: "Mobitec-7:5:1",
                    bottom: "BOON LAY PLACE (LOOP)",
                    bottomFont: "Mobitec-7:4"
                },
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    3001: {
        front: {
            renderType: "standardService",
            serviceNumber: "300",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "300",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CHOA CHU KANG AVE 4",
                "CHOA CHU KANG AVE 2",
                "CHOA CHU KANG WAY",
                "CHOA CHU KANG AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    3011: {
        front: {
            renderType: "standardService",
            serviceNumber: "301",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "301",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "C. C. K WAY",
                    font: "Mobitec-7:7"
                },
                "C. C. K AVE 2,3",
                "C. C. K AVENUE 5",
                {
                    text: "KEAT HONG CLOSE (LOOP)",
                    font: "Mobitec-7:4"
                },
                "C. C. K AVE 6,1"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    3021: {
        front: {
            renderType: "standardService",
            serviceNumber: "302",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "302",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:5:3",
                    bottomFont: "Mobitec-7:5:3"
                },
                "CHOA CHU KANG WAY",
                "CHOA CHU KANG ST 52",
                "CHOA CHU KANG CRES"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    3022: {
        front: {
            renderType: "destScroll",
            serviceNumber: "302A",
            top: "ENDS AT",
            bottom: "OPP YEW TEE MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    3071: {
        front: {
            renderType: "standardService",
            serviceNumber: "307",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "307",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CHOA CHU KANG CENTRAL",
                {
                    text: "TECK WHYE LANE",
                    font: "Mobitec-7:5:3"
                },
                "CHOA CHU KANG CENTRAL",
                "CHOA CHU KANG AVE 4",
                "CHOA CHU KANG NORTH 5",
                "CHOA CHU KANG NORTH 6",
                {
                    text: "YEW TEE MRT",
                    font: "Mobitec-7:7"
                },
                "CHOA CHU KANG ST 62"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3072: {
        front: {
            renderType: "destScroll",
            serviceNumber: "307A",
            top: "ENDS AT OPP CCK MRT",
            topFont: "Mobitec-7:4",
            bottom: "via YEW TEE MRT",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    3073: {
        front: {
            renderType: "destScroll",
            serviceNumber: "307T",
            top: "ENDS AT CCK INT via",
            topFont: "Mobitec-7:5:3",
            bottom: "TECK WHYE",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    3151: {
        front: {
            renderType: "message",
            text: "FREE BRIDGING BUS",
            font: "Mobitec-13:8",
            spacing: 1
        }
    },
    3152: {
        front: {
            renderType: "message",
            text: "LRT SHUTTLE A",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    3153: {
        front: {
            renderType: "message",
            text: "LRT SHUTTLE B",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    3154: {
        front: {
            renderType: "message",
            text: "NSL BRIDGING BUS",
            font: "Mobitec-13:8",
            spacing: 1
        }
    },
    3155: {
        front: {
            renderType: "message",
            text: "EWL BRIDGING BUS",
            font: "Mobitec-13:8",
            spacing: 1
        }
    },
    3156: {
        front: {
            renderType: "message",
            text: "CCL BRIDGING BUS",
            font: "Mobitec-13:8",
            spacing: 1
        }
    },
    3157: {
        front: {
            renderType: "message",
            text: "TEL BRIDGING BUS",
            font: "Mobitec-13:8",
            spacing: 1
        }
    },
    3160: {
        front: {
            renderType: "message",
            text: "NEL BRIDGING BUS",
            font: "Mobitec-13:8",
            spacing: 1
        }
    },
    3161: {
        front: {
            renderType: "message",
            text: "DTL BRIDGING BUS",
            font: "Mobitec-13:8",
            spacing: 1
        }
    },
    4051: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "405",
            destination: {
                text: "BOON LAY INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "JLN BAHAR",
                "OLD C . C . K RD",
                {
                    text: "LIM CHU KANG RD (LOOP)",
                    font: "Mobitec-7:4"
                }
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    4059: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "405M",
            destination: {
                text: "BOON LAY INT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                "JLN BAHAR",
                {
                    text: "OLD C. C. K RD (LOOP)",
                    font: "Mobitec-7:4"
                }
            ],
            scrollFont: "Mobitec-7:5:1"
        }
    },
    4171: {
        front: {
            renderType: "standardService",
            serviceNumber: "S7",
            destination: {
                text: "TANAH MERAH",
                font: "Mobitec-7:4"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "S7",
                    top: "SHUTTLE 7",
                    bottom: "TAMPINES - TANAH MERAH",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:4"
                },
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    4172: {
        front: {
            renderType: "standardService",
            serviceNumber: "S7",
            destination: {
                text: "TAMPINES",
                font: "Mobitec-7:4"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "S7",
                    top: "SHUTTLE 7",
                    bottom: "TANAH MERAH - TAMPINES",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:4"
                },
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    5021: {
        front: {
            renderType: "standardService",
            serviceNumber: "502",
            destination: {
                text: "EXPRESS",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "SLBPdestScroll",
                    serviceNumber: "502",
                    top: "EXPRESS",
                    topFont: "Mobitec-13:8",
                },
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    6101: {
        front: {
            renderType: "standardService",
            serviceNumber: "61",
            destination: {
                text: "EUNOS",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "61",
                    top: "EUNOS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CLEMENTI RD",
                "HOLLAND RD,AVE",
                "TELOK BLANGAH RD",
                "CHINATOWN",
                "VICTORIA ST",
                "KALLANG BAHRU",
                "MACPHERSON RD",
                "UBI AVE 2"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    6102: {
        front: {
            renderType: "standardService",
            serviceNumber: "61",
            destination: {
                text: "BUKIT BATOK",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "61",
                    top: "BUKIT BATOK",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "UBI AVE 2",
                "MACPHERSON RD",
                "KALLANG BAHRU",
                "NORTH BRIDGE RD",
                "SOUTH BRIDGE RD",
                "TELOK BLANGAH RD",
                "HOLLAND RD",
                "CLEMENTI RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    6701: {
        front: {
            renderType: "standardService",
            serviceNumber: "67",
            destination: {
                text: "TAMPINES",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "67",
                    top: "TAMPINES",
                    bottom: " INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "UPP BT TIMAH RD",
                "DUNEARN ROAD",
                "SERANGOON RD",
                "SIMS AVENUE",
                "NEW UPP CHANGI RD",
                "BEDOK NORTH AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    6702: {
        front: {
            renderType: "standardService",
            serviceNumber: "67",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "67",
                    top: "CHOA CHU KANG",
                    bottom: " INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "BEDOK NORTH AVE 3",
                "NEW UPP CHANGI RD",
                "GEYLANG ROAD",
                "JALAN BESAR",
                "BUKIT TIMAH RD",
                "UPP BUKIT TIMAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    7051: {
        front: {
            renderType: "destScroll",
            serviceNumber: "WT5",
            top: "KRANJI DEPOT",
            topFont: "Mobitec-13:7"
  
        }
    },
    7071: {
        front: {
            renderType: "destScroll",
            serviceNumber: "WT7",
            top: "KRANJI DEPOT",
            topFont: "Mobitec-13:7"
  
        }
    },
    7081: {
        front: {
            renderType: "destScroll",
            serviceNumber: "WT8",
            top: "KRANJI DEPOT",
            topFont: "Mobitec-13:7"
  
        }
    },
    7082: {
        front: {
            renderType: "destScroll",
            serviceNumber: "WT8",
            top: "BULIM DEPOT",
            topFont: "Mobitec-13:7"
  
        }
    },
    7161: {
        front: {
            renderType: "destScroll",
            serviceNumber: "WT16",
            top: "KRANJI DEPOT",
            topFont: "Mobitec-13:7"
  
        }
    },
    7162: {
        front: {
            renderType: "destScroll",
            serviceNumber: "WT16",
            top: "WOODLANDS",
            topFont: "Mobitec-7:7",
            bottom: "BUS PARK",
            bottomFont: "Mobitec-7:7"
  
        }
    },
    7171: {
        front: {
            renderType: "destScroll",
            serviceNumber: "WT17",
            top: "KRANJI DEPOT",
            topFont: "Mobitec-13:7"
  
        }
    },
    7172: {
        front: {
            renderType: "destScroll",
            serviceNumber: "WT17",
            top: "BULIM DEPOT",
            topFont: "Mobitec-13:7"
  
        }
    },
    7201: {
        front: {
            renderType: "destScroll",
            serviceNumber: "WT20",
            top: "BULIM DEPOT",
            topFont: "Mobitec-13:7"
  
        }
    },
    7202: {
        front: {
            renderType: "destScroll",
            serviceNumber: "WT20",
            top: "WOODLANDS",
            topFont: "Mobitec-7:7",
            bottom: "BUS PARK",
            bottomFont: "Mobitec-7:7"
  
        }
    },
    7221: {
        front: {
            renderType: "destScroll",
            serviceNumber: "WT22",
            top: "BULIM DEPOT",
            topFont: "Mobitec-13:7"
  
        }
    },
    7222: {
        front: {
            renderType: "destScroll",
            serviceNumber: "WT22",
            top: "WOODLANDS",
            topFont: "Mobitec-7:7",
            bottom: "BUS PARK",
            bottomFont: "Mobitec-7:7"
  
        }
    },
    7231: {
        front: {
            renderType: "destScroll",
            serviceNumber: "WT23",
            top: "BULIM DEPOT",
            topFont: "Mobitec-13:7"
  
        }
    },
    7232: {
        front: {
            renderType: "destScroll",
            serviceNumber: "WT23",
            top: "KRANJI DEPOT",
            topFont: "Mobitec-13:7"
  
        }
    },
    7241: {
        front: {
            renderType: "destScroll",
            serviceNumber: "WT24",
            top: "WOODLANDS",
            topFont: "Mobitec-7:7",
            bottom: "BUS PARK",
            bottomFont: "Mobitec-7:7"
  
        }
    },
    7311: {
        front: {
            renderType: "message",
            text: "WT 31",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    7321: {
        front: {
            renderType: "message",
            text: "WT 32",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    7331: {
        front: {
            renderType: "message",
            text: "WT 33",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    7341: {
        front: {
            renderType: "message",
            text: "WT 34",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    7351: {
        front: {
            renderType: "message",
            text: "WT 35",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    7361: {
        front: {
            renderType: "message",
            text: "WT 36",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    7371: {
        front: {
            renderType: "message",
            text: "WT 37",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    7501: {
        front: {
            renderType: "standardService",
            serviceNumber: "75",
            destination: {
                text: "BUKIT MERAH",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "75",
                    top: "BUKIT MERAH",
                    topFont: "Mobitec-13:7"
                },
                "UPP BT TIMAH RD",
                "CLEMENTI ROAD",
                "HOLLAND ROAD",
                "GREAT WORLD CITY",
                "OUTRAM ROAD",
                "JALAN BUKIT MERAH"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    7502: {
        front: {
            renderType: "standardService",
            serviceNumber: "75",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "75",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:8"
                },
                "JALAN BUKIT MERAH",
                "KIM TIAN RD",
                "HOLLAND ROAD",
                "CLEMENTI ROAD",
                "UPP BT TIMAH RD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    7508: {
        front: {
            renderType: "standardService",
            serviceNumber: "75",
            destination: {
                text: "MARINA CENTRE",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "75",
                    top: "MARINA CENTRE",
                    topFont: "Mobitec-13:7"
                },
                "UPP BT TIMAH RD",
                "CLEMENTI ROAD",
                "HOLLAND ROAD",
                "GREAT WORLD CITY",
                "OUTRAM ROAD",
                "CANTONMENT RD",
                "ANSON ROAD",
                "ROBINSON ROAD",
                "EMPRESS PLACE"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    7509: {
        front: {
            renderType: "standardService",
            serviceNumber: "75",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "75",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:8"
                },
                "COLLYER QUAY",
                "SHENTON WAY",
                "OUTRAM RD, MRT",
                "HOLLAND ROAD",
                "CLEMENTI ROAD",
                "UPP BT TIMAH RD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    7600: {
        front: {
            renderType: "SpecialMRTShuttle",
            serviceNumber: "EW1",
            destination: {
                text: "TLK-GCL-JKN-BNL",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "→ TUAS LINK",
                "→ GUL CIRCLE",
                "→ JOO KOON",
                "→ BOON LAY"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    7601: {
        front: {
            renderType: "SpecialMRTShuttle",
            serviceNumber: "EW2",
            destination: {
                text: "BNV-CLE-JUR-BNL",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "→ BUONA VISTA",
                "→ CLEMENTI",
                "→ JURONG EAST",
                "→ BOON LAY"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    7602: {
        front: {
            renderType: "SpecialMRTShuttle",
            serviceNumber: "EW3",
            destination: {
                text: "PYL-BDK-TAM",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "→ PAYA LEBAR",
                "→ BEDOK",
                "→ TAMPINES",
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    7603: {
        front: {
            renderType: "SpecialMRTShuttle",
            serviceNumber: "NS1",
            destination: {
                text: "JUR-BBT-CCK-WDL",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "→ JURONG EAST",
                "→ BUKIT BATOK",
                "→ CHOA CHU KANG",
                "→ WOODLANDS",
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    7604: {
        front: {
            renderType: "SpecialMRTShuttle",
            serviceNumber: "NS2",
            destination: {
                text: "BSH-AMK-YIS-WDL",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "→ BISHAN",
                "→ ANG MO KIO",
                "→ YISHUN",
                "→ WOODLANDS",
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    7605: {
        front: {
            renderType: "SpecialMRTShuttle",
            serviceNumber: "EX1",
            destination: {
                text: "WDL - BKP",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "→ WOODLANDS",
                "→ BUKIT PANJANG",
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    7606: {
        front: {
            renderType: "SpecialMRTShuttle",
            serviceNumber: "EX2",
            destination: {
                text: "AMK - SER",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "→ ANG MO KIO",
                "→ SERANGOON",
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    7607: {
        front: {
            renderType: "SpecialMRTShuttle",
            serviceNumber: "EX3",
            destination: {
                text: "EUN - UBI",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "→ EUNOS",
                "→ UBI",
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    7996: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "SMRT STAFF FERRY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "message",
                    text: "SMRT STAFF FERRY @",
                    font: "Mobitec-SMRTStaffFerry",
                    spacing: 1
                },

            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    7997: {
        front: {
            renderType: "destScroll",
            serviceNumber: "K1",
            top: "HOTEL FERRY",
            topFont: "Mobitec-7:7",
            bottom: "WLD BUS PARK",
            bottomFont: "Mobitec-7:5:2"
  
        }
    },
    7998: {
        front: {
            renderType: "destScroll",
            serviceNumber: "F1",
            top: "HOTEL FERRY",
            topFont: "Mobitec-7:7",
            bottom: "KRANJI DEPOT",
            bottomFont: "Mobitec-7:7"
  
        }
    },
    7999: {
        front: {
            renderType: "destScroll",
            serviceNumber: "F2",
            top: "HOTEL FERRY",
            topFont: "Mobitec-7:7",
            bottom: "BULIM DEPOT",
            bottomFont: "Mobitec-7:7"
  
        }
    },
    9001: {
        front: {
            renderType: "standardService",
            serviceNumber: "900",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "900",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVENUE 7",
                "WDL AVENUE 4",
                "WDL DRIVE 14",
                "CHAMPIONS WAY",
                "WDL DRIVE 17",
                "WDL AVENUE 4",
                "WDL AVENUE 7"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    9011: {
        front: {
            renderType: "standardService",
            serviceNumber: "901",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "901",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 2,1",
                "WOODLANDS DRIVE 16",
                "WOODLANDS AVE 6"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9021: {
        front: {
            renderType: "standardService",
            serviceNumber: "902",
            destination: {
                text: "REPUBLIC POLY",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "902",
                    top: "REPUBLIC",
                    bottom: "POLYTECHNIC",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },

    9031: {
        front: {
            renderType: "standardService",
            serviceNumber: "903",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "903",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 2",
                "MARSILING RD,DR",
                "WDL CENTRE RD",
                {
                    text: "WDL TRAIN CHECKPOINT",
                    font: "Mobitec-7:4"
                },
                "ADMIRALTY RD",
                "MARSILING DR,RD",
                "WOODLANDS AVE 2"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9032: {
        front: {
            renderType: "standardService",
            serviceNumber: "903M",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "903M",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVENUE 2",
                "MARSILING RD",
                "MARSILING LANE",
                {
                    text: "MARSILING DR (LOOP)",
                    font: "Mobitec-7:4"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9041: {
        front: {
            renderType: "standardService",
            serviceNumber: "904",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "904",
                    topFont: "Mobitec-13:7",
                    top: "GONG XI FA CAI",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "904",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVENUE 7, 6",
                "WDL DRIVE 62, 73",
                {
                    text: "WDL CRESENT (LOOP)",
                    font: "Mobitec-7:4"
                },
                "WDL DRIVE 73, 62",
                "WDL AVENUE 6, 7"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9049: {
        front: {
            renderType: "standardService",
            serviceNumber: "904",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "904",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVENUE 7, 6",
                "WDL DRIVE 62, 73",
                {
                    text: "WDL CRESENT (LOOP)",
                    font: "Mobitec-7:4"
                },
                "WDL DRIVE 73, 62",
                "WDL AVENUE 6, 7"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9111: {
        front: {
            renderType: "standardService",
            serviceNumber: "911",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "911",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 7",
                "WOODLANDS ST 83",
                "WOODLANDS AVE 2",
                "WOODLANDS ST 13",
                "WDL TRAIN CHECKPOINT",
                "WOODLANDS ST 13"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9112: {
        front: {
            renderType: "destScroll",
            serviceNumber: "911T",
            top: "ENDS AT",
            bottom: "WDL INT / MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    9113: {
        front: {
            renderType: "destScroll",
            serviceNumber: "911A",
            top: "ENDS AT  BLK 146",
            bottom: "WOODLANDS ST 13",
            topFont: "Mobitec-7:5:2",
            bottomFont: "Mobitec-7:5:2"
        }
    },
    9121: {
        front: {
            renderType: "standardService",
            serviceNumber: "912",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "912",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 5,2,1",
                "WOODLANDS ST 41",
                "WDL TRAIN CHECKPOINT",
                "WOODLANDS ST 41",
                "WOODLANDS DR 50",
                "WOODLANDS RING RD",
                "ADMIRALTY MRT"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9122: {
        front: {
            renderType: "standardService",
            serviceNumber: "912A",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "912A",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVE 2,5",
                "WOODLANDS DR 50",
                "WOODLANDS RING RD",
                "ADMIRALTY MRT",
                "WDL AVE 7 (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9123: {
        front: {
            renderType: "standardService",
            serviceNumber: "912B",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "912B",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVE 5,2,1",
                "WDL STREET 41",
                {
                    text: "WDL TRAIN CHECKPOINT",
                    font: "Mobitec-7:4"
                },
                "WDL CTR RD (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9124: {
        front: {
            renderType: "destScroll",
            serviceNumber: "912T",
            top: "ENDS AT",
            bottom: "WDL INT / MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    9125: {
        front: {
            renderType: "standardService",
            serviceNumber: "912M",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "912M",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:5:3",
                    bottomFont: "Mobitec-7:5:3"
                },
                "WLD AVE 1,2,5",
                "WDL ST 41 (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9131: {
        front: {
            renderType: "standardService",
            serviceNumber: "913",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "913",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 7,6",
                "WOODLANDS DR 61",
                "WOODLANDS CIRCLE",
                "MARSILING RISE",
                "MARSILING RD",
                "WDL TRAIN CHECKPOINT"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9132: {
        front: {
            renderType: "standardService",
            serviceNumber: "913M",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "913M",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "MARSILING RISE",
                "MARSILING ROAD",
                "WOODLANDS AVE 1",
                "WOODLANDS ST 32",
                "WOODLANDS AVE 3",
                "WOODLANDS ST 13",

            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9133: {
        front: {
            renderType: "destScroll",
            serviceNumber: "913T",
            top: "ENDS AT",
            bottom: "WDL INT / MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    9201: {
        front: {
            renderType: "standardService",
            serviceNumber: "920",
            destination: {
                text: "BT PANJANG",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "920",
                    top: "BT PANJANG",
                    topFont: "Mobitec-13:8"
                },
                "PETIR / JELEBU RD",
                "SENJAR RD / LINK",
                "JELAPANG RD",
                "SAUJANA RD",
                "FAJAR ROAD",
                "BT PANJANG RING RD",
                "BANGKIT RD (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9221: {
        front: {
            renderType: "standardService",
            serviceNumber: "922",
            destination: {
                text: "BT PANJANG",
                font: "Mobitec-13:8"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "922",
                    top: "BT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "PETIR / JELEBU RD",
                "JELAPANG ROAD",
                "SEGAR / FAJAR RD ",
                "BT PANJANG RING RD",
                "BANGKIT RD (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9251: {
        front: {
            renderType: "standardService",
            serviceNumber: "925",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "925",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 3",
                "KRANJI ROAD, WAY",
                "SUNGEI KADUT ST 1",
                "WOODLANDS ROAD",
                "KRANJI EXP WAY"

            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9252: {
        front: {
            renderType: "standardService",
            serviceNumber: "925",
            destination: {
                text: "WDL TEMP INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                "KRANJI EXP WAY",
                "WOODLANDS RD",
                "SUNGEI KANDUT ST 1",
                "KRANJI WAY, RD",
                "WOODLANDS AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9253: {
        front: {
            renderType: "standardService",
            serviceNumber: "925M",
            destination: {
                text: "SUNGEI BULOH",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "925M",
                    top: "SUNGEI BULOH",
                    bottom: "NATURE PARK",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 3",
                "KRANJI RD, LOOP",
                "KRANJI WAY",
                "NEO TIEW LANE",
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9254: {
        front: {
            renderType: "standardService",
            serviceNumber: "925M",
            destination: {
                text: "WDL TEMP INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                "KRANJI WAY",
                "KRANJI RD, LOOP",
                "WOODLANDS AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9271: {
        front: {
            renderType: "standardService",
            serviceNumber: "927",
            destination: {
                text: "SINGAPORE ZOO",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "927",
                    top: "SINGAPORE",
                    bottom: "ZOOLOGICAL GDN",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CHOA CHU KANG AVE 4",
                "CHOA CHU KANG DR,KJE",
                "WOODLANDS RD",
                "MANDAI RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9272: {
        front: {
            renderType: "standardService",
            serviceNumber: "927",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "927",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "MANDAI ROAD",
                "WOODLANDS RD",
                "KJE,CHOA CHU KANG DR",
                "CHOA CHU KANG AVE 4"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9501: {
        front: {
            renderType: "standardService",
            serviceNumber: "950",
            destination: {
                text: "JB SENTRAL TER",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "950",
                    top: "WOODLANDS TEMP INT",
                    bottom: "SINGAPORE",
                    topFont: "Mobitec-7:5:2",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "950",
                    top: "JB SENTRAL TER(LOOP)",
                    bottom: "JOHOR BAHRU",
                    topFont: "Mobitec-7:5:3",
                    bottomFont: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    9511: {
        front: {
            renderType: "standardService",
            serviceNumber: "951E",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "951E",
                    top: "SHENTON",
                    bottom: "WAY",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 4,5",
                "DHOBY GHAUT MRT",
                "BRAS BASAH RD",
                "COLLYER QUAY"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9512: {
        front: {
            renderType: "standardService",
            serviceNumber: "951E",
            destination: {
                text: "WOODLANDS ST 82",
                font: "Mobitec-7:4"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "951E",
                    top: "WOODLANDS",
                    bottom: "STREET 82",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "ROBINSON ROAD",
                "STAMFORD ROAD",
                "DHOBY GHAUT MRT",
                "WOODLANDS AVE 5,4"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9601: {
        front: {
            renderType: "standardService",
            serviceNumber: "960",
            destination: {
                text: "MARINA CENTRE",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "960",
                    top: "MARINA",
                    bottom: "CENTRE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS RD",
                "BT PANJANG RD",
                "BKE / PIE",
                "WHITLEY RD",
                "BUKIT TIMAH RD",
                "VICTORIA ST",
                "BRAS BASAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9602: {
        front: {
            renderType: "standardService",
            serviceNumber: "960",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "960",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "VICTORIA ST",
                "ROCHOR RD",
                "BUKIT TIMAH RD",
                "WHITLEY RD",
                "PIE / BKE",
                "BT PANJANG RD/LRT",
                "WOODLANDS RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9611: {
        front: {
            renderType: "standardService",
            serviceNumber: "961",
            destination: {
                text: "GEYLANG LOR 1",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "961",
                    top: "GEYLANG LOR 1/",
                    bottom: "KALLANG MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 3",
                "UPP BT TIMAH RD",
                "QUEENSWAY",
                "JLN BUKIT MERAH",
                "CHINATOWN",
                "BEACH ROAD",
                "KALLANG BAHRU"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9612: {
        front: {
            renderType: "standardService",
            serviceNumber: "961",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "961",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "KALLANG BAHRU",
                "BEACH ROAD",
                "CHINATOWN",
                "JLN BUKIT MERAH",
                "QUEENSWAY",
                "UPP BT TIMAH RD",
                "WOODLANDS AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9613: {
        front: {
            renderType: "standardService",
            serviceNumber: "961M",
            destination: {
                text: "GEYLANG LOR 1",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "961M",
                    top: "GEYLANG LOR 1/",
                    bottom: "KALLANG MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "WOODLANDS AVE 3",
                    font: "Mobitec-7:5:3"
                },
                {
                    text: "UPP BT TIMAH RD",
                    font: "Mobitec-7:5:3"
                },
                "QUEENSWAY",
                {
                    text: "JLN BUKIT MERAH",
                    font: "Mobitec-7:5:3"
                },
                "CHINATOWN",
                "BEACH ROAD",
                "KALLANG BAHRU"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    9614: {
        front: {
            renderType: "standardService",
            serviceNumber: "961M",
            destination: {
                text: "WDL TEMP INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                "KALLANG BAHRU",
                {
                    text: "BEACH ROAD",
                    font: "Mobitec-7:7"
                },
                {
                    text: "CHINATOWN",
                    font: "Mobitec-7:7"
                },
                "JLN BUKIT MERAH",
                {
                    text: "QUEENSWAY",
                    font: "Mobitec-7:7"
                },
                "UPP BT TIMAH RD",
                "WOODLANDS AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9621: {
        front: {
            renderType: "standardService",
            serviceNumber: "962",
            destination: {
                text: "SEMBAWANG DR",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "962",
                    top: "SEMBAWANG",
                    bottom: "DRIVE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 5,6,7",
                "SEMBAWANG WAY",
                "SEMBAWANG CRES",
                "SEMBAWANG DRIVE"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9622: {
        front: {
            renderType: "standardService",
            serviceNumber: "962",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "962",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "SEMBAWANG DR",
                "SEMBAWANG CRES",
                "SEMBAWANG WAY",
                "WOODLANDS AVE 7,6,5"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9623: {
        front: {
            renderType: "destScroll",
            serviceNumber: "962A",
            top: "ENDS AT",
            bottom: "SEMBAWANG DRIVE",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    9624: {
        front: {
            renderType: "destScroll",
            serviceNumber: "962B",
            top: "ENDS AT",
            bottom: "SEMBAWANG DR",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    9625: {
        front: {
            renderType: "destScroll",
            serviceNumber: "962C",
            top: "ENDS AT  BLK 680",
            bottom: "WOODLANDS AVE 6",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    9641: {
        front: {
            renderType: "standardService",
            serviceNumber: "964",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "964",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 7,6",
                "WOODLANDS AVE 9",
                "WOODLANDS LOOP",
                "WOODLANDS LINK"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9642: {
        front: {
            renderType: "destScroll",
            serviceNumber: "964A",
            top: "ENDS AT",
            bottom: "WOODLANDS LINK",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    9671: {
        front: {
            renderType: "standardService",
            serviceNumber: "967",
            destination: {
                text: "WDL TEMP INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                "WOODLANDS AVE 3, 1",
                "WOODLANDS ST 41",
                "WOODLANDS AVE 1",
                "WDL DR 17 (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9701: {
        front: {
            renderType: "standardService",
            serviceNumber: "970",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "970",
                    top: "SHENTON",
                    bottom: "WAY",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "HILLVIEW RD, AVE",
                "JLN JURONG KECHIL",
                "DUNEARN RD",
                "SIXTH AVENUE",
                "COMMONWEALTH AVE",
                "KIM SENG ROAD",
                "EU TONG SEN ST"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9702: {
        front: {
            renderType: "standardService",
            serviceNumber: "970",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "970",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                {
                    text: "NEW BRIDGE RD",
                    font: "Mobitec-7:7"
                },
                {
                    text: "ZION RD",
                    font: "Mobitec-7:7"
                },
                "COMMONWEALTH AVE",
                {
                    text: "SIXTH AVENUE",
                    font: "Mobitec-7:7"
                },
                "UPP BUKIT TIMAH RD",
                "JLN JURONG KECHIL",
                "HILLVIEW AVE, RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9711: {
        front: {
            renderType: "standardService",
            serviceNumber: "971",
            destination: {
                text: "CECIL STREET",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "971",
                    top: "CECIL",
                    bottom: "STREET",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "JELAPANG ROAD",
                "SEGAR / FAJAR RD",
                "PENDING / PETIR RD",
                {
                    text: "WHITLEY / STEVENS RD",
                    font: "Mobitec-7:4"
                },
                "SCOTTS / ORCARD RD",
                "NICOLL HIGHWAY",
                "COLLYER QUAY",
                "RAFFES QUAY",
                "SHENTON WAY",
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9712: {
        front: {
            renderType: "standardService",
            serviceNumber: "971",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "971",
                    top: "BUKIT",
                    bottom: "PANJANG",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "FULLERTON ROAD",
                "ESPLANADE DR",
                "STAMFORD ROAD",
                "ORCHARD/ PENANG RD",
                "SOMERSET ROAD",
                "GARAGE / SCOTTS RD",
                {
                    text: "STEVENS / WHITLEY RD",
                    font: "Mobitec-7:4"
                },
                "PETIR / PENDING RD",
                "FAJAR / SEGAR RD",
                "JELAPANG RD",
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9718: {
        front: {
            renderType: "standardService",
            serviceNumber: "971E",
            destination: {
                text: "CECIL STREET",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "971E",
                    top: "CECIL STREET",
                    topFont: "Mobitec-13:7"
                },
                {
                    text: "BT PANJANG RING RD",
                    font: "Mobitec-7:4"
                },
                "JELAPANG ROAD",
                {
                    text: "SEGAR / FAJAR RD",
                    font: "Mobitec-7:5:3"
                },
                "WHITLEY ROAD",
                {
                    text: "SCOTTS / ORCHARD RD",
                    font: "Mobitec-7:4"
                },
                {
                    text: "NICOLL HIGHWAY",
                    font: "Mobitec-7:5:3"
                },
                "COLLYER QUAY",
                "RAFFLES QUAY",
                "SHENTON WAY",
                "ANSON ROAD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    9719: {
        front: {
            renderType: "standardService",
            serviceNumber: "971E",
            destination: {
                text: "BT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "971E",
                    top: "BUKIT",
                    bottom: "PANJANG",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "ANSON RD / CECIL ST",
                    font: "Mobitec-7:4"
                },
                "FULLERTON ROAD",
                "ESPLANADE DR",
                "STAMFORD ROAD",
                {
                    text: "ORCHARD/ PENANG RD",
                    font: "Mobitec-7:4"
                },
                "SOMERSET ROAD",
                {
                    text: "GARAGE / SCOTTS RD",
                    font: "Mobitec-7:4"
                },
                "WHITLEY ROAD",
                {
                    text: "BT PANJANG RING RD",
                    font: "Mobitec-7:4"
                },
                {
                    text: "FAJAR / SEGAR RD",
                    font: "Mobitec-7:4"
                },
                "JELAPANG ROAD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9721: {
        front: {
            renderType: "standardService",
            serviceNumber: "972",
            destination: {
                text: "ORCHARD ROAD",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "972",
                    top: "ORCHARD",
                    bottom: "ROAD",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "BT PANJANG RD",
                    font: "Mobitec-7:4"
                },
                "SENJA ROAD / LINK",
                "JELAPANG ROAD",
                "SEGAR / FAJAR RD",
                "BT PANJANG RING RD",
                "BKE / PIE",
                "WHITLEY ROAD",
                "STEVENS / SCOTTS RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9722: {
        front: {
            renderType: "standardService",
            serviceNumber: "972",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "972",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "PENANG RD",
                {
                    text: "SOMERSET ROAD",
                    font: "Mobitec-7:7"
                },
                "ORCHARD TURN",
                "SCOTTS / STEVENS RD",
                "WHITLEY ROAD",
                "PIE / BKE",
                "BT PANJANG RING RD",
                "FAJAR / SEGAR RD",
                "JELAPANG RD",
                "SENJA LINK / ROAD",
                "BT PANJANG RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9723: {
        front: {
            renderType: "destScroll",
            serviceNumber: "972A",
            top: "ENDS AT",
            bottom: "DHOBY GHAUT MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    9729: {
        front: {
            renderType: "standardService",
            serviceNumber: "972",
            destination: {
                text: "10TH ANNIVERSARY",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "",
                    top: "HAPPY 10~ YEAR",
                    bottom: "ANNIVERSARY!",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7",
                    image: "972Anniversary"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    9731: {
        front: {
            renderType: "standardService",
            serviceNumber: "973",
            destination: {
                text: "BT PANJANG",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "973",
                    top: "BT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "BT PANJANG ROAD",
                "PENDING / PETIR RD",
                "DAIRY FARM ROAD",
                "HILLVIEW RD / AVE",
                "HUME AVE (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9741: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "974",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                "UPP JURONG RD",
                "JURONG WEST ST 63",
                "JALAN BOON LAY",
                "CHOA CHU KANG MRT",
                "CHOA CHU KANG WAY",
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9742: {
        front: {
            renderType: "SLBPstandardService",
            serviceNumber: "974",
            destination: {
                text: "JOO KOON INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                "CHOA CHU KANG WAY",
                "CHOA CHU KANG MRT",
                "JALAN BOON LAY",
                "JURONG WEST ST 63",
                "UPPER JURONG ROAD",
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9743: {
        front: {
            renderType: "SLBPdestScroll",
            serviceNumber: "974A",
            top: "ENDS AT LOT 1 / ",
            topFont: "Mobitec-7:5:1",
            bottom: "CHOA CHU KANG STN",
            bottomFont: "Mobitec-7:5:1"
        }
    },
    9751: {
        front: {
            renderType: "standardService",
            serviceNumber: "975",
            destination: {
                text: "LIM CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "975",
                    top: "LIM CHU KANG",
                    topFont: "Mobitec-13:7"
                },
                "TECK WHYE AVE",
                "CHOA CHU KANG MRT",
                "C.C.K WAY,AVE 3",
                {
                    text: "OLD CHOA CHU KANG RD",
                    font: "Mobitec-7:4"
                },
                "LIM CHU KANG RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9752: {
        front: {
            renderType: "standardService",
            serviceNumber: "975",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "975",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "LIM CHU KANG RD",
                {
                    text: "OLD CHOA CHU KANG RD",
                    font: "Mobitec-7:4"
                },
                "C.C.K  AVE 3,WAY",
                "CHOA CHU KANG MRT",
                {
                    text: "TECK WHYE AVE",
                    font: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9753: {
        front: {
            renderType: "destScroll",
            serviceNumber: "975A",
            top: "ENDS AT",
            bottom: "LOR RUSUK",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    9754: {
        front: {
            renderType: "destScroll",
            serviceNumber: "975B",
            top: "ENDS AT",
            bottom: "LIM CHU KANG LANE 3",
            topFont: "Mobitec-7:4",
            bottomFont: "Mobitec-7:4"
        }
    },
    9755: {
        front: {
            renderType: "SLBPdestScroll",
            serviceNumber: "975C",
            top: "ENDS AT",
            topFont: "Mobitec-7:7",
            bottom: "POLICE COAST GUARD",
            bottomFont: "Mobitec-7:5:2"
        }
    },
    9761: {
        front: {
            renderType: "standardService",
            serviceNumber: "976",
            destination: {
                text: "BT PANJANG INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "976",
                    top: "BUKIT PANJANG",
                    bottom: "INT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CHOA CHU KANG WAY",
                "CHOA CHU KANG RD",
                "SENJA ROAD",
                "SEGAR ROAD",
                "BT PANJANG RING RD",
                "PETIR RD"
                
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9762: {
        front: {
            renderType: "standardService",
            serviceNumber: "976",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "976",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "PETIR RD",
                "BT PANJANG RING RD",
                "SEGAR RD",
                "SENJA RD",
                "CHOA CHU KANG RD",
                "CHOA CHU KANG WAY"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9791: {
        front: {
            renderType: "standardService",
            serviceNumber: "979",
            destination: {
                text: "BT PANJANG",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "979",
                    top: "BT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                {
                    text: "PETIR / JELEBU RD",
                    font: "Mobitec-7:5:3"
                },
                "WOODLANDS RD",
                "C.C.K DR / NTH 5",
                "C.C.K ST 52 / DR",
                "C.C.K NORTH 7",
                "C.C.K CRES (LOOP)"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    9792: {
        front: {
            renderType: "standardService",
            serviceNumber: "979X",
            destination: {
                text: "BT PANJANG INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "979X",
                    top: "BUKIT PANJANG",
                    bottom: "INT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "C.C.K DRIVE",
                "C.C.K NORTH 7",
                "C.C.K CRES (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9821: {
        front: {
            renderType: "standardService",
            serviceNumber: "982E",
            destination: {
                text: "MARINA BLVD",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "982E",
                    top: "MARINA",
                    bottom: "BOULEVARD",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "C. C. K AVE 5,4",
                "C. C. K WAY,AVE 1",
                "TECK WHYE AVE",
                "CHOA CHU KANG RD",
                "BUKIT BATOK RD",
                {
                    text: "ANSON ROAD",
                    font: "Mobitec-7:7"
                },
                "ROBINSON ROAD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9822: {
        front: {
            renderType: "standardService",
            serviceNumber: "982E",
            destination: {
                text: "C.C.K AVE 5",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "982E",
                    top: "CHOA CHU KANG",
                    bottom: "AVENUE 5",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CENTRAL BLVD",
                "SHENTON WAY",
                "BUKIT BATOK ROAD",
                "CHOA CHU KANG RD",
                "TECK WHYE AVE",
                "C.C.K AVE 1,WAY",
                "C.C.K AVE 4"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9831: {
        front: {
            renderType: "standardService",
            serviceNumber: "983",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "983",
                    top: "CHOA CHU KANG",
                    bottom: "INTERCHANGE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "C.C.K AVE 4 ,5",
                "C.C.K AVE 6 ,1",
                "CHOA CHU KANG RD",
                "PETIR ROAD",
                "JELEBU RD (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9834: {
        front: {
            renderType: "standardService",
            serviceNumber: "983M",
            destination: {
                text: "TECK WHYE CRES",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "983M",
                    top: "TECK WHYE",
                    bottom: "CRESCENT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "C.C.K AVE 6, 1, 7",
                "C.C.K GROVE",
                "C.C.K WAY",
                "C.C.K AVE 1",
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9851: {
        front: {
            renderType: "standardService",
            serviceNumber: "985",
            destination: {
                text: "GEYLANG LOR 1",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "985",
                    top: "GEYLANG LOR 1/",
                    bottom: "KALLANG MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "TECK WHYE AVE",
                "B. B WEST AVE 7,4",
                "B. B WEST AVE 2",
                "B. B EAST AVE 2",
                "JLN JURONG KECHIL",
                "JLN TOA PAYOH",
                "BENDEMEER ROAD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9852: {
        front: {
            renderType: "standardService",
            serviceNumber: "985",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "985",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "SERANGOON ROAD",
                "JLN TOA PAYOH",
                "JLN JURONG KECHIL",
                "B. B EAST AVE 2",
                "B. B WEST AVE 2, 4",
                "B. B WEST AVE 7",
                "TECK WHYE AVE"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9853: {
        front: {
            renderType: "destScroll",
            serviceNumber: "985A",
            top: "ENDS AT",
            bottom: "JLN JURONG KECHIL",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    9911: {
        front: {
            renderType: "standardService",
            serviceNumber: "991",
            destination: {
                text: "CHOA CHU KANG INT",
                font: "Mobitec-7:4"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "991",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "B. B WEST AVE 3, 6",
                "BUKIT BATOK ST 11",
                "B. B WEST AVE 8, 5",
                "BRICKLAND RD",
                "KEAT HONG LINK"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9912: {
        front: {
            renderType: "standardService",
            serviceNumber: "991",
            destination: {
                text: "BUKIT BATOK INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "991",
                    top: "BUKIT BATOK",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "KEAT HONG LINK",
                "BRICKLAND RD",
                "B. B WEST AVE 5, 8",
                "BUKIT BATOK ST 11",
                "B. B WEST AVE 6, 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9913: {
        front: {
            renderType: "destScroll",
            serviceNumber: "991A",
            top: "ENDS AT PRINCESS",
            bottom: "ELIZABETH PRI SCH",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    9914: {
        front: {
            renderType: "destScroll",
            serviceNumber: "991B",
            top: "ENDS AT",
            bottom: "OPP C.C.K MARKET",
            topFont: "Mobitec-7:5:2", // sic
            bottomFont: "Mobitec-7:5:2"
        }
    },
    9915: {
        front: {
            renderType: "destScroll",
            serviceNumber: "991C",
            top: "ENDS AT",
            bottom: "BUKIT GOMBAK MRT",
            topFont: "Mobitec-7:5:2", // sic
            bottomFont: "Mobitec-7:5:1"
        }
    },
    9998: {
        front: {
            renderType: "destScroll",
            top: "RETROFITTED",
            topFont: "Mobitec-7:7",

            bottom: "ELECTRIC BUS",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    9999: {
        front: {
            renderType: "message",
            text: "ELECTRIC BUS",
            font: "Mobitec-13:8",
            spacing: 1
        },
    },
}

EDSExtras['SMRT (PostSLBP)'] = {
    1: {
        front: {
            renderType: "destScroll",
            top: "MERRY CHRISTMAS",
            topFont: "Mobitec-7:7",

            bottom: "HAPPY NEW YEAR",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    2: {
        front: {
            renderType: "message",
            font: "Mobitec-13:7",
            text: "GONG XI FA CAI",
            spacing: 1
        }
    },
    3: {
        front: {
            renderType: "message",
            font: "Mobitec-13:7",
            text: "SELAMAT HARI RAYA",
            spacing: 1
        }
    },
    4: {
        front: {
            renderType: "destScroll",
            top: "HAPPY",
            topFont: "Mobitec-7:7",

            bottom: "DEEPAVALI",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    5: {
        front: {
            renderType: "destScroll",
            top: "EZ READER OUT OF ORDER",
            topFont: "Mobitec-7:5:3",

            bottom: "PLEASE PAY CASH",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    6: {
        front: {
            renderType: "message",
            font: "Mobitec-13:7",
            text: "LAST BUS",
            spacing: 1
        }
    },
    7: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "HAPPY NATIONAL DAY S'PORE",
                font: "Mobitec-7:4"
            },
            scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "",
                    top: " HAPPY NATIONAL DAY",
                    bottom: " SINGAPORE !",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4",
                    image: "SingaporeFlag"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    11: {
        front: {
            renderType: "message",
            font: "Mobitec-13:7",
            text: "YOUR RIDE, OUR PRIDE",
            spacing: 1
        },
    },
    12: {
        front: {
            renderType: "standardService2",
            serviceNumber: "",
            destination: {
                text: "SMRT Buses thank you for your support",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "SMRT Buses thank you",
                    bottom: " for your support",
                    topFont: "Mobitec-7:5:2",
                    bottomFont: "Mobitec-7:5:2"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "We hope to",
                    bottom: "serve you again",
                    topFont: "Mobitec-7:5:2",
                    bottomFont: "Mobitec-7:5:2"
                },
            ],
            scrollFont: "Mobitec-7:5:2"
        },
    },
    13: {
        front: {
            renderType: "message",
            font: "Mobitec-7:5:2",
            text: "Moving WITH you - 13 June",
            spacing: 1
        },
    },
    50: {
        front: {
            renderType: "destScroll",
            top: "SMRT SALUTES",
            topFont: "Mobitec-7:7",

            bottom: "OUR NSMEN",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    98: {
        front: {
            renderType: "standardService2",
            serviceNumber: "",
            destination: {
                text: "SMRT Buses thanked you for your support",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "SMRT Buses thanked you",
                    bottom: " for your support",
                    topFont: "Mobitec-7:5:2",
                    bottomFont: "Mobitec-7:5:2"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "We hope to",
                    bottom: "serve you again",
                    topFont: "Mobitec-7:5:2",
                    bottomFont: "Mobitec-7:5:2"
                },
            ],
            scrollFont: "Mobitec-7:5:2"
        },
    },
}

EDSImages['SMRT (PostSLBP)'] = {
    logo: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    roundel: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    "972Anniversary": [
            [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1],
            [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    "SingaporeFlag": [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    'gas-temp-flower': [
        [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
        [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
        [1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
        [1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
    ]
}
