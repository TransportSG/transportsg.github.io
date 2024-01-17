EDSFormats.SBST = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 1
        },
        destination: {
            align: "left,bottom",
            margin: {
                left: 1
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "left,top",
            margin: {
                left: 1,
                top: 1
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },
        text: "$serviceNumber+' '+$destination.text"
    },
    swt: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
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
            text: "'TERMINATE AT '+$destinationRoad",
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
    brandedSvc: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 1
        },
        branding: {
            align: "left",
            margin: {
                left: 1
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
                right: 1
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
    }
}

EDSData.SBST = {
    1: {
        front: {
            renderType: "message",
            text: "ALL",
            font: "Mobitec-16:8",
            spacing: 1
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
            branding: "NITE  OWL",
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
                text: "< TAMPINES AVE 9",
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
            branding: "NITE  OWL",
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
                text: "< PUNGGOL WAY",
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
            branding: "NITE  OWL",
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
            branding: "NITE  OWL",
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
            branding: "NITE  OWL",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    55: {
        front: {
            renderType: "swt",
            serviceNumber: "5A",
            destinationRoad: "UPP CHANGI RD",
            destinationName: "EAST (UPP CHANGI STN/SUTD)"
        }
    },
    56: {
        front: {
            renderType: "swt",
            serviceNumber: "5B",
            destinationRoad: "MARIAM WAY",
            destinationName: "(BEF MARIAM WK)"
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
            serviceNumber: "3N",
            branding: "NITE  OWL",
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
            renderType: "swt",
            serviceNumber: "7A",
            destinationRoad: "ORCHARD BLVD",
            destinationName: "(BEF ORCHARD STN EXIT B)"
        }
    },
    76: {
        front: {
            renderType: "swt",
            serviceNumber: "7B",
            destinationRoad: "ORCHARD RD",
            destinationName: "(DHOBY GHAUT STN)"
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
            renderType: "swt",
            serviceNumber: "9A",
            destinationRoad: "LOYANG AVE",
            destinationName: "(BLK 149A)"
        }
    },
    96: {
        front: {
            renderType: "swt",
            serviceNumber: "9B",
            destinationRoad: "AIRLINE RD",
            destinationName: "(3RD CARGO AGENTS)"
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
            renderType: "expressService",
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
            renderType: "swt",
            serviceNumber: "13A",
            destinationRoad: "BISHAN RD",
            destinationName: "(BISHAN STN)"
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
            renderType: "swt",
            serviceNumber: "14A",
            destinationRoad: "GRANGE RD",
            destinationName: "(SOMERSET YOUTH PK)"
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
            renderType: "expressService",
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
    20: {
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
            renderType: "swt",
            serviceNumber: "21A",
            destinationRoad: "KITCHENER",
            destinationName: "RD (BEF TAI HOE HOTEL)"
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
            renderType: "swt",
            serviceNumber: "27A",
            destinationRoad: "TAMPINES",
            destinationName: "AVE 4 (OPP CENTUARY S)"
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
                text: "> KAMPONG BAHRU TER",
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
            renderType: "swt",
            serviceNumber: "29A",
            destinationRoad: "TAMPINES",
            destinationName: "AVE 7 (BLK 497D)"
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
            renderType: "expressService",
            serviceNumber: "30e"
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
            renderType: "swt",
            serviceNumber: "31A",
            destinationRoad: "NEW U. CHANGI",
            destinationName: "(T.MERAH STN EXIT A)"
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
            renderType: "swt",
            serviceNumber: "33A",
            destinationRoad: "",
            destinationName: "TIONG BAHRU RD (BLK 1)"
        }
    },
    336: {
        front: {
            renderType: "swt",
            serviceNumber: "33B",
            destinationRoad: "",
            destinationName: "OLD AIRPORT RD (BLK 22)"
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
            renderType: "swt",
            serviceNumber: "45A",
            destinationRoad: "UPP S'GOON",
            destinationName: "RD (S'GOON STN EXIT A)"
        }
    },
    461: {
        front: {
            renderType: "standardService",
            serviceNumber: "45",
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
    481: {
        front: {
            renderType: "standardService",
            serviceNumber: "45",
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
                'BEDOK SOTUH AVE 3'
            ],
            scrollFont: "Mobitec-6:5"
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
            renderType: "swt",
            serviceNumber: "51A ",
            destinationRoad: "",
            destinationName: "PANDAN GDNS (BLK 410)"
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
            renderType: "swt",
            serviceNumber: "53A",
            destinationRoad: "",
            destinationName: "CHANGI AIRPORT (PTB 2)"
        }
    },
    537: {
        front: {
            renderType: "standardService",
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
            renderType: "swt",
            serviceNumber: "58A",
            destinationRoad: "TAMP. AVE",
            destinationName: "10 (TAMP WATER FAB PK)"
        }
    },
    586: {
        front: {
            renderType: "swt",
            serviceNumber: "58B",
            destinationRoad: "UPP P. LEBAR",
            destinationName: "RD (AFT TAI SENG STN)"
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
            renderType: "swt",
            serviceNumber: "60A",
            destinationRoad: "BEDOK",
            destinationName: "RESERVOIR RD (BLK 608)"
        }
    },
    607: {
        front: {
            renderType: "swt",
            serviceNumber: "60T",
            destinationRoad: "",
            destinationName: "BEDOK INT"
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
            renderType: "swt",
            serviceNumber: "63A",
            destinationRoad: "JLN RUMAH",
            destinationName: "TINGGI (OPP BLK 36)"
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
            renderType: "swt",
            serviceNumber: "70A",
            destinationRoad: "TEMASEK",
            destinationName: "AVE (OP. RITZ-CARLTON)"
        }
    },
    706: {
        front: {
            renderType: "swt",
            serviceNumber: "70B",
            destinationRoad: "S'GOON CTRL",
            destinationName: "(S'GOON STN EXIT B)"
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
            renderType: "swt",
            serviceNumber: "72A",
            destinationRoad: "HOUGANG",
            destinationName: "CENTRAL (OPP HG CTRL INT)"
        }
    },
    726: {
        front: {
            renderType: "swt",
            serviceNumber: "72B",
            destinationRoad: "AMK AVE 5",
            destinationName: "(ITE COLL CTRL)"
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
            renderType: "swt",
            serviceNumber: "73T",
            destinationRoad: "",
            destinationName: "TOA PAYOH INT"
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
            serviceNumber: "30e"
        }
    },
    749: {
        front: {
            renderType: "expressService",
            serviceNumber: "30e"
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
            renderType: "swt",
            serviceNumber: "80A",
            destinationRoad: "ALJUNIED RD ",
            destinationName: "(ALJUNIED STN)"
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
            renderType: "swt",
            serviceNumber: "88A",
            destinationRoad: "AMK AVE 3",
            destinationName: "(OPP ANG MO KIO STN)"
        }
    },
    886: {
        front: {
            renderType: "swt",
            serviceNumber: "88B",
            destinationRoad: "AMK AVE 5",
            destinationName: "(BEF YIO CHU KANG RD)"
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
            renderType: "swt",
            serviceNumber: "89A",
            destinationRoad: "AIRPORT",
            destinationName: "CARGO RD (A'FREIGHT BLDG)"
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
            renderType: "expressService",
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
            renderType: "swt",
            serviceNumber: "90A",
            destinationRoad: "AIRPORT RD",
            destinationName: "(PAYA LEBAR AIRBASE)"
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
    923: {
        front: {
            renderType: "swt",
            serviceNumber: "92T",
            destinationRoad: "GHIM MOH",
            destinationName: "RD (GHIM MOH TER)"
        }
    },
    925: {
        front: {
            renderType: "swt",
            serviceNumber: "92A",
            destinationRoad: "",
            destinationName: "GHIM MOH RD (BLK 13)"
        }
    },
    926: {
        front: {
            renderType: "swt",
            serviceNumber: "92B",
            destinationRoad: "SCIENCE",
            destinationName: "PARK DR (OPP RUTHEFORD)"
        }
    },
    927: {
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
            renderType: "swt",
            serviceNumber: "94A",
            destinationRoad: "AIRPORT RD",
            destinationName: "(BEF RSAF ROUNDABOUT)"
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
            renderType: "swt",
            serviceNumber: "95B",
            destinationRoad: "N. BUONA V.",
            destinationName: "RD (BUONA V STN EXIT E)"
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
            renderType: "swt",
            serviceNumber: "100A",
            destinationRoad: "ALJUNIED",
            destinationName: "RD (ALJUNIED STN)"
        }
    },
    1011: {
        front: {
            renderType: "standardService",
            serviceNumber: "101",
            destination: {
                text: "S'GOON INT-BUANGKOK LK",
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
            renderType: "standardService",
            serviceNumber: "102",
            destination: {
                text: "HOUGANG-SELETAR A'SPACE",
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
            renderType: "swt",
            serviceNumber: "102A",
            destinationRoad: "SENGKANG",
            destinationName: "WEST WAY (OPP BLK 461B)"
        }
    },
    1026: {
        front: {
            renderType: "swt",
            serviceNumber: "102B",
            destinationRoad: "SENGKANG",
            destinationName: "E. (S'KANG STN/BLK 461B)"
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
            serviceNumber: "103",
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
            renderType: "swt",
            serviceNumber: "105B",
            destinationRoad: "",
            destinationName: "CLEMENTI STN EXIT B"
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
                'TEMASAK BOULEVARD',
                'KALLANG BAHRU'
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
            renderType: "swt",
            serviceNumber: "109A",
            destinationRoad: "HOUGANG",
            destinationName: "AVE 4 (BLK 913)"
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
                "OCHARD BOULEVARD",
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
            renderType: "swt",
            serviceNumber: "112A",
            destinationRoad: "UPP S'GOON",
            destinationName: "RD (KOVAN STN EXIT C)"
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
            renderType: "swt",
            serviceNumber: "113A",
            destinationRoad: "UPP S'GOON",
            destinationName: "RD (KOVAN STN EXIT B)"
        }
    },
    1141: {
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
    1145: {
        front: {
            renderType: "swt",
            serviceNumber: "114A",
            destinationRoad: "BUANGKOK",
            destinationName: "CRESCENT (BLK 998B)"
        }
    },
    1151: {
        front: {
            renderType: "standardService",
            serviceNumber: "115",
            destination: {
                text: "HOUGANG ST21-HOUGANG AVE 3",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'HOUGANG AVE 1'
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
                "HOUGANG AVE 4"
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
            topFont: "Mobitec-7:4",

            bottom: "LONDON - PARIS",
            bottomFont: "Mobitec-7:4",

            serviceNumber: ""
        }
    },
    1165: {
        front: {
            renderType: "swt",
            serviceNumber: "116A",
            destinationRoad: "S'GOON CTRL",
            destinationName: "(S'GOON STN EXIT C)"
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
            renderType: "swt",
            serviceNumber: "117A",
            destinationRoad: "YISHUN",
            destinationName: "AVE 2 (BEF KHATIB STN)"
        }
    },
    1176: {
        front: {
            renderType: "swt",
            serviceNumber: "117B",
            destinationRoad: "YISHUN",
            destinationName: "AVE 2 (OPP YISHUN STN)"
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
                text: "SHENTON WAY TER-TK BLANGAH",
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
                text: "> TAMP NORTH INT",
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
    1315: {
        front: {
            renderType: "swt",
            serviceNumber: "131A",
            destinationRoad: "SHENTON",
            destinationName: "WAY (OPP AXA TWR)"
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
                "MARINE PARADE RD",
                "TANJONG KATONG RD",
                "UPP ALJUNIED RD",
                "SERANGOON AVE 2",
                "ANG MO KIO AVE 8"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1353: {
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
    1355: {
        front: {
            renderType: "swt",
            serviceNumber: "135A",
            destinationRoad: "MARINE",
            destinationName: "PARADE RD (VICTORIA SCH)"
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
            renderType: "swt",
            serviceNumber: "137A",
            destinationRoad: "BEDOK NTH",
            destinationName: "(BEDOK NTH STN EXIT A)"
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
            renderType: "swt",
            serviceNumber: "139A",
            destinationRoad: "JLN",
            destinationName: "BAHAGIA (OPP BLK 33/34)"
        }
    },
    1397: {
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
                text: "TOA PAYOH-POTONG P. AVE 1",
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
            scrolls: [{
                renderType: "message",
                text: "DTL",
                font: "Mobitec-16:8",
                spacing: 5
            },
            'LOR 6 TOA PAYOH',
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
            renderType: "swt",
            serviceNumber: "142A",
            destinationRoad: "UPP",
            destinationName: "S'GOON RD (SANT RITZ)"
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
            renderType: "swt",
            serviceNumber: "145A",
            destinationRoad: "",
            destinationName: "HENDERSON RD (BLK 1)"
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
            renderType: "swt",
            serviceNumber: "147A",
            destinationRoad: "NEW BRIDGE",
            destinationName: "RD (AFT DUXTON PLAIN PK)"
        }
    },
    1478: {
        front: {
            renderType: "expressService",
            serviceNumber: "147e"
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
            renderType: "expressService",
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
    1551: {
        front: {
            renderType: "standardService",
            serviceNumber: "153",
            destination: {
                text: "> BUKIT MERAH INT",
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
    1562: {
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
    1600: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "160",
            branding: "JB   SENTRAL",
            font: "Mobitec-16:8",
            spacing: 1
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
    1603: {
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
    1604: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "160",
            branding: "JURONG   EAST",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    1605: {
        front: {
            renderType: "swt",
            serviceNumber: "160A",
            destinationRoad: "BT BATOK",
            destinationName: "RD (OPP DUNEARN SEC SCH)"
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
                font: "Mobitec-7:4"
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
    1622: {
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
    1623: {
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
    1627: {
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
    1637: {
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
    1705: {
        front: {
            renderType: "swt",
            serviceNumber: "170A",
            destinationRoad: "W'LANDS",
            destinationName: "TRAIN CHECKPOINT"
        }
    },
    1706: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "170",
            branding: "LARKIN",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    1707: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "170",
            branding: "QUEEN   STREET",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    1708: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "170X",
            branding: "JB   SENTRAL",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    1709: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "170X",
            branding: "KRANJI   STN",
            font: "Mobitec-16:8",
            spacing: 1
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
            renderType: "expressService",
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
            renderType: "standardService",
            serviceNumber: "179A",
            destination: {
                text: "BOON LAY INT - NANYANG DR",
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
                text: "BUONA V. TER-ORTSDOWN RD",
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
            renderType: "swt",
            serviceNumber: "195A",
            destinationRoad: "",
            destinationName: "TIONG BAHRU PLAZA"
        }
    },
    1956: {
        front: {
            renderType: "swt",
            serviceNumber: "195B",
            destinationRoad: "",
            destinationName: "(C'WEALTH STN EXIT B/C)"
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
    1968: {
        front: {
            renderType: "expressService",
            serviceNumber: "196e"
        }
    },
    1969: {
        front: {
            renderType: "expressService",
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
    1962: {
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
            renderType: "swt",
            serviceNumber: "198A",
            destinationRoad: "JURONG E.",
            destinationName: "AVE 1 (OPP PARC OASIS)"
        }
    },
    1991: {
        front: {
            renderType: "standardService",
            serviceNumber: "199",
            destination: {
                text: "BOONLAY INT-NANYANG CRES",
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
            renderType: "swt",
            serviceNumber: "200A",
            destinationRoad: "CLEMENTI",
            destinationName: "RD (KENT RIDGE TER)"
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
            renderType: "swt",
            serviceNumber: "222A",
            destinationRoad: "NEW UPP",
            destinationName: "CHANGI RD (BEDOK STN)"
        }
    },
    2226: {
        front: {
            renderType: "swt",
            serviceNumber: "222B",
            destinationRoad: "NEW UPP",
            destinationName: "CHANGI RD (BEDOK STN)"
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
    2432: {
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
    2655: {
        front: {
            renderType: "swt",
            serviceNumber: "265A",
            destinationRoad: "AMK",
            destinationName: "AVE 8 (ANG MO KIO STN)"
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
            renderType: "swt",
            serviceNumber: "268A",
            destinationRoad: "AMK",
            destinationName: "AVE 5 (TECHPLACE 2)"
        }
    },
    2686: {
        front: {
            renderType: "swt",
            serviceNumber: "268B",
            destinationRoad: "",
            destinationName: "AMK AVE 3 (AMK STN)"
        }
    },
    2687: {
        front: {
            renderType: "swt",
            serviceNumber: "268C",
            destinationRoad: "AMK",
            destinationName: "AVE 9 (AMK POLICE H)"
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
            renderType: "swt",
            serviceNumber: "269A",
            destinationRoad: "AMK",
            destinationName: "ST 61  (MKT / FC)"
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
    3151: {
        front: {
            renderType: "standardService",
            serviceNumber: "315",
            destination: {
                text: "> SERANGOON NTH AVE 5",
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
    3152: {
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
    3172: {
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
    3741: {
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
            renderType: "standardService",
            serviceNumber: "400",
            destination: {
                text: "SHENTON WAY-M. COASTAL",
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
    5021: {
        front: {
            renderType: "expressService",
            serviceNumber: "502"
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
            font: "Mobitec-7:5:2",
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
            branding: "CITY  DIRECT",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    6541: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "654",
            branding: "CITY  DIRECT",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    6551: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "655",
            branding: "CITY  DIRECT",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    6601: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "660",
            branding: "CITY  DIRECT",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    6671: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "667",
            branding: "CITY  DIRECT",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    6681: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "668",
            branding: "CITY  DIRECT",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    6711: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "671",
            branding: "CITY  DIRECT",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    6721: {
        front: {
            renderType: "brandedSvc",
            serviceNumber: "672",
            branding: "CITY  DIRECT",
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
            renderType: "swt",
            serviceNumber: "807A",
            destinationRoad: "YISHUN",
            destinationName: "RING RD (OPP BLK 798)"
        }
    },
    8076: {
        front: {
            renderType: "swt",
            serviceNumber: "807A",
            destinationRoad: "YISHUN",
            destinationName: "RING RD (JIEMIN PR SCH)"
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
    8118: {
        front: {
            renderType: "swt",
            serviceNumber: "811T",
            destinationRoad: "YISHUN AVE",
            destinationName: "2 (YISHUN STN EXIT E)"
        }
    },
    8119: {
        front: {
            renderType: "swt",
            serviceNumber: "811T",
            destinationRoad: "",
            destinationName: "YISHUN INT"
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
            renderType: "swt",
            serviceNumber: "812T",
            destinationRoad: "YISHUN",
            destinationName: "CTRL (OPP BLK 201)"
        }
    },
    8129: {
        front: {
            renderType: "swt",
            serviceNumber: "812T",
            destinationRoad: "",
            destinationName: "YISHUN INT"
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
            renderType: "swt",
            serviceNumber: "860T",
            destinationRoad: "YISHUN",
            destinationName: "AVE 2 (YISHUN INT)"
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
            renderType: "swt",
            serviceNumber: "974A",
            destinationRoad: "CCK AVE 4",
            destinationName: "(CCK STN / LOT 1)"
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
}

EDSImages.SBST = {
    express: [
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
    logo: [
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
