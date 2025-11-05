EDSFormats.SBST = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 1
        },
        destination: {
            align: "left,bottom",
            margin: {
                left: 0
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "left,top",
            margin: {
                left: 0,
                top: 1
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
                top: 2
            },
            text: "$serviceNumber",
            font: "Mobitec-13:7",
            spacing: 1
        },
        destination: {
            align: "left,bottom",
            margin: {
                left: 0
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "left,top",
            margin: {
                left: 0,
                top: 1
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 2600,

            font: "$scrollFont",
            spacing: 1
        },
        text: "$serviceNumber+' '+$destination.text"
    },
    standardService3: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 1
        },
        destination: {
            align: "left,bottom",
            margin: {
                left: 0
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "left,top",
            margin: {
                left: 0,
                top: 0
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 2600,

            font: "$scrollFont",
            spacing: 1
        },
        text: "$serviceNumber+' '+$destination.text"
    },
    swt: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 1
        },
        destinationRoad: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "'TERMINATES AT '+$destinationRoad",
            font: "Mobitec-7:4",
            spacing: 1
        },
        destinationName: {
            align: "centre-x,bottom",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destinationName",
            font: "Mobitec-7:4",
            spacing: 1
        },
        text: "$serviceNumber+' '+$destinationRoad"
    },
    swt2: { // Small number font
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
                top: 2,
            },
            text: "$serviceNumber",
            font: "Mobitec-13:7",
            spacing: 1
        },
        destinationRoad: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "'TERMINATES AT '+$destinationRoad",
            font: "Mobitec-7:4",
            spacing: 1
        },
        destinationName: {
            align: "centre-x,bottom",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destinationName",
            font: "Mobitec-7:4",
            spacing: 1
        },
        text: "$serviceNumber+' '+$destinationRoad"
    },
    full: {
        __dynamic__: (matrix, data) => {
            matrixPrimitives.setStrokeColour(null);
            matrixPrimitives.fillRectangle(matrix, 0, 0, matrix.width, matrix.height);
    },
    text: "All LED Lit"
    },
    brandedSvc: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 1
        },
        branding: {
            align: "left",
            margin: {
                left: 0
            },
            text: "$branding",
            font: "$font",
            spacing: '$spacing'
        },
        text: "$serviceNumber+' '+$branding"
    },
    brandedSvc2: { // Middle align text
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 1
        },
        branding: {
            align: "middle",
            margin: {
                left: 0
            },
            text: "$branding",
            font: "$font",
            spacing: '$spacing'
        },
        text: "$serviceNumber+' '+$branding"
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
                    "$svcSpacing === null" : 1,
                    "else": "$svcSpacing"
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
            spacing: {
                $$cond: {
                    "$Spacing === null" : 1,
                    "else": "$topSpacing",
                }
            },
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
    destScroll2: {
        serviceNumber: {
            align: "right",
            margin: {
                right: "0",
                top: "2",
            },
            text: "$serviceNumber",
            font: "Mobitec-13:7",
            spacing: {
                $$cond: {
                    "$svcSpacing === null" : 1,
                    "else": "$svcSpacing"
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
            spacing: {
                $$cond: {
                    "$Spacing === null" : 1,
                    "else": "$topSpacing",
                }
            },
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
    destScroll3: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: {
                $$cond: {
                    "$svcSpacing === null" : 1,
                    "else": "$svcSpacing"
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
            spacing: {
                $$cond: {
                    "$Spacing === null" : 1,
                    "else": "$topSpacing",
                }
            },
            margin: {
                right: 'width(serviceNumber)',
                top: '1'
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
                right: 'width(serviceNumber)',
                bottom: '1'
            }
        },

        text: "$serviceNumber+' '+$top+' '+$bottom"
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
    expressService: {
        logo: {
            align: "left,centre-y",
            image: "express"
        },
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 1
        },
        text: "'EXPRESS '+$serviceNumber"
    },
    FfwService: {
        logo: {
            align: "left,centre-y",
            image: "fastforward"
        },
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 1
        },
        text: "'FAST FORWARD '+$serviceNumber"
    }
}

EDSData.SBST = {
    1: {
        front: {
            renderType: "full"
        }
    },
    10: {
        front: {
            renderType: "message",
            text: "EB1",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    13: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "1N",
            branding: "NITE OWL",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    18: {
        front: {
            renderType: "standardService",
            serviceNumber: "LCS1",
            destination: {
                text: "> CHANGI AIRFREIGHT CTR",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'TAMPINES AVE 3',
                'TAMPINES AVE 5',
                'LOYANG WAY',
                'ALPS AVE',
                'AIRPORT CARGO RD',
                'AIRLINE RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    19: {
        front: {
            renderType: "standardService",
            serviceNumber: "LCS1",
            destination: {
                text: "> TAMPINES AVE 9",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'AIRPORT CARGO RD',
                'AIRLINE RD',
                'ALPS AVE',
                'LOYANG WAY',
                'TAMPINES AVE 3',
                'TAMPINES AVE 5'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    20: {
        front: {
            renderType: "message",
            text: "EB2",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    23: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "2N",
            branding: "NITE OWL",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    28: {
        front: {
            renderType: "standardService",
            serviceNumber: "LCS2",
            destination: {
                text: "> CHANGI AIRFREIGHT CTR",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'PUNGGOL CENTRAL',
                'LOYANG WAY',
                'ALPS AVE',
                'AIRPORT CARGO RD',
                'AIRLINE RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    29: {
        front: {
            renderType: "standardService",
            serviceNumber: "LCS2",
            destination: {
                text: "> PUNGGOL WAY",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'AIRPORT CARGO RD',
                'AIRLINE RD',
                'ALPS AVE',
                'LOYANG WAY',
                'PUNGGOL CENTRAL',
                'PUNGGOL WAY'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    30: {
        front: {
            renderType: "message",
            text: "EB3",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    33: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "3N",
            branding: "NITE OWL",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    40: {
        front: {
            renderType: "message",
            text: "EB4",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    41: {
        front: {
            renderType: "standardService",
            serviceNumber: "4",
            destination: {
                text: "TAMPINES INT-CHANGI NTH WAY",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "TAMPINES AVE 7",
                "FLORA RD",
                "CHANGI NORTH WAY",
                "FLORA RD",
                "TAMPINES AVE 7"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    43: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "4N",
            branding: "NITE OWL",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    50: {
        front: {
            renderType: "message",
            text: "EB5",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    51: {
        front: {
            renderType: "standardService",
            serviceNumber: "5",
            destination: {
                text: "> BUKIT MERAH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "UPP CHANGI RD EAST",
                "BEDOK RESERVOIR RD",
                "THOMSON RD",
                "SCOTTS RD",
                "TIONG BAHRU RD",
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    52: {
        front: {
            renderType: "standardService",
            serviceNumber: "5",
            destination: {
                text: "> PASIR RIS INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TIONG BAHRU RD",
                "SCOTTS RD",
                "THOMSON RD",
                "BEDOK RESERVOIR RD",
                "UPP CHANGI RD EAST"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    53: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "5N",
            branding: "NITE OWL",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    55: {
        front: {
            renderType: "standardService",
            serviceNumber: "5A",
            destination: {
                text: "UPPER CHANGI STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "5A",
                destinationRoad: "U. CHANGI RD",
                destinationName: "EAST (UPP CHANGI STN/SUTD)",
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    56: {
        front: {
            renderType: "standardService",
            serviceNumber: "5B",
            destination: {
                text: "MARIAM WAY",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "destScroll",
                serviceNumber: "5B",
                top: "TERMINATES AT MARIAM WAY",
                topFont: "Mobitec-7:4",
                bottom: "(BEF MARIAM WALK)",
                bottomFont: "Mobitec-7:4",
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    60: {
        front: {
            renderType: "message",
            text: "EB6",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    63: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "6N",
            branding: "NITE OWL",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    70: {
        front: {
            renderType: "message",
            text: "EB7",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    71: {
        front: {
            renderType: "standardService",
            serviceNumber: "7",
            destination: {
                text: "> CLEMENTI INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "CHANGI RD",
                "GUILLEMARD RD",
                "NORTH BRIDGE RD",
                "OCHARD BOULEVARD",
                "HOLLAND RD",
                "ULU PANDAN RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    72: {
        front: {
            renderType: "standardService",
            serviceNumber: "7",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ULU PANDAN RD",
                "HOLLAND RD",
                "ORCHARD RD",
                "VICTORIA ST",
                "GUILLEMARD RD",
                "SIMS AVE EAST"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    75: {
        front: {
            renderType: "standardService",
            serviceNumber: "7A",
            destination: {
                text: "ORCHARD STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "7A",
                    top: "TERMINATE AT ORCHARD BLVD",
                    topFont: "Mobitec-7:4",
                    bottom: "(BEF ORCHARD STN EXIT B)",
                    bottomFont: "Mobitec-7:4",
                },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    76: {
        front: {
            renderType: "standardService",
            serviceNumber: "7B",
            destination: {
                text: "DHOBY GHAUT STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "7B",
                destinationRoad: "ORCHARD RD",
                destinationName: "(DHOBY GHAUT STN)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    80: {
        front: {
            renderType: "message",
            text: "EB8",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    81: {
        front: {
            renderType: "standardService",
            serviceNumber: "8",
            destination: {
                text: "> TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TAMPINES AVE 1",
                "BEDOK RESERVOIR RD",
                "UBI AVE 2",
                'PAYA LEBAR RD',
                'MACPHERSON RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    82: {
        front: {
            renderType: "standardService",
            serviceNumber: "8",
            destination: {
                text: "> TAMPINES INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "MACPHERSON RD",
                'PAYA LEBAR RD',
                'UBI AVE 2',
                'BEDOK RESERVOIR RD',
                'TAMPINES AVE 1, 2, 7'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    282: {
        front: {
            renderType: "standardService",
            serviceNumber: "28",
            destination: {
                text: "> TAMPINES INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'TOA PAYOH LOR 6, 4',
                'BRADDELL RD',
                'PAYA LEBAR RD',
                'NEW UPP CHANGI RD',
                'TAMPINES AVE 2, 9'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    83: {
        front: {
            renderType: "standardService",
            serviceNumber: "CT8",
            destination: {
                text: "> ANG MO KIO AVE 9",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'EU TONG SEN ST',
                'ANG MO KIO AVE 10',
                'ANG MO KIO AVE 3',
                'ANG MO KIO AVE 4'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    84: {
        front: {
            renderType: "standardService",
            serviceNumber: "CT8",
            destination: {
                text: "> KAMPONG BAHRU TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'ANG MO KIO AVE 4',
                'ANG MO KIO AVE 3',
                'ANG MO KIO AVE 10',
                'NEW BRIDGE RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    90: {
        front: {
            renderType: "message",
            text: "EB9",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    91: {
        front: {
            renderType: "standardService",
            serviceNumber: "9",
            destination: {
                text: "> CHANGI AIRFREIGHT CTR",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "NEW UPPER CHANGI RD",
                'SIMEI ST 3',
                'TAMPINES AVE 2, 7',
                'LOYANG AVE',
                'CHANGI CARGO RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    92: {
        front: {
            renderType: "standardService",
            serviceNumber: "9",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "AIRPORT CARGO RD",
                "LOYANG AVE",
                "TAMPINES AVE 7, 2",
                "SIMEI ST 3",
                'NEW UPPER CHANGI RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    95: {
        front: {
            renderType: "standardService",
            serviceNumber: "9A",
            destination: {
                text: "LOYANG AVE",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "9A",
                destinationRoad: "LOYANG AVE",
                destinationName: "(BLK 149A)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    96: {
        front: {
            renderType: "standardService",
            serviceNumber: "9B",
            destination: {
                text: "AIRLINE RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "9B",
                destinationRoad: "AIRLINE RD",
                destinationName: "(3RD CARGO AGENTS)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    100: {
        front: {
            renderType: "message",
            text: "EB10",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    101: {
        front: {
            renderType: "standardService",
            serviceNumber: "10",
            destination: {
                text: "> KENT RIDGE TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "EAST COAST RD",
                'TANJONG KATONG RD',
                'SHENTON WAY',
                'PASIR PANJANG RD',
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    102: {
        front: {
            renderType: "standardService",
            serviceNumber: "10",
            destination: {
                text: "> TAMPINES INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "PASIR PANJANG RD",
                'NICOLL HIGHWAY',
                'TANJONG KATONG RD',
                'EAST COAST RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    108: {
        front: {
            renderType: "expressService",
            serviceNumber: "10e"
        }
    },
    109: {
        front: {
            renderType: "FfwService",
            serviceNumber: "10e"
        }
    },
    110: {
        front: {
            renderType: "message",
            text: "EB11",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    111: {
        front: {
            renderType: "standardService",
            serviceNumber: "11",
            destination: {
                text: "LOR 1 GEYLANG TER-RHU CROSS",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "SIMS WAY",
                "STADIUM CRESCENT",
                "RHU CROSS",
                "STADIUM WALK",
                "SIMS WAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    120: {
        front: {
            renderType: "message",
            text: "EB12",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    130: {
        front: {
            renderType: "message",
            text: "EB13",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    131: {
        front: {
            renderType: "standardService",
            serviceNumber: "13",
            destination: {
                text: "> UPP EAST COAST TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 6",
                'BRADDELL RD',
                'LAVENDER ST',
                'SIMS AVE',
                'UPP EAST COAST RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    132: {
        front: {
            renderType: "standardService",
            serviceNumber: "13",
            destination: {
                text: "> YIO CHU KANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "UPP EAST COAST RD",
                'GEYLANG RD',
                'LAVENDER ST',
                'BRADDELL RD',
                'ANG MO KIO AVE 6, 8'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    135: {
        front: {
            renderType: "standardService",
            serviceNumber: "13A",
            destination: {
                text: "BISHAN STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "13A",
                destinationRoad: "BISHAN RD",
                destinationName: "(BISHAN STN)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    140: {
        front: {
            renderType: "message",
            text: "EB14",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    141: {
        front: {
            renderType: "standardService",
            serviceNumber: "14",
            destination: {
                text: "> CLEMENTI INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BEDOK NORTH AVE 3",
                "UPPER EAST COAST RD",
                'EAST COAST RD',
                "MOUNTBATTEN RD",
                "RIVER VALLEY RD",
                "JALAN BUKIT MERAH",
                "COMMONWEALTH AVE WEST"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    142: {
        front: {
            renderType: "standardService",
            serviceNumber: "14",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "COMMONWEALTH AVE WEST",
                "JALAN BUKIT MERAH",
                "RIVER VALLEY RD",
                "ORCHARD RD",
                "MOUNTBATTEN RD",
                "EAST COAST RD",
                "UPPER EAST COAST RD",
                "BEDOK NORTH RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    145: {
        front: {
            renderType: "standardService",
            serviceNumber: "14A",
            destination: {
                text: "GRANGE RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "14A",
                destinationRoad: "GRANGE RD",
                destinationName: "(SOMERSET YOUTH PK)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    148: {
        front: {
            renderType: "expressService",
            serviceNumber: "14e"
        }
    },
    149: {
        front: {
            renderType: "FfwService",
            serviceNumber: "14e"
        }
    },
    150: {
        front: {
            renderType: "message",
            text: "EB15",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    160: {
        front: {
            renderType: "message",
            text: "EB16",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    161: {
        front: {
            renderType: "standardService",
            serviceNumber: "16",
            destination: {
                text: "> BUKIT MERAH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "UPP EAST COAST RD",
                "MARINE PARADE RD",
                "JOO CHIAT RD",
                "NICOLL HIGHWAY",
                "ORCHARD BOULEVARD",
                "TIONG BAHRU RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    162: {
        front: {
            renderType: "standardService",
            serviceNumber: "16",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TIONG BAHRU RD",
                "ORCHARD RD",
                "NICOLL HIGHWAY",
                "JOO CHIAT RD",
                "MARINE PARADE RD",
                "UPP EAST COAST RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    163: {
        front: {
            renderType: "standardService",
            serviceNumber: "16M",
            destination: {
                text: "> BUKIT MERAH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "UPP EAST COAST RD",
                "MARINE PARADE RD",
                "JOO CHIAT RD",
                "NICOLL HIGHWAY",
                "ORCHARD BOULEVARD",
                "JALAN BUKIT MERAH"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    164: {
        front: {
            renderType: "standardService",
            serviceNumber: "16M",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JALAN BUKIT MERAH",
                "ORCHARD RD",
                "NICOLL HIGHWAY",
                "JOO CHIAT RD",
                "MARINE PARADE RD",
                "UPP EAST COAST RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    170: {
        front: {
            renderType: "message",
            text: "EB17",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    180: {
        front: {
            renderType: "message",
            text: "EB18",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    181: {
        front: {
            renderType: "standardService",
            serviceNumber: "18",
            destination: {
                text: "> BEDOK NTH DEPOT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'TAMPINES NORTH DR 1',
                'TAMPINES AVE 9',
                'TAMPINES ST 33',
                'TAMPINES AVE 2',
                'BEDOK RESERVOIR RD',
                'BEDOK NORTH AVE 4'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    182: {
        front: {
            renderType: "standardService",
            serviceNumber: "18",
            destination: {
                text: "> TAMP NORTH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BEDOK NORTH AVE 4",
                'BEDOK RESERVOIR RD',
                'TAMPINES AVE 2',
                'TAMPINES ST 33',
                'TAMPINES AVE 9',
                'TAMPINES NORTH DR 1'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    183: {
        front: {
            renderType: "standardService",
            serviceNumber: "CT18",
            destination: {
                text: "> BEDOK NORTH AVE 3",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'EU TONG SEN ST',
                'JALAN EUNOS',
                'BEDOK RESERVOIR RD',
                'BEDOK NORTH AVE 3'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    184: {
        front: {
            renderType: "standardService",
            serviceNumber: "CT18",
            destination: {
                text: "> KG. BAHRU TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'BEDOK NORTH AVE 3',
                'BEDOK RESERVOIR RD',
                'JALAN EUNOS',
                'NEW BRIDGE RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    190: {
        front: {
            renderType: "message",
            text: "EB19",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    191: {
        front: {
            renderType: "standardService",
            serviceNumber: "19",
            destination: {
                text: "> CHANGI AIRFREIGHT CTR",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'TAMPINES AVE 7',
                "LOYANG AVE",
                'AIRLINE RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    192: {
        front: {
            renderType: "standardService",
            serviceNumber: "19",
            destination: {
                text: "> TAMPINES INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'AIRLINE RD',
                'LOYANG AVE',
                'TAMPINES AVE 7'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    200: {
        front: {
            renderType: "message",
            text: "EB20",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    201: {
        front: {
            renderType: "standardService",
            serviceNumber: "20",
            destination: {
                text: "TAMPINES INT-CHANGI BIZ PK",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "TAMPINES AVE 5",
                "TAMPINES AVE 2",
                "SIMEI ST 1",
                "CHANGI STH AVE 2",
                'CHANGI BIZ PK CTRL 2',
                'TAMPINES AVE 2',
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    205: {
        front: {
            renderType: "standardService",
            serviceNumber: "20A",
            destination: {
                text: "EXPO STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "20A",
                destinationRoad: "CHANGI STH",
                destinationName: "AVE 1 (EXPO STN EXIT B)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    210: {
        front: {
            renderType: "message",
            text: "EB21",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    211: {
        front: {
            renderType: "standardService",
            serviceNumber: "21",
            destination: {
                text: "> ST MICHAEL'S TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TAMPINES AVE 7",
                'BEDOK RESERVOIR RD',
                'GEYLANG RD',
                'BOON KENG RD',
                'MOULMEIN RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    212: {
        front: {
            renderType: "standardService",
            serviceNumber: "21",
            destination: {
                text: "> PASIR RIS INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BALESTIER RD",
                "MOULMEIN RD",
                'SIMS AVE',
                'BOON KENG RD',
                'BEDOK RESERVOIR RD',
                'TAMPINES AVE 7',
                "PASIR RIS DR 1"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    215: {
        front: {
            renderType: "standardService",
            serviceNumber: "21A",
            destination: {
                text: "KITCHENER RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "21A",
                destinationRoad: "KITCHENER",
                destinationName: "RD (BEF TAI HOE HOTEL)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    213: {
        front: {
            renderType: "standardService",
            serviceNumber: "21X",
            destination: {
                text: "ST MICHAEL'S TER - NOVENA STN",
                font: "Mobitec-7:4"
            },
            scrolls: [
            {
                renderType: "destScroll",
                serviceNumber: "21X",
                top: "ST MICHAEL'S TER -",
                topFont: "Mobitec-7:4",
                bottom: "NOVENA STN (LOOP)",
                bottomFont: "Mobitec-7:4",
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    220: {
        front: {
            renderType: "message",
            text: "EB22",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    221: {
        front: {
            renderType: "standardService",
            serviceNumber: "22",
            destination: {
                text: "> EUNOS INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 8",
                "SERANGOON CTRL",
                "UPPER PAYA LEBAR RD",
                "UBI AVE 2",
                "EUNOS LINK"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    222: {
        front: {
            renderType: "standardService",
            serviceNumber: "22",
            destination: {
                text: "> ANG MO KIO INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "EUNOS LINK",
                "UBI AVE 2",
                "UPPER PAYA LEBAR RD",
                "SERANGOON CTRL",
                "ANG MO KIO AVE 8"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    223: {
        front: {
            renderType: "standardService",
            serviceNumber: "22",
            destination: {
                text: "> TAMPINES INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 8",
                "SERANGOON CTRL",
                "UPPER PAYA LEBAR RD",
                "UBI AVE 2",
                "BEDOK RESERVOIR RD",
                "TAMPINES AVE 4"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    224: {
        front: {
            renderType: "standardService",
            serviceNumber: "22",
            destination: {
                text: "> ANG MO KIO INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TAMPINES AVE 4",
                "BEDOK RESERVOIR RD",
                "UBI AVE 2",
                "UPPER PAYA LEBAR RD",
                "SERANGOON CTRL",
                "ANG MO KIO AVE 8"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    230: {
        front: {
            renderType: "message",
            text: "EB23",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    231: {
        front: {
            renderType: "standardService",
            serviceNumber: "23",
            destination: {
                text: "TAMPINES INT - ROCHOR",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "TAMPINES AVE 1",
                "BEDOK NORTH RD",
                "BENDEMEER RD",
                "SERANGOON RD",
                "BEDOK NORTH RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    241: {
        front: {
            renderType: "standardService",
            serviceNumber: "24",
            destination: {
                text: "> CHANGI AIRPORT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'BOUNDARY RD',
                'UPPER PAYA LEBAR RD',
                'SIMS AVE',
                'NEW UPPER CHANGI RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    240: {
        front: {
            renderType: "message",
            text: "EB24",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    242: {
        front: {
            renderType: "standardService",
            serviceNumber: "24",
            destination: {
                text: "> ANG MO KIO INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'NEW UPPER CHANGI RD',
                'GEYLANG RD',
                'UPPER PAYA LEBAR RD',
                'BOUNDARY RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    251: {
        front: {
            renderType: "standardService",
            serviceNumber: "25",
            destination: {
                text: "> UPP EAST COAST TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 3",
                "HOUGANG AVE 2, 3",
                "JALAN EUNOS",
                "SIMS AVE EAST"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    250: {
        front: {
            renderType: "message",
            text: "EB25",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    252: {
        front: {
            renderType: "standardService",
            serviceNumber: "25",
            destination: {
                text: "> ANG MO KIO INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "CHANGI RD",
                "JALAN EUNOS",
                "HOUGANG AVE 3",
                "HOUGANG AVE 2",
                "ANG MO KIO AVE 3"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    260: {
        front: {
            renderType: "message",
            text: "EB26",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    261: {
        front: {
            renderType: "standardService",
            serviceNumber: "26",
            destination: {
                text: "> TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'NEW UPPER CHANGI RD',
                'GEYLANG RD',
                'KALLANG BAHRU',
                'JALAN TOA PAYOH'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    262: {
        front: {
            renderType: "standardService",
            serviceNumber: "26",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'JALAN TOA PAYOH',
                'KALLANG BAHRU',
                'SIMS AVE',
                'NEW UPPER CHANGI RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    270: {
        front: {
            renderType: "message",
            text: "EB27",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    271: {
        front: {
            renderType: "standardService",
            serviceNumber: "27",
            destination: {
                text: "> CHANGI AIRPORT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'HOUGANG AVE 10, 6',
                'SENGKANG CTRL',
                'COMPASSVALE RD',
                'TAMPINES AVE 10, 9, 7, 4, 5',
                'AIRPORT BOULEVARD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    272: {
        front: {
            renderType: "standardService",
            serviceNumber: "27",
            destination: {
                text: "> HOUGANG CTRL INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'AIRPORT BOULEVARD',
                'TAMPINES AVE 5, 4, 7, 9, 10',
                'COMPASSVALE RD',
                'SENGKANG CTRL',
                'HOUGANG AVE 6, 10'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    275: {
        front: {
            renderType: "standardService",
            serviceNumber: "27A",
            destination: {
                text: "TAMPINES AVE 4",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "27A",
                destinationRoad: "TAMPINES",
                destinationName: "AVE 4 (OPP CENTURY SQ)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    280: {
        front: {
            renderType: "message",
            text: "EB28",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    281: {
        front: {
            renderType: "standardService",
            serviceNumber: "28",
            destination: {
                text: "> TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'TAMPINES AVE 9, 2',
                'NEW UPP CHANGI RD',
                'PAYA LEBAR RD',
                'BRADDELL RD',
                'TOA PAYOH LOR 4, 6'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    282: {
        front: {
            renderType: "standardService",
            serviceNumber: "28",
            destination: {
                text: "> TAMPINES INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'TOA PAYOH LOR 6, 4',
                'BRADDELL RD',
                'PAYA LEBAR RD',
                'NEW UPP CHANGI RD',
                'TAMPINES AVE 2, 9'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    283: {
        front: {
            renderType: "standardService",
            serviceNumber: "CT28",
            destination: {
                text: "> CLEMENTI AVE 4",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "EU TONG SEN ST",
                "C'WEALTH AVE WEST",
                "CLEMENTI AVE 4"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    284: {
        front: {
            renderType: "standardService",
            serviceNumber: "CT28",
            destination: {
                text: "> NEW BRIDGE RD TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "CLEMENTI AVE 4",
                "C'WEALTH AVE WEST",
                "NEW BRIDGE RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    290: {
        front: {
            renderType: "message",
            text: "EB29",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    291: {
        front: {
            renderType: "standardService",
            serviceNumber: "29",
            destination: {
                text: "TAMP INT-CHANGI VILLAGE",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "TAMPINES AVE 9",
                "OLD TAMPINES RD",
                "UPPER CHANGI RD NORTH",
                "NETHERAVON RD",
                "CHANGI VILLAGE RD",
                "NETHERAVON RD",
                "UPPER CHANGI RD NORTH",
                "OLD TAMPINES RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    295: {
        front: {
            renderType: "standardService",
            serviceNumber: "29A",
            destination: {
                text: "TAMPINES AVE 7",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "destScroll",
                serviceNumber: "29A",
                top: "TERMINATES AT",
                topFont: "Mobitec-6:5",
                bottom: "TAMPINES|AVE7|(BLK|497D)",
                bottomFont: "Mobitec-7:4",
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    298: {
        front: {
            renderType: "standardService",
            serviceNumber: "29A",
            destination: {
                text: "TAMPINES AVE 7",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "29A",
                destinationRoad: "TAMPINES",
                destinationName: "AVE 7 (BLK 497D)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    300: {
        front: {
            renderType: "message",
            text: "EB30",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    301: {
        front: {
            renderType: "standardService",
            serviceNumber: "30",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "CHANGI RD",
                'TANJONG KATONG RD',
                'OLD AIRPORT RD',
                'KEPPEL RD',
                'TELOK BLANGAH RD',
                'PASIR PANJANG RD',
                'WEST COAST RD',
                'CORPORATION RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    302: {
        front: {
            renderType: "standardService",
            serviceNumber: "30",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "CORPORATION DR",
                "WEST COAST RD",
                "PASIR PANJANG RD",
                "TELOK BLANGAH RD",
                "KEPPEL RD",
                "OLD AIRPORT RD",
                "SIMS AVE EAST"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    308: {
        front: {
            renderType: "expressService",
            serviceNumber: "30e"
        }
    },
    309: {
        front: {
            renderType: "FfwService",
            serviceNumber: "30e"
        }
    },
    310: {
        front: {
            renderType: "message",
            text: "EB31",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    311: {
        front: {
            renderType: "standardService",
            serviceNumber: "31",
            destination: {
                text: "> TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'SIMEI AVE',
                'BEDOK SOUTH AVE 1',
                'MARINE PARADE RD',
                'DUNMAN RD',
                'SERANGOON RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    312: {
        front: {
            renderType: "standardService",
            serviceNumber: "31",
            destination: {
                text: "> TAMPINES INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'BENDEMEER RD',
                'DUNMAN RD',
                'MARINE PARADE RD',
                'BEDOK SOUTH AVE 1',
                'SIMEI AVE'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    315: {
        front: {
            renderType: "standardService",
            serviceNumber: "31A",
            destination: {
                text: "TANAH MERAH STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "31A",
                destinationRoad: "NW U. CHANGI",
                destinationName: "(T.MERAH STN EXIT A)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    320: {
        front: {
            renderType: "message",
            text: "EB32",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    321: {
        front: {
            renderType: "standardService",
            serviceNumber: "32",
            destination: {
                text: "> BUONA VISTA TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'FRANKEL AVE',
                'EAST COAST RD',
                'NORTH BRIDGE RD',
                'RIVER VALLEY RD',
                'MARGARET DRIVE',
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    322: {
        front: {
            renderType: "standardService",
            serviceNumber: "32",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'MARGARET DR',
                'RIVER VALLEY RD',
                'VICTORIA ST',
                'EASST COAST RD',
                'FRANKEL AVE'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    330: {
        front: {
            renderType: "message",
            text: "EB33",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    331: {
        front: {
            renderType: "standardService",
            serviceNumber: "33",
            destination: {
                text: "> KENT RIDGE TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'JOO CHIAT PLACE',
                'OLD AIRPORT RD',
                'VICTORIA ST',
                'NEW BRIDGE RD',
                'TIONG BAHRU RD',
                'ALEXANDRA RD',
                'AYE'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    332: {
        front: {
            renderType: "standardService",
            serviceNumber: "33",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'AYE',
                "ALEXANDRA RD",
                'TIONG BAHRU RD',
                "EU TONG SEN ST",
                'VICTORIA ST',
                'OLD AIRPORT RD',
                "JOO CHIAT PLACE"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    335: {
        front: {
            renderType: "standardService",
            serviceNumber: "33A",
            destination: {
                text: "TIONG BAHRU RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "33A",
                destinationRoad: "",
                destinationName: "TIONG BAHRU RD (BLK 1)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    336: {
        front: {
            renderType: "standardService",
            serviceNumber: "33B",
            destination: {
                text: "OLD AIRPORT RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "33B",
                destinationRoad: "",
                destinationName: "OLD AIRPORT RD (BLK 22)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    340: {
        front: {
            renderType: "message",
            text: "EB34",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    351: {
        front: {
            renderType: "standardService",
            serviceNumber: "35",
            destination: {
                text: "> ALPS AVE",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "NEW UPPER CHANGI RD",
                "XILIN AVE",
                "TANAH MERAH FERRY RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    352: {
        front: {
            renderType: "standardService",
            serviceNumber: "35",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TANAH MERAH FERRY RD",
                "XILIN AVE",
                "NEW UPPER CHANGI RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    357: {
        front: {
            renderType: "standardService",
            serviceNumber: "35M",
            destination: {
                text: "BEDOK INT-T.MERAH FERRY",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "NEW UPPER CHANGI RD",
                "XILIN AVE",
                "TANAH MERAH FERRY RD",
                "XILIN AVE",
                "NEW UPPER CHANGI RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    371: {
        front: {
            renderType: "standardService",
            serviceNumber: "37",
            destination: {
                text: "TAMP INT-CHANGI NTH CRES",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "TAMPINES AVE 7",
                "UPPER CHANGI RD NORTH",
                "CHANGI NORTH ST 1"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    380: {
        front: {
            renderType: "message",
            text: "EB38",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    381: {
        front: {
            renderType: "standardService",
            serviceNumber: "38",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'TAMPINES AVE 7, 2',
                'SIMEI ST 1, 3, 4',
                'NEW UPP CHANGI RD',
                'BEDOK SOUTH AVE 3',
                'BEDOK SOUTH RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    382: {
        front: {
            renderType: "standardService",
            serviceNumber: "38",
            destination: {
                text: "> TAMPINES INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'BEDOK SOUTH RD',
                'BEDOK SOUTH AVE 3',
                'NEW UPP CHANGI RD',
                'SIMEI ST 4, 3, 1',
                'TAMPINES AVE 2, 7'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    391: {
        front: {
            renderType: "standardService",
            serviceNumber: "39",
            destination: {
                text: "> YISHUN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TAMPINES AVE 2",
                'PASIR RIS DR 1',
                "JALAN KAYU",
                "YISHUN AVE 2"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    392: {
        front: {
            renderType: "standardService",
            serviceNumber: "39",
            destination: {
                text: "> TAMP CONCOURSE INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "YISHUN AVE 2",
                "JALAN KAYU",
                "PASIR RIS DR 1",
                "TAMPINES AVE 2"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    395: {
        front: {
            renderType: "standardService",
            serviceNumber: "39A",
            destination: {
                text: "JALAN KAYU",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt2",
                serviceNumber: "39A",
                destinationRoad: "JALAN KAYU",
                destinationName: "(AFT SELETAR CAMP G)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    396: {
        front: {
            renderType: "standardService",
            serviceNumber: "39B",
            destination: {
                text: "PASIR RIS STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "39B",
                destinationRoad: "",
                destinationName: "PASIR RIS STN EXIT B"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    401: {
        front: {
            renderType: "standardService",
            serviceNumber: "40",
            destination: {
                text: "BEDOK INT - MERPATI RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'SIGLAP RD',
                'TANJONG KATONG RD',
                'MACPHERSON EST',
                'SIMS AVE'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    421: {
        front: {
            renderType: "standardService",
            serviceNumber: "42",
            destination: {
                text: "JLN KEMBANGAN-FIDELIO ST",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'LENGKONG TIGA',
                'LENGKONG EMPAT',
                'FIDELIO ST',
                'SIGLAP DR',
                'FRANKEL AVE'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    430: {
        front: {
            renderType: "message",
            text: "EB43",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    440: {
        front: {
            renderType: "message",
            text: "EB44",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    450: {
        front: {
            renderType: "message",
            text: "EB45",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    451: {
        front: {
            renderType: "standardService",
            serviceNumber: "45",
            destination: {
                text: "> UPP EAST COAST TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'ANG MO KIO AVE 10',
                'SERANGOON AVE 2',
                'LOR AH SOO',
                'EUNOS LINK',
                'BEDOK NORTH RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    452: {
        front: {
            renderType: "standardService",
            serviceNumber: "45",
            destination: {
                text: "> ANG MO KIO DEPOT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'BEDOK NORTH RD',
                'EUNOS LINK',
                'LOR AH SOO',
                'SERANGOON AVE 2',
                'ANG MO KIO AVE 10'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    455: {
        front: {
            renderType: "standardService",
            serviceNumber: "45A",
            destination: {
                text: "SERANGOON STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "45A",
                destinationRoad: "UPP S'GOON",
                destinationName: "RD (S'GOON STN EXIT A)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    460: {
        front: {
            renderType: "message",
            text: "EB46",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    461: {
        front: {
            renderType: "standardService",
            serviceNumber: "46",
            destination: {
                text: "> UPP EAST COAST TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "PASIR RIS DR 8",
                "TAMPINES AVE 6",
                "TAMPINES AVE 3",
                "BEDOK RESERVOIR RD",
                "BEDOK NORTH RD",
                "BEDOK SOUTH AVE 3"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    462: {
        front: {
            renderType: "standardService",
            serviceNumber: "46",
            destination: {
                text: "> PASIR RIS INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BEDOK SOUTH AVE 3",
                "BEDOK NORTH RD",
                "BEDOK RESERVOIR RD",
                "TAMPINES AVE 3",
                "TAMPINES AVE 6",
                "PASIR RIS DR 8"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    463: {
        front: {
            renderType: "standardService",
            serviceNumber: "46",
            destination: {
                text: "> TAMPINES INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BEDOK SOUTH AVE 3",
                "BEDOK NORTH RD",
                "BEDOK RESERVOIR RD",
                "TAMPINES AVE 3"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    470: {
        front: {
            renderType: "message",
            text: "EB47",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    471: {
        front: {
            renderType: "standardService",
            serviceNumber: "47",
            destination: {
                text: "CHANGI BIZ PK-AMBER RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "BEDOK SOUTH RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    480: {
        front: {
            renderType: "message",
            text: "EB48",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    481: {
        front: {
            renderType: "standardService",
            serviceNumber: "48",
            destination: {
                text: "> BUONA VISTA TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'BEDOK SOUTH AVE 3',
                'UPP EAST COAST RD',
                'MARINE PARADE RD',
                'BUKIT TIAMH RD',
                'FARRER RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    482: {
        front: {
            renderType: "standardService",
            serviceNumber: "48",
            destination: {
                text: "> BEDOK NORTH DEPOT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'FARRER RD',
                'DUNEARN RD',
                'MARINE PARADE RD',
                'UPP EAST COAST RD',
                'BEDOK SOUTH AVE 3'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    490: {
        front: {
            renderType: "message",
            text: "EB49",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    500: {
        front: {
            renderType: "message",
            text: "EB50",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    501: {
        front: {
            renderType: "standardService",
            serviceNumber: "50",
            destination: {
                text: "> PUNGGOL INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 8",
                "ANG MO KIO AVE 5",
                "YIO CHU KANG RD",
                "SENGKANG WEST AVE",
                "SENGKANG EAST WAY",
                "PUNGGOL DR"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    502: {
        front: {
            renderType: "standardService",
            serviceNumber: "50",
            destination: {
                text: "> BISHAN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "PUNGGOL DR",
                "SENGKANG EAST WAY",
                "SENGKANG WEST AVE",
                "YIO CHU KANG RD",
                "ANG MO KIO AVE 5",
                "ANG MO KIO AVE 8"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    505: {
        front: {
            renderType: "standardService",
            serviceNumber: "50A",
            destination: {
                text: "ANG MO KIO STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "destScroll",
                serviceNumber: "50A",
                top: "TERMINATES BEFORE",
                topFont: "Mobitec-7:5:1",
                bottom: "ANG MO KIO STN EXIT B",
                bottomFont: "Mobitec-7:5:1",
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    510: {
        front: {
            renderType: "message",
            text: "EB51",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    511: {
        front: {
            renderType: "standardService",
            serviceNumber: "51",
            destination: {
                text: "> JURONG EAST INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'HOUGANG AVE 3',
                'EUNOS LINK',
                'GEYLANG RD',
                'NORTH BRIDGE RD',
                'ALEXANDRA RD',
                'PASIR PANJANG RD',
                'WEST COAST RD',
                'JURONG TOWN HALL RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    512: {
        front: {
            renderType: "standardService",
            serviceNumber: "51",
            destination: {
                text: "> HOUGANG CTRL INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'JURONG TOWN HALL RD',
                'WEST COAST RD',
                'PASIR PANJANG RD',
                'ALEXANDRA RD',
                'VICTORIA ST',
                'SIMS AVE',
                'EUNOS LINK',
                'HOUGANG AVE 3'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    515: {
        front: {
            renderType: "standardService",
            serviceNumber: "51A",
            destination: {
                text: "PANDAN GARDENS",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "51A ",
                destinationRoad: "",
                destinationName: "PANDAN GDNS (BLK 410)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    520: {
        front: {
            renderType: "message",
            text: "EB52",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    521: {
        front: {
            renderType: "standardService",
            serviceNumber: "52",
            destination: {
                text: "> JURONG EAST INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'SIN MING AVE',
                'UPPER THOMSON RD',
                'LORNIE RD',
                'CLEMENTI RD',
                "C'WEALTH AVE WEST",
                'TOH GUAN RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    522: {
        front: {
            renderType: "standardService",
            serviceNumber: "52",
            destination: {
                text: "> BISHAN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'TOH GUAN RD',
                "C'WEALTH AVE WEST",
                'CLEMENTI RD',
                'LORNIE RD',
                'UPPER THOMSON RD',
                'SIN MING AVE'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    530: {
        front: {
            renderType: "message",
            text: "EB53",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    531: {
        front: {
            renderType: "standardService",
            serviceNumber: "53",
            destination: {
                text: "> CHANGI AIRPORT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BISHAN RD",
                "SERANGOON CENTRAL",
                "LOR AH SOO",
                "HOUGANG AVE 1",
                "PASIR RIS DR 1"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    532: {
        front: {
            renderType: "standardService",
            serviceNumber: "53",
            destination: {
                text: "> BISHAN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "PASIR RIS DR 1",
                "HOUGANG AVE 1",
                "LOR AH SOO",
                "SERANGOON CENTRAL",
                "BISHAN RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    535: {
        front: {
            renderType: "standardService",
            serviceNumber: "53A",
            destination: {
                text: "CHANGI AIRPORT PTB 2",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "destScroll",
                serviceNumber: "53A",
                top: "TERMINATES AT",
                topFont: "Mobitec-6:5",
                bottom: "CHANGI AIRPORT (PTB 2)",
                bottomFont: "Mobitec-6:5",
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    537: {
        front: {
            renderType: "standardService2",
            serviceNumber: "53M",
            destination: {
                text: "KOVAN HUB - S'GOON CTRL",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "HOUGANG AVE 1",
                "LORONG AH SOO",
                "SERANGOOON CENTRAL",
                "LORONG AH SOO",
                "HOUGANG AVE 1"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    539: {
        front: {
            renderType: "standardService2",
            serviceNumber: "53M",
            destination: {
                text: "HOUGANG AVE 1-S'GOON CTRL",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "HOUGANG AVE 1",
                "LORONG AH SOO",
                "SERANGOOON CENTRAL",
                "LORONG AH SOO",
                "HOUGANG AVE 1"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    540: {
        front: {
            renderType: "message",
            text: "EB54",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    541: {
        front: {
            renderType: "standardService",
            serviceNumber: "54",
            destination: {
                text: "> KAMPONG BAHRU TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'MARYMOUNT RD',
                'THOMSON RD',
                'NEWTON RD',
                'SCOTTS RD',
                'RIVER VALLEY RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    542: {
        front: {
            renderType: "standardService",
            serviceNumber: "54",
            destination: {
                text: "> BISHAN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'RIVER VALLEY RD',
                'SCOTTS RD',
                'NEWTON RD',
                'THOMSON RD',
                'MARYMOUNT RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    550: {
        front: {
            renderType: "message",
            text: "EB55",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    551: {
        front: {
            renderType: "standardService",
            serviceNumber: "55",
            destination: {
                text: "> UPP EAST COAST TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'ANG MO KIO AVE 10',
                'HOUGANG AVE 2',
                'HOUGANG AVE 3',
                'JALAN EUNOS',
                'STILL ROAD SOUTH',
                'MARINE PARADE RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    552: {
        front: {
            renderType: "standardService",
            serviceNumber: "55",
            destination: {
                text: "> BISHAN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'MARINE PARADE RD',
                'STILL ROAD SOUTH',
                'JALAN EUNOS',
                'HOUGANG AVE 3',
                'HOUGANG AVE 2',
                'ANG MO KIO AVE 10'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    556: {
        front: {
            renderType: "standardService",
            serviceNumber: "55B",
            destination: {
                text: "ANG MO KIO AVE 10",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "destScroll3",
                serviceNumber: "55B",
                top: "TERMINATES AT",
                topFont: "Mobitec-6:5",
                bottom: "AMK AVE 10 (BLK 443)",
                bottomFont: "Mobitec-6:5",
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    561: {
        front: {
            renderType: "standardService",
            serviceNumber: "56",
            destination: {
                text: "> MARINA CTR TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BISHAN ST 13",
                "LOR 6 TOA PAYOH",
                "THOMSON RD",
                "BUKIT TIMAH RD",
                "MIDDLE RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    562: {
        front: {
            renderType: "standardService",
            serviceNumber: "56",
            destination: {
                text: "> BISHAN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'MIDDLE RD',
                'BUKIT TIMAH RD',
                'THOMSON RD',
                'LOR 6 TOA PAYOH',
                'BISHAN ST 13'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    563: {
        front: {
            renderType: "standardService",
            serviceNumber: "56",
            destination: {
                text: "BISHAN INT-MARINA CTR TER",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "BISHAN ST 13",
                "LOR 6 TOA PAYOH",
                "THOMSON RD",
                "BUKIT TIMAH RD",
                "MIDDLE RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    571: {
        front: {
            renderType: "standardService",
            serviceNumber: "57",
            destination: {
                text: "> BUKIT MERAH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'LOR 6 TOA PAYOH',
                'THOMSON RD',
                'SHENTON WAY',
                'TELOK BLANGAH RD',
                'DEPOT RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    572: {
        front: {
            renderType: "standardService",
            serviceNumber: "57",
            destination: {
                text: "> BISHAN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'DEPOT RD',
                'TELOK BLANGAH RD',
                'CECIL ST',
                'THOMSON RD',
                'LOR 6 TOA PAYOH'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    581: {
        front: {
            renderType: "standardService",
            serviceNumber: "58",
            destination: {
                text: "> PASIR RIS INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'SERANGOON AVE 3',
                'SERANGOON AVE 2',
                'UPP PAYA LEBAR RD',
                'UBI AVE 3',
                'KAKI BUKIT AVE 1',
                'TAMPINES AVE 10',
                'PASIR RIS DR 12, 3',
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    582: {
        front: {
            renderType: "standardService",
            serviceNumber: "58",
            destination: {
                text: "> BISHAN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'PASIR RIS DR 3, 12',
                'TAMPINES AVE 10',
                'KAKI BUKIT AVE 1',
                'UBI AVE 3',
                'UPP PAYA LEBAR RD',
                'SERANGOON AVE 2',
                'SERANGOON AVE 3'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    585: {
        front: {
            renderType: "standardService",
            serviceNumber: "58A",
            destination: {
                text: "TAMPINES AVE 10",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "58A",
                destinationRoad: "TAMP. AVE",
                destinationName: "10 (TAMP WAFER FAB PK)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    586: {
        front: {
            renderType: "standardService",
            serviceNumber: "58B",
            destination: {
                text: "TAI SENG STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "destScroll",
                serviceNumber: "58B",
                top: "TERMINATES AT UPP PAYA",
                topFont: "Mobitec-7:4",
                bottom: "LEBAR (AFT TAI SENG STN)",
                bottomFont: "Mobitec-7:4",
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    591: {
        front: {
            renderType: "standardService",
            serviceNumber: "59",
            destination: {
                text: "> CHANGI VILLAGE TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "LOR 1 TOA PAYOH",
                "KAKI BUKIT AVE 1",
                "BEDOK RESERVOIR RD",
                "TAMPINES AVE 2",
                "LOYANG AVE"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    592: {
        front: {
            renderType: "standardService",
            serviceNumber: "59",
            destination: {
                text: "> BISHAN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "LOYANG AVE",
                "TAMPINES AVE 2",
                "BEDOK RESERVOIR RD",
                "KAKI BUKIT AVE 1",
                "LOR 1 TOA PAYOH"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    "5961T": {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "destScroll",
                serviceNumber: "",
                top: "",
                topFont: "Mobitec-7:4",
                bottom: "",
                bottomFont: "Mobitec-7:4",
            },
            {
                renderType: "destScroll",
                serviceNumber: "",
                top: "",
                topFont: "Mobitec-7:4",
                bottom: "",
                bottomFont: "Mobitec-7:4",
            },
            {
                renderType: "destScroll",
                serviceNumber: "",
                top: "",
                topFont: "Mobitec-7:4",
                bottom: "",
                bottomFont: "Mobitec-7:4",
            },
            {
                renderType: "swt2",
                serviceNumber: "59B",
                destinationRoad: "TAMP AV. 2",
                destinationName: "(TAMP EAST STN EXIT C)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    601: {
        front: {
            renderType: "standardService",
            serviceNumber: "60",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'JALAN EUNOS',
                'BEDOK RESERVOIR RD',
                'BEDOK NORTH RD',
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    602: {
        front: {
            renderType: "standardService",
            serviceNumber: "60",
            destination: {
                text: "> EUNOS INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'BEDOK NORTH RD',
                "BEDOK RESERVOIR RD",
                "JALAN EUNOS"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    605: {
        front: {
            renderType: "standardService",
            serviceNumber: "60A",
            destination: {
                text: "BEDOK RESERVOIR RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "60A",
                destinationRoad: "BEDOK",
                destinationName: "RESERVOIR RD (BLK 608)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    607: {
        front: {
            renderType: "standardService",
            serviceNumber: "60T",
            destination: {
                text: "BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "60T",
                destinationRoad: "",
                destinationName: "BEDOK INT"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    610: {
        front: {
            renderType: "message",
            text: "EB61",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    620: {
        front: {
            renderType: "message",
            text: "EB62",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    630: {
        front: {
            renderType: "message",
            text: "EB63",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    631: {
        front: {
            renderType: "standardService",
            serviceNumber: "63",
            destination: {
                text: "> JLN RUMAH TINGGI",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'UBI AVE 1',
                'GEYLANG RD',
                'NORTH BRIDGE RD',
                'UPPER CROSS ST',
                'TIONG BAHRU RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    632: {
        front: {
            renderType: "standardService",
            serviceNumber: "63",
            destination: {
                text: "> EUNOS INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'TIONG BAHRU RD',
                'EU TONG SEN ST',
                'VICTORIA ST',
                'SIMS AVE',
                'UBI AVE 1'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    635: {
        front: {
            renderType: "standardService",
            serviceNumber: "63A",
            destination: {
                text: "JALAN RUMAH TINGGI",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "63A",
                destinationRoad: "JLN RUMAH",
                destinationName: "TINGGI (OPP BLK 36)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    637: {
        front: {
            renderType: "standardService",
            serviceNumber: "63M",
            destination: {
                text: "EUNOS INT - CIRCUIT RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'UBI AVE 1',
                'UBI AVE 2',
                'JALAN EUNOS',
                'CIRCUIT RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    640: {
        front: {
            renderType: "message",
            text: "EB64",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    641: {
        front: {
            renderType: "standardService",
            serviceNumber: "64",
            destination: {
                text: "> MEI LING ST",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ALJUNIED RD",
                "BENDEMEER RD",
                "JALAN BESAR",
                "CLEMENCEAU AVE",
                "TIONG BAHRU RD",
                "STIRLING RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    642: {
        front: {
            renderType: "standardService",
            serviceNumber: "64",
            destination: {
                text: "> SIMS PLACE TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ALEXANDRA RD",
                "TIONG BAHRU RD",
                "CLEMENCEAU AVE",
                "SELEGIE RD",
                "SERANGOON RD",
                "ALJUNIED RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    651: {
        front: {
            renderType: "standardService",
            serviceNumber: "65",
            destination: {
                text: "> HARBOURFRONT INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BEDOK RESERVOIR RD",
                "UBI AVE 2",
                "MACPHERSON RD",
                "BENDEMEER RD",
                "JALAN BESAR",
                "ORCHARD BOULEVARD",
                "LOWER DELTA RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    652: {
        front: {
            renderType: "standardService",
            serviceNumber: "65",
            destination: {
                text: "> TAMPINES INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "LOWER DELTA RD",
                "ORCHARD RD",
                "SELEGIE RD",
                "SERANGOON RD",
                "MACPHERSON RD",
                "UBI AVE 2",
                "BEDOK RESERVOIR RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    691: {
        front: {
            renderType: "standardService",
            serviceNumber: "69",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'TAMPINES AVE 5',
                'TAMPINES AVE 8',
                'TAMPINES AVE 1',
                'BEDOK RESERVOIR RD',
                'BEDOK NORTH AVE 3',
                'BEDOK NORTH ST 1'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    692: {
        front: {
            renderType: "standardService",
            serviceNumber: "69",
            destination: {
                text: "> TAMPINES INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'BEDOK NORTH AVE 3',
                'BEDOK RESERVOIR RD',
                'TAMPINES AVE 1',
                'TAMPINES AVE 8',
                'TAMPINES AVE 5'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    701: {
        front: {
            renderType: "standardService",
            serviceNumber: "70",
            destination: {
                text: "> SHENTON WAY TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "YIO CHU KANG RD",
                "SERANGOON CENTRAL",
                "UPPER PAYA LEBAR RD",
                "PAYA LEBAR RD",
                "GUILLEMARD RD",
                "NICOLL HIGHWAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    702: {
        front: {
            renderType: "standardService",
            serviceNumber: "70",
            destination: {
                text: "> YIO CHU KANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "NICOLL HIGHWAY",
                'GUILLEMARD RD',
                "PAYA LEBAR RD",
                "UPPER PAYA LEBAR RD",
                "SERANGOON CENTRAL",
                "YIO CHU KANG RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    705: {
        front: {
            renderType: "standardService",
            serviceNumber: "70A",
            destination: {
                text: "TEMASEK AVE",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "70A",
                destinationRoad: "TEMASEK",
                destinationName: "AVE (OPP RITZ-CARLTON)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    706: {
        front: {
            renderType: "standardService",
            serviceNumber: "70B",
            destination: {
                text: "SERANGOON STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "70B",
                destinationRoad: "S'GOON CTRL",
                destinationName: "(S'GOON STN EXIT B)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    707: {
        front: {
            renderType: "standardService",
            serviceNumber: "70M",
            destination: {
                text: "YCK INT-TEMASEK AVE",
                font: "Mobitec-7:4"
            },
            scrolls: [
                    'ANG MO KIO ST 63',
                    'ANG MO KIO ST 64',
                    'YIO CHU KANG RD',
                    'UPP PAYA LEBAR RD',
                    'TEMASAK AVE'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    711: {
        front: {
            renderType: "standardService",
            serviceNumber: "71",
            destination: {
                text: "YCK INT-BISHAN ST 11",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "ANG MO KIO AVE 4",
                "ANG MO KIO AVE 1",
                "BISHAN RD",
                "BRADDELL RD",
                "BISHAN RD",
                "ANG MO KIO AVE 1",
                "ANG MO KIO AVE 4"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    715: {
        front: {
            renderType: "standardService",
            serviceNumber: "71A",
            destination: {
                text: "BISHAN STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "destScroll",
                serviceNumber: "71A",
                top: "OPP BISHAN STN",
                topFont: "LECIP-14:6",
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    721: {
        front: {
            renderType: "standardService",
            serviceNumber: "72",
            destination: {
                text: "> TAMPINES INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 5",
                "HOUGANG AVE 9",
                "HOUGANG CENTRAL",
                "TAMPINES RD",
                "TAMPINES AVE 10",
                "TAMPINES AVE 9"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    722: {
        front: {
            renderType: "standardService",
            serviceNumber: "72",
            destination: {
                text: "> YIO CHU KANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TAMPINES AVE 9",
                "TAMPINES AVE 10",
                "TAMPINES RD",
                "HOUGANG CENTRAL",
                "HOUGANG AVE 9",
                "ANG MO KIO AVE 5"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    725: {
        front: {
            renderType: "standardService",
            serviceNumber: "72A",
            destination: {
                text: "HOUGANG CENTRAL",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "72A",
                destinationRoad: "HOUGANG",
                destinationName: "CTRL (OPP HG CTRL INT)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    726: {
        front: {
            renderType: "standardService",
            serviceNumber: "72B",
            destination: {
                text: "ANG MO KIO AVE 5",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "72B",
                destinationRoad: "AMK AVE 5",
                destinationName: "(ITE COLL CTRL)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    731: {
        front: {
            renderType: "standardService",
            serviceNumber: "73",
            destination: {
                text: "> TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'SERANGOON NORTH AVE 4',
                'SERANGOON GARDEN WAY',
                'LOR CHUAN',
                'BRADDELL RD',
                'LOR 4 TOA PAYOH'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    732: {
        front: {
            renderType: "standardService",
            serviceNumber: "73",
            destination: {
                text: "> ANG MO KIO INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'LOR 4 TOA PAYOH',
                'BRADDELL RD',
                'LOR CHUAN',
                'SERANGOON GARDEN WAY',
                'SERANGOON NORTH AVE 4'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    737: {
        front: {
            renderType: "standardService",
            serviceNumber: "73T",
            destination: {
                text: "TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
            serviceNumber: "73T",
            destinationRoad: "",
            destinationName: "TOA PAYOH INT"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    741: {
        front: {
            renderType: "standardService",
            serviceNumber: "74",
            destination: {
                text: "> BUONA VISTA TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'HOUGANG AVE 8',
                'ANG MO KIO AVE 3',
                'MARYMOUNT RD',
                'LORNIE RD',
                'DUNEARN RD',
                'CLEMENTI RD',
                'DOVER AVE'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    742: {
        front: {
            renderType: "standardService",
            serviceNumber: "74",
            destination: {
                text: "> HOUGANG CTRL INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'DOVER AVE',
                'CLEMENTI RD',
                'BUKIT TIMAH RD',
                'LORNIE RD',
                'MARYMOUNT RD',
                'ANG MO KIO AVE 3',
                'HOUGANG AVE 8'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    748: {
        front: {
            renderType: "expressService",
            serviceNumber: "74e"
        }
    },
    749: {
        front: {
            renderType: "FfwService",
            serviceNumber: "74e"
        }
    },
    761: {
        front: {
            renderType: "standardService",
            serviceNumber: "76",
            destination: {
                text: "> EUNOS INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 4",
                "ANG MO KIO AVE 3",
                "YIO CHU KANG RD",
                "UPPER PAYA LEBAR RD",
                "PAYA LEBAR RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    762: {
        front: {
            renderType: "standardService",
            serviceNumber: "76",
            destination: {
                text: "> YIO CHU KANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "PAYA LEBAR RD",
                "UPPER PAYA LEBAR RD",
                "YIO CHU KANG RD",
                "ANG MO KIO AVE 3",
                "ANG MO KIO AVE 4"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    770: {
        front: {
            renderType: "message",
            text: "EB77",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    780: {
        front: {
            renderType: "message",
            text: "EB78",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    800: {
        front: {
            renderType: "message",
            text: "EB80",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    801: {
        front: {
            renderType: "standardService",
            serviceNumber: "80",
            destination: {
                text: "> HARBOURFRONT INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'UPP SERANGOON RD',
                'UPP PAYA LEBAR RD',
                'GEYLANG RD',
                'NORTH BRIDGE RD',
                'TANJONG PAGAR RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    802: {
        front: {
            renderType: "standardService",
            serviceNumber: "80",
            destination: {
                text: "> SENGKANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'TANJONG PAGAR RD',
                'VICTORIA ST',
                'SIMS AVE',
                'UPP PAYA LEBAR RD',
                'UPP SERANGOON RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    805: {
        front: {
            renderType: "standardService",
            serviceNumber: "80A",
            destination: {
                text: "ALJUNIED STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
            renderType: "swt",
            serviceNumber: "80A",
            destinationRoad: "ALJUNIED",
            destinationName: "RD (ALJUNIED STN)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    810: {
        front: {
            renderType: "message",
            text: "EB81",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    811: {
        front: {
            renderType: "standardService",
            serviceNumber: "81",
            destination: {
                text: "TAMPINES INT-S'GOON CTRL",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "TAMPINES AVE 7",
                "PASIR RIS DR 1",
                "TAMPINES RD",
                "UPPER SERANGOON RD",
                "TAMPINES RD",
                "PASIR RIS DR 1",
                "TAMPINES AVE 7"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    820: {
        front: {
            renderType: "message",
            text: "EB82",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    830: {
        front: {
            renderType: "message",
            text: "EB83",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    840: {
        front: {
            renderType: "message",
            text: "EB84",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    850: {
        front: {
            renderType: "message",
            text: "EB85",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    860: {
        front: {
            renderType: "message",
            text: "EB86",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    861: {
        front: {
            renderType: "standardService",
            serviceNumber: "86",
            destination: {
                text: "> ANG MO KIO INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'COMPASSVALE RD',
                'RIVERVALE DR',
                'JALAN KAYU',
                'YIO CHU KANG RD',
                'ANG MO KIO AVE 6'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    862: {
        front: {
            renderType: "standardService",
            serviceNumber: "86",
            destination: {
                text: "> SENGKANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'ANG MO KIO AVE 6',
                'YIO CHU KANG RD',
                'JALAN KAYU',
                'RIVERVALE DR',
                'COMPASSVALE RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    865: {
        front: {
            renderType: "standardService",
            serviceNumber: "86A",
            destination: {
                text: "YIO CHU KANG STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "86A",
                destinationRoad: "AMK AVE 6",
                destinationName: "(YIO CHU KANG STN)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    866: {
        front: {
            renderType: "standardService",
            serviceNumber: "86B",
            destination: {
                text: "JALAN KAYU",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "86B",
                destinationRoad: "JALAN KAYU",
                destinationName: "(BEF SELETAR CAMP)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    870: {
        front: {
            renderType: "message",
            text: "EB87",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    871: {
        front: {
            renderType: "standardService",
            serviceNumber: "87",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'COMPASSVALE RD',
                'HOUGANG AVE 10, 5, 7, 3',
                'EUNOS LINK',
                'KAKI BUKIT AVE 1',
                'BEDOK NORTH RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    872: {
        front: {
            renderType: "standardService",
            serviceNumber: "87",
            destination: {
                text: "> SENGKANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'BEDOK NORTH RD',
                'KAKI BUKIT AVE 1',
                'EUNOS LINK',
                'HOUGANG AVE 3, 5, 7, 10',
                'COMPASSVALE RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    880: {
        front: {
            renderType: "message",
            text: "EB88",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    881: {
        front: {
            renderType: "standardService",
            serviceNumber: "88",
            destination: {
                text: "> TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'PASIR RIS DR 3',
                'PUNGGOL RD',
                'HOUGANG AVE 8',
                'ANG MO KIO AVE 5',
                'BISHAN ST 22'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    882: {
        front: {
            renderType: "standardService",
            serviceNumber: "88",
            destination: {
                text: "> PASIR RIS INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'BISHAN ST 22',
                'ANG MO KIO AVE 5',
                'HOUGANG AVE 8',
                'PUNGGOL RD',
                'PASIR RIS DR 3'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    885: {
        front: {
            renderType: "standardService",
            serviceNumber: "88A",
            destination: {
                text: "ANG MO KIO STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "88A",
                destinationRoad: "AMK AVE 3",
                destinationName: "(OPP ANG MO KIO STN)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    886: {
        front: {
            renderType: "standardService",
            serviceNumber: "88B",
            destination: {
                text: "ANG MO KIO AVE 5",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "88B",
                destinationRoad: "AMK AVE 5",
                destinationName: "(BEF YIO CHU KANG RD)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    890: {
        front: {
            renderType: "message",
            text: "EB89",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    891: {
        front: {
            renderType: "standardService",
            serviceNumber: "89",
            destination: {
                text: "> CHANGI AIRFREIGHT CTR",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "HOUGANG AVE 10",
                "COMPASSVALE RD",
                "PASIR RIS DR 1",
                "PASIR RIS DR 3",
                "LOYANG AVE",
                "AIRLINE RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    892: {
        front: {
            renderType: "standardService",
            serviceNumber: "89",
            destination: {
                text: "> HOUGANG CTRL INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'AIRLINE RD',
                'LOYANG AVE',
                'PASIR RIS DR 3',
                'PASIR RIS DR 1',
                'COMPASSVALE RD',
                'HOUGANG AVE 10'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    895: {
        front: {
            renderType: "standardService",
            serviceNumber: "89A",
            destination: {
                text: "AIRPORT CARGO RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "89A",
                destinationRoad: "AIRPORT",
                destinationName: "CARGO RD (A'FREIGHT BLDG)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    898: {
        front: {
            renderType: "expressService",
            serviceNumber: "89e"
        }
    },
    899: {
        front: {
            renderType: "FfwService",
            serviceNumber: "89e"
        }
    },
    901: {
        front: {
            renderType: "standardService",
            serviceNumber: "90",
            destination: {
                text: "TOA PAYOH INT - AIRPORT RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "LOR 6 TOA PAYOH",
                "JALAN TOA PAYOH",
                "MACPHERSON RD",
                "AIRPORT RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    905: {
        front: {
            renderType: "standardService",
            serviceNumber: "90A",
            destination: {
                text: "AIRPORT RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "destScroll",
                serviceNumber: "90A",
                top: "TERMINATES AT A'PORT RD",
                topFont: "Mobitec-7:4",
                bottom: "(PAYA LEBAR AIRBASE)",
                bottomFont: "Mobitec-7:4",
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    910: {
        front: {
            renderType: "message",
            text: "EB91",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    911: {
        front: {
            renderType: "standardService",
            serviceNumber: "91",
            destination: {
                text: "BUONA V TER-AYER RAJAH CRES",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "COMMONWEALTH AVE",
                "NTH BUONA VISTA RD",
                "AYER RAJAH AVE",
                "AYER RAJAH CRES",
                "AYER RAJAH AVE",
                "NTH BUONA VISTA RD",
                "COMMONWEALTH AVE"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    920: {
        front: {
            renderType: "message",
            text: "EB92",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    921: {
        front: {
            renderType: "standardService",
            serviceNumber: "92",
            destination: {
                text: "GHIM MOH - SCIENCE PK DR",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'NORTH BUONA VISTA RD',
                'BUONA VISTA FLYOVER',
                'SCIENCE PK DR',
                'BUONA VISTA FLYOVER',
                'NORTH BUONA VISTA RD',
                'MOUNT SINAI RD',
                'MOUNT SINAI DR',
                'MOUNT SINAI RISE'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    922: {
        front: {
            renderType: "standardService",
            serviceNumber: "92T",
            destination: {
                text: "GHIM MOH TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "92T",
                destinationRoad: "GHIM MOH",
                destinationName: "RD (GHIM MOH TER)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    925: {
        front: {
            renderType: "standardService",
            serviceNumber: "92A",
            destination: {
                text: "SCIENCE PARK DR",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "92A",
                destinationRoad: "SCIENCE",
                destinationName: "PARK DR (OPP RUTHEFORD)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    926: {
        front: {
            renderType: "standardService",
            serviceNumber: "92B",
            destination: {
                text: "KENT RIDGE STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "92B",
                destinationRoad: "",
                destinationName: "KENT RIDGE STN"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    927: {
        front: {
            renderType: "standardService",
            serviceNumber: "92A",
            destination: {
                text: "GHIM MOH RD (OLD)",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "92A",
                destinationRoad: "",
                destinationName: "GHIM MOH RD (BLK 13)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    928: {
        front: {
            renderType: "standardService",
            serviceNumber: "92B",
            destination: {
                text: "SCIENCE PARK DR (OLD)",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "92B",
                destinationRoad: "SCIENCE",
                destinationName: "PARK DR (OPP RUTHEFORD)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    929: {
        front: {
            renderType: "standardService",
            serviceNumber: "92M",
            destination: {
                text: "GHIM MOH-N. BUONA VISTA",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'NORTH BUONA VISTA RD',
                'MOUNT SINAI RD',
                'MOUNT SINAI DR',
                'MOUNT SINAI RISE',
                'GHIM MOH RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    931: {
        front: {
            renderType: "standardService",
            serviceNumber: "93",
            destination: {
                text: "> EUNOS INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'ALEXANDRA RD',
                'FARRER RD',
                'BRADDELL RD',
                'BARTLEY RD',
                'JALAN EUNOS'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    932: {
        front: {
            renderType: "standardService",
            serviceNumber: "93",
            destination: {
                text: "> HARBOURFRONT INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'JALAN EUNOS',
                'BARTLEY RD',
                'BRADDELL RD',
                'FARRER RD',
                'ALEXANDRA RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    941: {
        front: {
            renderType: "standardService",
            serviceNumber: "94",
            destination: {
                text: "EUNOS INT - AIRPORT RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'JALAN EUNOS',
                'EUNOS LINK',
                'AIRPORT RD',
                'EUNOS LINK',
                'JALAN EUNOS'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    945: {
        front: {
            renderType: "standardService",
            serviceNumber: "94A",
            destination: {
                text: "AIRPORT RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "destScroll",
                serviceNumber: "94A",
                top: "TERMINATE AT AIRPORT RD",
                topFont: "Mobitec-7:4",
                bottom: "(BEF RSAF ROUNDABOUT)",
                bottomFont: "Mobitec-7:4",
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    950: {
        front: {
            renderType: "message",
            text: "EB95",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    951: {
        front: {
            renderType: "standardService",
            serviceNumber: "95",
            destination: {
                text: "KENT RIDGE - HOLLAND RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'KENT RIDGE CRESCENT',
                'LOWER KENT RIDGE RD',
                "NORTH BUONA VISTA RD",
                "HOLLAND AVE",
                'NORTH BUONA VISTA RD',
                'LOWER KENT RIDGE RD',
                'KENT RIDGE CRESENT'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    956: {
        front: {
            renderType: "standardService",
            serviceNumber: "95B",
            destination: {
                text: "BUONA VISTA STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "95B",
                destinationRoad: "N. BUONA V.",
                destinationName: "RD (BUONA V STN EXIT E)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    960: {
        front: {
            renderType: "message",
            text: "EB96",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    980: {
        front: {
            renderType: "message",
            text: "EB98",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    990: {
        front: {
            renderType: "message",
            text: "EB99",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    991: {
        front: {
            renderType: "standardService",
            serviceNumber: "99",
            destination: {
                text: "> JOO KOON INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JURONG EAST AVE 1",
                "JURONG WEST AVE 1",
                "JURONG WEST AVE 4",
                "JURONG WEST ST 91",
                "UPP JURONG RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    992: {
        front: {
            renderType: "standardService",
            serviceNumber: "99",
            destination: {
                text: "> CLEMENTI INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "UPP JURONG RD",
                "JURONG WEST ST 91",
                "JURONG WEST AVE 4",
                "JURONG WEST AVE 1",
                "JURONG EAST AVE 1"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1000: {
        front: {
            renderType: "message",
            text: "1000TH BSEP BUS",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    1001: {
        front: {
            renderType: "standardService",
            serviceNumber: "100",
            destination: {
                text: "> GHIM MOH TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'ALJUNIED RD',
                'GEYLANG RD',
                'BEACH RD',
                'SHENTON WAY',
                'TELOK BLANGAH RD',
                'ALEXANDRA RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1002: {
        front: {
            renderType: "standardService",
            serviceNumber: "100",
            destination: {
                text: "> SERANGOON INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'ALEXANDRA RD',
                'TELOK BLANGAH RD',
                'ROBINSON RD',
                'BEACH RD',
                'SIMS AVE',
                'ALJUNIED RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1005: {
        front: {
            renderType: "standardService",
            serviceNumber: "100A",
            destination: {
                text: "ALJUNIED STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "100A",
                destinationRoad: "ALJUNIED",
                destinationName: "RD (ALJUNIED STN)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1011: {
        front: {
            renderType: "standardService",
            serviceNumber: "101",
            destination: {
                text: "SERANGOON INT-BUANGKOK LK",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "UPPER SERANGOON RD",
                "HOUGANG CENTRAL",
                "HOUGANG AVE 8",
                "HOUGANG ST 51",
                "BUANGKOK LINK",
                "HOUGANG ST 51",
                "HOUGANG AVE 8",
                "HOUGANG CENTRAL",
                "UPPER SERANGOON RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1021: {
        front: {
            renderType: "standardService2",
            serviceNumber: "102",
            destination: {
                text: "H'GANG INT-SELETAR A'SPACE",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "UPPER SERANGOON RD",
                "BUANGKOK DR",
                "COMPASSVALE DR",
                "SENGKANG EAST WAY",
                "SENGKANG WEST WAY",
                "SELETAR A'SPACE DR"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1025: {
        front: {
            renderType: "standardService",
            serviceNumber: "102A",
            destination: {
                text: "SENGKANG WEST WAY",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt2",
                serviceNumber: "102A",
                destinationRoad: "SENGKANG",
                destinationName: "WEST WAY (OPP BLK 461B)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1026: {
        front: {
            renderType: "standardService",
            serviceNumber: "102B",
            destination: {
                text: "SENGKANG STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "102B",
                destinationRoad: "SENGKANG",
                destinationName: "E. (S'KANG STN/BLK 461B)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1031: {
        front: {
            renderType: "standardService",
            serviceNumber: "103",
            destination: {
                text: "> YISHUN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "YIO CHU KANG RD",
                "JLN KAYU",
                "SELETAR AEROSPACE DR",
                "WEST CAMP RD",
                "YISHUN CENTRAL"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1032: {
        front: {
            renderType: "standardService",
            serviceNumber: "103",
            destination: {
                text: "> SERANGOON INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "YISHUN CENTRAL",
                "WEST CAMP RD",
                "SELETAR AEROSPACE DR",
                "JLN KAYU",
                "YIO CHU KANG RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1051: {
        front: {
            renderType: "standardService",
            serviceNumber: "105",
            destination: {
                text: "> JURONG EAST INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'SERANGOON AVE 3',
                'TOA PAYOH CENTRAL',
                'STEVENS RD',
                'ORCHARD BOUELEVARD',
                'HOLLAND RD',
                'COMMONWEALTH AVE',
                "COMMONWEALTH AVE WEST",
                'TOH GUAN RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1052: {
        front: {
            renderType: "standardService",
            serviceNumber: "105",
            destination: {
                text: "> SERANGOON INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'TOH GUAN RD',
                "COMMONWEALTH AVE WEST",
                'COMMONWEALTH AVE',
                'HOLLAND RD',
                'ORCHARD RD',
                'STEVENS RD',
                'TOA PAYOH CENTRAL',
                'SERANGOON AVE 3'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },    
    1056: {
        front: {
            renderType: "standardService",
            serviceNumber: "105B",
            destination: {
                text: "CLEMENTI STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "105B",
                destinationRoad: "",
                destinationName: "CLEMENTI STN EXIT B"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1071: {
        front: {
            renderType: "standardService",
            serviceNumber: "107",
            destination: {
                text: "> SHENTON WAY TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "HOUGANG AVE 10",
                "UPPER SERANGOON RD",
                "KALLANG BAHRU",
                "LAVENDER ST",
                "BEACH RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1072: {
        front: {
            renderType: "standardService",
            serviceNumber: "107",
            destination: {
                text: "> HOUGANG CENTRAL INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BEACH RD",
                "LAVENDER ST",
                "KALLANG BAHRU",
                "UPPER SERANGOON RD",
                "HOUGANG AVE 10"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1077: {
        front: {
            renderType: "standardService",
            serviceNumber: "107M",
            destination: {
                text: "H'GANG INT-RAFFLES BLVD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'UPPER SERANGOON RD',
                'KALLANG BAHRU',
                'BEACH RD',
                'TEMASEK BOULEVARD',
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1091: {
        front: {
            renderType: "standardService",
            serviceNumber: "109",
            destination: {
                text: "> CHANGI VILLAGE TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "YIO CHU KANG RD",
                "HOUGANG AVE 9",
                "SENGKANG EAST RD",
                "PASIR RIS DR 1",
                "LOYANG AVE"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1092: {
        front: {
            renderType: "standardService",
            serviceNumber: "109",
            destination: {
                text: "> SERANGOON INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "LOYANG AVE",
                "PASIR RIS DR 1",
                "SENGKANG EAST RD",
                "HOUGANG AVE 9",
                "YIO CHU KANG RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1095: {
        front: {
            renderType: "standardService",
            serviceNumber: "109A",
            destination: {
                text: "HOUGANG AVE 4",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "109A",
                destinationRoad: "HOUGANG",
                destinationName: "AVE 4 (BLK 913)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1110: {
        front: {
            renderType: "message",
            text: "NTWU COFFEE BUS",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    1111: {
        front: {
            renderType: "message",
            text: "OFF SERVICE",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    1112: {
        front: {
            renderType: "standardService",
            serviceNumber: "111",
            destination: {
                text: "GHIM MOH TER-MARINA CTR",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "COMMONWEALTH AVE",
                "TANGLIN RD",
                "ORCHARD RD",
                "BRAS BASAH RD",
                "STAMFORD RD",
                "ORCHARD BOULEVARD",
                "TANGLIN RD",
                "COMMONWEALTH AVE"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1121: {
        front: {
            renderType: "standardService",
            serviceNumber: "112",
            destination: {
                text: "HOUGANG - HOUGANG ST 92",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'HOUGANG AVE 7',
                'TAMPINES RD',
                'HOUGANG AVE 2',
                'HOUGANG AVE 9'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1125: {
        front: {
            renderType: "standardService",
            serviceNumber: "112A",
            destination: {
                text: "KOVAN STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "112A",
                destinationRoad: "UPP S'GOON",
                destinationName: "RD (KOVAN STN EXIT C)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1126: {
        front: {
            renderType: "standardService",
            serviceNumber: "112B",
            destination: {
                text: "HOUGANG AVE 7",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "destScroll",
                serviceNumber: "112B",
                top: "HOUGANG AVE 7",
                topFont: "Mobitec-7:7",
                bottom: "(OPP BLK 321)",
                bottomFont: "Mobitec-7:7",
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1131: {
        front: {
            renderType: "standardService",
            serviceNumber: "113",
            destination: {
                text: "HOUGANG-UPP PAYA LEBAR RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'HOUGANG AVE 8',
                'HOUGANG AVE 10',
                'UPP SERANGOON RD',
                'HOUGANG ST 21',
                'LORONG AH SOO',
                'HOUGANG ST 21',
                'UPP SERANGOON RD',
                'HOUGANG AVE 10',
                'HOUGANG AVE 8'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1135: {
        front: {
            renderType: "standardService",
            serviceNumber: "113A",
            destination: {
                text: "KOVAN STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "113A",
                destinationRoad: "UPP S'GOON",
                destinationName: "RD (KOVAN STN EXIT C)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1141: {
        front: {
            renderType: "standardService",
            serviceNumber: "114",
            destination: {
                text: "BUANGKOK INT-BUANGKOK CR",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'BUANGKOK DR',
                'BUANGKOK LK',
                'BUANGKOK CRES'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1145: {
        front: {
            renderType: "standardService",
            serviceNumber: "114A",
            destination: {
                text: "BUANGKOK CRESCENT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "114A",
                destinationRoad: "BUANGKOK",
                destinationName: "CRESCENT (BLK 998B)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1149: {
        front: {
            renderType: "standardService",
            serviceNumber: "114",
            destination: {
                text: "BUANGKOK STN-BUANGKOK CR",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'BUANGKOK LINK',
                'BUANGKOK CRES',
                'BUANGKOK DR'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1151: {
        front: {
            renderType: "standardService2",
            serviceNumber: "115",
            destination: {
                text: "HOUGANG ST21-HOUGANG AVE3",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'HOUGANG AVE 1',
                'UPPER SERANGOON RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1161: {
        front: {
            renderType: "standardService",
            serviceNumber: "116",
            destination: {
                text: "HOUGANG INT-S'GOON CTRL",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "HOUGANG AVE 4",
                "HOUGANG AVE 9",
                "YIO CHU KANG RD",
                "SERANGOON CENTRAL",
                "HOUGANG AVE 9"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1165: {
        front: {
            renderType: "standardService",
            serviceNumber: "116A",
            destination: {
                text: "SERANGOON STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "destScroll2",
                serviceNumber: "116A",
                top: "TERMINATE AT S'GOON CTRL",
                topFont: "Mobitec-7:4",
                bottom: "S'GOON STN EXIT C/BLK201",
                bottomFont: "Mobitec-7:4",
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1168: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "116C",
            branding: "PARIS",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    1169: {
        front: {
            renderType: "destScroll",
            top: "SHUTTLE 1",
            topFont: "Mobitec-7:5:2",

            bottom: "LONDON - PARIS",
            bottomFont: "Mobitec-7:4",

            serviceNumber: ""
        }
    },
    1171: {
        front: {
            renderType: "standardService",
            serviceNumber: "117",
            destination: {
                text: "> SEMBAWANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "PUNGGOL WAY",
                "SELETAR A'SPACE DR",
                "YISHUN AVE 1",
                "YISHUN AVE 2",
                "CANBERRA LINK",
                "SEMBAWANG WAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1172: {
        front: {
            renderType: "standardService",
            serviceNumber: "117",
            destination: {
                text: "> PUNGGOL COAST INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "SEMBAWANG WAY",
                "CANBERRA LINK",
                "YISHUN AVE 2",
                "YISHUN AVE 1",
                "SELETAR A'SPACE CR",
                "PUNGGOL WAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1173: {
        front: {
            renderType: "standardService",
            serviceNumber: "117M",
            destination: {
                text: "> SEMBAWANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "PUNGGOL WAY",
                "SELETAR A'SPACE DR",
                "SELETAR A'SPACE LINK",
                "YISHUN AVE 1",
                "YISHUN AVE 2",
                "CANBERRA LINK",
                "SEMBAWANG WAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1174: {
        front: {
            renderType: "standardService",
            serviceNumber: "117M",
            destination: {
                text: "> PUNGGOL INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "SEMBAWANG WAY",
                "CANBERRA LINK",
                "YISHUN AVE 2",
                "YISHUN AVE 1",
                "SELETAR A'SPACE LINK",
                "SELETAR A'SPACE DR",
                "PUNGGOL WAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1175: {
        front: {
            renderType: "standardService",
            serviceNumber: "117A",
            destination: {
                text: "KHATIB STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "117A",
                destinationRoad: "YISHUN",
                destinationName: "AVE 2 (BEF KHATIB STN)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1176: {
        front: {
            renderType: "standardService",
            serviceNumber: "117B",
            destination: {
                text: "YISHUN STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "117B",
                destinationRoad: "YISHUN",
                destinationName: "AVE 2 (OPP YISHUN STN)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1178: {
        front: {
            renderType: "standardService",
            serviceNumber: "117",
            destination: {
                text: "> SEMBAWANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "PUNGGOL WAY",
                "SELETAR A'SPACE DR",
                "YISHUN AVE 1",
                "YISHUN AVE 2",
                "CANBERRA LINK",
                "SEMBAWANG WAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1179: {
        front: {
            renderType: "standardService",
            serviceNumber: "117",
            destination: {
                text: "> PUNGGOL INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "SEMBAWANG WAY",
                "CANBERRA LINK",
                "YISHUN AVE 2",
                "YISHUN AVE 1",
                "SELETAR A'SPACE CR",
                "PUNGGOL WAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1201: {
        front: {
            renderType: "standardService",
            serviceNumber: "120",
            destination: {
                text: "KG BAHRU TER-TK BLANGAH",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "JALAN BUKIT MERAH",
                "TELOK BLANGAH HTS",
                "TELOK BLANGAH RD",
                "ALEXANDRA RD",
                "TIONG BAHRU RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1211: {
        front: {
            renderType: "standardService",
            serviceNumber: "121",
            destination: {
                text: "SHENTON WY - TK BLANGAH",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "SHENTON WAY",
                "ZION RD",
                "GANGES AVE",
                "JALAN BUKIT MERAH",
                "LOWER DELTA RD",
                "TELOK BLANGAH RISE",
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1212: {
        front: {
            renderType: "standardService",
            serviceNumber: "121",
            destination: {
                text: "KG BAHRU TER-TK BLANGAH",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "GANGES AVE",
                "TIONG BAHRU RD",
                "KIM TIAN RD",
                "LOWER DELTA RD",
                "TELOK BLANGAH RISE",
                "LOWER DELTA RD",
                "KIM TIAN RD",
                "TIONG BAHRU RD",
                "GANGES AVE"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1221: {
        front: {
            renderType: "standardService",
            serviceNumber: "122",
            destination: {
                text: "KG BAHRU TER-C'WEALTH DR",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "TIONG BAHRU RD",
                "ALEXANDRA RD",
                "MARGARET DR",
                "COMMONWEALTH DR",
                "MARGRET DR",
                "ALEXANDRA RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1231: {
        front: {
            renderType: "standardService",
            serviceNumber: "123",
            destination: {
                text: "> SENTOSA",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "QUEENSWAY",
                "HOLLAND RD",
                "ORCHARD RD",
                "HAVELOCK RD",
                "TIONG BAHRU RD",
                "LOWER DELTA RD",
                "BUKIT PURMEI AVE"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1232: {
        front: {
            renderType: "standardService",
            serviceNumber: "123",
            destination: {
                text: "> BUKIT MERAH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BUKIT PURMEI AVE",
                "LOWER DELTA RD",
                "TIONG BAHRU RD",
                "HAVELOCK RD",
                "ORCHARD BLVD",
                "HOLLAND RD",
                "QUEENSWAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1237: {
        front: {
            renderType: "standardService3",
            serviceNumber: "123M",
            destination: {
                text: "> TIONG BAHRU",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "KAMPONG BAHRU RD",
                "LOWER DELTA RD (BLK 40)",
                "BUKIT PURMEI AVE",
                "LOWER DELTA RD (BLK 129)",
                "TIONG BAHRU STN",
            ],
            scrollFont: "Mobitec-7:4:4"
        }
    },
    1238: {
        front: {
            renderType: "standardService3",
            serviceNumber: "123M",
            destination: {
                text: "> HARBOURFRONT INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "LOWER DELTA RD (BLK 25B)",
                "BUKIT PURMEI AVE",
                "LOWER DELTA RD (BLK 105)",
                "TELOK BLANGAH RD"
            ],
            scrollFont: "Mobitec-7:4:4"
        }
    },
    1239: {
        front: {
            renderType: "standardService",
            serviceNumber: "123M",
            destination: {
                text: "HARBOURFRONT-T. BAHRU",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "BUKIT PURMEI AVE",
                "LOWER DELTA RD",
                "TIONG BAHRU RD",
                "LOWER DELTA RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1241: {
        front: {
            renderType: "standardService",
            serviceNumber: "124",
            destination: {
                text: "> HARBOURFRONT INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TELOK BLANGAH HTS",
                "TELOK BLANGAH WAY",
                "EU TONG SEN ST",
                "ORCHARD TURN",
                "MOULMEIN RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1242: {
        front: {
            renderType: "standardService",
            serviceNumber: "124",
            destination: {
                text: "> ST MICHAEL'S TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "NEW BRIDGE RD",
                "KAMPONG BAHRU RD",
                "TELOK BLANGAH HTS",
                "MOULMEIN RD",
                "ORCHARD RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1251: {
        front: {
            renderType: "standardService",
            serviceNumber: "125",
            destination: {
                text: "> SIMS DR",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'BALESTIER RD',
                'SERANGOON RD',
                'KALLANG WAY',
                'ALJUNIED RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1252: {
        front: {
            renderType: "standardService",
            serviceNumber: "125",
            destination: {
                text: "> ST MICHAEL'S TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'ALJUNIED RD',
                'KALLANG WAY',
                'BENDEMEER RD',
                'BALESTIER RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1255: {
        front: {
            renderType: "standardService",
            serviceNumber: "125A",
            destination: {
                text: "MACPHERSON RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "125A",
                destinationRoad: "M'PHERSON",
                destinationName: "RD (BEF SIEMENS CTR)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1271: {
        front: {
            renderType: "standardService",
            serviceNumber: "127",
            destination: {
                text: "TAMP INT-TAMP IND AVE 5",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "TAMPINES CONCOURSE",
                "TAMPINES AVE 9,10",
                "TAMPINES IND AVE 5",
                "TAMPINES RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1275: {
        front: {
            renderType: "standardService",
            serviceNumber: "127A",
            destination: {
                text: "TAMPINES NORTH DR 1",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "127A",
                destinationRoad: "TAMPINES",
                destinationName: "NTH DR 1 (OPP BLK 610C)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1281: {
        front: {
            renderType: "standardService",
            serviceNumber: "128",
            destination: {
                text: "> SHENTON WAY TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 8",
                "BISHAN RD",
                "SCOTTS RD",
                "ORCHARD RD",
                "COLLYER QUAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1282: {
        front: {
            renderType: "standardService",
            serviceNumber: "128",
            destination: {
                text: "> ANG MO KIO DEPOT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ROBINSON RD",
                "STAMFORD RD",
                "ORCHARD TURN",
                "SCOTTS RD",
                "BISHAN RD",
                "ANG MO KIO AVE 8"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1291: {
        front: {
            renderType: "standardService",
            serviceNumber: "129",
            destination: {
                text: "> ST MICHAEL'S TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TAMPINES NORTH DR 2",
                "TAMPINES AVE 4",
                "TAMPINES AVE 1",
                "BRADDELL RD",
                "LOR 2 TOA PAYOH",
                "BALESTIER RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1292: {
        front: {
            renderType: "standardService",
            serviceNumber: "129",
            destination: {
                text: "> TAMPINES NORTH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BALESTIER RD",
                "LOR 2 TOA PAYOH",
                "BRADDELL RD",
                "TAMPINES AVE 1",
                "TAMPINES AVE 4",
                'TAMPINES NORTH DR 2'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1293: {
        front: {
            renderType: "standardService",
            serviceNumber: "129",
            destination: {
                text: "> TAMP CONCOURSE INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BALESTIER RD",
                "LOR 1 TOA PAYOH",
                "BRADDELL RD",
                "TAMPINES AVE 1",
                "TAMPINES AVE 4"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1295: {
        front: {
            renderType: "standardService",
            serviceNumber: "192A",
            destination: {
                text: "BARTLEY STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "129A",
                destinationRoad: "",
                destinationName: "BARTLEY STN EXIT A"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1296: {
        front: {
            renderType: "standardService",
            serviceNumber: "192B",
            destination: {
                text: "TEMASEK POLY",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "129B",
                destinationRoad: "TAMP AVE",
                destinationName: "1 (OPP TP EAST GATE)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1301: {
        front: {
            renderType: "standardService",
            serviceNumber: "130",
            destination: {
                text: "> SHENTON WAY TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'SIN MING RD',
                'BALESTIER RD',
                'JALAN BESAR',
                'SHENTON WAY'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1302: {
        front: {
            renderType: "standardService",
            serviceNumber: "130",
            destination: {
                text: "> ANG MO KIO INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'ROBINSON RD',
                'SERANGOON RD',
                'BALESTIER RD',
                'SIN MING RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1309: {
        front: {
            renderType: "standardService",
            serviceNumber: "130A",
            destination: {
                text: "SIN MING RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "130A",
                destinationRoad: "",
                destinationName: "SIN MING RD (BLK 25)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1311: {
        front: {
            renderType: "standardService",
            serviceNumber: "131",
            destination: {
                text: "> BUKIT MERAH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'THOMSON RD',
                'OWEN RD',
                'SHENTON WAY',
                'TELOK BLANGAH RD',
                'BUKIT PURMEI AVE'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1312: {
        front: {
            renderType: "standardService",
            serviceNumber: "131",
            destination: {
                text: "> ST MICHAEL'S TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BUKIT PURMEI AVE",
                "TELOK BLANGAH RD",
                "CECIL ST",
                "STAMFORD RD",
                "THOMSON RD",
                "BALESTIER RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1315: {
        front: {
            renderType: "standardService",
            serviceNumber: "131A",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "131A",
                destinationRoad: "SHENTON",
                destinationName: "WAY (OPP AXA TWR)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1317: {
        front: {
            renderType: "standardService",
            serviceNumber: "131M",
            destination: {
                text: "BT MERAH INT-BT PURMEI",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'JALAN BUKIT MERAH',
                'LOWER DELTA RD',
                'BUKIT PURMEI AVE',
                'LOWER DELTA RD',
                'JALAN BUKIT MERAH'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1321: {
        front: {
            renderType: "standardService",
            serviceNumber: "132",
            destination: {
                text: "> BUKIT MERAH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'HOUGANG AVE 2',
                'ANG MO KIO AVE 3',
                'UPPER THOMSON RD',
                'THOMSON RD',
                'STEVENS RD',
                'TANGLIN RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1322: {
        front: {
            renderType: "standardService",
            serviceNumber: "132",
            destination: {
                text: "> HOUGANG CTRL INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'TANGLIN RD',
                'STEVENS RD',
                'THOMSON RD',
                'UPPER THOMSON RD',
                'ANG MO KIO AVE 3',
                'HOUGANG AVE 2'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1331: {
        front: {
            renderType: "standardService",
            serviceNumber: "133",
            destination: {
                text: "> SHENTON WAY TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'ANG MO KIO AVE 1',
                'SERANGOON AVE 2',
                'BENDEMEER RD',
                'VICTORIA ST',
                'BAYFRONT AVE'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1332: {
        front: {
            renderType: "standardService",
            serviceNumber: "133",
            destination: {
                text: "> ANG MO KIO INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'BAYFRONT AVE',
                'VICTORIA ST',
                'SERANGOON RD',
                'SERANGOON AVE 2',
                'ANG MO KIO AVE 1'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1341: {
        front: {
            renderType: "standardService",
            serviceNumber: "134",
            destination: {
                text: "SIMS PL TER-MARINE TERR",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "GEYLANG EAST CENTRAL",
                "TANJONG KATONG RD",
                "MARINE PARADE RD",
                "MARINE TERRACE",
                "MARINE PARADE RD",
                "TANJONG KATONG RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1351: {
        front: {
            renderType: "standardService",
            serviceNumber: "135",
            destination: {
                text: "> JLN KEMBANGAN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 8",
                "SERANGOON AVE 2",
                "UPP ALJUNIED RD",
                "TANJONG KATONG RD",
                "MARINE PARADE RD",
                "UPP EAST COAST RD",
                "FRANKEL AVE"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1352: {
        front: {
            renderType: "standardService",
            serviceNumber: "135",
            destination: {
                text: "> ANG MO KIO INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "FRANKEL AVE",
                "UPP EAST COAST RD",
                "MARINE PARADE RD",
                "TANJONG KATONG RD",
                "UPP ALJUNIED RD",
                "SERANGOON AVE 2",
                "ANG MO KIO AVE 8"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1357: {
        front: {
            renderType: "standardService",
            serviceNumber: "135",
            destination: {
                text: "> ANG MO KIO INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "MARINE PARADE RD",
                "TANJONG KATONG RD",
                "UPP ALJUNIED RD",
                "SERANGOON AVE 2",
                "ANG MO KIO AVE 8"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1358: {
        front: {
            renderType: "standardService",
            serviceNumber: "135",
            destination: {
                text: "> SIGLAP RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 8",
                "SERANGOON AVE 2",
                "UPP ALJUNIED RD",
                "TANJONG KATONG RD",
                "MARINE PARADE RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1359: {
        front: {
            renderType: "standardService",
            serviceNumber: "135A",
            destination: {
                text: "MARINE PARADE RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "135A",
                destinationRoad: "MARINE",
                destinationName: "PARADE RD (VICTORIA SCH)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1371: {
        front: {
            renderType: "standardService",
            serviceNumber: "137",
            destination: {
                text: "> UPP EAST COAST TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'SIMS AVE',
                'UBI AVE 1',
                'KAKI BUKIT AVE 3',
                'BEDOK NORTH AVE 2',
                'BEDOK SOUTH RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1372: {
        front: {
            renderType: "standardService",
            serviceNumber: "137",
            destination: {
                text: "> SIMS PLACE TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'BEDOK SOUTH RD',
                'BEDOK NTH AVE 2',
                'KAKI BUKIT AVE 3',
                'UBI AVE 1',
                'GEYLANG RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1375: {
        front: {
            renderType: "standardService",
            serviceNumber: "137",
            destination: {
                text: "BEDOK NORTH STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "137A",
                destinationRoad: "BEDOK NTH",
                destinationName: "(BEDOK NTH STN EXIT A)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1381: {
        front: {
            renderType: "standardService",
            serviceNumber: "138",
            destination: {
                text: "> SINGAPORE ZOO",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'ANG MO KIO AVE 3, 6, 5',
                'YIO CHU KANG RD',
                'UPP THOMSON RD',
                'MANDAI RD',
                'MANDAI LAKE RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1382: {
        front: {
            renderType: "standardService",
            serviceNumber: "138",
            destination: {
                text: "> ANG MO KIO INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'MANDAI LAKE RD',
                'MANDAI RD',
                'UPP THOMSON RD',
                'YIO CHU KANG RD',
                'ANG MO KIO AVE 5, 6, 3'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },    
    1385: {
        front: {
            renderType: "standardService",
            serviceNumber: "138A",
            destination: {
                text: "SINGAPORE ZOO",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "138A",
                destinationRoad: "MANDAI",
                destinationName: "LAKE RD (S'PORE ZOO)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1386: {
        front: {
            renderType: "standardService",
            serviceNumber: "138B",
            destination: {
                text: "ANG MO KIO AVE 5",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "138B",
                destinationRoad: "",
                destinationName: "AMK AVE 5 (BLK 604)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1387: {
        front: {
            renderType: "standardService",
            serviceNumber: "138C",
            destination: {
                text: "SPRINGLEAF STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "138C",
                destinationRoad: "",
                destinationName: "SPRINGLEAF STN EXIT 2"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1388: {
        front: {
            renderType: "standardService",
            serviceNumber: "138M",
            destination: {
                text: "ANG MO KIO INT - AMK POLYCLINIC",
                font: "Mobitec-7:4"
            },
            scrolls: [
            {
                renderType: "destScroll",
                serviceNumber: "138M",
                top: "ANG MO KIO INT - ",
                topFont: "Mobitec-7:4",
                bottom: "AMK POLYCLINIC (LOOP)",
                bottomFont: "Mobitec-7:4",
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1391: {
        front: {
            renderType: "standardService",
            serviceNumber: "139",
            destination: {
                text: "> BUKIT MERAH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JALAN BAHAGIA",
                'BALESTIER RD',
                'BENCOOLEN ST',
                'RIVER VALLEY RD',
                'ALEXANDRA RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1392: {
        front: {
            renderType: "standardService",
            serviceNumber: "139",
            destination: {
                text: "> TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'ALEXANDRA RD',
                'RIVER VALLEY RD',
                'SELEGIE RD',
                'BALESTIER RD',
                "JALAN BAHAGIA"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1395: {
        front: {
            renderType: "standardService",
            serviceNumber: "139A",
            destination: {
                text: "JALAN BAHAGIA",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt2",
                serviceNumber: "139A",
                destinationRoad: "JALAN",
                destinationName: "BAHAGIA (OPP BLK 33/34)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1399: {
        front: {
            renderType: "standardService",
            serviceNumber: "139M",
            destination: {
                text: "TPY INT-JLN BAHAGIA",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "BALESTIER RD",
                "JLN RAJAH",
                "JLN BAHAGIA",
                "BALESTIER RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1401: {
        front: {
            renderType: "standardService",
            serviceNumber: "140",
            destination: {
                text: "LOR 1 GEYLANG-ST WILFRED RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "GEYLANG BAHRU",
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1411: {
        front: {
            renderType: "standardService",
            serviceNumber: "141",
            destination: {
                text: "> TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'LAVENDER ST',
                'JALAN BESAR',
                'RANGOON RD',
                'THOMSON RD',
                'LOR 1 TOA PAYOH'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1412: {
        front: {
            renderType: "standardService",
            serviceNumber: "141",
            destination: {
                text: "> LOR 1 GEYLANG TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'LOR 1 TOA PAYOH',
                'THOMSON RD',
                'RANGOON RD',
                'SERANGOON RD',
                'LAVENDER ST'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1421: {
        front: {
            renderType: "standardService",
            serviceNumber: "142",
            destination: {
                text: "TPY INT-POTONG PASIR AV1",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'LOR 6 TOA PAYOH',
                'JLN TOA PAYOH',
                'UPP SERANGOON RD',
                'POTONG PASIR AVE 1, 3, 2'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1422: {
        front: {
            renderType: "standardService",
            serviceNumber: "142",
            destination: {
                text: "TOA PAYOH-POTONG P. AVE 1",
                font: "Mobitec-7:4"
            },
            scrolls: [
            {
                renderType: "message",
                text: "142",
                font: "Mobitec-16:8",
                spacing: 5
            },
            'LOR 6 TOA PAYOH',
            'JLN TOA PAYOH',
            'UPP SERANGOON RD',
            'POTONG PASIR AVE 1, 3, 2'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1425: {
        front: {
            renderType: "standardService",
            serviceNumber: "142A",
            destination: {
                text: "UPP SERANGOON RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "142A",
                destinationRoad: "UPP",
                destinationName: "S'GOON RD (SANT RITZ)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1451: {
        front: {
            renderType: "standardService",
            serviceNumber: "145",
            destination: {
                text: "> BUONA VISTA TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'BALESTIER RD',
                'LAVENDER ST',
                'NORTH BRIDGE RD',
                'TANJONG PAGAR RD',
                'TELOK BLANGAH RD',
                'HENDERSON RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1452: {
        front: {
            renderType: "standardService",
            serviceNumber: "145",
            destination: {
                text: "> TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'HENDERSON RD',
                'TELOK BLANGAH RD',
                'TANJONG PAGAR RD',
                'VICTORIA ST',
                'LAVENDERS ST',
                'BALESTIER RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1455: {
        front: {
            renderType: "standardService",
            serviceNumber: "145A",
            destination: {
                text: "HENDERSON RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "145A",
                destinationRoad: "",
                destinationName: "HENDERSON RD (BLK 1)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1461: {
        front: {
            renderType: "destScroll",
            serviceNumber: "146",
            top: "BARTLEY  RD",
            topFont: "LECIP-14:6",
        }
    },
    1462: {
        front: {
            renderType: "destScroll",
            serviceNumber: "146",
            top: "WOODLEIGH  INT",
            topFont: "LECIP-14:6",
        }
    },
    1469: {
        front: {
            renderType: "standardService",
            serviceNumber: "146",
            destination: {
                text: "BARTLEY RD - BIDADARI",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'BARTLEY RD',
                'UPPER SERANGOON RD',
                'BIDADARI PARK DR',
                'UPPER SERANGOON RD',
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1471: {
        front: {
            renderType: "standardService",
            serviceNumber: "147",
            destination: {
                text: "> CLEMENTI INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "HOUGANG AVE 8",
                "YIO CHU KANG RD",
                "UPP SERANGOON RD",
                "BENDEMEER RD",
                "JALAN BESAR",
                "NEW BRIDGE RD",
                "JALAN BUKIT MERAH",
                "COMMONWEALTH AVE WEST"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1472: {
        front: {
            renderType: "standardService",
            serviceNumber: "147",
            destination: {
                text: "> HOUGANG CTRL INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "COMMONWEALTH AVE WEST",
                "JALAN BUKIT MERAH",
                "EU TONG SEN ST",
                "SELEGIE RD",
                "SERANGOON RD",
                "UPP SERANGOON RD",
                "YIO CHU KANG RD",
                "HOUGANG AVE 8"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1475: {
        front: {
            renderType: "standardService",
            serviceNumber: "147A",
            destination: {
                text: "NEW BRIDGE RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "147A",
                destinationRoad: "",
                destinationName: "AFT DUXTON PLAIN PK"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1478: {
        front: {
            renderType: "expressService",
            serviceNumber: "147e"
        }
    },
    1479: {
        front: {
            renderType: "FfwService",
            serviceNumber: "147e"
        }
    },
    1481: {
        front: {
            renderType: "standardService",
            serviceNumber: "148",
            destination: {
                text: "WOODLEIGH INT - POTONG PASIR AVE 1",
                font: "Mobitec-7:4"
            },
            scrolls: [
            {
                renderType: "destScroll",
                serviceNumber: "148",
                top: "WOODLEIGH INT -",
                topFont: "Mobitec-7:4",
                bottom: "POTONG PASIR AVE 1 (LOOP)",
                bottomFont: "Mobitec-7:4",
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1501: {
        front: {
            renderType: "standardService",
            serviceNumber: "150",
            destination: {
                text: "EUNOS INT-MARINE TERR",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "STILL RD",
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1511: {
        front: {
            renderType: "standardService",
            serviceNumber: "151",
            destination: {
                text: "> KENT RIDGE TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "HOUGANG AVE 3",
                "MACPHERSON RD",
                "JALAN TOA PAYOH",
                "BUKIT TIMAH RD",
                "CLEMENTI RD",
                "KENT RIDGE CRES"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1512: {
        front: {
            renderType: "standardService",
            serviceNumber: "151",
            destination: {
                text: "> HOUGANG CENTRAL INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "KENT RIDGE CRES",
                "CLEMENTI RD",
                "DUNEARN RD",
                "JALAN TOA PAYOH",
                "MACPHERSON RD",
                "HOUGANG AVE 3"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1518: {
        front: {
            renderType: "expressService",
            serviceNumber: "151e"
        }
    },
    1519: {
        front: {
            renderType: "FfwService",
            serviceNumber: "151e"
        }
    },
    1531: {
        front: {
            renderType: "standardService",
            serviceNumber: "153",
            destination: {
                text: "> BUKIT MERAH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'UPPER SERANGON RD',
                'BRADDELL RD',
                'TOA PAYOH CENTRAL',
                'WHITLEY RD',
                'FARRER RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1532: {
        front: {
            renderType: "standardService",
            serviceNumber: "153",
            destination: {
                text: "> HOUGANG CTRL INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'FARRER RD',
                'WHITLEY RD',
                'TOA PAYOH CTRL',
                'BRADDELL RD',
                'UPPER SERANGOON RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1541: {
        front: {
            renderType: "standardService",
            serviceNumber: "154",
            destination: {
                text: "> EUNOS INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "YUAN CHING RD",
                "AYE",
                "COMMONWEALTH AVE WEST",
                "CLEMENTI RD",
                "DUNEARN RD",
                "JALAN TOA PAYOH",
                "PAYA LEBAR RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1542: {
        front: {
            renderType: "standardService",
            serviceNumber: "154",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "PAYA LEBAR RD",
                "JALAN TOA PAYOH",
                "BUKIT TIMAH RD",
                "CLEMENTI RD",
                "COMMONWEALTH AVE WEST",
                "AYE",
                "YUAN CHING RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1545: {
        front: {
            renderType: "standardService",
            serviceNumber: "154A",
            destination: {
                text: "LAKESIDE STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "154A",
                destinationRoad: "BOON LAY",
                destinationName: "WAY (LAKESIDE STN)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1546: {
        front: {
            renderType: "standardService",
            serviceNumber: "154B",
            destination: {
                text: "NGEE ANN POLY",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "154B",
                destinationRoad: "CLEMENTI",
                destinationName: "RD (NGEE ANN POLY)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1551: {
        front: {
            renderType: "standardService",
            serviceNumber: "155",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                    'BRADDELL RD',
                    'UPP ALJUNIED RD',
                    'GEYLANG EAST CTRL',
                    'CIRCUIT RD',
                    'TELOK KURAU RD',
                    'EAST COAST RD',
                    'BEDOK STH AVE 1'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1552: {
        front: {
            renderType: "standardService",
            serviceNumber: "155",
            destination: {
                text: "> TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'BEDOK STH AVE 1',
                'EAST COAST RD',
                'TELOK KURAU RD',
                'CIRCUIT RD',
                'GEYLANG EAST CTRL',
                'UPP ALJUNIED RD',
                'BRADDELL RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1561: {
        front: {
            renderType: "standardService",
            serviceNumber: "156",
            destination: {
                text: "> CLEMENTI INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "SENGKANG EAST WAY",
                "BUANGKOK GREEN",
                "YIO CHU KANG RD",
                "BISHAN RD",
                "THOMSON RD",
                "DUNEARN RD",
                "SIXTH AVE",
                "ULU PANDAN RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1562: {
        front: {
            renderType: "standardService",
            serviceNumber: "156",
            destination: {
                text: "> BUANGKOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ULU PANDAN RD",
                "SIXTH AVE",
                "DUNEARN RD",
                "THOMSON RD",
                "BISHAN RD",
                "YIO CHU KANG RD",
                "BUANGKOK GREEN",
                "SENGKANG EAST WAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1568: {
        front: {
            renderType: "standardService",
            serviceNumber: "156",
            destination: {
                text: "> CLEMENTI INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "SENGKANG EAST RD",
                "BUANGKOK GREEN",
                "YIO CHU KANG RD",
                "BISHAN RD",
                "THOMSON RD",
                "DUNEARN RD",
                "SIXTH AVE",
                "ULU PANDAN RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1569: {
        front: {
            renderType: "standardService",
            serviceNumber: "156",
            destination: {
                text: "> SENGKANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ULU PANDAN RD",
                "SIXTH AVE",
                "DUNEARN RD",
                "THOMSON RD",
                "BISHAN RD",
                "YIO CHU KANG RD",
                "BUANGKOK GREEN",
                "SENGKANG EAST RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1571: {
        front: {
            renderType: "standardService",
            serviceNumber: "157",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BRADDELL RD",
                "LORNIE RD",
                "BUKIT TIMAH RD",
                "JALAN JURONG KECHIL",
                "BUKIT BATOK EAST AVE 3",
                "JURONG EAST AVE 3",
                "JURONG WEST AVE 3"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1572: {
        front: {
            renderType: "standardService",
            serviceNumber: "157",
            destination: {
                text: "> TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JURONG WEST AVE 1",
                "JURONG EAST AVE 1",
                "BUKIT BATOK EAST AVE 3",
                "JALAN JURONG KECHIL",
                "DUNEARN RD",
                "LORNIE RD",
                "BRADDELL RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1581: {
        front: {
            renderType: "standardService",
            serviceNumber: "158",
            destination: {
                text: "> RHU CROSS",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'UPPER PAYA LEBAR RD',
                'CIRCUIT RD',
                'ALJUNIED RD',
                'MOUNTBATTEN RD', 
                'TANJONG RHU RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1582: {
        front: {
            renderType: "standardService",
            serviceNumber: "158",
            destination: {
                text: "> SERANGOON INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'TANJONG RHU RD',
                'MOUNTBATTEN RD',
                'ALJUNIED RD',
                'CIRCUIT RD',
                'UPPER PAYA LEBAR RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1585: {
        front: {
            renderType: "standardService",
            serviceNumber: "158A",
            destination: {
                text: "ALJUNIED STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "158A",
                destinationRoad: "ALJUNIED",
                destinationName: "RD (OPP ALJUNIED STN)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1591: {
        front: {
            renderType: "standardService",
            serviceNumber: "159",
            destination: {
                text: "> TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'SENGKANG EAST RD',
                'HOUGANG AVE 9',
                "S'GOON NTH AVE 5, 6",
                'ANG MO KIO AVE 5, 8',
                'LOR CHUAN'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1592: {
        front: {
            renderType: "standardService",
            serviceNumber: "159",
            destination: {
                text: "> SENGKANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'LOR CHUAN',
                'ANG MO KIO AVE 8, 5',
                "S'GOON NTH AVE 6, 5",
                'HOUGANG AVE 9',
                'SENGKANG EAST RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1595: {
        front: {
            renderType: "standardService",
            serviceNumber: "159A",
            destination: {
                text: "ANG MO KIO STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "159A",
                destinationRoad: "",
                destinationName: "AMK AVE 8 (AMK STN)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1596: {
        front: {
            renderType: "standardService",
            serviceNumber: "159B",
            destination: {
                text: "ANG MO KIO AVE 5",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "159A",
                destinationRoad: "AMK AVE 5",
                destinationName: "(ITE COLL CTRL)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1601: {
        front: {
            renderType: "standardService",
            serviceNumber: "160",
            destination: {
                text: "> JB SENTRAL",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'JURONG TOWN HALL RD',
                'BUKIT BATOK RD',
                'CHOA CHU KANG RD',
                'WOODLANDS RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1602: {
        front: {
            renderType: "standardService",
            serviceNumber: "160",
            destination: {
                text: "> JURONG TOWN HALL INT",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'WOODLANDS RD',
                'CHOA CHU KANG RD',
                'BUKIT BATOK RD',
                'JURONG TOWN HALL RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1605: {
        front: {
            renderType: "standardService",
            serviceNumber: "160A",
            destination: {
                text: "BUKIT BATOK RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "160A",
                destinationRoad: "BT BATOK",
                destinationName: "RD (OPP DUNEARN SEC SCH)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1607: {
        front: {
            renderType: "standardService",
            serviceNumber: "160M",
            destination: {
                text: "JUR EAST-BT BATOK RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "BOON LAY WAY",
                "JURONG TOWN HALL RD",
                "BUKIT BATOK WEST AVE 8",
                "BUKIT BATOK RD",
                "JURONG TOWN HALL RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1608: {
        front: {
            renderType: "standardService",
            serviceNumber: "160",
            destination: {
                text: "> MARSILING PARK",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'JURONG TOWN HALL RD',
                'BUKIT BATOK RD',
                'CHOA CHU KANG RD',
                'WOODLANDS RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1609: {
        front: {
            renderType: "standardService",
            serviceNumber: "160",
            destination: {
                text: "> JURONG EAST INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'WOODLANDS RD',
                'CHOA CHU KANG RD',
                'BUKIT BATOK RD',
                'JURONG TOWN HALL RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1611: {
        front: {
            renderType: "standardService",
            serviceNumber: "161",
            destination: {
                text: "> WOODLANDS INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "HOUGANG AVE 8",
                "HOUGANG AVE 4",
                "SENGKANG EAST RD",
                "SENGKANG EAST WAY",
                "WOODLANDS AVE 2"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1612: {
        front: {
            renderType: "standardService",
            serviceNumber: "161",
            destination: {
                text: "> HOUGANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "WOODLANDS AVE 2",
                "SENGKANG EAST WAY",
                "SENGKANG EAST RD",
                "HOUGANG AVE 4",
                "HOUGANG AVE 8"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1621: {
        front: {
            renderType: "standardService",
            serviceNumber: "162",
            destination: {
                text: "YCK INT - SIN MING DR",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                'ANG MO KIO AVE 8',
                'BISHAN ST 22',
                'SIN MING AVE',
                'UPPER THOMSON RD',
                'SHUNFU RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1627: {
        front: {
            renderType: "standardService",
            serviceNumber: "162",
            destination: {
                text: "> SHENTON WAY TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 8",
                "ANG MO KIO AVE 6",
                "BISHAN ST 22",
                "SIN MING AVE",
                "UPPER THOMSON RD",
                "THOMSON RD",
                "ORCHARD RD",
                "BRAS BASAH RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1628: {
        front: {
            renderType: "standardService",
            serviceNumber: "162",
            destination: {
                text: "> YIO CHU KANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "STAMFORD RD",
                "ORCHARD TURN",
                "THOMSON RD",
                "UPPER THOMSON RD",
                "SIN MING AVE",
                "BISHAN ST 22",
                "ANG MO KIO AVE 6",
                "ANG MO KIO AVE 8"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1629: {
        front: {
            renderType: "standardService",
            serviceNumber: "162M",
            destination: {
                text: "YCK INT-MARINA CTR",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "ANG MO KIO AVE 6",
                "BISHAN ST 22",
                "SIN MING AVE",
                "THOMSON RD",
                "ORCHARD RD",
                "TEMASEK AVE",
                "ORCHARD TURN",
                "THOMSON RD",
                "SIN MING AVE",
                "BISHAN ST 22",
                "ANG MO KIO AVE 6"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1631: {
        front: {
            renderType: "standardService",
            serviceNumber: "163",
            destination: {
                text: "> TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "SENGKANG EAST AVE",
                "SENGKANG WEST AVE",
                "YIO CHU KANG RD",
                "UPPER THOMSON RD",
                "BRADDELL RD",
                "LOR 6 TOA PAYOH",
                "LOR 4 TOA PAYOH"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1632: {
        front: {
            renderType: "standardService",
            serviceNumber: "163",
            destination: {
                text: "> SENGKANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "LOR 4 TOA PAYOH",
                "LOR 6 TOA PAYOH",
                "BRADDELL RD",
                "UPPER THOMSON RD",
                "YIO CHU KANG RD",
                "SENGKANG WEST AVE",
                "SENGKANG EAST AVE"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },  
    1635: {
        front: {
            renderType: "standardService",
            serviceNumber: "163A",
            destination: {
                text: "FERNVALE LANE",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "163A",
                destinationRoad: "FERNVALE",
                destinationName: "LN (BEF S'KANG WEST RD)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1636: {
        front: {
            renderType: "standardService",
            serviceNumber: "163B",
            destination: {
                text: "YIO CHU KANG RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "163B",
                destinationRoad: "",
                destinationName: "YCK RD (NCS HUB)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1639: {
        front: {
            renderType: "standardService",
            serviceNumber: "163M",
            destination: {
                text: "> SENGKANG W. AVE",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "PUNGGOL RD",
                "SENGKANG EAST AVE",
                "SENGKANG WEST AVE",
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1638: {
        front: {
            renderType: "standardService",
            serviceNumber: "163M",
            destination: {
                text: "> SENGKANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "SENGKANG WEST AVE",
                "SENGKANG EAST AVE",
                "PUNGGOL RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1651: {
        front: {
            renderType: "standardService",
            serviceNumber: "165",
            destination: {
                text: "> CLEMENTI INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'HOUGANG AVE 8',
                'ANG MO KIO AVE 3',
                'UPPER THOMSON RD',
                "LORNIE RD",
                'FARRER RD',
                'HOLLAND RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1652: {
        front: {
            renderType: "standardService",
            serviceNumber: "165",
            destination: {
                text: "> HOUGANG CTRL INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'HOLLAND RD',
                'FARRER RD',
                'UPP THOMSON RD',
                'ANG MO KIO AVE 3',
                'HOUGANG AVE 8, 4',
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1661: {
        front: {
            renderType: "standardService",
            serviceNumber: "166",
            destination: {
                text: "> CLEMENTI INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 3",
                "UPP THOMSON RD",
                "THOMSON RD",
                "NEW BRIDGE RD",
                "KAMPONG BAHRU RD",
                "TELOK BLANGAH RD",
                "ALEXANDRA RD",
                "C'WEALTH AVE WEST"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1662: {
        front: {
            renderType: "standardService",
            serviceNumber: "166",
            destination: {
                text: "> ANG MO KIO INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "C'WEALTH AVE WEST",
                "ALEXANDRA RD",
                "TELOK BLANGAH RD",
                "KAMPONG BAHRU RD",
                "EU TONG SEN ST",
                "THOMSON RD",
                "UPP THOMSON RD",
                "ANG MO KIO AVE 3"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1681: {
        front: {
            renderType: "standardService",
            serviceNumber: "168",
            destination: {
                text: "> WOODLANDS INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BEDOK NORTH AVE 3",
                "TAMPINES AVE 4",
                "TAMPINES AVE 10",
                "JALAN KAYU",
                "WOODLANDS AVE 2"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1682: {
        front: {
            renderType: "standardService",
            serviceNumber: "168",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "WOODLANDS AVE 2",
                "JALAN KAYU",
                "TAMPINES AVE 10",
                "TAMPINES AVE 4",
                "BEDOK NORTH AVE 3"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1685: {
        front: {
            renderType: "standardService",
            serviceNumber: "168A",
            destination: {
                text: "TAMPINES STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt2",
                serviceNumber: "168A",
                destinationRoad: "TAMP AV4",
                destinationName: "(OPP TAMPINES STN/INT)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1701: {
        front: {
            renderType: "standardService",
            serviceNumber: "170",
            destination: {
                text: "> LARKIN TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BUKIT TIMAH RD",
                "UPPER BUKIT TIMAH RD",
                "WOODLANDS RD",
                "WOODLANDS CTR RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1702: {
        front: {
            renderType: "standardService",
            serviceNumber: "170",
            destination: {
                text: "> QUEEN ST TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "WOODLANDS CTR RD",
                "WOODLANDS RD",
                "UPP BUKIT TIMAH RD",
                "DUNEARN RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1703: {
        front: {
            renderType: "standardService",
            serviceNumber: "170X",
            destination: {
                text: "> JB SENTRAL",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "WOODLANDS RD",
                "WOODLANDS CROSSING",
                "JB SENTRAL"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1704: {
        front: {
            renderType: "standardService",
            serviceNumber: "170X",
            destination: {
                text: "> KRANJI STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "WOODLANDS RD",
                "WOODLANDS CROSSING",
                "JB SENTRAL"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1709: {
        front: {
            renderType: "standardService",
            serviceNumber: "170A",
            destination: {
                text: "WOODLANDS TRAIN CHECKPOINT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "170A",
                destinationRoad: "W'LANDS",
                destinationName: "TRAIN CHECKPOINT"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1741: {
        front: {
            renderType: "standardService",
            serviceNumber: "174",
            destination: {
                text: "> KAMPONG BAHRU TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JURONG ROAD",
                "BUKIT BATOK E. AVE 3&6",
                "JALAN JURONG KECHIL",
                "DUNEARN RD",
                "FARRER RD",
                "HOLLAND RD",
                "ORCHARD RD",
                "NORTH&SOUTH BRIDGE RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1742: {
        front: {
            renderType: "standardService",
            serviceNumber: "174",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "EU TONG SEN ST",
                "ORCHARD BOULEVARD",
                "HOLLAND RD",
                "FARRER RD",
                "BUKIT TIMAH RD",
                "JALAN JURONG KECHIL",
                "BT. BATOK EAST AVE 6&3"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1748: {
        front: {
            renderType: "expressService",
            serviceNumber: "174e"
        }
    },
    1749: {
        front: {
            renderType: "FfwService",
            serviceNumber: "174e"
        }
    },
    1751: {
        front: {
            renderType: "standardService",
            serviceNumber: "175",
            destination: {
                text: "> LOR 1 GEYLANG TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "WEST COAST HIGHWAY",
                "PASIR PANJANG RD",
                "ALEXANDRA RD",
                "JALAN BUKIT MERAH",
                "ORCHARD RD",
                "BRAS BASAH RD",
                "KALLANG BAHRU"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1752: {
        front: {
            renderType: "standardService",
            serviceNumber: "175",
            destination: {
                text: "> CLEMENTI INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'KALLANG BAHRU',
                'STAMFORD RD',
                'ORCHARD BOULEVARD',
                'JALAN BUKIT MERAH',
                'ALEXANDRA RD',
                'PASIR PANJANG RD',
                'WEST COAST HIGHWAY'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1791: {
        front: {
            renderType: "standardService",
            serviceNumber: "179",
            destination: {
                text: "BOON LAY INT- NTU",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JURONG WEST ST 63",
                "PIONEER RD NORTH",
                "LIEN YING CHOW DR",
                "NANYANG DR"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1795: {
        front: {
            renderType: "standardService2",
            serviceNumber: "179A",
            destination: {
                text: "BOON LAY INT-NANYANG DR",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "NANYANG DR",
                "PIONEER RD NTH"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1811: {
        front: {
            renderType: "standardService",
            serviceNumber: "181",
            destination: {
                text: "BOON LAY INT- JURONG WEST",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "JURONG WEST ST 64",
                "JURONG WEST ST 75",
                'JURONG WEST AVE 5',
                'JURONG WEST AVE 3'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1817: {
        front: {
            renderType: "standardService",
            serviceNumber: "181M",
            destination: {
                text: "BOON LAY-JURONG W. ST 23",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "JURONG WEST ST 64",
                "JURONG WEST ST 75",
                "JURONG WEST AVE 5",
                "JURONG WEST AVE 3",
                "JURONG WEST ST 64",
                "JURONG WEST ST 75",
                "JURONG WEST AVE 5",
                "JURONG WEST AVE 3"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1821: {
        front: {
            renderType: "standardService",
            serviceNumber: "182",
            destination: {
                text: "> TUAS SOUTH AVE 9",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "UPPER JURONG RD",
                "JALAN AHMAD IBRAHIM",
                "TUAS STH AVE 3",
                "TUAS STH AVE 9"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1822: {
        front: {
            renderType: "standardService",
            serviceNumber: "182",
            destination: {
                text: "> JOO KOON INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TUAS STH AVE 9",
                "TUAS STH AVE 3",
                "JALAN AHMAD IBRAHIM",
                "UPPER JURONG RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1823: {
        front: {
            renderType: "standardService",
            serviceNumber: "182",
            destination: {
                text: "JOO KOON-TUAS STH AVE 9",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "UPPER JURONG RD",
                "JALAN AHMAD IBRAHIM",
                "TUAS STH AVE 3",
                "TUAS STH AVE 9",
                "TUAS STH AVE 3",
                "JALAN AHMAD IBRAHIM",
            ],
            scrollFont: "Mobitec-6:5"
        }
    }, 
    1827: {
        front: {
            renderType: "standardService",
            serviceNumber: "182M",
            destination: {
                text: "JOO KOON INT - TUAS STH",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "UPPER JURONG RD",
                "JALAN AHMAD IBRAHIM",
                "TUAS STH AVE 3",
                "TUAS STH AVE 9",
                "TUAS STH AVE 3",
                "JALAN AHMAD IBRAHIM",
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1851: {
        front: {
            renderType: "standardService",
            serviceNumber: "185",
            destination: {
                text: "> BUONA VISTA TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'PIONEER RD NTH',
                'JURONG WEST AVE 5, 3',
                'JURONG EAST AVE 1',
                'CLEMENTI AVE 6',
                "C'WEALTH AVE WEST"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1852: {
        front: {
            renderType: "standardService",
            serviceNumber: "185",
            destination: {
                text: "> SOON LEE DEPOT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "C'WEALTH AVE WEST",
                'CLEMENTI AVE 6',
                'JURONG EAST AVE 1',
                'JURONG WEST AVE 5, 3',
                'PIONEER RD NTH'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1861: {
        front: {
            renderType: "standardService",
            serviceNumber: "186",
            destination: {
                text: "> ST MICHAEL'S TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "UPPER PICKERING ST",
                "HAVELOCK RD",
                "ALEXANDRA RD",
                "QUEENSWAY",
                "FARRER RD",
                "BALESTIER RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1862: {
        front: {
            renderType: "standardService",
            serviceNumber: "186",
            destination: {
                text: "> SHENTON WAY TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BALESTIER RD",
                "FARRER RD",
                "QUEENSWAY",
                "ALEXANDRA RD",
                "HAVELOCK RD",
                "UPPER PICKERING ST"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1911: {
        front: {
            renderType: "standardService",
            serviceNumber: "191",
            destination: {
                text: "BUONA V. TER-PORTSDOWN RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'COMMONWEALTH AVE',
                'NORTH BUONA VISTA RD',
                'PORTSDOWN RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1921: {
        front: {
            renderType: "standardService",
            serviceNumber: "192",
            destination: {
                text: "> TUAS TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JURONG WEST ST 62",
                "TUAS AVE 1",
                'JALAN AHMAD IBRAHIM',
                "TUAS AVE 12",
                "PIONEER RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1922: {
        front: {
            renderType: "standardService",
            serviceNumber: "192",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "PIONEER RD",
                "TUAS AVE 1",
                "JALAN AHMAD IBRAHIM",
                "UPP JURONG RD",
                "JURONG WEST ST 62"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1931: {
        front: {
            renderType: "standardService",
            serviceNumber: "193",
            destination: {
                text: "> TUAS TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JURONG WEST AVE 4",
                "LOK YANG WAY",
                "TUAS RD",
                "TUAS AVE 5, 9",
                "TUAS WEST DR"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1932: {
        front: {
            renderType: "standardService",
            serviceNumber: "193",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TUAS WEST DR",
                "TUAS AVE 9, 5",
                "TUAS RD",
                "LOK YANG WAY",
                "JURONG WEST AVE 4"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1941: {
        front: {
            renderType: "standardService",
            serviceNumber: "194",
            destination: {
                text: "BOON LAY-J. AHMAD IBRAHIM",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'JALAN AHMAD IBRAHIM'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1951: {
        front: {
            renderType: "standardService",
            serviceNumber: "195",
            destination: {
                text: "MARINA CTR - C'WEALTH AVE",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'RIVER VALLEY RD',
                'TIONG BAHRU RD',
                'LOWER DELTA RD',
                'TELOK BLANGAH WAY',
                'ALEXANDRA RD',
                'COMMONWEALTH DR'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1955: {
        front: {
            renderType: "standardService",
            serviceNumber: "195A",
            destination: {
                text: "TIONG BAHRU STN/PLAZA",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "195A",
                destinationRoad: "",
                destinationName: "TIONG BAHRU STN/PLAZA"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1956: {
        front: {
            renderType: "standardService",
            serviceNumber: "195B",
            destination: {
                text: "COMMONWEALTH STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "195B",
                destinationRoad: "",
                destinationName: "(C'WEALTH STN EXIT B/C)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1961: {
        front: {
            renderType: "standardService",
            serviceNumber: "196",
            destination: {
                text: "> CLEMENTI INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'BEDOK STH AVE 1',
                'MARINE PARADE RD',
                'MOUNTBATTEN RD',
                'SHENTON WAY',
                'JALAN BUKIT MERAH',
                'QUEENSWAY',
                'DOVER RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1962: {
        front: {
            renderType: "standardService",
            serviceNumber: "196",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'DOVER RD',
                'JALAN BUKIT MERAH',
                'QUEENSWAY',
                'ROBINSON RD',
                'MOUNTBATTEN RD',
                'MARINE PARADE RD',
                'BEDOK STH AVE 1'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1965: {
        front: {
            renderType: "standardService",
            serviceNumber: "196A",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "196A",
                destinationRoad: "SHENTON",
                destinationName: "WAY (OPP MAS BLDG)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1968: {
        front: {
            renderType: "expressService",
            serviceNumber: "196e"
        }
    },
    1969: {
        front: {
            renderType: "FfwService",
            serviceNumber: "196e"
        }
    },    
    1971: {
        front: {
            renderType: "standardService",
            serviceNumber: "197",
            destination: {
                text: "> JURONG EAST INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'BEDOK SOUTH AVE 1',
                'MARINE PARADE RD',
                'NORTH BRIDGE RD',
                'SOUTH BRIDGE RD',
                'JALAN BUKIT MERAH',
                'JURONG TOWN HALL RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1972: {
        front: {
            renderType: "standardService",
            serviceNumber: "197",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'JURONG TOWN HALL RD',
                'JALAN BUKIT MERAH',
                'EU TONG SEN ST',
                'MARINE PARADE RD',
                'BEDOK SOUTH AVE 1'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1981: {
        front: {
            renderType: "standardService",
            serviceNumber: "198",
            destination: {
                text: "> BUKIT MERAH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'BOON LAY AVE',
                'JURONG WEST AVE 1',
                'JURONG EAST AVE 1',
                'JURONG TOWN HALL RD',
                'AYE',
                'QUEENSWAY'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1982: {
        front: {
            renderType: "standardService",
            serviceNumber: "198",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "QUEENSWAY",
                "AYE",
                "JURONG TOWN HALL RD",
                "JURONG EAST AVE 1",
                "JURONG WEST AVE 1",
                "BOON LAY AVE"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1985: {
        front: {
            renderType: "standardService",
            serviceNumber: "198A",
            destination: {
                text: "JURONG EAST AVE 1",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "198A",
                destinationRoad: "JURONG E.",
                destinationName: "AVE 1 (OPP PARC OASIS)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1991: {
        front: {
            renderType: "standardService",
            serviceNumber: "199",
            destination: {
                text: "BOON LAY INT-NANYANG CRES",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'JALAN BAHAR',
                'NANYANG AVE',
                'NANYANG CRES',
                'NANYANG DR'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2001: {
        front: {
            renderType: "standardService",
            serviceNumber: "200",
            destination: {
                text: "> KENT RIDGE TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'HOLLAND DR',
                'COMMONWEALTH AVE',
                'NORTH BUONA VISTA RD',
                'SOUTH BUONA VISTA RD',
                "PASIR PANJANG RD",
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2002: {
        front: {
            renderType: "standardService",
            serviceNumber: "200",
            destination: {
                text: "> BUONA VISTA TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'PASIR PANJANG RD',
                'SOUTH BUONA VISTA RD',
                'NORTH BUONA VISTA RD',
                'COMMONWEALTH AVE',
                'HOLLAND DR'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2005: {
        front: {
            renderType: "standardService",
            serviceNumber: "200A",
            destination: {
                text: "KENT RIDGE TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt2",
                serviceNumber: "200A",
                destinationRoad: "CLEMENTI",
                destinationName: "ROAD (KENT RIDGE TER)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2011: {
        front: {
            renderType: "standardService",
            serviceNumber: "201",
            destination: {
                text: "KENT RIDGE - PANDAN GDNS",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "WEST COAST RD",
                "C'WEALTH AVE WEST",
                "TEBAN GARDENS RD",
                "PANDAN GARDENS",
                "C'WEALTH AVE WEST",
                "WEST COAST RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2221: {
        front: {
            renderType: "standardService",
            serviceNumber: "222",
            destination: {
                text: "BEDOK INT - CHAI CHEE DR",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'BEDOK NORTH ST 1',
                'BEDOK NORTH AVE 3',
                'BEDOK NORTH RD',
                'CHAI CHEE RD',
                'CHAI CHEE ST'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2222: {
        front: {
            renderType: "logo",
            image: "logo",
            text: "SBS TRANSIT LOGO"
        }
    },
    2225: {
        front: {
            renderType: "standardService",
            serviceNumber: "222A",
            destination: {
                text: "BEDOK STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "222A",
                destinationRoad: "",
                destinationName: "BEDOK STN EXIT A"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2226: {
        front: {
            renderType: "standardService",
            serviceNumber: "222B",
            destination: {
                text: "BEDOK STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "222A",
                destinationRoad: "",
                destinationName: "BEDOK STN EXIT B"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2251: {
        front: {
            renderType: "standardService",
            serviceNumber: "225G",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'BEDOK NORTH AVE 1',
                'BEDOK NORTH ST 3',
                'BEDOK NORTH AVE 2'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2252: {
        front: {
            renderType: "standardService",
            serviceNumber: "225W",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'BEDOK NORTH AVE 2',
                'BEDOK NORTH ST 3',
                'BEDOK NORTH AVE 1',
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2281: {
        front: {
            renderType: "standardService",
            serviceNumber: "228",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BEDOK NORTH ST 1",
                "BEDOK NORTH AVE 3",
                "BEDOK RESERVOIR RD",
                "BEDOK NORTH AVE 3"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2291: {
        front: {
            renderType: "standardService",
            serviceNumber: "229",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'CHAI CHEE RD',
                'BEDOK SOUTH RD',
                'BEDOK SOUTH AVE 3',
                'UPPER EAST COAST RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2301: {
        front: {
            renderType: "standardService",
            serviceNumber: "230",
            destination: {
                text: "> CALDECOTT STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TOA PAYOH RISE",
                "LOR 6 TOA PAYOH",
                "LOR 8, 7 TOA PAYOH",
                "LOR 6 TOA PAYOH",
                "TOA PAYOH RISE",
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2307: {
        front: {
            renderType: "standardService",
            serviceNumber: "230M",
            destination: {
                text: "TOA PAYOH INT - KIM KEAT AVE",
                font: "Mobitec-7:4"
            },
            scrolls: [
            {
                renderType: "destScroll",
                serviceNumber: "230M",
                top: "TOA PAYOH INT -",
                topFont: "Mobitec-7:4",
                bottom: "KIM KEAT AVE (LOOP)",
                bottomFont: "Mobitec-7:4",
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2309: {
        front: {
            renderType: "standardService",
            serviceNumber: "230",
            destination: {
                text: "> TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'LOR 6 TOA PAYOH',
                'TOA PAYOH EAST',
                'KIM KEAT AVE',
                'TOA PAYOH EAST'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2311: {
        front: {
            renderType: "standardService",
            serviceNumber: "231",
            destination: {
                text: "> TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'LOR 1 TOA PAYOH',
                'LOR 4 TOA PAYOH',
                'LOR 5 TOA PAYOH'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2321: {
        front: {
            renderType: "standardService",
            serviceNumber: "232",
            destination: {
                text: "> TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'LOR 6 TOA PAYOH',
                'LOR 4 TOA PAYOH',
                'LOR 2 TOA PAYOH',
                'LOR 1 TOA PAYOH',
                'LOR 7 TOA PAYOH'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2351: {
        front: {
            renderType: "standardService",
            serviceNumber: "235",
            destination: {
                text: "> TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'LOR 6 TOA PAYOH',
                'TOA PAYOH EAST',
                'LOR 5 TOA PAYOH',
                'LOR 3 TOA PAYOH',
                'LOR 2 TOA PAYOH',
                'LOR 1 TOA PAYOH',
                'TOA PAYOH RISE'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2381: {
        front: {
            renderType: "standardService",
            serviceNumber: "238",
            destination: {
                text: "> TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'LOR 6 TOA PAYOH',
                'LOR 8 TOA PAYOH'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2401: {
        front: {
            renderType: "standardService",
            serviceNumber: "240",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JALAN AHMAD IBRAHIM",
                "KANG CHING RD",
                "YUAN CHING RD",
                "BOON LAY PLACE",
                "BOON LAY WAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2405: {
        front: {
            renderType: "standardService",
            serviceNumber: "240A",
            destination: {
                text: "LAKESIDE STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "240A",
                destinationRoad: "BOON",
                destinationName: "LAY WAY (LAKESIDE STN)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2407: {
        front: {
            renderType: "standardService",
            serviceNumber: "240M",
            destination: {
                text: "BOON LAY WAY-JURONG W",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "BOON LAY PLACE",
                "BOON LAY DR",
                "JURONG WEST ST 64",
                "BOON LAY DR"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2411: {
        front: {
            renderType: "standardService",
            serviceNumber: "241",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JURONG WEST ST 63",
                "PIONEER RD NTH",
                "JURONG WEST ST 91"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2415: {
        front: {
            renderType: "standardService",
            serviceNumber: "241A",
            destination: {
                text: "PIONEER STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "destScroll",
                serviceNumber: "241A",
                top: "TERMINATES AT",
                topFont: "Mobitec-6:5",
                bottom: "PIONEER STN EXIT B",
                bottomFont: "Mobitec-6:5",
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2421: {
        front: {
            renderType: "standardService",
            serviceNumber: "242",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JURONG WEST CENTRAL 1",
                "JALAN BOON LAY",
                "JURONG WEST AVE 4",
                "JURONG WEST ST 72",
                "JURONG WEST AVE 5",
                "JURONG WEST AVE 4",
                "JALAN BOON LAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2431: {
        front: {
            renderType: "standardService",
            serviceNumber: "243G",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JURONG WEST ST 64",
                "JURONG WEST ST 75",
                "JURONG WEST ST 81",
                "JURONG WEST AVE 5",
                "JURONG WEST AVE 4",
                "JURONG WEST ST 62"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2432: {
        front: {
            renderType: "standardService",
            serviceNumber: "243W",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JURONG WEST ST 62",
                "JURONG WEST AVE 4",
                "JURONG WEST AVE 5",
                "JURONG WEST ST 81",
                "JURONG WEST ST 75",
                "JURONG WEST ST 64"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2461: {
        front: {
            renderType: "standardService",
            serviceNumber: "246",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'CHIN BEE DR',
                'TAH CHING RD',
                'BOON LAY DR',
                "YUAN CHING RD",
                'JALAN TUKANG'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2471: {
        front: {
            renderType: "standardService",
            serviceNumber: "247",
            destination: {
                text: "TUAS TER-TUAS BAY LINK",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "TUAS AVE 7",
                "TUAS CRES",
                "TUAS STH AVE 5&4&7",
                "TUAS STH AVE 3&9&8",
                "TUAS LINK 4"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2481: {
        front: {
            renderType: "standardService",
            serviceNumber: "248",
            destination: {
                text: "TUAS TER-TUAS STH AVE 14",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "PIONEER RD",
                "TUAS AVE 20",
                "TUAS STH AVE 5",
                "TUAS STH AVE 9",
                "TUAS STH AVE 10"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2487: {
        front: {
            renderType: "standardService2",
            serviceNumber: "248M",
            destination: {
                text: "TUAS TER-TUAS STH WAY",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "PIONEER RD",
                "TUAS AVE 20",
                "TUAS STH AVE 5",
                "TUAS STH AVE 14",
                "TUAS SOUTH WAY",
                "TUAS STH AVE 9",
                "TUAS STH AVE 10",
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2491: {
        front: {
            renderType: "standardService",
            serviceNumber: "249",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JALAN BOON LAY",
                "JURONG PIER RD",
                "TANJONG KLING RD",
                "SHIPYARD RD",
                "JALAN SAMULUN",
                "SHIPYARD RD",
                "TANJONG KLING RD",
                "JALAN BOON LAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2511: {
        front: {
            renderType: "standardService",
            serviceNumber: "251",
            destination: {
                text: "BOON LAY INT-SHIPYARD RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "BOON LAY WAY",
                "PIONEER RD NTH",
                "SHIPYARD RD",
                "PIONEER RD NTH",
                "BOON LAY WAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2521: {
        front: {
            renderType: "standardService",
            serviceNumber: "252",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ENTERPRISE RD",
                "INTERNATIONAL RD",
                "JOO KOON CIRCLE"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2531: {
        front: {
            renderType: "standardService",
            serviceNumber: "253",
            destination: {
                text: "JOO KOON INT-BENOI RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "BENOI RD",
                "BENOI SECTOR",
                "PIONEER RD",
                "BENOI RD",
                "PIONEER RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2541: {
        front: {
            renderType: "standardService",
            serviceNumber: "254",
            destination: {
                text: "JOO KOON INT-TUAS AVE 11",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "BENOI RD",
                "PIONEER RD",
                "TUAS RD",
                "TUAS BASIN LINK"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2551: {
        front: {
            renderType: "standardService",
            serviceNumber: "255",
            destination: {
                text: "JOO KOON INT-GUL CRES",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "GUL CIRCLE",
                "GUL CRES",
                "GUL AVE"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2561: {
        front: {
            renderType: "standardService",
            serviceNumber: "256",
            destination: {
                text: "BOON LAY INT-JOO KOON",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "JURONG WEST ST 62",
                "PIONEER RD NTH",
                "JALAN AHMAD IBRAHIM",
                "JOO KOON CIRCLE",
                "JALAN AHMARD IBRAHIM",
                "PIONEER RD NTH",
                "JURONG WEST ST 62"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2571: {
        front: {
            renderType: "standardService",
            serviceNumber: "257",
            destination: {
                text: "JOO KOON INT-PIONEER SEC 2",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "BENOI RD",
                "GUL RD",
                "PIONEER SECTOR 2",
                "PIONEER SECTOR 1"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2581: {
        front: {
            renderType: "standardService",
            serviceNumber: "258",
            destination: {
                text: "JOO KOON INT-JUR W. ST 64",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "PIONEER RD NTH",
                "JURONG W. ST 61&81&75",
                "JALAN AHMAD IBRAHIM"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2611: {
        front: {
            renderType: "standardService",
            serviceNumber: "261",
            destination: {
                text: "> ANG MO KIO INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 3",
                "ANG MO KIO AVE 10",
                "ANG MO KIO IND PK 1",
                "ANG MO KIO AVE 10",
                "ANG MO KIO AVE 3"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2621: {
        front: {
            renderType: "standardService",
            serviceNumber: "262",
            destination: {
                text: "> ANG MO KIO INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'ANG MO KIO AVE 8',
                'ANG MO KIO AVE 1',
                'ANG MO KIO ST 11',
                'ANG MO KIO AVE 2'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2651: {
        front: {
            renderType: "standardService",
            serviceNumber: "265",
            destination: {
                text: "AMK DEPOT - AMK AVE 10",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'ANG MO KIO AVE 9',
                'ANG MO KIO AVE 4',
                'ANG MO KIO AVE 3'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2659: {
        front: {
            renderType: "standardService",
            serviceNumber: "265A",
            destination: {
                text: "ANG MO KIO STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "265A",
                destinationRoad: "AMK",
                destinationName: "AVE 8 (ANG MO KIO STN)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2681: {
        front: {
            renderType: "standardService",
            serviceNumber: "265",
            destination: {
                text: "> ANG MO KIO AVE 5",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'ANG MO KIO AVE 3',
                'ANG MO KIO AVE 4',
                'ANG MO KIO AVE 5'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2682: {
        front: {
            renderType: "standardService",
            serviceNumber: "265",
            destination: {
                text: "> ANG MO KIO DEPOT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'ANG MO KIO AVE 5',
                'ANG MO KIO AVE 4',
                'ANG MO KIO AVE 3'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2685: {
        front: {
            renderType: "standardService",
            serviceNumber: "268A",
            destination: {
                text: "ANG MO KIO AVE 5",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "268A",
                destinationRoad: "AMK",
                destinationName: "AVE 5 (TECHPLACE 2)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2686: {
        front: {
            renderType: "standardService",
            serviceNumber: "268B",
            destination: {
                text: "ANG MO KIO STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "268B",
                destinationRoad: "",
                destinationName: "AMK AVE 3 (AMK STN)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2687: {
        front: {
            renderType: "standardService",
            serviceNumber: "268C",
            destination: {
                text: "ANG MO KIO AVE 9",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "268C",
                destinationRoad: "AMK",
                destinationName: "AVE 9 (AMK POLICE HQ)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2691: {
        front: {
            renderType: "standardService",
            serviceNumber: "269",
            destination: {
                text: "> ANG MO KIO INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'ANG MO KIO AVE 3',
                'ANG MO KIO AVE 4',
                'ANG MO KIO AVE 5',
                'ANG MO KIO ST 61',
                'YIO CHU KANG RD',
                'ANG MO KIO AVE 5',
                'ANG MO KIO AVE 4',
                'ANG MO KIO AVE 3'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2695: {
        front: {
            renderType: "standardService",
            serviceNumber: "296A",
            destination: {
                text: "ANG MO KIO ST 61",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "269A",
                destinationRoad: "",
                destinationName: "AMK ST 61 (MKT / FC)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2721: {
        front: {
            renderType: "standardService",
            serviceNumber: "272",
            destination: {
                text: "> BUKIT MERAH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "HENDERSON RD",
                "TELOK BLANGAH WAY",
                "TELOK BLANGAH RISE",
                "TELOK BLANGAH CRES",
                "HENDERSON RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2731: {
        front: {
            renderType: "standardService",
            serviceNumber: "273",
            destination: {
                text: "> BUKIT MERAH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "HENDERSON RD",
                "TELOK BLANGAH HTS",
                "TELOK BLANGAH ST 32",
                "TELOK BLANGAH DRIVE",
                "HENDERSON RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2751: {
        front: {
            renderType: "standardService",
            serviceNumber: "275",
            destination: {
                text: "> BUKIT MERAH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JALAN BUKIT MERAH",
                "LOWER DELTA RD",
                "BUKIT PURMEI AVE",
                "LOWER DELTA RD",
                "JALAN BUKIT MERAH"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2911: {
        front: {
            renderType: "standardService",
            serviceNumber: "291",
            destination: {
                text: "> TAMPINES ST 83&33",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TAMPINES AVE 5",
                "TAMPINES ST 83",
                "TAMPINES ST 81",
                "TAMPINES ST 21",
                "TAMPINES ST 32",
                "TAMPINES ST 21"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2912: {
        front: {
            renderType: "standardService",
            serviceNumber: "291T",
            destination: {
                text: "> TAMPINES ST 83&33",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TAMPINES AVE 5",
                "TAMPINES ST 83",
                "TAMPINES ST 81",
                "TAMPINES ST 21",
                "TAMPINES ST 32",
                "TAMPINES ST 21"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2917: {
        front: {
            renderType: "standardService",
            serviceNumber: "291T",
            destination: {
                text: "TAMPINES INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "291T",
                destinationRoad: "",
                destinationName: "TAMPINES INT"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2921: {
        front: {
            renderType: "standardService",
            serviceNumber: "292",
            destination: {
                text: "> TAMPINES INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TAMPINES AVE 5",
                "TAMPINES AVE 2",
                "TAMPINES ST 22",
                "TAMPINES AVE 2",
                "TAMPINES ST 11"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2931: {
        front: {
            renderType: "standardService",
            serviceNumber: "293",
            destination: {
                text: "> TAMP ST 71 & AVE 7",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TAMPINES ST 45&42",
                "TAMPINES AVE 4&3",
                "TAMPINES AVE 8&9"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2932: {
        front: {
            renderType: "standardService",
            serviceNumber: "293T",
            destination: {
                text: "> TAMPINES ST71 & AVE7",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "TAMPINES ST 45&42",
                "TAMPINES AVE 4&3",
                "TAMPINES AVE 8&9"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2961: {
        front: {
            renderType: "standardService",
            serviceNumber: "296",
            destination: {
                text: "TAMP INT - TAMP NTH DR 2",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "TAMPINES AVE 5",
                "TAMPINES AVE 6",
                "TAMPINES NORTH DR 1",
                "TAMPINES ST 64"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },   
    2981: {
        front: {
            renderType: "standardService",
            serviceNumber: "298",
            destination: {
                text: "TAMP NTH INT-TAMP AVE 5",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "TAMPINES ST 62",
                "TAMPINES NORTH DR 2",
                "TAMPINES CONCOURSE",
                "TAMPINES AVE 4",
                "TAMPINES AVE 3"
            ],
            scrollFont: "Mobitec-6:5"
        }
    }, 
    2982: {
        front: {
            renderType: "standardService2",
            serviceNumber: "298X",
            destination: {
                text: "TAMP|N.|INT-|ST|86|(LOOP)",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "TAMPINES ST 62",
                "TAMPINES CTRL 1",
                "TAMPINES ST 86",
                "TAMPINES AVE 4",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },   
    2989: {
        front: {
            renderType: "standardService",
            serviceNumber: "298",
            destination: {
                text: "TAMP CONCOURSE - ST 86",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "TAMPINES CENTRAL 1",
                "TAMPINES AVE 4",
                "TAMPINES AVE 3"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },   
    2991: {
        front: {
            renderType: "standardService",
            serviceNumber: "299",
            destination: {
                text: "TAMPINES NORTH INT - TAMPINES ST 96",
                font: "Mobitec-7:4"
            },
            scrolls: [
            {
                renderType: "destScroll",
                serviceNumber: "299",
                top: "TAMPINES NORTH INT -",
                topFont: "Mobitec-7:5:1",
                bottom: "TAMPINES ST 96 (LOOP)",
                bottomFont: "Mobitec-7:5:1",
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    3151: {
        front: {
            renderType: "destScroll",
            serviceNumber: "315",
            top: "S'GOON NTH AVE 5",
            topFont: "LECIP-14:6",
        }
    },
    3152: {
        front: {
            renderType: "destScroll",
            serviceNumber: "315",
            top: "SERANGOON INT",
            topFont: "LECIP-14:6",
        }
    },
    3158: {
        front: {
            renderType: "standardService",
            serviceNumber: "315",
            destination: {
                text: "> SERANGOON NTH AVE5",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'LORONG CHUAN',
                'SERANGOON GARDEN WAY',
                'SERANGOON NORTH AVE 1',
                'SERANGOON NORTH AVE 4',
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    3159: {
        front: {
            renderType: "standardService",
            serviceNumber: "315",
            destination: {
                text: "> SERANGOON INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'ANG MO KIO AVE 3',
                'SERANGOON NORTH 1',
                'SERANGOON GARDEN WAY',
                'LORONG CHUAN'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    3171: {
        front: {
            renderType: "destScroll",
            serviceNumber: "317",
            top: "BERWICK DR",
            topFont: "LECIP-14:6",
        }
    },
    3172: {
        front: {
            renderType: "destScroll",
            serviceNumber: "317",
            top: "SERANGOON INT",
            topFont: "LECIP-14:6",
        }
    },
    3178: {
        front: {
            renderType: "standardService",
            serviceNumber: "317",
            destination: {
                text: "> BERWICK DRIVE",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'UPP SERANGOON RD',
                'YIO CHU KANG LINK',
                'SERANGOON GARDEN WAY',
                'CHARTWELL DR',
                'BURGHLEY DR'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    3179: {
        front: {
            renderType: "standardService",
            serviceNumber: "317",
            destination: {
                text: "> SERANGOON INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'TAVISTOCK AVE',
                'HEMSLEY AVE',
                'KENSINGTON PARK RD',
                'SERANGOON GARDEN WAY',
                'YIO CHU KANG LINK',
                'UPP SERANGOON RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    3241: {
        front: {
            renderType: "standardService",
            serviceNumber: "324",
            destination: {
                text: "> HOUGANG CTRL INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'UPP SERANGOON RD',
                'UPP SERANGOON CRES',
                'UPP SERANGOON VIEW'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    3251: {
        front: {
            renderType: "standardService",
            serviceNumber: "325",
            destination: {
                text: "> HOUGANG AVE 9",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'UPP SERANGOON RD',
                'HOUGANG AVE 2, 10, 8',
                'HOUGANG ST 51',
                'BUANGKOK GREEN'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    3291: {
        front: {
            renderType: "standardService",
            serviceNumber: "329",
            destination: {
                text: "HOUGANG CTRL-BUANGKOK CR",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "HOUGANG AVE 4,9",
                "HOUGANG ST 91,93",
                "BUANGKOK LINK"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    3333: {
        front: {
            renderType: "message",
            text: "FREE SHUTTLE",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    3711: {
        front: {
            renderType: "standardService",
            serviceNumber: "371",
            destination: {
                text: "> SENGKANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "COMPASSVALE RD",
                "RIVERVALE DR",
                "RIVERVALE CRES",
                "COMPASSVALE ST"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    3721: {
        front: {
            renderType: "standardService",
            serviceNumber: "372",
            destination: {
                text: "> SENGKANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'SENGKANG EAST WAY',
                'ANCHORVALE DR',
                'PUNGGOL DR',
                'COMPASSVALE RD',
                'ANCHORVALE RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    3749: {
        front: {
            renderType: "standardService",
            serviceNumber: "374",
            destination: {
                text: "> COMPASSVALE INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "SENGKANG EAST WAY",
                "ANCHORVALE CRES",
                "COMPASSVALE RD",
                "SENGKANG EAST WAY",
                "FERNVALE RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    3741: {
        front: {
            renderType: "standardService",
            serviceNumber: "374",
            destination: {
                text: "> SENGKANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "SENGKANG EAST WAY",
                "ANCHORVALE CRES",
                "COMPASSVALE RD",
                "SENGKANG EAST WAY",
                "FERNVALE RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    3861: {
        front: {
            renderType: "standardService",
            serviceNumber: "386",
            destination: {
                text: "> PUNGGOL INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "PUNGGOL CENTRAL",
                "EDGEVALE PLAINS",
                "PUNGGOL EAST",
                "EDGEVALE PLAINS",
                "PUNGGOL CENTRAL"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    4001: {
        front: {
            renderType: "standardService2",
            serviceNumber: "400",
            destination: {
                text: "SHENTON WY TER-M.COASTAL",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "MARINA BOULEVARD",
                "MARINA GDNS DR",
                "MARINA COSTAL DR",
                "CENTRAL BOULEVARD",
                "SHENTON WAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    4002: {
        front: {
            renderType: "standardService",
            serviceNumber: "400",
            destination: {
                text: "SHENTON WAY-M. GDNS DR",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "MARINA BOULEVARD",
                "MARINA GDNS DR",
                "CENTRAL BOULEVARD",
                "SHENTON WAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    4011: {
        front: {
            renderType: "standardService",
            serviceNumber: "401",
            destination: {
                text: "BEDOK INT - FORT RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "SIGLAP RD",
                'EAST COAST PK SVC RD',
                'MARINE PARADE RD',
                'TANJONG KATONG RD',
                'OLD AIRPORT RD',
                'FORT RD',
                'EAST COAST PK SVC RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    4021: {
        front: {
            renderType: "standardService",
            serviceNumber: "402",
            destination: {
                text: "SHENTON WAY-M. COASTAL",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "MARINA BOULEVARD",
                "MARINA COSTAL DR",
                "CENTRAL BOULEVARD",
                "SHENTON WAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    4051: {
        front: {
            renderType: "standardService",
            serviceNumber: "405",
            destination: {
                text: "BOON LAY INT-OLD CCK RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "JURONG WEST CENTRAL 1",
                "JALAN BOON LAY",
                "JALAN BAHAR",
                "OLD CHOA CHU KANG RD",
                "JALAN BAHAR",
                "JALAN BOON LAY",
                "JURONG WEST CENTRAL 1"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    4057: {
        front: {
            renderType: "standardService",
            serviceNumber: "405M",
            destination: {
                text: "BOON LAY-OLD CCK RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "JURONG WEST CENTRAL 1",
                "JALAN BOON LAY",
                "JALAN BAHAR",
                "OLD CHOA CHU KANG RD",
                "JALAN BAHAR",
                "JALAN BOON LAY",
                "JURONG WEST CENTRAL 1"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    4081: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "408",
            branding: "PARKS",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    4091: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "409",
            branding: "PARKS",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    4101: {
        front: {
            renderType: "standardService",
            serviceNumber: "410G",
            destination: {
                text: "> BISHAN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BISHAN ST 21",
                "UPP THOMSON RD",
                "SIN MING AVE",
                "BISHAN ST 22"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    4102: {
        front: {
            renderType: "standardService",
            serviceNumber: "410W",
            destination: {
                text: "> BISHAN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BISHAN ST 22",
                "SIN MING AVE",
                "UPPER THOMSON RD",
                "SHUNFU RD",
                "BISHAN ST 21",
                "BISHAN ST 12",
                "BISHAN ST 14"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    4444: {
        front: {
            renderType: "message",
            text: "ON TEST",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    4541: {
        front: {
            renderType: "standardService2",
            serviceNumber: "454",
            destination: {
                text: "TAMP N. INT- ST 86 (LOOP)",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "TAMPINES ST 62",
                "TAMPINES CTRL 1",
                "TAMPINES ST 86",
                "TAMPINES AVE 4",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },   
    4561: {
        front: {
            renderType: "standardService",
            serviceNumber: "456",
            destination: {
                text: "ST MICHAEL'S TER - NOVENA STN",
                font: "Mobitec-7:4"
            },
            scrolls: [
            {
                renderType: "destScroll",
                serviceNumber: "456",
                top: "ST MICHAEL'S TER -",
                topFont: "Mobitec-7:4",
                bottom: "NOVENA STN (LOOP)",
                bottomFont: "Mobitec-7:4",
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    5000: {
        front: {
            renderType: "destScroll",
            top: "50 YRS OF TRAVELLING",
            topFont: "Mobitec-7:4",

            bottom: "TOGETHER WITH SBS TRANSIT",
            bottomFont: "Mobitec-7:4",

            serviceNumber: ""
        }
    },
    5001: {
        front: {
            renderType: "destScroll",
            top: "JOURNEYING WITH YOU",
            topFont: "Mobitec-7:4",

            bottom: "50 Years of Mobility Excellence",
            bottomFont: "Mobitec-7:4",

            serviceNumber: ""
        }
    },
    5021: {
        front: {
            renderType: "expressService",
            serviceNumber: "502"
        }
    },
    5025: {
        front: {
            renderType: "expressService",
            serviceNumber: "502A"
        }
    },
    5061: {
        front: {
            renderType: "expressService",
            serviceNumber: "506"
        }
    },
    5131: {
        front: {
            renderType: "expressService",
            serviceNumber: "513"
        }
    },
    5555: {
        front: {
            renderType: "message",
            text: "TRAINING BUS",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    5556: {
        front: {
            renderType: "message",
            text: "TRAINING IN PROGRESS",
            font: "Mobitec-7:7",
            spacing: 1
        }
    },
    6091: {
        front: {
            renderType: "standardService",
            serviceNumber: "DTL",
            destination: {
                text: "> CHINATOWN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BEAUTY WORLD",
                "BOTANIC GARDENS",
                "NEWTON",
                "BUGIS"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    6092: {
        front: {
            renderType: "standardService",
            serviceNumber: "DTL",
            destination: {
                text: "> BUKIT PANJANG",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BUGIS",
                "NEWTON",
                "BOTANIC GARDENS",
                "BEAUTY WORLD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    6521: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "652",
            branding: "CITY DIRECT",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    6541: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "654",
            branding: "CITY DIRECT",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    6551: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "655",
            branding: "CITY DIRECT",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    6601: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "660",
            branding: "CITY DIRECT",
            font: "Mobitec-16:8",
            spacing: 2
        }
    },
    6607: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "660M",
            branding: "CITY DIRECT",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    6607: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "660M",
            branding: "CITY DIRECT",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    6671: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "667",
            branding: "CITY DIRECT",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    6681: {
        front: {
            renderType: "standardService",
            serviceNumber: "668",
            destination: {
                text: "CITY DIRECT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "destScroll",
                serviceNumber: "668",
                top: "CITY DIRECT",
                topFont: "Mobitec-16:8",
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    6711: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "671",
            branding: "CITY DIRECT",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    6721: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "672",
            branding: "CITY DIRECT",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    6751: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "675",
            branding: "CITY DIRECT",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    6761: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "676",
            branding: "CITY DIRECT",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    6771: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "677",
            branding: "CITY DIRECT",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    7040: {
        front: {
            renderType: "message",
            text: "EB704",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    7070: {
        front: {
            renderType: "message",
            text: "EB707",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    7150: {
        front: {
            renderType: "message",
            text: "EB715",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    7210: {
        front: {
            renderType: "message",
            text: "EB721",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    7701: {
        front: {
            renderType: "standardService",
            serviceNumber: "170A",
            destination: {
                text: "> W'LANDS TRAIN CHKPT",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "BUKIT TIMAH RD",
                "UPPER BUKIT TIMAH RD",
                "WOODLANDS RD",
                "WOODLANDS CTR RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    7702: {
        front: {
            renderType: "standardService",
            serviceNumber: "170A",
            destination: {
                text: "> QUEEN ST TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "WOODLANDS CTR RD",
                "WOODLANDS RD",
                "UPP BUKIT TIMAH RD",
                "DUNEARN RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    7771: {
        front: {
            renderType: "message",
            text: "CCL BRIDGING BUS",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    7772: {
        front: {
            renderType: "message",
            text: "DTL BRIDGING BUS",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    7773: {
        front: {
            renderType: "message",
            text: "EWL BRIDGING BUS",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    7774: {
        front: {
            renderType: "message",
            text: "NEL BRIDGING BUS",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    7775: {
        front: {
            renderType: "message",
            text: "LRT BRIDGING EAST",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    7776: {
        front: {
            renderType: "message",
            text: "LRT BRIDGING WEST",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    7777: {
        front: {
            renderType: "message",
            text: "FREE BRIDGING BUS",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    8001: {
        front: {
            renderType: "standardService",
            serviceNumber: "800",
            destination: {
                text: "YISHUN INT-SEMBAWANG RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "YISHUN AVE 7",
                "SEMBAWANG RD",
                "YISHUN ST 71",
                "YISHUN RING RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8011: {
        front: {
            renderType: "standardService",
            serviceNumber: "801",
            destination: {
                text: "YISHUN INT - YISHUN AVE 1",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "YISHUN AVE 9",
                "YISHUN AVE 6",
                "YISHUN ST 42",
                "YISHUN AVE 1",
                "YISHUN AVE 6"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8031: {
        front: {
            renderType: "standardService",
            serviceNumber: "803",
            destination: {
                text: "YISHUN INT-YISHUN AVE 6",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "YISHUN AVE 6",
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8041: {
        front: {
            renderType: "standardService",
            serviceNumber: "804",
            destination: {
                text: "YISHUN INT-YISHUN AVE 11",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "YISHUN AVE 2",
                "YISHUN RING RD",
                "YISHUN ST 41",
                "YISHUN AVE 1",
                "YISHUN AVE 11",
                "YISHUN RING RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8051: {
        front: {
            renderType: "standardService",
            serviceNumber: "805",
            destination: {
                text: "YISHUN INT-YISHUN AVE 1",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "YISHUN AVE 2",
                "YISHUN AVE 4",
                "YISHUN AVE 1",
                "YISHUN RING RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8061: {
        front: {
            renderType: "standardService",
            serviceNumber: "806",
            destination: {
                text: "YISHUN INT-YISHUN AVE 6",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "YISHUN CENTRAL",
                "YISHUN AVE 11",
                "YISHUN AVE 6",
                "YISHUN RING RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8071: {
        front: {
            renderType: "standardService",
            serviceNumber: "807",
            destination: {
                text: "YISHUN INT-YISHUN AVE 6",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "YISHUN RING RD",
                "YISHUN AVE 9",
                "YISHUN RING RD",
                "YISHUN AVE 5",
                "SEMBAWANG RD",
                "YISHUN ST 71"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8075: {
        front: {
            renderType: "standardService",
            serviceNumber: "807A",
            destination: {
                text: "YISHUN RING RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "807A",
                destinationRoad: "YISHUN",
                destinationName: "RING RD (OPP BLK 798)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8076: {
        front: {
            renderType: "standardService",
            serviceNumber: "807B",
            destination: {
                text: "YISHUN RING RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "807B",
                destinationRoad: "YISHUN",
                destinationName: "RING RD (JIEMIN PR SCH)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8111: {
        front: {
            renderType: "standardService",
            serviceNumber: "811",
            destination: {
                text: "> YISHUN AVE 5 & 1",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "YISHUN AVE 9,6&7",
                "SEMBAWANG RD",
                "YISHUN AVE 5&2",
                "YISHUN RING RD",
                "YISHUN AVE 2"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8115: {
        front: {
            renderType: "standardService",
            serviceNumber: "811A",
            destination: {
                text: "YISHUN AVE 5",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt2",
                serviceNumber: "811A",
                destinationRoad: "YISHUN",
                destinationName: "AVE5 (YISHUN STN EXIT E)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8118: {
        front: {
            renderType: "standardService",
            serviceNumber: "811T",
            destination: {
                text: "YISHUN STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt2",
                serviceNumber: "811T",
                destinationRoad: "YISHUN",
                destinationName: "AVE2 (YISHUN STN EXIT E)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8119: {
        front: {
            renderType: "standardService",
            serviceNumber: "811T",
            destination: {
                text: "YISHUN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "811T",
                destinationRoad: "",
                destinationName: "YISHUN INT"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8121: {
        front: {
            renderType: "standardService",
            serviceNumber: "812",
            destination: {
                text: "> YISHUN AVE 4 & 3",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "YISHUN ST 61",
                "YISHUN AVE 2",
                "YISHUN RING RD",
                "YISHUN CENTRAL"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8128: {
        front: {
            renderType: "standardService",
            serviceNumber: "811T",
            destination: {
                text: "YISHUN CENTRAL",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "811T",
                destinationRoad: "",
                destinationName: "YISHUN CTRL (OPP BK 201)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8129: {
        front: {
            renderType: "standardService",
            serviceNumber: "812T",
            destination: {
                text: "YISHUN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "812T",
                destinationRoad: "",
                destinationName: "YISHUN INT"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8141: {
        front: {
            renderType: "standardService",
            serviceNumber: "CT8",
            destination: {
                text: "> ANG MO KIO AVE 9",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'EU TONG SEN ST',
                'ANG MO KIO AVE 10',
                'ANG MO KIO AVE 3',
                'ANG MO KIO AVE 4'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8142: {
        front: {
            renderType: "standardService",
            serviceNumber: "CT8",
            destination: {
                text: "> NEW BRIDGE RD TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'ANG MO KIO AVE 4',
                'ANG MO KIO AVE 3',
                'ANG MO KIO AVE 10',
                'NEW BRIDGE RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8151: {
        front: {
            renderType: "standardService",
            serviceNumber: "CT18",
            destination: {
                text: "> BEDOK NORTH AVE 3",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'EU TONG SEN ST',
                'JALAN EUNOS',
                'BEDOK RESERVOIR RD',
                'BEDOK NORTH AVE 3'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8152: {
        front: {
            renderType: "standardService",
            serviceNumber: "CT18",
            destination: {
                text: "> NEW BRIDGE RD TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'BEDOK NORTH AVE 3',
                'BEDOK RESERVOIR RD',
                'JALAN EUNOS',
                'NEW BRIDGE RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8161: {
        front: {
            renderType: "standardService",
            serviceNumber: "CT28",
            destination: {
                text: "> CLEMENTI AVE 4",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "EU TONG SEN ST",
                "C'WEALTH AVE WEST",
                "CLEMENTI AVE 4"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8162: {
        front: {
            renderType: "standardService",
            serviceNumber: "CT28",
            destination: {
                text: "> KG. BAHRU TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "CLEMENTI AVE 4",
                "C'WEALTH AVE WEST",
                "NEW BRIDGE RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8501: {
        front: {
            renderType: "standardService",
            serviceNumber: "850E",
            destination: {
                text: "> SHENTON WAY",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "YISHUN RING RD",
                "BRAS BASAH RD",
                "COLLYER QUAY",
                "RAFFLES QUAY",
                "SHENTON WAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8502: {
        front: {
            renderType: "standardService",
            serviceNumber: "850E",
            destination: {
                text: "> YISHUN RING RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ROBINSON RD",
                "FULLERTON RD",
                "STAMFORD RD",
                "PENANG RD",
                "YISHUN RING RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8511: {
        front: {
            renderType: "standardService",
            serviceNumber: "851",
            destination: {
                text: "> BUKIT MERAH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'YISHUN AVE 2',
                'LENTOR AVE',
                'ANG MO KIO AVE 6',
                'ANG MO KIO AVE 5',
                'MARYMOUNT RD',
                'THOMSON RD',
                'SOUTH BRIDGE RD',
                'NEW BRIDGE RD',
                'TIONG BAHRU RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8512: {
        front: {
            renderType: "standardService",
            serviceNumber: "851",
            destination: {
                text: "> YISHUN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TIONG BAHRU RD",
                'EU TONG SEN ST',
                "VICTORIA ST",
                "THOMSON RD",
                "MARYMOUNT RD",
                "ANG MO KIO AVE 5",
                "ANG MO KIO AVE 6",
                "LENTOR AVE",
                "YISHUN AVE 2"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8518: {
        front: {
            renderType: "expressService",
            serviceNumber: "851e"
        }
    },
    8519: {
        front: {
            renderType: "expressService",
            serviceNumber: "851e"
        }
    },
    8521: {
        front: {
            renderType: "standardService",
            serviceNumber: "852",
            destination: {
                text: "> BUKIT BATOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "YISHUN AVE 2",
                "LENTOR AVE",
                "ANG MO KIO AVE 6",
                "LORNIE RD",
                "BUKIT TIMAH RD",
                "UPP BUKIT TIMAH RD",
                "BUKIT BATOK E. AVE 6"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8522: {
        front: {
            renderType: "standardService",
            serviceNumber: "852",
            destination: {
                text: "> YISHUN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BUKIT BATOK E. AVE 6",
                "UPP BUKIT TIMAH RD",
                "DUNEARN RD",
                "LORNIE RD",
                "MARYMOUNT RD",
                "ANG MO KIO AVE 6",
                "LENTOR AVE",
                "YISHUN AVE 2"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8601: {
        front: {
            renderType: "standardService",
            serviceNumber: "860",
            destination: {
                text: "> YIO CHU KANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "YISHUN RING RD",
                "YISHUN AVE 3",
                "SEMBAWANG RD",
                "UPPER THOMSON RD",
                "ANG MO KIO AVE 5"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8602: {
        front: {
            renderType: "standardService",
            serviceNumber: "860",
            destination: {
                text: "> YISHUN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 5",
                "UPPER THOMSON RD",
                "SEMBAWANG RD",
                "YISHUN AVE 3",
                "YISHUN RING RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8607: {
        front: {
            renderType: "standardService",
            serviceNumber: "860T",
            destination: {
                text: "YISHUN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "860T",
                destinationRoad: "",
                destinationName: "YISHUN INT"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    9145: {
        front: {
            renderType: "message",
            text: "EB14A",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    9741: {
        front: {
            renderType: "standardService",
            serviceNumber: "974",
            destination: {
                text: "> BUKIT PANJANG STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "UPPER JURONG RD",
                "JURONG WEST ST 63",
                "JALAN BOON LAY",
                "CHOA CHU KANG WAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    9742: {
        front: {
            renderType: "standardService",
            serviceNumber: "974",
            destination: {
                text: "> JOO KOON INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                'CHOA CHU KANG WAY',
                'JALAN BOON LAY',
                'JURONG WEST ST 63',
                'UPPER JURONG RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    9745: {
        front: {
            renderType: "standardService",
            serviceNumber: "974A",
            destination: {
                text: "CHOA CHU KANG STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
            {
                renderType: "swt",
                serviceNumber: "974A",
                destinationRoad: "CCK AVE 4",
                destinationName: "(CCK STN / LOT 1)"
            },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    9748: {
        front: {
            renderType: "standardService",
            serviceNumber: "974",
            destination: {
                text: "> BUKIT TIMAH STN ",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "UPPER JURONG RD",
                "JURONG WEST ST 63",
                "JALAN BOON LAY",
                "CHOA CHU KANG WAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    9749: {
        front: {
            renderType: "standardService",
            serviceNumber: "974",
            destination: {
                text: "JOO KOON INT-U BT TIMAH",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "UPPER JURONG RD",
                "JURONG WEST ST 63",
                "JALAN BOON LAY",
                "CHOA CHU KANG WAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    9931: {
        front: {
            renderType: "standardService2",
            serviceNumber: "993",
            destination: {
                text: "JUR E.INT-BT BATOK W.AVE8",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "BOON LAY WAY",
                "JURONG TOWN HALL RD",
                "BUKIT BATOK WEST AVE 8",
                "BUKIT BATOK RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    "9998T": {
        front: {
            renderType: "standardService",
            serviceNumber: "170",
            destination: {
                text: "> W'LANDS TRAIN CHKPT",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "BUKIT TIMAH RD",
                "UPPER BUKIT TIMAH RD",
                {
                    renderType: "message",
                    text: "170",
                    font: "Mobitec-16:8",
                    spacing: 5
                },
                "WOODLANDS RD",
                "WOODLANDS CTR RD",
                {
                    renderType: "message",
                    text: "170",
                    font: "Mobitec-16:8",
                    spacing: 5
                },
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    9999: {
        front: {
            renderType: "message",
            text: "VER.10JUN19-DD",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
}

EDSExtras.SBST = {
    1: {
        front: {
            renderType: "destScroll",
            top: "50 YRS OF TRAVELLING",
            topFont: "Mobitec-7:4",

            bottom: "TOGETHER WITH SBS TRANSIT",
            bottomFont: "Mobitec-7:4",

            serviceNumber: ""
        }
    },
    2: {
        front: {
            renderType: "destScroll",
            top: "JOURNEYING WITH YOU",
            topFont: "Mobitec-7:4",
    
            bottom: "50 Years of Mobility Excellence",
            bottomFont: "Mobitec-7:4",
    
            serviceNumber: ""
            }
        },
    }

EDSImages.SBST = {
    "express": [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    "fastforward": [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    ],
    "logo": [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
}
